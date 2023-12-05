<script lang="ts">
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import Button from '$lib/components/ui/button/button.svelte'
	import * as Card from '$lib/components/ui/card'
	import Input from '$lib/components/ui/input/input.svelte'
	import Label from '$lib/components/ui/label/label.svelte'
	import { saveAs } from 'file-saver'
	import QRCode from 'qrcode'
	import { onMount } from 'svelte'

	let text = 'https://riju.ai',
		canvasEl: HTMLCanvasElement

	const getQrCode = (canvasEl: HTMLElement, string: string) => {
		QRCode.toCanvas(canvasEl, string, {
			width: 350,
			margin: 1,
			color: {
				dark: '#000000',
				light: '#ffffff',
			},
		})
	}

	const downloadPng = () => {
		canvasEl.toBlob(function (blob: any) {
			saveAs(blob, 'qr-code.png')
		}, 'image/png')
	}

	const downloadJpeg = () => {
		canvasEl.toBlob(function (blob: any) {
			saveAs(blob, 'qr-code.jpeg')
		})
	}

	const downloadSvg = async () => {
		await QRCode.toString(text, {
			type: 'svg',
		}).then((svg: any) => {
			var blob = new Blob([svg])
			saveAs(blob, 'qr-code.svg')
		})
	}

	onMount(async () => {
		getQrCode(canvasEl, text)
	})
</script>

<MetaTags
	title="Free QR Code Generator"
	description="Free QR Code Generator, 100% free and download QR codes in PNG, JPG and SVG."
/>

<HomePageNavbar />

<main
	class="grid grid-cols-1 gap-4 md:gap-2 justify-center items-center pt-4 px-2 max-w-4xl mx-auto"
>
	<Card.Root>
		<Card.Header class="border-b mb-6">
			<Card.Title class="text-2xl">Free QR Code Generator</Card.Title>
			<p class="text-muted-foreground">
				Generate QR Code for your website, or for anything you want for FREE. No
				watermark. You can download it in PNG, JPEG and even SVG for absolutely
				free.
			</p>
		</Card.Header>
		<Card.Content
			class="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center"
		>
			<canvas class="place-self-center" bind:this={canvasEl} />
			<div class="self-center">
				<Label class="block mb-4">Enter URL or any text</Label>
				<Input
					class="mb-6"
					type="text"
					placeholder="Type anything such as URL, text, etc."
					bind:value={text}
					on:input={() => {
						getQrCode(canvasEl, text)
					}}
				/>
				<div class="flex flex-col gap-3">
					<Button class="w-full" on:click={downloadPng}>Download PNG</Button>
					<Button class="w-full" on:click={downloadJpeg}>Download JPEG</Button>
					<Button class="w-full" on:click={downloadSvg}>Download SVG</Button>
				</div>
			</div>
		</Card.Content>
		<Card.Footer class="pt-6 border-t flex justify-center">
			<p class="text-sm">This is a quality product developed by Riju.AI.</p>
		</Card.Footer>
	</Card.Root>
</main>
