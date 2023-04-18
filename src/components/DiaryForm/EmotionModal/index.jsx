import { memo } from "react";
import { dropEmotionModal, getModalState } from "@store/reducers/modal";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@components/Base/Modal";
import SelectEmotion from "@components/DiaryForm/SelectEmotion";

const EmotionModal = ({ emotion, setEmotion }) => {
  const { isEmotionModal  } = useSelector(getModalState);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(dropEmotionModal(false));
  };

  return (
    <Modal isShowModal={isEmotionModal} onCloseModal={onCloseModal}>
      <SelectEmotion
        emotion={emotion}
        setEmotion={setEmotion}
        onCloseModal={onCloseModal}
      />
    </Modal>
  );
};

export default memo(EmotionModal);
