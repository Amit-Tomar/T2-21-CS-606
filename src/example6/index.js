import { Scene, Cube, WebGLRenderer, Shader } from './lib/threeD.js';
import {vertexShaderSrc} from './shaders/vertex.js';
import {fragmentShaderSrc} from './shaders/fragment.js';
import * as dat from 'https://cdn.skypack.dev/dat.gui';

const scene = new Scene();

const cube = new Cube(0,0);

scene.add(cube);

const renderer = new WebGLRenderer();
renderer.setSize( 600, 600 );
document.body.appendChild( renderer.domElement );

const shader = new Shader(renderer.glContext(), vertexShaderSrc, fragmentShaderSrc);
shader.use();

const gui = new dat.GUI();

const transformSettings = {
	translateX: 0.0,
	rotationAngle: 0.0
}

gui.add(transformSettings, 'translateX', -1.0, 1.0).step(0.01).onChange(function ()
{
	cube.transform.translate = [transformSettings.translateX,cube.transform.translate[1],cube.transform.translate[2]]
});

gui.add(transformSettings, 'rotationAngle', -Math.PI, Math.PI).step(0.01).onChange(function ()
{
	cube.transform.rotationAngle = transformSettings.rotationAngle;
});

renderer.setAnimationLoop( animation );

//Draw loop
function animation()
{
	renderer.clear(0.9,0.9,0.9,1);
	renderer.render(scene, shader);	
}