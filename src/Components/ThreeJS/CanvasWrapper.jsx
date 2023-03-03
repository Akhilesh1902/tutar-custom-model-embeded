import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useAppContext } from '../../Context/AppContext';
import { degToRad } from 'three/src/math/MathUtils';
import Model from './Model';
import { useParams } from 'react-router-dom';

const CanvasWrapper = () => {
  const { controls } = useAppContext();
  const API = 'https://api.infusorydesigns.com/';

  const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const { modelName } = useParams();
  console.log(modelName);

  const [blobUrl, setBlobUrl] = useState('./Heart.glb');
  const [metadata, setMetadata] = useState([]);
  useEffect(() => {
    fetcher(API + 'modeldata').then((data) => {
      data.forEach((d) => console.log(d.name));
      setMetadata(data);
    });
  }, []);

  console.log({ metadata });

  const [currentModelData, setCurrentModelData] = useState({});

  console.log(currentModelData);

  useEffect(() => {
    const fetchModel = async () => {
      const data = await fetcher(API + 'models/' + modelName);
      console.log(data);
      console.log(data.modelName.split('/')[1]);
      const curModel = metadata.find(
        (curdata) => curdata.name === data.modelName.split('/')[1]
      );
      setCurrentModelData(curModel);
      const arrayBufferView = new Uint8Array(data.model.data);
      const blob = new Blob([arrayBufferView]);
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(blob);
      console.log(imageUrl);
      setBlobUrl(imageUrl);
    };

    fetchModel();
  }, [metadata, modelName]);

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
        <Suspense fallback={<Model url={'./heart.glb'} scale={1} y={-1.5} />}>
          <Model url={blobUrl} scale={currentModelData?.scale} y={-1.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
