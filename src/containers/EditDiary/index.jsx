import DiaryForm from '@components/DiaryForm';
import { fetchGetDiaryById } from '@services/diary';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const EditDiary = () => {
  const { state: diaryId } = useLocation();
  const [diaryItem, setDiaryItem] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log({ diaryId });
    const getData = async () => {
      setLoading(true);
      const data = await fetchGetDiaryById(diaryId);
      setDiaryItem(data);
      setLoading(false);
    };

    getData();
  }, [diaryId]);

  if (isLoading) return <div>다이어리 불러오기</div>;
  return (
    <>
      {diaryItem && (
        <>
          <Helmet>
            <title>{`수정하기 | ${diaryItem.title || '제목 없음'}`}</title>
          </Helmet>
          <div>
            <DiaryForm diaryId={diaryId} isEdit={true} diaryItem={diaryItem}/>
          </div>
        </>
      )}
    </>
  );
};

export default EditDiary;
