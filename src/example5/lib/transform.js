import { vec3, mat4 } from 'https://cdn.skypack.dev/gl-matrix';

export class Transform
{
	constructor()
	{
		this.translate = vec3.create();
		vec3.set(this.translate, 0, 0, 0);
		
		this.scale = vec3.create();
		vec3.set(this.scale, 1, 1, 1);
		
		this.rotationAngle = 0;
		this.rotationAxis = vec3.create();
		vec3.set(this.rotationAxis, 1, 0, 0);

		this.modelTransformMatrix = mat4.create();
		mat4.identity(this.modelTransformMatrix);

		this.updateModelTransformMatrix();
	}

	updateModelTransformMatrix()
	{
		// @ToDO
		// 1. Reset the transformation matrix
		// 2. Use the current transformations values to calculate the latest transformation matrix
	}	
}