import { useEffect, useState } from 'react';

const useFetchModel = (metadata, url) => {
  const [modelUrl, setModelUrl] = useState();
  const [modelData, setModelData] = useState();
  useEffect(() => {
    const fetchModel = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log({ data, metadata });
      const curModel = metadata.find((curdata) => {
        const model = curdata.name === data.modelName.split('/')[1];
        // console.log({ curdata, model });
        return model;
      });
      // creating blob URL
      const arrayBufferView = new Uint8Array(data.model.data);
      const blob = new Blob([arrayBufferView]);
      var urlCreator = window.URL || window.webkitURL;
      const murl = urlCreator.createObjectURL(blob);
      //   console.log({ murl, curModel });
      setModelUrl(murl);
      setModelData(curModel);
    };

    fetchModel();
  }, [url, metadata]);

  return [modelData, modelUrl];
};

export default useFetchModel;
