export class Triangle
{
	constructor(centerX, centerY, color)
	{
		this.vertexPositions = new Float32Array([
			//  x , y,  z 
			centerX, centerY + 0.15, 0.0,
			centerX - 0.15, centerY - 0.15, 0.0,
			centerX + 0.15, centerY - 0.15, 0.0,
		]);		
		
		this.color = color;
	}
}