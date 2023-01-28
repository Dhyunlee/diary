import { useState, useEffect } from "react";
import { emotionList } from "@utils/emotion";
import { EmotionWrap, Emotions } from "./styles";

const SelectEmotion = ({ setEmotion, onCloseModal }) => {
  const [selectedElement, setsSelectedElement] = useState(null);
  
  useEffect(() => {
    let timer;
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

export default SelectEmotion;
