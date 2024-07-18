import Image from "@editorjs/image";

// extend the image tool to enhance the image removal lifecycle
class CustomImage extends Image {
	removed() {
		// access the image block's file data
		const { file } = this._data;
		const { url } = this._data.file;
		const path = new URL(url);

		fetch("/api/r2", {
			method: "DELETE",
			body: JSON.stringify({ objectKeys: [path.pathname] }),
		});

		console.log("DELETED IMAGE DATA", path);
		// do something with the file data
		// i.e. delete from server or s3 bucket
	}
}

export default CustomImage;
