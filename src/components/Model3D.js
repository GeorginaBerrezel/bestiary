"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Model3D = () => {
    const mountRef = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        // Modifier la couleur de fond
        renderer.setClearColor(0xffffff, 1); // Blanc, changez si nécessaire
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Ajouter des lumières
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Lumière ambiante
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Lumière directionnelle
        directionalLight.position.set(5, 5, 5); // Position de la lumière
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        const modelPath = '/lilith.glb'; // Vérifiez ce chemin

        loader.load(modelPath, (gltf) => {
            const model = gltf.scene;

            // Rotation initiale de l'objet
            model.rotation.y = Math.PI / 4; // Tourner l’objet de 45 degrés (π/4 radians) sur l’axe Y

            scene.add(model);

            // Position de la caméra
            camera.position.z = 6; // Essayez une position plus éloignée

            // const controls = new OrbitControls(camera, renderer.domElement);
            // controls.enableDamping = true;
            // controls.dampingFactor = 0.25;
            // controls.enableZoom = true;

            const animate = () => {
                requestAnimationFrame(animate);
                // controls.update();
                renderer.render(scene, camera);
            };

            animate();
        }, undefined, (error) => {
            console.error('Error loading model:', error);
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', () => {});
        };
    }, [isClient]);

    return <div ref={mountRef} style={{ width: '100%', height: '100vh' }}></div>;
};

export default Model3D;
