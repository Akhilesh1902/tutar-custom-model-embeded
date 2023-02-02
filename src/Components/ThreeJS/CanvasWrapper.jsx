import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useAppContext } from '../../Context/AppContext';
import { degToRad } from 'three/src/math/MathUtils';
import Model from './Model';

const CanvasWrapper = () => {
  const { controls } = useAppContext();

  return (
    <div className='canvasWrapper' style={{ backgroundColor: '' }}>
      <Canvas shadows>
        <ambientLight color={'#ffffff'} intensity={0.3} />
        <directionalLight intensity={1} position={[10, 10, 20]} castShadow />
        <OrbitControls
          enabled={controls}
          maxDistance={5}
          minDistance={3}
          enablePan={false}
          maxPolarAngle={degToRad(70)}
          minPolarAngle={degToRad(40)}
          autoRotate
          autoRotateSpeed={5}
        />
        {/* <MyBox /> */}
        <Model url={'./Heart.glb'} scale={20} />
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
