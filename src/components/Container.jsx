// components
import Header from "./Header";
import Searchbar from "./Searchbar";
import WordHeading from "./WordHeading";

const Container = () => {
  return (
    <div className="border-1 border-green-600 col-span-12 mx-4 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6">
      {/* Header */}
      <Header />
      {/* Searchbar */}
      <Searchbar />
      {/* Word Heading */}
      <WordHeading />
    </div>
  );
};

export default Container;
