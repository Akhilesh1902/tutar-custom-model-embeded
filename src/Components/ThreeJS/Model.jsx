import { useGLTF } from '@react-three/drei';
import React from 'react';

const Model = ({ url }) => {
  const model = useGLTF(url);
  model.scene.traverse((obj) => {
    if (obj.isMesh) {
      console.log(obj);
      obj.castShadow = true;
    }
  });

  return <primitive object={model.scene} scale={0.7}></primitive>;
};

export default Model;
