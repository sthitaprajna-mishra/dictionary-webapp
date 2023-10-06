// react
import { useEffect, useState } from "react";

// components
import Header from "./Header";
import Searchbar from "./Searchbar";
import WordHeading from "./WordHeading";

// axios
import axios from "axios";

const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const Container = () => {
  const [searchedWord, setSearchedWord] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    const apiURL = `${baseURL}${searchedWord}`;

    console.log(searchedWord);

    axios
      .get(apiURL)
      .then((response) => {
        console.log(response);
        const apiResponse = response.data[0];
        console.log(apiResponse);
        setResult(apiResponse);
      })
      .catch((err) => {
        console.log("inside error block");
        console.log(err);
        console.log(err.response.data);
      });
  }, [searchedWord]);

  return (
    <div className="border-1 border-green-600 col-span-12 mx-4 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6">
      {/* Header */}
      <Header />
      {/* Searchbar */}
      <Searchbar setSearchedWord={setSearchedWord} />
      {/* Word Heading */}
      <WordHeading />
    </div>
  );
};

export default Container;
