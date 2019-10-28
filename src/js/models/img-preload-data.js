import artData from 'artData';


const imgPreloadData = () => {
	const imgPreloadUrls = [];

	// preload core images
	imgPreloadUrls.push('http://images.shaunbloom.com/bg3.jpg');
	imgPreloadUrls.push('http://images.shaunbloom.com/face.png');

	// Preload all artwork and thumbnails
	artData.forEach(data => {
		// Always add the full image and it's thumb path
		imgPreloadUrls.push(data.imagePath);
		imgPreloadUrls.push(data.thumbPath);

		// Only add the original thumb path if it exist
		(data.originalThumbPath !== "") ? imgPreloadUrls.push(data.originalThumbPath) : null;
	});

	return imgPreloadUrls;
}

export default imgPreloadData;