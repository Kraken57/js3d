//Scene
const scene = new THREE.Scene();

//cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//sizes
const sizes = {
    width: 800,
    height: 600
};

//camera
const camera = new THREE.PrespectiveCamera( 75/*fov*/, sizes.width / sizes.height/*Aspect ratio*/);
scene.add(camera);

