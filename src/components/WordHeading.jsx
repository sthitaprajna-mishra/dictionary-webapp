// assets
import iconplay from "../assets/icon-play.svg";

const WordHeading = ({
  word = "keyboard",
  phonetic = "/ˈkibɔɹd/",
  audioSrc = "",
}) => {
  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div className="mt-8 flex items-start justify-between md:items-center md:mt-12">
      <div className="space-y-4 md:space-y-6">
        <div className="text-4xl font-bold md:text-6xl">{word}</div>
        <div className="text-xl text-accentColor md:text-2xl">{phonetic}</div>
      </div>
      <div>
        <button onClick={playAudio}>
          <img
            className="h-12 w-12 hover:cursor-pointer transition-all md:h-auto md:w-auto"
            src={iconplay}
            alt="play icon"
          />
        </button>
      </div>
    </div>
  );
};

export default WordHeading;
