import React from "react";
import useResources from "./useResources";

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
