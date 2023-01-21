import React from "react";
import { Helmet } from "react-helmet-async";
import DiaryHeader from "../../components/DiaryHeader";
import DiaryList from "../../containers/DiaryList";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>diary</title>
        <meta 
          name="description"
          content="하루 일상을 기록해보아요!"
        />
      </Helmet>
      <DiaryHeader />
      <DiaryList />
    </>
  );
};

export default Home;
