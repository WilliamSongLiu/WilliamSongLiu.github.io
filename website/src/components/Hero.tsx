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

    // Create different geometries
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const icosaGeometry = new THREE.IcosahedronGeometry(0.6);
    const octaGeometry = new THREE.OctahedronGeometry(0.7);

    // Create wireframe materials with different colors
    const createWireframe = (color: number) => {
      return new THREE.LineBasicMaterial({
        color: color,
        linewidth: 1
      });
    };

    const materials = [
      createWireframe(0xf7d794), // Golden
      createWireframe(0xff6b81), // Pink
      createWireframe(0x74b9ff)  // Blue
    ];

    // Convert geometries to wireframe edges
    const createWireframeShape = (geometry: THREE.BufferGeometry, material: THREE.Material) => {
      const edges = new THREE.EdgesGeometry(geometry);
      return new THREE.LineSegments(edges, material);
    };

    const shape1 = createWireframeShape(cubeGeometry, materials[0]);
    const shape2 = createWireframeShape(icosaGeometry, materials[1]);
    const shape3 = createWireframeShape(octaGeometry, materials[2]);

    // Position shapes
    shape1.position.set(-1.2, 0.3, 0);
    shape2.position.set(0, -0.2, 0);
    shape3.position.set(1.2, 0.1, 0);

    // Set random initial rotations
    [shape1, shape2, shape3].forEach(shape => {
      shape.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
    });

    scene.add(shape1);
    scene.add(shape2);
    scene.add(shape3);

    camera.position.z = 5;

    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0
    };

    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      const amplitude = 0.15;

      // Vertical floating animation
      shape1.position.y = 0.3 + Math.sin(time) * amplitude;
      shape2.position.y = -0.2 + Math.sin(time + (2 * Math.PI / 3)) * amplitude;
      shape3.position.y = 0.1 + Math.sin(time + (4 * Math.PI / 3)) * amplitude;

      // Rotate shapes based on mouse position
      const rotationSpeed = 0.5;
      [shape1, shape2, shape3].forEach(shape => {
        shape.rotation.x += (-mouse.y * rotationSpeed - shape.rotation.x) * 0.05;
        shape.rotation.y += (mouse.x * rotationSpeed - shape.rotation.y) * 0.05;
      });

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
      window.removeEventListener('mousemove', handleMouseMove);
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