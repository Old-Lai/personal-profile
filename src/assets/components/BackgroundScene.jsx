import React, { useEffect } from 'react';
import * as THREE from 'three';

const BackgroundScene = () => {
  useEffect(() => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Create a sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff83, });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Create light
    const light = new THREE.PointLight(0xffffff, 100, 100)
    light.position.set(0, 10, 10)
    scene.add(light)

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040); // Dim ambient light
    scene.add(ambientLight);

    // Create a camera
    const camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.1, 1000);
    camera.position.z = 20;
    scene.add(camera)

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(size.width, size.height);
    document.body.appendChild(renderer.domElement);

    renderer.render(scene, camera)

    // Clean up
    return () => {
      renderer.dispose();
    };
  }, []);

  return null;
};

export default BackgroundScene;