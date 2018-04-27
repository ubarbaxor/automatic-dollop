var aspectRatio = window.innerWidth / window.innerHeight

const X = new THREE.Vector3(1, 0, 0)
const Y = new THREE.Vector3(0, 1, 0)
const Z = new THREE.Vector3(0, 0, 1)

const scene = new THREE.Scene()

const playerCam = new THREE.PerspectiveCamera(90,
  window.innerWidth / window.innerHeight,
  1, 1000)
playerCam.position.z = 2
// playerCam.lookAt(new THREE.Vector3(0, 0, -1024))

const frustumSize = 16
const mapCam = new THREE.OrthographicCamera(
  -frustumSize * aspectRatio / 2, frustumSize * aspectRatio / 2,
  frustumSize / 2, -frustumSize / 2,
  1, 1000)
mapCam.position.z = -16
mapCam.lookAt(Z)

const sideCam = new THREE.OrthographicCamera(
  -frustumSize * aspectRatio / 2, frustumSize * aspectRatio / 2,
  frustumSize / 2, -frustumSize / 2,
  1, 1000)
sideCam.position.z = 0
sideCam.position.x = -16
sideCam.up = Z
sideCam.lookAt(X)

const cameras = {
  player: playerCam,
  map: mapCam,
  side: sideCam
}

const green = new Three.MeshBasicMaterial({ color: 0x0000ff00 })
const tetrahedron = new Three.TetrahedronGeometry()
const pyra = new Three.Mesh(tetrahedron, green)
pyra.position.z = -8
pyra.rotation.y = Math.PI / 4
pyra.rotation.x = Math.PI / 2 + Math.PI / 3

scene.add(pyra)

const size = 256
const divisions = size // Unit grid
const centerColor = 0x00ff00
const gridColor = 0x0000ff
const gridHelper = new Three.GridHelper(size, divisions, centerColor, gridColor)
// const normal = new Three.Vector3(0, 1, 0)
// const plane = new Three.Plane(normal)
scene.add(gridHelper)

const camera = cameras.player
var renderer = new Three.WebGLRenderer(scene, camera)
renderer.setSize(window.innerWidth, window.innerHeight)

window.game = {
  scene,
  camera,
  renderer,
  obstacles: [
    pyra
  ]
}
document.body.appendChild(renderer.domElement)
