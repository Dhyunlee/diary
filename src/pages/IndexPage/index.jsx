import React from 'react';
import { Helmet } from 'react-helmet-async';
import DiaryList from '@containers/DiaryList';
import { DiaryContainer } from './styles';

const IndexPage = ({ isLoggedIn }) => {
  return (
    <>
      <Helmet>
        <title>diary</title>
        <meta name="description" content="하루 일상을 기록해보아요!" />
      </Helmet>
      <DiaryContainer>
        <DiaryList isLoggedIn={isLoggedIn} />
      </DiaryContainer>
    </>
  );
};

export default IndexPage;
