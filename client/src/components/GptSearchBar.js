import React from "react";

const GptSearchBar = () => {
  return (
    <div className="absolute mt-28 ">
      <form
        className="w-1/2 mx-auto flex bg-black rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="w-screen outline m-1 border-x-8 rounded"
          placeholder="what would you like to watch today ?"
        />
        <button className="bg-red-800 text-white m-1 hover:bg-green-800 rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
