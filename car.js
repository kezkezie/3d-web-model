
let scene, camera, renderer;

var modalContent = document.getElementById("scene3d")


async function init() {



    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);


    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 5000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;

    directionalLight = new THREE.DirectionalLight(0xffffff, 100);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    light = new THREE.PointLight(0xc4c4c4, 10);
    light.position.set(0, 300, 500);
    scene.add(light);

    light = new THREE.PointLight(0xc4c4c4, 10);
    light.position.set(500, 100, 0);
    scene.add(light);

    light = new THREE.PointLight(0xc4c4c4, 10);
    light.position.set(0, 100, -500);
    scene.add(light);

    light = new THREE.PointLight(0xc4c4c4, 10);
    light.position.set(-500, 300, 0);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ antilias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild( renderer.domElement);
    modalContent.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.campingFactor = 0.25;
    controls.enableZoom = true;
    controls.addEventListener('change', renderer);


    const loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function(gltf){
        console.log(gltf.scene.children);
        car = gltf.scene.children[0];
        car.scale.set(0.5,0.5,0.5);
        scene.add(gltf.scene);
        animate();
    });


};

function animate() {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);


};
init();



