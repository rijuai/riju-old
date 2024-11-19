export const uploadToR2 = async (file: File) => {
	const presignedUrlResponse = await fetch("/api/r2", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ fileName: file.name, fileType: file.type }),
	})

	if (!presignedUrlResponse.ok) {
		throw new Error("Failed to get presigned URL")
	}

	const { presignedUrl, objectKey } = await presignedUrlResponse.json()

	const uploadResponse = await fetch(presignedUrl, {
		method: "PUT",
		headers: { "Content-Type": file.type },
		body: file,
	})

	if (!uploadResponse.ok) {
		throw new Error("Failed to upload file")
	}

	return {
		url: `https://assets.riju.ai/${objectKey}`,
	}
}
