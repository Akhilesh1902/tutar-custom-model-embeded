import { useGLTF } from '@react-three/drei';
import React from 'react';

const Model = ({ url, scale }) => {
  const model = useGLTF(url);
  model.scene.traverse((obj) => {
    if (obj.isMesh) {
      console.log(obj);
      obj.castShadow = true;
    }
  });

  return <primitive object={model.scene} scale={scale}></primitive>;
};

export default Model;
