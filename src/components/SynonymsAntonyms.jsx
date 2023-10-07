import React from "react";

const SynonymsAntonyms = ({ array, arrayType, setSearchedWord }) => {
  return (
    <>
      {array.length > 0 ? (
        <div className="flex items-start space-x-8 mt-6">
          <div className="text-xl text-placeholderColor mb-4">{arrayType}</div>
          <div className="w-full">
            <div className="flex flex-wrap">
              {array.map((arrayItem, id) => {
                return (
                  <div
                    key={id}
                    className="text-accentColor text-lg mb-2 mx-1 hover:underline hover:cursor-pointer transition-all"
                    onClick={() => setSearchedWord(arrayItem)}
                  >
                    {arrayItem}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SynonymsAntonyms;
