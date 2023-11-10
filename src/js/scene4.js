import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

import {createNoise3D} from "simplex-noise";

const initScene4 = () => {
  /**
 * Base
 */

// Canvas
const canvas = document.querySelector("canvas.webgl4");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
const blobTexture = textureLoader.load("/textures/aigenerated/main1.jpg");
const child1Texture = textureLoader.load("/textures/aigenerated/child2.jpg");
const child2Texture = textureLoader.load("/textures/aigenerated/child1.jpg");

const bumpMap = textureLoader.load("/textures/rock/rock_bumpmap.jpg");


const noise = new createNoise3D();

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(0, 50, -20);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.01,
  1000
);
camera.position.set(0, 0, 100);
// gui.add(camera.position, "x").min(0).max(10).step(0.001);
// gui.add(camera.position, "y").min(0).max(10).step(0.001);
// gui.add(camera.position, "z").min(0).max(10).step(0.001);

// camera.rotation.z = Math.PI / 2;
scene.add(camera);

// Controls
let controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 4;
controls.maxDistance = 350;
controls.minDistance = 150;
controls.enablePan = false;
controls.enableZoom = false;
// controls.enableRotate = false;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.initTexture(blobTexture);

/**
 * Objects
 */

blobTexture.anisotropy = 16;
let icosahedronGeometry = new THREE.IcosahedronGeometry(30, 5);
let lambertMaterial = new THREE.MeshPhongMaterial({
  map: blobTexture,
  bumpMap: bumpMap,
  bumpScale: 2,

});
// let lambertMaterial = new THREE.MeshNormalMaterial({map: blobTexture});
const nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
scene.add(nucleus);

let child1Geometry = new THREE.IcosahedronGeometry(10, 10);
let child1Material = new THREE.MeshPhongMaterial({
  map: child1Texture,
  bumpMap: bumpMap,
  bumpScale: 2,
});
// let lambertMaterial = new THREE.MeshNormalMaterial({map: blobTexture});
const child1 = new THREE.Mesh(child1Geometry, child1Material);
nucleus.add(child1);
child1.position.x = 60;

let child2Geometry = new THREE.IcosahedronGeometry(4, 10);
let child2Material = new THREE.MeshPhongMaterial({
  map: child2Texture,
  bumpMap: bumpMap,
  bumpScale: 1.5,
});
// let lambertMaterial = new THREE.MeshNormalMaterial({map: blobTexture});
const child2 = new THREE.Mesh(child2Geometry, child2Material);
nucleus.add(child2);
child2.position.z = 60;

function animateNucleusWithNoise(nucleus, noise, time) {
  const positionAttribute = nucleus.geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    const x = positionAttribute.getX(i);
    const y = positionAttribute.getY(i);
    const z = positionAttribute.getZ(i);

    const v = new THREE.Vector3(x, y, z);
    v.normalize();

    const distance =
      nucleus.geometry.parameters.radius +
      noise(
        v.x + time * 1000 * 0.0005,
        v.y + time * 1000 * 0.0003,
        v.z + time * 1000 * 0.0008
      ) *
        3;

    v.multiplyScalar(distance);

    positionAttribute.setXYZ(i, v.x, v.y, v.z);
  }

  positionAttribute.needsUpdate = true;
}

function animateChild1WithNoise(child1, noise, time) {
  const positionAttribute = child1.geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    const x = positionAttribute.getX(i);
    const y = positionAttribute.getY(i);
    const z = positionAttribute.getZ(i);

    const v = new THREE.Vector3(x, y, z);
    v.normalize();

    const distance =
      child1.geometry.parameters.radius +
      noise(
        v.x + time * 800 * 0.0003,
        v.y + time * 800 * 0.0003,
        v.z + time * 800 * 0.0008
      ) *
        2;

    v.multiplyScalar(distance);

    positionAttribute.setXYZ(i, v.x, v.y, v.z);
  }

  positionAttribute.needsUpdate = true;
}

// function animateChild2WithNoise(child2, noise, time) {
//   const positionAttribute = child2.geometry.attributes.position;

//   for (let i = 0; i < positionAttribute.count; i++) {
//     const x = positionAttribute.getX(i);
//     const y = positionAttribute.getY(i);
//     const z = positionAttribute.getZ(i);

//     const v = new THREE.Vector3(x, y, z);
//     v.normalize();

//     const distance =
//       child2.geometry.parameters.radius +
//       noise(
//         v.x + time * 800 * 0.0003,
//         v.y + time * 800 * 0.0003,
//         v.z + time * 800 * 0.0008
//       );

//     v.multiplyScalar(distance);

//     positionAttribute.setXYZ(i, v.x, v.y, v.z);
//   }

//   positionAttribute.needsUpdate = true;
// }

/**
 * Animate
 */
const clock = new THREE.Clock();
// calculate how much time passed since last step in for updating the physics
let oldElapsedTime = 0;

const tick = () => {
  // stats.begin();
  const elapsedTime = clock.getElapsedTime();

  // calculate how much time passed since last step in for updating the physics
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = elapsedTime;

  animateNucleusWithNoise(nucleus, noise, elapsedTime);
  // animateChild1WithNoise(child1, noise, elapsedTime);
  // animateChild2WithNoise(child2, noise, elapsedTime);
  nucleus.position.x += -(Math.sin(elapsedTime) * 0.4);
  nucleus.position.y -= Math.sin(elapsedTime) * 0.4;
  nucleus.rotateY(0.004);
  child1.rotateY(0.04);
  child2.rotateX(0.09);

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);

  // stats.end();
};

tick();
}


export { initScene4 };