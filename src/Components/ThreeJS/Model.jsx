import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';
import useFetchModel from '../../Hooks/useFetchModel';

const Model = ({ url, metadata }) => {
  const [modelData, modelUrl] = useFetchModel(metadata, url);
  const model = useGLTF(modelUrl || './Heart.glb');
  model.scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
    }
  });

  let mixer = null;

  if (model.animations.length) {
    mixer = new AnimationMixer(model.scene);
    const action = mixer.clipAction(model.animations[0]);
    action.play();
  }

  useFrame(({ clock }, delta) => {
    mixer?.update(delta);
  });

  return (
    <primitive
      object={model.scene}
      scale={modelData?.scale || 1}
      position-y={-1}></primitive>
  );
};

export default Model;
