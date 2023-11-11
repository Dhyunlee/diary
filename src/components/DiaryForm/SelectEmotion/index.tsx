import { useState, useEffect, memo, useCallback, Dispatch } from "react";
import { TEmotion, emotionList } from "utils/emotion";
import { EmotionWrap, Emotions } from "./styles";

interface IProps {
  setEmotion: Dispatch<React.SetStateAction<TEmotion>>;
  onCloseModal: () => void;
}
const SelectEmotion = ({ setEmotion, onCloseModal }: IProps) => {
  const [selectedElement, setsSelectedElement] = useState<number>(0);

  useEffect(() => {
    let timer: any;
    if (selectedElement) {
      timer = setTimeout(() => {
        onCloseModal();
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedElement]);

  const onClickEmotion = useCallback(
    (emotion: TEmotion) => {
      setEmotion(emotion);
      setsSelectedElement(emotion.id);
    },
    [setEmotion]
  );

  return (
    <EmotionWrap>
      <div className="container">
        <header>
          <span>오늘 기분은 어떠신가요?</span>
        </header>
        <section>
          <Emotions>
            {emotionList &&
              emotionList?.map((emotion) => {
                return (
                  <div
                    key={emotion.id}
                    className={`emotion ${
                      emotion.id === selectedElement ? "selected" : ""
                    }`}
                    onClick={() => onClickEmotion(emotion)}
                  >
                    <div className="emotion-wrap">
                      <img src={emotion.img} alt="emotion-icon" />
                    </div>
                    <div className="emotion-wrap">
                      <span>{emotion.desc}</span>
                    </div>
                  </div>
                );
              })}
          </Emotions>
        </section>
      </div>
    </EmotionWrap>
  );
};

export default memo(SelectEmotion);
