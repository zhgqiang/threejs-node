"use strict";

import Renderer from './render.js';

const renderer = Renderer()
document.querySelector("#container").appendChild(renderer.domElement);