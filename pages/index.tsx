import React from "react";
import type { NextPage } from "next";

import SearchBox from "../components/searchBox";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <SearchBox />
    </div>
  );
};

export default Home;
