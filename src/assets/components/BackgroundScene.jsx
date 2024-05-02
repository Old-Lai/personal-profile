import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import SceneManager from './scene/Scene';

import "./BackgroundScene.sass"

const BackgroundScene = () => {
  const refContainer = useRef(null);
  const [sceneManager, setSceneManager] = useState(null)
  const screenDimentions = new Map()

  useEffect(()=>{
    screenDimentions.set("width", refContainer.current.offsetWidth)
    screenDimentions.set("height", refContainer.current.offsetHeight)
    const sceneManager = new SceneManager({refContainer, screenDimentions})
    setInterval(()=>{sceneManager.update()}, 16)

    return ()=>{sceneManager.close()}
  },[])
  // useEffect(() => {
  //   const windowSize = new Map()
  //   windowSize.set("width", window.innerWidth);
  //   windowSize.set("height", window.innerHeight);

  //   // Create a new Three.js scene
  //   const scene = new THREE.Scene();

  //   // Create a sphere
  //   const geometry = new THREE.SphereGeometry(3, 64, 64);
  //   const material = new THREE.MeshStandardMaterial({ color: 0x00ff83, });
  //   const mesh = new THREE.Mesh(geometry, material);
  //   mesh.position.set(-6, 0, 0);
  //   scene.add(mesh);

  //   const geometry2 = new THREE.SphereGeometry(4, 64, 64);
  //   const mesh2 = new THREE.Mesh(geometry2, material);
  //   mesh2.position.set(6, 0, 0);
  //   scene.add(mesh2);

  //   // Create light
  //   const light = new THREE.PointLight(0xffffff, 100, 100);
  //   light.position.set(0, 10, 10);
  //   scene.add(light);

  //   // Add ambient light
  //   const ambientLight = new THREE.AmbientLight(0x404040); // Dim ambient light
  //   scene.add(ambientLight);

  //   // Create a camera
  //   const camera = new THREE.PerspectiveCamera(45, windowSize.get("width") / windowSize.get("height"), 0.1, 1000);
  //   camera.position.z = 20;
  //   scene.add(camera);

  //   // Create a renderer
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(windowSize.get("width"), windowSize.get("height"));
  //   const canvasEle = renderer.domElement;
  //   canvasEle.classList.add("backgroundScene");
  //   refContainer.current?.appendChild(canvasEle)

  //   renderer.render(scene, camera);

  //   //windo resize handler
  //   window.addEventListener('resize', function(){
  //     windowSize.set("width", window.innerWidth)
  //     windowSize.set("height", window.innerHeight)
  //     renderer.setSize(windowSize.get("width"), windowSize.get("height"));
  //     camera.aspect = windowSize.get("width") / windowSize.get("height");
  //     camera.updateProjectionMatrix();
  //     renderer.render(scene, camera);
  //   });

  //   // Clean up
  //   return () => {
  //     renderer.dispose();
  //   };
  // }, []);

  return <div ref={refContainer} className="backgroundScene"/>;
};

export default BackgroundScene;