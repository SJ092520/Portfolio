import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { io } from 'socket.io-client';




const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}


const textureLoader = new THREE.TextureLoader();
const backTexture = textureLoader.load('/vite.svg')


const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// const bump2 = textureLoader.load('./textures/SJ.jpg')
// const skills = textureLoader.load('./textures/Skills.png')
// const projects = textureLoader.load('./textures/Projects.png')
// const bio = textureLoader.load('./textures/Bio.png')
// const sjtexture = textureLoader.load('./textures/sjball.png')
// const start = textureLoader.load('./textures/start.png')


const controls = new OrbitControls(camera, renderer.domElement);




const clock = new THREE.Clock();
const tick = () => {

  const elapsedTime = clock.getElapsedTime()

  // camera.position.y -= 1
  // y*= 0.97
  // Update Orbital Controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)

  const socket = io("http://localhost:5000");
  socket.on('getFromServer', (data) => {
    console.log(data)
    if (localStorage.name6)
      socket.emit
  });
}

tick()









