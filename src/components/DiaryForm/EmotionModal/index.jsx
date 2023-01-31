import Modal from "@components/base/Modal";
import { dropEmotionModal, getState } from "@store/reducers/modal";
import { useDispatch, useSelector } from "react-redux";
import SelectEmotion from "../SelectEmotion";

const EmotionModal = ({ emotion, setEmotion }) => {
  const { isEmotionModal  } = useSelector(getState);
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

export default EmotionModal;
