import { GEMINI_API_KEY } from '$env/static/private'
import { gemini } from '$lib/server/gemini'
import type { Actions, PageServerLoad } from './$types'
import { GoogleGenAI } from '@google/genai'

export const load = (async () => {
    return {}
}) satisfies PageServerLoad

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const file = formData.get('files')

        if (!(file instanceof File)) {
            console.error('No file uploaded')
            return { error: 'No file uploaded' }
        }

        if (file.type === 'application/pdf') {
            processPDF(file)
        } else if (file.type.startsWith('image/')) {
            processImage(file)
        } else {
            return { error: 'Unsupported file type' }
        }

        return { success: true }
    }
}

const processPDF = async (pdf: File) => {
    const pdfBuffer = await pdf.arrayBuffer()
    const base64 = Buffer.from(pdfBuffer).toString('base64')

    const contents = [
        { text: 'Extract and output the full text content of this PDF.' },
        {
            inlineData: {
                mimeType: 'application/pdf',
                data: base64
            }
        }
    ]

    const response = await gemini.models.generateContent({
        model: 'gemini-2.0-flash',
        contents
    })

    console.log('Gemini PDF output:', response.text)

    return response.text
}

const processImage = async (image: File) => {
    const imageBuffer = await image.arrayBuffer()
    const base64 = Buffer.from(imageBuffer).toString('base64')

    const contents = [
        {
            inlineData: {
                mimeType: image.type,
                data: base64
            }
        },
        { text: 'Describe this image in short sentences. Do not use any formatting or markdown. NOT leave any information out. Make sure to include all details.' }
    ]

    const response = await gemini.models.generateContent({
        model: 'gemini-2.0-flash',
        contents
    })

    console.log('Gemini image output:', response.text)
    return response.text
}

const generateContent = async (text: string) => {
    const content = await generateContent(text)

    console.log(content)
}