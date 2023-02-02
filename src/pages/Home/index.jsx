import React, { useState } from "react";
import { format,add, sub } from "date-fns";
import { Helmet } from "react-helmet-async";
import DiaryHeader from "@components/DiaryHeader";
import DiaryList from "@containers/DiaryList";

const Home = () => {
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const thisMonth = format(currentDate, "yyyy년 MM월");
  const getMonth = thisMonth.substring(6);
  const onIncreateMonth = () => {
    setCurrentDate((prev) => add(prev, { months: 1 }));
  };
  const ondecreateMonth = () => {
    setCurrentDate((prev) => sub(prev, { months: 1 }));
  };

  return (
    <>
      <Helmet>
        <title>diary</title>
        <meta name="description" content="하루 일상을 기록해보아요!" />
      </Helmet>
      <DiaryHeader
        onIncreateMonth={onIncreateMonth}
        ondecreateMonth={ondecreateMonth}
        thisMonth={thisMonth}
        currentDate={currentDate}
      />
      <DiaryList 
        getMonth={getMonth}
      />
    </>
  );
};

export default Home;
