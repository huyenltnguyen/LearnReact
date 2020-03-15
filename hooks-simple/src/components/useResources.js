import { useState, useEffect } from "react";
import axios from "axios";

const useResources = type => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (type =>
      axios
        .get(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => setResources(res.data)))(type);
  }, [type]);

  return resources;
};

export default useResources;
