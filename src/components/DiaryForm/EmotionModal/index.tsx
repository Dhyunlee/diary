import { Dispatch, memo } from "react";
import { dropEmotionModal, getModalState } from "store/reducers/modal";
import { useDispatch, useSelector } from "react-redux";
import Modal from "components/Base/Modal";
import SelectEmotion from "components/DiaryForm/SelectEmotion";
import { TEmotion } from "utils/emotion";

export interface IProps {
  setEmotion: Dispatch<React.SetStateAction<TEmotion>>;
}
const EmotionModal = ({ setEmotion }: IProps) => {
  const { isEmotionModal } = useSelector(getModalState);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(dropEmotionModal());
  };

  return (
    <Modal isShowModal={isEmotionModal} onCloseModal={onCloseModal}>
      <SelectEmotion
        setEmotion={setEmotion}
        onCloseModal={onCloseModal}
      />
    </Modal>
  );
};

export default memo(EmotionModal);
