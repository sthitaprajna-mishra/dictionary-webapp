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

// assets
import catmeme from "../assets/catmeme-removebg-preview.png";

const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const Container = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [result, setResult] = useState();
  const [audioSrc, setAudioSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchedWord.trim() !== "") {
      setLoading(true);
      const apiURL = `${baseURL}${searchedWord}`;

      //   console.log(searchedWord);

      axios
        .get(apiURL)
        .then((response) => {
          //   console.log(response);

          if (error) {
            setError(false);
          }

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
          setError(true);
          console.log("inside error block");
          console.log(err);
          console.log(err.response.data);
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
      ) : error ? (
        <>
          <div className="flex flex-col items-center justify-start space-y-6 mt-4">
            <div>
              <img
                className="rounded-full h-56 w-56 mr-6"
                src={catmeme}
                alt="crying cat meme"
              />
            </div>
            <div className="space-y-2 text-center md:text-lg md:w-3/4 dark:text-placeholderColor">
              <p>
                Sorry pal, we couldn't find definitions for the word you were
                looking for.
              </p>
              <p>
                You can try the search again at later time or head to the web
                instead.
              </p>
            </div>
          </div>
        </>
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
