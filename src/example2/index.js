import { Triangle, WebGLRenderer, Shader } from './lib/threeD.js';
import {vertexShaderSrc} from './shaders/vertex.js';
import {fragmentShaderSrc} from './shaders/fragment.js';

const triangle = new Triangle();

const renderer = new WebGLRenderer();
renderer.setSize( 600, 600 );
document.body.appendChild( renderer.domElement );

const shader = new Shader(renderer.glContext(), vertexShaderSrc, fragmentShaderSrc);
shader.use();

renderer.clear(0.9,0.9,0.9,1);

renderer.render(triangle, shader);	