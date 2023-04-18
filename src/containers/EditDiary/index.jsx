import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { fetchGetDiaryById } from '@services/diary';
import DiaryFormTemplate from '@layouts/DiaryFormTemplate';
import { FormDiaryContainer, HeaderTitle } from '@pages/WriteDiary/styles';
import DiaryForm from '@components/DiaryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getDiaryState } from '@store/reducers/diary';
import { getDetailDiary } from '@store/actions/diary';

const EditDiary = () => {
  const dispatch = useDispatch();
  const { state: diaryId } = useLocation();

  const { detailDiary } = useSelector(getDiaryState);

  useEffect(() => {
    dispatch(getDetailDiary(diaryId));
  }, [dispatch, diaryId]);

  return (
    <>
      {detailDiary && (
        <>
          <Helmet>
            <title>{`수정하기 | ${detailDiary.title || '제목 없음'}`}</title>
          </Helmet>
          <div>
            <FormDiaryContainer>
              <HeaderTitle>
                <span>다이어리 수정</span>
              </HeaderTitle>
              <DiaryFormTemplate>
                <DiaryForm diaryId={diaryId} isEdit={true} diaryItem={detailDiary} />
              </DiaryFormTemplate>
            </FormDiaryContainer>
          </div>
        </>
      )}
    </>
  );
};

export default EditDiary;
