import React from "react";
import DiaryHeader from "../../components/DiaryHeader";
import DiaryList from "../../components/DiaryList";

import { MdCreate } from "react-icons/md";

const Home = () => {
  return (
    <>
      <DiaryHeader />
      <DiaryList />
      <div
        style={{
          position: "fixed",
          bottom: '25px',
          right: "10px",
        }}
      >
        <button>
          <MdCreate/>
        </button>
      </div>
    </>
  );
};

export default Home;
