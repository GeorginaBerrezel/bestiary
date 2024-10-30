"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model3D = ({ path }) => {
    const mountRef = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000); // Ratio 400/400 pour la caméra
        const renderer = new THREE.WebGLRenderer();

        // Modifier la couleur de fond
        renderer.setClearColor(0xffffff, 1); // Blanc, changez si nécessaire
        renderer.setSize(400, 400); // Taille de la scène 400x400 pixels
        mountRef.current.appendChild(renderer.domElement);

        // Ajouter des lumières
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Lumière ambiante
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Lumière directionnelle
        directionalLight.position.set(5, 5, 5); // Position de la lumière
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load(path, (gltf) => {
            const model = gltf.scene;

            // Échelle du modèle
            model.scale.set(0.5, 0.5, 0.5); // Ajustez cette valeur selon vos besoins

            // Rotation initiale de l'objet
            model.rotation.y = Math.PI / 4; // Tourner l’objet de 45 degrés (π/4 radians) sur l’axe Y

            scene.add(model);

            // Position de la caméra
            camera.position.z = 2; // Réduire la position de la caméra pour rapprocher le modèle

            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            };

            animate();
        }, undefined, (error) => {
            console.error('Error loading model:', error);
        });

        window.addEventListener('resize', () => {
            camera.aspect = 400 / 400; // Ratio 1:1
            camera.updateProjectionMatrix();
            renderer.setSize(400, 400); // Redimensionner le renderer
        });

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', () => {});
        };
    }, [isClient, path]);

    return <div ref={mountRef} style={{ width: '400px', height: '400px' }}></div>; // Définit la taille du conteneur
};

export default Model3D;
