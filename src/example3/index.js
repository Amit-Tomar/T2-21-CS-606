import { Scene, Triangle, WebGLRenderer, Shader } from './lib/threeD.js';
import {vertexShaderSrc} from './shaders/vertex.js';
import {fragmentShaderSrc} from './shaders/fragment.js';

const scene = new Scene();

const triangle1 = new Triangle(0,0);
const triangle2 = new Triangle(0.5,0.5);
const triangle3 = new Triangle(-0.5,-0.5);

scene.add(triangle1);
scene.add(triangle2);
scene.add(triangle3);

const renderer = new WebGLRenderer();
renderer.setSize( 600, 600 );
document.body.appendChild( renderer.domElement );

const shader = new Shader(renderer.glContext(), vertexShaderSrc, fragmentShaderSrc);
shader.use();

renderer.clear(0.9,0.9,0.9,1);
renderer.render(scene, shader);	