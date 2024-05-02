import * as THREE from "three"
export default function GeneralLights(scene) {
	
	const light = new THREE.PointLight("#ffffff", 100, 100);
	light.position.set(0, 6, 10)
    scene.add(light);

	const ambientLight = new THREE.AmbientLight(0x404040); // Dim ambient light
    scene.add(ambientLight);
	
	this.update = function(time) {
		// light.intensity = (Math.sin(time)*50+100);
		// light.color.setHSL( Math.sin(time), 0.5, 0.5 );
	}
}