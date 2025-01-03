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

    // Set random initial rotations
    redCube.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );
    greenCube.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );
    blueCube.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );

    // Position cubes closer together with different starting heights
    redCube.position.set(-1, -1.3, 0);
    greenCube.position.set(0, -1.8, 0);
    blueCube.position.set(1, -1.5, 0);

    scene.add(redCube);
    scene.add(greenCube);
    scene.add(blueCube);

    camera.position.z = 5;
    camera.position.y = 1;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      const amplitude = 0.15;

      // Update the y positions with the new base heights
      redCube.position.y = -1.3 + Math.sin(time) * amplitude;
      greenCube.position.y = -1.8 + Math.sin(time + (2 * Math.PI / 3)) * amplitude;
      blueCube.position.y = -1.5 + Math.sin(time + (4 * Math.PI / 3)) * amplitude;

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