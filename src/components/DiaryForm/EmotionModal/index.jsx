import { useState, useEffect } from "react";
import { emotionList } from "@utils/emotion";
import { EmotionWrap, Emotions } from "./styles";

const EmotionModal = ({ setEmotion, onCloseModal }) => {
  const [selectedElement, setsSelectedElement] = useState(null);
  
  useEffect(() => {
    let timer;
    if (selectedElement) {
      timer = setTimeout(() => {
        onCloseModal((prev) => (prev = false));
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [onCloseModal, selectedElement]);

  const onClickEmotion = (emotion) => {
    setEmotion((prev) => Object.assign(prev, emotion));
    setsSelectedElement(emotion.id);
  };

  return (
    <EmotionWrap>
      <div className="container">
        <header>
          <span>오늘 기분은 어떠신가요?</span>
        </header>
        <section>
          <Emotions>
            {emotionList?.map((emotion) => {
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

export default EmotionModal;
