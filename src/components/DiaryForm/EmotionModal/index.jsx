import Modal from "@components/base/Modal";
import { getState, dropEmotionModal } from "@store/reducers/diary";
import { useDispatch, useSelector } from "react-redux";
import SelectEmotion from "../SelectEmotion";

const EmotionModal = ({ emotion, setEmotion }) => {
  const { isShowModal } = useSelector(getState);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(dropEmotionModal(false));
  };

  return (
    <Modal isShowModal={isShowModal} onCloseModal={onCloseModal}>
      <SelectEmotion
        emotion={emotion}
        setEmotion={setEmotion}
        onCloseModal={onCloseModal}
      />
    </Modal>
  );
};

export default EmotionModal;
