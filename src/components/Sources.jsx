// React
import React from "react";

// assets
import iconnewindow from "../assets/icon-new-window.svg";

const Sources = ({ sources = ["https://en.wiktionary.org/wiki/keyboard"] }) => {
  return (
    <div className="mt-12 mb-6 pt-6 border-t border-gray-400  dark:text-whiteColor1">
      <div className="underline mb-2">Sources</div>
      <div>
        {sources
          ? sources.map((source, id) => {
              return (
                <div
                  key={id}
                  className="ml-6 flex space-x-1 hover:underline  dark:text-whiteColor1"
                >
                  <a
                    className="text-sm overflow-hidden whitespace-normal"
                    href={source}
                    target="_blank"
                  >
                    {source}
                  </a>
                  <img src={iconnewindow} alt="new window icon" />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Sources;
