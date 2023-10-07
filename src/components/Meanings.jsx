import React from "react";
import Meaning from "./Meaning";

const Meanings = ({ meanings }) => {
  return (
    <div className="mt-8">
      {meanings ? (
        meanings.map((meaning) => {
          return <Meaning meaning={meaning} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Meanings;
