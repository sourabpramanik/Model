const Light = () => {
    return(
      <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.2} />
      {/* Diretion light */}
      <directionalLight position={[17, 10, 5]} intensity={0.5} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <pointLight position={[-10, 0, -20]} intensity={0.7} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  
    )
  }

export default Light();