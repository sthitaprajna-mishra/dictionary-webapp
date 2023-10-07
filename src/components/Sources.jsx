// React
import React from "react";

// assets
import iconnewindow from "../assets/icon-new-window.svg";

const Sources = ({ sources }) => {
  console.log(sources);
  return (
    <div className="mt-12 mb-6 pt-6 border-t border-gray-400">
      <div className="underline mb-2">Sources</div>

      {sources
        ? sources.map((source) => {
            return (
              <div className="ml-6 flex space-x-1 hover:underline">
                <a href={source} target="_blank">
                  {source}
                </a>
                <img src={iconnewindow} alt="new window icon" />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Sources;
