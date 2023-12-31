import React from "react";
import Definitions from "./Definitions";
import SynonymsAntonyms from "./SynonymsAntonyms";

const Meaning = ({ meaning, setSearchedWord }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center space-x-1">
        <div className="text-xl font-bold italic dark:text-whiteColor1">
          {meaning.partOfSpeech}
        </div>
        <div className="flex flex-col  w-full p-2">
          <div className="w-full p-1 border-b border-gray-400"></div>
          <div className="w-full p-1"></div>
        </div>
      </div>
      <div className="mt-6">
        <Definitions definitions={meaning.definitions} />
      </div>
      <SynonymsAntonyms
        array={meaning.synonyms}
        arrayType="Synonyms"
        setSearchedWord={setSearchedWord}
      />
      <SynonymsAntonyms
        array={meaning.antonyms}
        arrayType="Antonyms"
        setSearchedWord={setSearchedWord}
      />
    </div>
  );
};

export default Meaning;
