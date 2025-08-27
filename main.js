const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// simple network nodes
const material = new THREE.LineBasicMaterial({ color: 0x2f81f7 });
const nodes = [
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(0, 1.5, 0)
];
nodes.forEach(point => {
  const geometry = new THREE.SphereGeometry(0.1, 16, 16);
  const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
  mesh.position.copy(point);
  scene.add(mesh);
});

// links between nodes
const linkGeometry = new THREE.BufferGeometry().setFromPoints([
  nodes[0], nodes[1],
  nodes[1], nodes[2],
  nodes[2], nodes[0]
]);
const lines = new THREE.LineSegments(linkGeometry, material);
scene.add(lines);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Load projects from JSON
fetch('projects/index.json')
  .then(resp => resp.json())
  .then(projects => {
    const container = document.getElementById('project-cards');
    projects.forEach(p => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
      if (p.link) {
        const a = document.createElement('a');
        a.href = p.link;
        a.textContent = 'Ver mais';
        div.appendChild(a);
      }
      container.appendChild(div);
    });
  });

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
