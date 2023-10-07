import React from "react";
import Meaning from "./Meaning";

const defaultMeanings = [
  {
    partOfSpeech: "noun",
    definitions: [
      {
        definition:
          "(etc.) A set of keys used to operate a typewriter, computer etc.",
        synonyms: [],
        antonyms: [],
      },
      {
        definition:
          "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
        synonyms: [],
        antonyms: [],
      },
      {
        definition:
          "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
        synonyms: [],
        antonyms: [],
      },
    ],
    synonyms: ["electronic keyboard"],
    antonyms: [],
  },
  {
    partOfSpeech: "verb",
    definitions: [
      {
        definition: "To type on a computer keyboard.",
        synonyms: [],
        antonyms: [],
        example: "Keyboarding is the part of this job I hate the most.",
      },
    ],
    synonyms: [],
    antonyms: [],
  },
];

const Meanings = ({ meanings = defaultMeanings, setSearchedWord }) => {
  return (
    <div className="mt-8">
      {meanings ? (
        meanings.map((meaning, id) => {
          return (
            <Meaning
              key={id}
              meaning={meaning}
              setSearchedWord={setSearchedWord}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Meanings;
