import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, Image as ImageImpl } from '@react-three/drei'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'

function Image(props) {
  const ref = useRef()
  const group = useRef()
  const data = useScroll()
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 100), 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 60000), 4, delta)
  })
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  )
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport)
  const w = width < 10 ? 1.5 / 3 : 1 / 3
  return (
    <group {...props}>
      <Image position={[-width * w, 0, -1]} scale={[width * w - m * 2, 5, 1]} url={urls[0]} />
      <Image position={[0, 0, 0]} scale={[width * w - m * 2, 5, 1]} url={urls[1]} />
      <Image position={[width * w, 0, 1]} scale={[width * w - m * 2, 5, 1]} url={urls[2]} />
    </group>
  )
}

function Pages() {
  const { width } = useThree((state) => state.viewport)
  return (
    <>
      <Page position={[-width * 1, 0, 0]} urls={['/119.png', '/435.png', '/707.png']} />
      <Page position={[width * 0, 0, 0]} urls={['/808.png', '/955.png', '/LeCl1.png']} />
      <Page position={[width * 1, 0, 0]} urls={['/redcbul.png', '/F120.png', '/LeSafetyCar.png']} />
      <Page position={[width * 2, 0, 0]} urls={['/119.png', '/435.png', '/707.png']} />
      <Page position={[width * 3, 0, 0]} urls={['/808.png', '/955.png', '/LeCl1.png']} />
      <Page position={[width * 4, 0, 0]} urls={['/redcbul.png', '/F120.png', '/LeSafetyCar.png']} />
      <Page position={[width * 5, 0, 0]} urls={['/redcbul.png', '/F120.png', '/LeSafetyCar.png']} />
    </>
  )
}

export default function App() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 8]}>
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal damping={0.8} pages={6} distance={1}>
          <Scroll>
            <Pages />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '15vh', left: '75vw' }}>F1</h1>
            <h1 style={{ position: 'absolute', top: '35vh', left: '125vw' }}>2020</h1>
            <h1 style={{ position: 'absolute', top: '45vh', left: '225vw' }}>screenshot</h1>
            <h1 style={{ position: 'absolute', top: '15vh', left: '375vw' }}>art</h1>
            <h1 style={{ position: 'absolute', top: '50vh', left: '425vw' }}>Studio</h1>
            <h1 style={{ position: 'absolute', top: '25vh', left: '475vw' }}>Huit</h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}
