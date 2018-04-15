var aspectRatio = window.innerWidth / window.innerHeight

const X = new THREE.Vector3(1, 0, 0)
const Y = new THREE.Vector3(0, 1, 0)
const Z = new THREE.Vector3(0, 0, 1)

const scene = new THREE.Scene()

const playerCam = new THREE.PerspectiveCamera(90,
  window.innerWidth / window.innerHeight,
  1, 1000)
playerCam.up = Z
playerCam.position.y = -2
playerCam.position.z = 2
playerCam.lookAt(new THREE.Vector3(0, 1024, 2))

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

const green = new THREE.MeshBasicMaterial({ color: 0x0000ff00 })
const tetrahedron = new THREE.TetrahedronGeometry()
const pyra = new THREE.Mesh(tetrahedron, green)
scene.add(pyra)

const plane = new THREE.Plane(Z)
const floor = new THREE.PlaneHelper(plane, 8, 0x0000ff)
scene.add(floor)

// const size = 256
// const divisions = size // Unit grid
// const centerColor = 0x0000ff
// const gridColor = centerColor
// const gridHelper = new THREE.GridHelper(size, divisions, centerColor, gridColor)
// scene.add(gridHelper)

const camera = cameras.map
var renderer = new THREE.WebGLRenderer(scene, camera)
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
