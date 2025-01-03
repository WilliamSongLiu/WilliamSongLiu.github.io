import React, { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../styles/Hero.css';

const Hero: FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create cubes with white edges
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    // Create materials with transparency
    const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.7 });
    const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.7 });
    const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.7 });

    // Create cube groups (cube + edges)
    const createCubeWithEdges = (material: THREE.Material) => {
      const group = new THREE.Group();
      const cube = new THREE.Mesh(geometry, material);
      const line = new THREE.LineSegments(edges, lineMaterial);
      group.add(cube);
      group.add(line);
      return group;
    };

    const redCube = createCubeWithEdges(redMaterial);
    const greenCube = createCubeWithEdges(greenMaterial);
    const blueCube = createCubeWithEdges(blueMaterial);

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

      const time = Date.now() * 0.001;

      // Smaller, synchronized movement
      const yOffset = Math.sin(time) * 0.2; // Reduced amplitude
      const rotationOffset = Math.sin(time) * 0.1; // Reduced rotation, synchronized with movement

      redCube.position.y = yOffset;
      greenCube.position.y = yOffset;
      blueCube.position.y = yOffset;

      redCube.rotation.x = rotationOffset;
      greenCube.rotation.x = rotationOffset;
      blueCube.rotation.x = rotationOffset;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-3d" ref={mountRef}></div>
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
      </div>
    </section>
  );
};

export default Hero;