import React, { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../styles/Hero.css';

const Hero: FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create three cubes with different colors
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const redCube = new THREE.Mesh(geometry, redMaterial);
    const greenCube = new THREE.Mesh(geometry, greenMaterial);
    const blueCube = new THREE.Mesh(geometry, blueMaterial);

    redCube.position.set(-2, 0, 0);
    greenCube.position.set(0, 0, 0);
    blueCube.position.set(2, 0, 0);

    scene.add(redCube);
    scene.add(greenCube);
    scene.add(blueCube);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate cubes
      redCube.rotation.x += 0.01;
      redCube.rotation.y += 0.01;
      greenCube.rotation.x += 0.01;
      greenCube.rotation.z += 0.01;
      blueCube.rotation.y += 0.01;
      blueCube.rotation.z += 0.01;

      // Float up and down
      const time = Date.now() * 0.001;
      redCube.position.y = Math.sin(time) * 0.5;
      greenCube.position.y = Math.sin(time + 2) * 0.5;
      blueCube.position.y = Math.sin(time + 4) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / 2 / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm William</h1>
          <p>
            I'm a student in Stanford's class of 2021, pursuing both B.S. and M.S. in Computer Science
            on the Artificial Intelligence Track. I'll be graduating with both degrees this year in
            spring of 2025.
          </p>
          <p>
            When I'm not in class, I love to work on projects in AI, botting, game development,
            Web3, and XR.
          </p>
        </div>
        <div className="hero-3d" ref={mountRef}></div>
      </div>
    </section>
  );
};

export default Hero;