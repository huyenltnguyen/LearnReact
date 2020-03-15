import React, { useState, useEffect } from "react";
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

const ResourceList = ({ type }) => {
  const resources = useResources(type);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
