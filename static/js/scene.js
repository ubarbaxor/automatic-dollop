const Three = window.THREE

const scene = new Three.Scene()

const playerCam = new Three.PerspectiveCamera(90,
  window.innerWidth / window.innerHeight,
  1, 1000)
playerCam.position.y = 2
playerCam.rotation.x = -Math.PI / 2

const mapCam = new Three.OrthographicCamera(
  -window.innerWidth / 32, window.innerWidth / 32,
  window.innerHeight / 32, -window.innerHeight / 32,
  1, 1000)
mapCam.position.y = 16
mapCam.rotation.x = -Math.PI / 2

const cameras = {
  player: playerCam,
  map: mapCam
}

const green = new Three.MeshBasicMaterial({ color: 0x0000ff00 })
const tetrahedron = new Three.TetrahedronGeometry()
const pyra = new Three.Mesh(tetrahedron, green)
pyra.position.z = -32
scene.add(pyra)

// const normal = new Three.Vector3(0, 1, 0)
// const plane = new Three.Plane(normal)
// const floor = new Three.PlaneHelper(plane, 512, 0x0000ff)
// scene.add(floor)

const size = 256
const divisions = size // Unit grid
const centerColor = 0x0000ff
const gridColor = centerColor
const gridHelper = new Three.GridHelper(size, divisions, centerColor, gridColor)
scene.add(gridHelper)

const camera = cameras.map
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
