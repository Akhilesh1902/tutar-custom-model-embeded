import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useAppContext } from '../../Context/AppContext';
import { degToRad } from 'three/src/math/MathUtils';
import Model from './Model';
import { useParams } from 'react-router-dom';

const CanvasWrapper = () => {
  const { controls, setMetadata, metadata } = useAppContext();
  // const API = 'https://api.infusorydesigns.com/';
  const API = 'http://localhost:3030/';
  const { modelName } = useParams();
  useEffect(() => {
    const fetchMetaData = async () => {
      const res = await fetch(API + 'models/metadata');
      const data = await res.json();
      setMetadata(data);
    };
    fetchMetaData();
  }, [setMetadata]);

  return (
    <div className='canvasWrapper' style={{ backgroundColor: '' }}>
      <Canvas shadows>
        <ambientLight color={'#ffffff'} intensity={0.3} />
        <directionalLight intensity={1} position={[10, 10, 20]} castShadow />
        <OrbitControls
          enabled={controls}
          enableZoom={false}
          maxDistance={5}
          minDistance={3}
          enablePan={false}
          maxPolarAngle={degToRad(70)}
          minPolarAngle={degToRad(40)}
          autoRotate
          autoRotateSpeed={5}
        />
        {/* <MyBox /> */}
        {metadata.length && (
          <Suspense fallback={null}>
            <Model url={API + 'models/get/' + modelName} metadata={metadata} />
          </Suspense>
        )}
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
