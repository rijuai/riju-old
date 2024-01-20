import { PUBLIC_R2_BUCKET_NAME } from '$env/static/public'
import { S3 } from '$lib/server/r2'
import { DeleteObjectsCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { json, type RequestHandler } from '@sveltejs/kit'

const slugifyString = (str: string) => {
	return str
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/\./g, '-')
		.replace(/-+/g, '-')
		.replace(/[^a-z0-9-]/g, '-')
}

export const POST: RequestHandler = async ({ request }) => {
	const { fileName, fileType } = (await request.json()) as {
		fileName: string | undefined
		fileType: string | undefined
	}

	if (
		!fileName ||
		!fileType ||
		fileName.trim() === '' ||
		fileType.trim() === ''
	) {
		return json({ message: 'Missing required parameters.' }, { status: 400 })
	}

	const objectKey = `${slugifyString(Date.now().toString())}-${slugifyString(
		fileName,
	)}`

	const presignedUrl = await getSignedUrl(
		S3,
		new PutObjectCommand({
			Bucket: PUBLIC_R2_BUCKET_NAME,
			Key: objectKey,
			ContentType: fileType,
			ACL: 'public-read',
		}),
		{
			expiresIn: 60 * 5, // 5 minutes
		},
	)

	return json({ presignedUrl, objectKey })
}

export const DELETE: RequestHandler = async ({ request }) => {
	try {
		const { objectKeys } = await request.json()

		if (!objectKeys || !Array.isArray(objectKeys)) {
			return json(
				{ message: 'Missing or invalid objectKeys parameter.' },
				{ status: 400 },
			)
		}

		const deleteParams = {
			Bucket: PUBLIC_R2_BUCKET_NAME,
			Delete: {
				Objects: objectKeys.map((Key) => ({ Key })),
				Quiet: false,
			},
		}

		const command = new DeleteObjectsCommand(deleteParams)
		const response = await S3.send(command)

		console.log('Successfully deleted objects from S3', response)

		return json({ success: true })
	} catch (error) {
		console.error('Error deleting objects:', error)
		return json({ success: false }, { status: 500 })
	}
}
