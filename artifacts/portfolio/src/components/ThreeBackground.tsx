import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 3;

    // ── Flowing mesh (liquid glass surface) ───────
    const geometry = new THREE.PlaneGeometry(8, 8, 80, 80);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2  uMouse;
        varying vec2  vUv;
        varying float vElevation;

        // Simple smooth noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g  = step(x0.yzx, x0.xyz);
          vec3 l  = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3  ns = n_ * D.wyz - D.xzx;
          vec4 j  = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x  = x_ *ns.x + ns.yyyy;
          vec4 y  = y_ *ns.x + ns.yyyy;
          vec4 h  = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Mouse influence
          vec2 mouseOffset = (uMouse - 0.5) * 0.4;

          // Layered noise for flowing liquid glass look
          float n1 = snoise(vec3(pos.xy * 0.8 + mouseOffset, uTime * 0.18));
          float n2 = snoise(vec3(pos.xy * 1.6 - mouseOffset * 0.5, uTime * 0.12 + 10.0));
          float n3 = snoise(vec3(pos.xy * 3.2, uTime * 0.08 + 20.0));

          float elevation = n1 * 0.30 + n2 * 0.15 + n3 * 0.06;
          pos.z += elevation;
          vElevation = elevation;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2  vUv;
        varying float vElevation;

        void main() {
          // Teal / violet liquid glass gradient
          vec3 teal   = vec3(0.0, 0.9, 0.76);   // #00e5c2
          vec3 violet = vec3(0.55, 0.18, 0.94);  // #8c2ef0
          vec3 deep   = vec3(0.02, 0.04, 0.10);  // near black

          // Mix colours based on elevation + uv
          float t = (vElevation + 0.5) * 0.5 + vUv.y * 0.3;
          t += sin(uTime * 0.2 + vUv.x * 3.14) * 0.08;
          t = clamp(t, 0.0, 1.0);

          vec3 color = mix(violet, teal, t);
          color = mix(deep, color, 0.55);

          // Refraction shimmer — bright veins
          float shimmer = smoothstep(0.38, 0.42, vElevation + 0.5);
          color += vec3(0.6, 0.9, 1.0) * shimmer * 0.18;

          // Soft edge fade so it blends into the page
          float edge = smoothstep(0.0, 0.25, vUv.x)
                     * smoothstep(1.0, 0.75, vUv.x)
                     * smoothstep(0.0, 0.18, vUv.y)
                     * smoothstep(1.0, 0.82, vUv.y);

          float alpha = 0.38 * edge;

          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.3;
    scene.add(mesh);

    // ── Floating particles ────────────────────────
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const pSizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      pSizes[i] = Math.random() * 2.5 + 0.5;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("size", new THREE.BufferAttribute(pSizes, 1));

    const particleMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          pos.y += sin(uTime * 0.4 + position.x * 1.2) * 0.15;
          pos.x += cos(uTime * 0.3 + position.y * 0.9) * 0.1;
          vAlpha = 0.3 + 0.4 * sin(uTime * 0.6 + position.z * 2.0);
          vec4 mv = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (250.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          float strength = 1.0 - (d * 2.0);
          // Alternate teal / violet per particle
          vec3 col = mix(vec3(0.0, 0.9, 0.76), vec3(0.55, 0.18, 0.94),
                         gl_FragCoord.x / 1920.0);
          gl_FragColor = vec4(col, strength * vAlpha * 0.6);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Mouse tracking ────────────────────────────
    const mouse = new THREE.Vector2(0.5, 0.5);
    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouse);

    // ── Resize ────────────────────────────────────
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uResolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    };
    window.addEventListener("resize", handleResize);

    // ── Animation loop ────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      material.uniforms.uTime.value = t;
      material.uniforms.uMouse.value.lerp(mouse, 0.04);
      particleMat.uniforms.uTime.value = t;

      // Gentle mesh drift
      mesh.rotation.z = Math.sin(t * 0.07) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ───────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}