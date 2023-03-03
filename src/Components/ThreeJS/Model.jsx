import { useGLTF } from '@react-three/drei';

const Model = ({ url, scale, y }) => {
  console.log(url);

  const model = useGLTF(url);
  model.scene.traverse((obj) => {
    if (obj.isMesh) {
      // console.log(obj);
      obj.castShadow = true;
    }
  });

  return (
    <primitive object={model.scene} scale={scale} position-y={y}></primitive>
  );
};

export default Model;
