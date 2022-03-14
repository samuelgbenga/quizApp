import React from "react";
import HomeBanner from "./homecomponent/homebanner/HomeBanner";
import "./home.css";
import HomeForm from "./homecomponent/homeForm/HomeForm";
export default function Home({ fetchQuestion }) {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <HomeBanner />
        <HomeForm fetchQuestion={fetchQuestion} />
      </div>
    </div>
  );
}
