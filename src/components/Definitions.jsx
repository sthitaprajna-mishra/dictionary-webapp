import React from "react";
import Definition from "./Definition";

const Definitions = ({ definitions }) => {
  return (
    <div>
      <div className="text-xl text-placeholderColor mb-4">Meaning</div>
      {definitions.map((def) => {
        return <Definition def={def} />;
      })}
    </div>
  );
};

export default Definitions;
