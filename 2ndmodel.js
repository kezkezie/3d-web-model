
let scene2,camera2,renderer2;

var modalContent = document.getElementById("scene3d2")


function init2(){

    

    scene2 = new THREE.Scene();
    scene2.background = new THREE.Color(0xdddddd);


    camera2 = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 5000 );
    camera2.rotation.y = 45/180*Math.PI;
    camera2.position.x = 800;
    camera2.position.y = 100;
    camera2.position.z = 1000; 

    directionalLight2 = new THREE.DirectionalLight(0xffffff,100);
    directionalLight2.position.set(0,1,0);
    directionalLight2.castShadow = true;
    scene2.add(directionalLight2);

    hlight2 = new THREE.AmbientLight(0x404040, 100);
    scene2.add(hlight2);

    light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(0,300,500);
    scene2.add(light2);

    light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(500,100,0);
    scene2.add(light2);

    light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(0,100,-500);
    scene2.add(light2);

    light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(-500,300,0);
    scene2.add(light2);


    renderer2 = new THREE.WebGLRenderer({antilias:true});
    renderer2.setSize( window.innerWidth, window.innerHeight );
    //document.body.appendChild( renderer2.domElement);
    modalContent.appendChild( renderer2.domElement );

    controls2 = new THREE.OrbitControls(camera2 ,renderer2.domElement);
    controls2.enableDamping = true;
    controls2.campingFactor = 0.25;
    controls2.enableZoom = true;
    //controls.addEventListener('change', renderer2);

    
    const loader2 = new THREE.GLTFLoader();
    loader2.load('laptop.glb', function(gltf){
        console.log(gltf.scene.children);
        car2 = gltf.scene.children[0];
        car2.scale.set(0.5,0.5,0.5);
        scene2.add(gltf.scene);
        animate2();
        startRenderLoop();
    });

   
};

function animate2() {
   
    requestAnimationFrame(animate2);

    renderer2.render(scene2,camera2);


};
init2();


    
