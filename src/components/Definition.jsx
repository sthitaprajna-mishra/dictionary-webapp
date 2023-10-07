import React from "react";

const Definition = ({ def }) => {
  return (
    <>
      <div className="flex items-start space-x-4 ml-6 mb-3">
        <div className="p-[0.2rem] mt-2 rounded-full bg-accentColor"></div>
        <div className="text-lg">
          <div> {def.definition}</div>

          {def.example ? (
            <div className="text-placeholderColor mt-2">"{def.example}"</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Definition;
