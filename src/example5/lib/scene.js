export class Scene
{
	constructor()
	{
		this.primitives = []
	}

	add(primitive)
	{
		if( this.primitives && primitive )
		{
			this.primitives.push(primitive)
		}
	}

	centroid()
	{
		// @ToDo : Return the centroid as per the requirements of mode-2
	}
}
