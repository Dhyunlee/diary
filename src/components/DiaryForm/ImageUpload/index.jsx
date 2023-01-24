import { useRef, useState } from "react";
import {
  ImgUploadBox,
  DrapFileArea,
  ImageUploadForm,
  ThumbnailImg,
} from "./styles";
import { getDownloadURL, ref, uploadBytes, getStorage } from "firebase/storage";

const ImageUpload = () => {
  const inputFileRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [imageUpload, setImageUpload] = useState("");

  const onChangeImg = (e) => {
    console.log("이미지 업로드");
    const { files } = e.target;

    console.log(files);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.addEventListener("loadend", (e) => {
      const { result } = e.currentTarget;
      setImageUpload(result);
    });
    console.log(fileReader.result);
  };
  const onClickFileInput = () => {
    inputFileRef?.current.click();
  };
  imageUpload && console.log(imageUpload);
  return (
    <ImageUploadForm>
      <ImgUploadBox style={{ position: "relative" }}>
        <DrapFileArea onClick={onClickFileInput}>
          {thumbnail ? (
            <ThumbnailImg>
              <img src="https://img.icons8.com/ios/512/image--v1.png" alt="" />
            </ThumbnailImg>
          ) : (
            <>
              <div className="icon-wrap">
                <img
                  src="https://img.icons8.com/ios/512/image--v1.png"
                  alt="file-icon"
                  className="img"
                />
              </div>
              <span className="upload-msg">
                클릭해서 직접 업로드하거나
                <br />
                이미지를 끌어다 놓으세요
              </span>
            </>
          )}
          <input
            name="imgUpload"
            type="file"
            accept="image/gif, image/jpeg, image/png"
            onChange={onChangeImg}
            ref={inputFileRef}
          />
        </DrapFileArea>
      </ImgUploadBox>
    </ImageUploadForm>
  );
};

export default ImageUpload;
