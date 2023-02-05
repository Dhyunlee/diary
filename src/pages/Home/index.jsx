import React from "react";
import { Helmet } from "react-helmet-async";
import DiaryList from "@containers/DiaryList";

const Home = ({ isLoggedIn }) => {
  return (
    <>
      <Helmet>
        <title>diary</title>
        <meta name="description" content="하루 일상을 기록해보아요!" />
      </Helmet>
        <DiaryList isLoggedIn={isLoggedIn}/>
    </>
  );
};

export default Home;
