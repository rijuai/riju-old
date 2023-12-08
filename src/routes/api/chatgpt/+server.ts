import { OPENAI_KEY } from '$env/static/private'
import { json } from '@sveltejs/kit'
import OpenAI from 'openai'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
	const openai = new OpenAI({ apiKey: OPENAI_KEY })

	const body: {
		prompt: string
	} = await request.json()
	const prompt = body.prompt

	const completion = await openai.chat.completions.create({
		messages: [{ role: 'system', content: prompt }],
		model: 'gpt-3.5-turbo',
	})

	let message = completion.choices[0].message.content

	return json(
		{ message: message },
		{
			headers: {
				'Access-Control-Allow-Origin': 'https://riju.ai',
				'Access-Control-Allow-Methods': 'POST',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
		},
	)
}
