import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";
import * as CANNON from "cannon-es";
import {RoundedBoxGeometry} from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import Stats from "stats.js";

const initScene1 = () => {
  /**
 * Monitoring
 */

// const stats = new Stats();
// stats.showPanel(0);
// document.body.appendChild(stats.dom);

/**
 * Debug
 */
// const gui = new dat.GUI();

/**
 * Base
 */

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Sounds
 */

// const hitSound = new Audio("/sounds/hit.mp3");

// const playHitSound = (collision) => {
//   // console.log(collision.contact.getImpactVelocityAlongNormal());

//   const impactStrength = collision.contact.getImpactVelocityAlongNormal();
//   if (impactStrength > 1.5) {
//     hitSound.volume = Math.random();
//     hitSound.currentTime = 0;
//     hitSound.play();
//   }
// };

// Axes Helper
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

/**
 * Textures
 */
const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
const base = import.meta.env.BASE_URL; 
const colorTexture = textureLoader.load(`${base}textures/aigenerated/slime2.jpg`);

colorTexture.repeat.x = 1;
colorTexture.repeat.y = 1;
colorTexture.wrapS = THREE.RepeatWrapping;
colorTexture.wrapT = THREE.RepeatWrapping;

colorTexture.generateMipmaps = false;
colorTexture.minFilter = THREE.NearestFilter;

const cubeTextureLoader = new THREE.CubeTextureLoader();

const environmentMap = cubeTextureLoader.load([
  `${base}textures/environmentMaps/5/px.jpg`,
  `${base}textures/environmentMaps/5/nx.jpg`,
  `${base}textures/environmentMaps/5/py.jpg`,
  `${base}textures/environmentMaps/5/ny.jpg`,
  `${base}textures/environmentMaps/5/pz.jpg`,
  `${base}textures/environmentMaps/5/nz.jpg`,
]);

/**
 * Physics
 */

// World

const world = new CANNON.World();
// gravity is Vec3, parameters x,y,z
// because we want things to fall down its -9.82 on the y axis
world.gravity.set(0, -15, 0);

// Enhance performance
// Only test objects collision if they are in the same grid
world.broadphase = new CANNON.SAPBroadphase(world);

// If the body isnt moving (sleeping), stop collision testing
world.allowSleep = true;

// Materials
const defaultMaterial = new CANNON.Material("default");

const defaultContactMaterial = new CANNON.ContactMaterial(
  defaultMaterial,
  defaultMaterial,
  {
    friction: 0.15,
    restitution: 0.2,
  }
);

world.addContactMaterial(defaultContactMaterial);
world.defaultContactMaterial = defaultContactMaterial;

// Floor

const floorShape = new CANNON.Plane();
const floorBody = new CANNON.Body();
floorBody.mass = 0;
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5);
floorBody.addShape(floorShape);

world.addBody(floorBody);

/**
 * Floor
 */

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(2000, 2000),
  new THREE.ShadowMaterial({
    opacity: 0.2,
  })
);
floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 30;
directionalLight.shadow.camera.left = -14;
directionalLight.shadow.camera.top = 14;
directionalLight.shadow.camera.right = 14;
directionalLight.shadow.camera.bottom = -14;
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const hemiParams = {
  color: 0xff007b,
  groundColor: 0x7ad6a7,
};

const hemisphereLight = new THREE.HemisphereLight(
  hemiParams.color,
  hemiParams.groundColor,
  0.4
);
scene.add(hemisphereLight);

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
  0.1,
  100
);
camera.position.set(0, 1.2, 5.2);
// gui.add(camera.position, "x").min(0).max(10).step(0.001);
// gui.add(camera.position, "y").min(0).max(10).step(0.001);
// gui.add(camera.position, "z").min(0).max(10).step(0.001);

// camera.rotation.z = Math.PI / 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

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
renderer.initTexture(colorTexture, environmentMap);

/**
 * Utils
 */

