import * as THREE from "three"
export default function Sphere(scene, radius = 1, positionVector = new THREE.Vector3(0, 0, 0)){
    const geometry = new THREE.SphereGeometry(radius, 64, 64)
    const material = new THREE.MeshStandardMaterial({color:0x00ff64})
    const mesh = new THREE.Mesh(geometry, material)

    mesh.position.set(positionVector.x, positionVector.y, positionVector.z)

    scene.add(mesh);

    this.update = function(time){
        // const scale = Math.sin(time)+5;

        // mesh.scale.set(scale, scale, scale)
    }
}