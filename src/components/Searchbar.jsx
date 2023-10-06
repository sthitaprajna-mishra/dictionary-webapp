// assets
import iconsearch from "../assets/icon-search.svg";

const Searchbar = () => {
  return (
    <div className="bg-inputColor rounded-xl flex items-center mt-10 py-4 outline-none focus-within:outline focus-within:outline-1 focus-within:outline-offset-0 focus-within:outline-accentColor">
      {/* Input */}
      <div className="w-11/12 pl-4 md:text-xl">
        <input
          className="w-full bg-inherit text-fontColor font-semibold placeholder:text-placeholderColor placeholder:font-normal outline-none"
          type="text"
          placeholder="Search for a word"
        />
      </div>
      {/* Search button */}
      <div className="w-1/12 flex items-center justify-center hover:cursor-pointer transition-all mr-2 md:mr-0">
        <img src={iconsearch} alt="search icon" />
      </div>
    </div>
  );
};

export default Searchbar;
