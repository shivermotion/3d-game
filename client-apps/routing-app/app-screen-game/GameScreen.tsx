import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import * as CANNON from "cannon"

export const GameScreen = () => {
  const mount = useRef(null)
  const radius = 1
  const x = 0
  const y = 5
  const z = 0


  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.current.appendChild(renderer.domElement)

    let world = new CANNON.World()
    world.gravity.set(0, -9.82, 0)
    world.broadphase = new CANNON.NaiveBroadphase()
    let groundShape = new CANNON.Plane()
    let groundBody = new CANNON.Body({ mass: 0 })
    groundBody.addShape(groundShape)
    groundBody.position.set(0, 0, 0)
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0.5, 0, 0), -Math.PI / 2)
    world.addBody(groundBody)

    let planeGeometry = new THREE.PlaneGeometry(50, 100, 32, 32)
    let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xff69b4 })
    let plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.position.copy(groundBody.position)
    plane.quaternion.copy(groundBody.quaternion)
    scene.add(plane)

    let sphereShape = new CANNON.Sphere(radius)
    let sphereBody = new CANNON.Body({ mass: 1 })
    sphereBody.addShape(sphereShape)
    sphereBody.position.set(x, y, z)
    world.addBody(sphereBody)

    let sphereGeometry = new THREE.SphereGeometry(radius, 32, 32)
    let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.copy(sphereBody.position)
    scene.add(sphere)

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(0, 10, 0)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
    scene.add(ambientLight)

    camera.position.z = 50

    const animate = () => {
      requestAnimationFrame(animate)

      world.step(1 / 60)

      plane.position.copy(groundBody.position)
      plane.quaternion.copy(groundBody.quaternion)
      sphere.position.copy(sphereBody.position)
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return <div style={{ width: "100%", height: "100%" }} ref={mount} />
}
