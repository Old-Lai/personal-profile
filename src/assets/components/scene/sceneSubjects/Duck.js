import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
export default function Duck(scene, radius = 1, positionVector = new THREE.Vector3(0, 0, 0)){

    const loader = new GLTFLoader()
    const material = new THREE.MeshPhongMaterial({color:0x00ff64, specular: 0x111111, shininess: 800})

    let mesh
    loader.load("/duck.glb", function (geometry) {
        mesh = geometry.scene.children[0]
        mesh.material = material
        // // mesh.position.set(positionVector.x, positionVector.y, positionVector.z)
        // // mesh.scale.set(-10, -10, -10)
        mesh.castShadow = true
        mesh.receiveShadow = true

        // geometry.center()
        // mesh.scale.set(-10, -10, -10)
        // mesh.rotateZ(90 * Math.PI/180)
        mesh.scale.set(0.05, 0.05, 0.05)
        scene.add(mesh);
    },
    // (xhr) => {
    //     console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    // },
    // (error) => {
    //     console.log(error)
    // }
    )

    this.update = function(time){
        if(mesh)
        mesh.rotation.y += 0.005
    }
}