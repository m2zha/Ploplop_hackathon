export const rectDraw = (dections, ctx) => {
	detections.forEach(predictions=> {

		//extracting x,y,width, height variables 
		const [x,y,width, height] = predictions['bbox'];
		const text = predictions['class'];

		//making things pretty 
		const color = 'red'
		ctx.strokeSylt = color
		ctx.font = '13px Arial'
		ctx.fillStyle = color

		//making a rectangle to contain the object detected 
		
	})
}
