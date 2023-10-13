import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";

/**
 * Base
 */

// Canvas
const canvas = document.querySelector("canvas.webgl2");

// Scene
const scene = new THREE.Scene();

// Debug
// const gui = new dat.GUI();

/**
 * Objects
 */
let params = {
  color: 0x9e9e9e,

  // hovercolor: 0xffffff,
  hovercolor: 0xfccfdb
};

//Sphere
const sphereGeometry = new THREE.SphereGeometry(0.12, 16, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: params.color,
  wireframe: true,
});
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.position.set(0, 1, 0);
scene.add(sphereMesh);

// Box
const boxGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2, 8, 8, 8);
const boxMaterial = new THREE.MeshBasicMaterial({
  color: params.color,
  wireframe: true,
});
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.position.set(0, 0.5, 0);

scene.add(boxMesh);

// Create a cross shape
const cross = new THREE.Group();
const material = new THREE.MeshBasicMaterial({
  color: params.color,
  wireframe: true,
});

// Create horizontal line
const horizontalGeometry = new THREE.BoxGeometry(0.06, 0.3, 0.06, 6, 6, 6);

const horizontalLine = new THREE.Mesh(horizontalGeometry, material);
horizontalLine.position.set(0, 0, 0);
horizontalLine.rotation.z = Math.PI * 0.25;
cross.add(horizontalLine);

// Create vertical line
const verticalGeometry = new THREE.BoxGeometry(0.3, 0.06, 0.06, 6, 6, 6);
const verticalLine = new THREE.Mesh(verticalGeometry, material);
cross.add(verticalLine);
verticalLine.rotation.z = Math.PI * 0.25;
verticalLine.position.set(0, 0, 0);

scene.add(cross);

// Debug

// gui.addColor(params, "color").onChange((value) => {
//   material.color.set(value);
// });

/**
 * Raycaster
 */

const raycaster = new THREE.Raycaster();
let currentIntersect = null;
const rayOrigin = new THREE.Vector3(-1.5, 0, 0);
const rayDirection = new THREE.Vector3(10, 0, 0);
rayDirection.normalize();

raycaster.set(rayOrigin, rayDirection);
const intersect = raycaster.intersectObject(boxMesh);
const intersects = raycaster.intersectObjects([
  sphereMesh,
  boxMesh,
  horizontalLine,
  verticalLine,
]);

/**
 * Mouse
 */
const mouse = new THREE.Vector2();

window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / sizes.width) * 2 - 1;
  mouse.y = -(event.clientY / sizes.height) * 2 + 1;
});

// test which object is being clicked on
window.addEventListener("click", () => {
  if (currentIntersect) {
    switch (currentIntersect.object) {
      case sphereMesh:
        // console.log("click on sphereMesh");
        const sphereClicked = new Event("createSphereClicked");
        window.dispatchEvent(sphereClicked);
        break;

      case boxMesh:
        // console.log("click on boxMesh");
        const boxClicked = new Event("createBoxClicked");
        window.dispatchEvent(boxClicked);
        break;

      case horizontalLine:
        console.log("click on cross");
        const cross1Clicked = new Event("cross1Clicked");
        window.dispatchEvent(cross1Clicked);
        break;

      case verticalLine:
        console.log("click on cross");
        const cross2Clicked = new Event("cross2Clicked");
        window.dispatchEvent(cross2Clicked);
        break;
    }
  }
});

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth / 5,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth / 5;
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
  0.1,
  10
);

camera.position.z = 3;

scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false;

// gui.add(camera.position, "x", -10, 10, 0.1);
// gui.add(camera.position, "y", -10, 10, 0.1);
// gui.add(camera.position, "z", -10, 10, 0.1);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  // Cast a Ray for Hoover

  raycaster.setFromCamera(mouse, camera);

  const objectsToTest = [sphereMesh, boxMesh, horizontalLine, verticalLine];
  const intersects = raycaster.intersectObjects(objectsToTest);
  // console.log(intersects[0].object);

  for (const object of objectsToTest) {
    object.material.color.set(params.color);
  }

  if (intersects.length > 0) {
    for (const intersect of intersects) {
      const hoveredObject = intersects[0].object;

      // Change the color of the hovered object
      hoveredObject.material.color.set(params.hovercolor);
      document.body.style.cursor = "pointer";
    }

    currentIntersect = intersects[0].object;
  } else {
    document.body.style.cursor = "default";
    currentIntersect = null;
  }

  if (intersects.length) {
    if (!currentIntersect) {
      console.log("mouse enter");
    }

    currentIntersect = intersects[0];
  } else {
    if (currentIntersect) {
      console.log("mouse leave");
    }

    currentIntersect = null;
  }

  // Update controls
  controls.update();

  // Rotate objects
  boxMesh.rotation.y = elapsedTime;
  boxMesh.rotation.z = elapsedTime;
  sphereMesh.rotation.y = elapsedTime;
  sphereMesh.rotation.x = elapsedTime;
  horizontalLine.rotation.x = elapsedTime;
  verticalLine.rotation.x = elapsedTime;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

console.log(renderer.info);
