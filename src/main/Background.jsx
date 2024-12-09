import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Background() {
  // Reference to the container div
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Get the container element
    const container = backgroundRef.current;

    // Setup Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      container.offsetWidth / container.offsetHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );
    camera.position.z = 5; // Move the camera back to see the stars

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Handle high-DPI displays
    container.appendChild(renderer.domElement);

    // Create Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000; // Number of stars
    const starPositions = new Float32Array(starCount * 3); // Store x, y, z for each star

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 2000; // X position
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // Y position
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // Z position
    }

    starGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // White stars
      size: 1.5, // Size of each star
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars); // Add stars to the scene

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005; // Rotate the stars slowly
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement); // Remove the canvas
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Send it to the back
        overflow: 'hidden',
        backgroundColor: '#000', // Blacks background for stars
      }}
    />
  );
}

export default Background;
