import DiaryForm from '@components/DiaryForm';
import { fetchGetDiaryById } from '@services/diary';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import DiaryFormTemplate from '@layouts/DiaryFormTemplate';
import { FormDiaryContainer, HeaderTitle } from '@pages/WriteDiary/styles';

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

  return (
    <>
      {diaryItem && (
        <>
          <Helmet>
            <title>{`수정하기 | ${diaryItem.title || '제목 없음'}`}</title>
          </Helmet>
          <div>
            <FormDiaryContainer>
              <HeaderTitle>
                <span>다이어리 수정</span>
              </HeaderTitle>
              <DiaryFormTemplate>
                <DiaryForm diaryId={diaryId} isEdit={true} diaryItem={diaryItem} />
              </DiaryFormTemplate>
            </FormDiaryContainer>
          </div>
        </>
      )}
    </>
  );
};

export default EditDiary;