const objectsToUpdate = [];

const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
const sphereMaterial = new THREE.MeshPhysicalMaterial({
  transparent: true,
  opacity: 0.6,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  opacity: 0.9,
  metalness: 0.2,
  roughness: 0.5,
  map: colorTexture,
  envMap: environmentMap,
  envMapIntensity: 1,
});

const boxGeometry = new RoundedBoxGeometry(1, 1, 1, 16, 0.2);
const boxMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.3,
  roughness: 0.07,
  envMap: environmentMap,
  envMapIntensity: 0.8,
});

const createBox = (width, height, depth, position) => {
  // Three.js Mesh
  const mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  mesh.castShadow = true;
  mesh.scale.set(width, height, depth);
  mesh.position.copy(position);
  scene.add(mesh);

  // Cannon js Body

  const shape = new CANNON.Box(
    new CANNON.Vec3(width * 0.5, height * 0.5, depth * 0.5)
  );
  const body = new CANNON.Body({
    mass: 0.1,
    position: new CANNON.Vec3(0, 3, 0),
    shape: shape,
    material: defaultMaterial,
  });
  body.allowSleep = true;
  body.sleepSpeedLimit = 0.8;
  body.sleepTimeLimit = 1;
  body.position.copy(position);
  // body.addEventListener("collide");
  world.addBody(body);
  objectsToUpdate.push({
    mesh,
    body,
  });
};

const createSphere = (radius, position) => {
  // Three.js Mesh

  const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  mesh.castShadow = true;
  mesh.scale.set(radius, radius, radius);
  mesh.position.copy(position);
  scene.add(mesh);

  // Cannon js Body

  const shape = new CANNON.Sphere(radius);

  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(position.x, position.y, position.z),
    shape: shape,
    material: defaultMaterial,
  });
  body.allowSleep = true;
  body.sleepSpeedLimit = 1.0;
  body.position.copy(position);
  world.addBody(body);

  // Save in objects to update
  objectsToUpdate.push({
    mesh,
    body,
  });
};

// Create Objects on Page Load

// Delay for createSphere
// setTimeout(() => {
//   createSphere(0.3, {
//     x: Math.random() * 3,
//     y: 10,
//     z: Math.random() * 3,
//   });
// }, 11000);

// Delay for createBox
setTimeout(() => {
  createBox(0.2, 1, 0.5, {
    x: Math.random() * 3,
    y: 10,
    z: Math.random() * 3,
  });
}, 4500);

// Create Buttons

window.addEventListener("createSphereClicked", () => {
  createSphere(Math.random() * 0.3, {
    x: Math.random() * 3,
    y: 10,
    z: Math.random() * 3,
  });
  // updateIntersectedObjectsArray();
});

window.addEventListener("createBoxClicked", () => {
  createBox(Math.random() * 1.12, Math.random() * 1.12, Math.random() * 1.12, {
    x: Math.random() * 3,
    y: 10,
    z: Math.random() * 3,
  });
  // updateIntersectedObjectsArray();
});

const handleCrossClick = () => {
  for (const object of objectsToUpdate) {
    // Remove

    object.body.removeEventListener("collide");
    world.removeBody(object.body);
    scene.remove(object.mesh);
  }
  objectsToUpdate.splice(0, objectsToUpdate.length);
};
// Listen for "cross1Clicked"
window.addEventListener("cross1Clicked", handleCrossClick);

// Listen for "cross2Clicked"
window.addEventListener("cross2Clicked", handleCrossClick);

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

  // Update Physics World

  // 3 parameters (fixed time step, how much time passed since last step, how much iterations can apply to catch up with a potential delay)
  // we use 1/60 cause we run at 60fps
  world.step(1 / 60, deltaTime, 3);

  for (const object of objectsToUpdate) {
    object.mesh.position.copy(object.body.position);
    object.mesh.quaternion.copy(object.body.quaternion);
  }

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

export { initScene1 };