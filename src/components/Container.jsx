// react
import { useEffect, useState } from "react";

// components
import Header from "./Header";
import Searchbar from "./Searchbar";
import WordHeading from "./WordHeading";

// axios
import axios from "axios";
import Meanings from "./Meanings";
import Sources from "./Sources";
import { CircularProgress } from "@mui/material";

const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const Container = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [result, setResult] = useState();
  const [audioSrc, setAudioSrc] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchedWord.trim() !== "") {
      setLoading(true);
      const apiURL = `${baseURL}${searchedWord}`;

      //   console.log(searchedWord);

      axios
        .get(apiURL)
        .then((response) => {
          //   console.log(response);
          const apiResponse = response.data[0];
          if (apiResponse.phonetics) {
            apiResponse.phonetics.map((phonetic) => {
              if (phonetic.audio.length > 0) {
                setAudioSrc(phonetic.audio);
              }
            });
          }
          console.log(apiResponse);
          setResult(apiResponse);
          setLoading(false);
        })
        .catch((err) => {
          console.log("inside error block");
          //   console.log(err);
          //   console.log(err.response.data);
          setLoading(false);
        });
    }
  }, [searchedWord]);

  return (
    <div className="border-1 border-green-600 col-span-12 mx-4 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6">
      {/* Header */}
      <Header />
      {/* Searchbar */}
      <Searchbar setSearchedWord={setSearchedWord} />

      {loading ? (
        <div className="flex justify-center mt-40">
          <CircularProgress />
        </div>
      ) : (
        <>
          {/* Word Heading */}
          <WordHeading
            word={result?.word}
            phonetic={result?.phonetic}
            audioSrc={audioSrc}
          />
          {/* Meanings */}
          <Meanings meanings={result?.meanings} />
          {/* Source */}
          <Sources sources={result?.sourceUrls} />
        </>
      )}
    </div>
  );
};

export default Container;
