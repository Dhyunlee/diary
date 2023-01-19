import React from "react";
import { ImgUploadBox, DrapFileArea, ImageUploadForm } from "./styles";

const ImageForm = () => {
  return (
    <ImageUploadForm>
      <ImgUploadBox>
        <DrapFileArea>
          <div className="icon-wrap">
            <img
              src="https://img.icons8.com/ios/512/image--v1.png"
              alt="file-icon"
              className="img"
            />
          </div>
          <span className="upload-msg">클릭해서 직접 업로드하거나<br/>이미지를 끌어다 놓으세요</span>
          <input type="file" name="" id="" />
        </DrapFileArea>
      </ImgUploadBox>
    </ImageUploadForm>
  );
};

export default ImageForm;
