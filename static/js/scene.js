const three = window.THREE

const scene = new three.Scene()
const camera = new three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)

const geometry = new three.BoxGeometry(1, 1, 1)
const material = new three.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new three.Mesh(geometry, material)
scene.add(cube)

// const normal = new three.Vector3(0, 1, 0)
// const plane = new three.Plane(normal)
// const floor = new three.PlaneHelper(plane, 512, 0x0000ff)
// const floor = new three.Mesh(plane, tiling)
// scene.add(floor)

const size = 1024
const divisions = size // Unit grid
const centerColor = 0x0000ff
const gridColor = centerColor

const gridHelper = new three.GridHelper(size, divisions, centerColor, gridColor)
scene.add(gridHelper)

camera.position.z = 5
Object.assign(camera.position, {
  x: 0,
  y: 4,
  z: 0
})

var renderer = new three.WebGLRenderer(scene, camera)
renderer.setSize(window.innerWidth, window.innerHeight)

window.game = {
  scene,
  camera,
  renderer
}
document.body.appendChild(renderer.domElement)
