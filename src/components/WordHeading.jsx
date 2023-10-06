// assets
import iconplay from "../assets/icon-play.svg";

const WordHeading = () => {
  return (
    <div className="mt-16 flex items-start justify-between md:items-center">
      <div className="space-y-4 md:space-y-6">
        <div className="text-4xl font-bold md:text-6xl">keyboard</div>
        <div className="text-xl text-accentColor md:text-2xl">
          /<span>ˈkibɔɹd</span>/
        </div>
      </div>
      <div>
        <img
          className="h-12 w-12 hover:cursor-pointer transition-all md:h-auto md:w-auto"
          src={iconplay}
          alt="play icon"
        />
      </div>
    </div>
  );
};

export default WordHeading;
