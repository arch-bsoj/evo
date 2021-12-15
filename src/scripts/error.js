import '../styles/styles.css';
import '../styles/error.css';
import * as util from './util.js'
import errorImg from '../error.png';


const main = document.getElementById('content');

const container = util.create('div', 'error-container');
const image = util.create('img', 'error-image');
image.src = errorImg;

util.insertChildren(container, [image]);
util.insertChildren(main, [container]);
