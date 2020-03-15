import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resourceType, setResource] = useState("posts");

  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList type={resourceType} />
    </div>
  );
};

export default App;
