import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = resource => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(res => setResources(res.data));
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
