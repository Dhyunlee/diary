import { memo, useRef, useState } from "react";
import {
  getDownloadURL,
  ref,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";

import {
  ImgUploadBox,
  DrapFileArea,
  ImageUploadForm,
  ThumbnailImg,
} from "./styles";

const storage = getStorage();

const ImageUpload = ({ diaryItem, setUploadImgFile }) => {
  const inputFileRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(diaryItem?.imgUrl);

  const onChangeImg = (e) => {
    console.log("이미지 업로드");
    const file = e.target.files[0];

    console.log(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("loadend", (e) => {
        const { result } = e.currentTarget;
        setThumbnail(result);
        onSaveToFStorage(file);
      });
      console.log(fileReader.result);
    }
  };
  const onClickFileInput = () => {
    inputFileRef?.current.click();
  };

  const onSaveToFStorage = (file) => {
    const uniqueKey = new Date().getTime();
    const newName = file.name
      .replace(/[~`!#$%^&*+=\-[\]\\';,/{}()|\\":<>?]/g, "")
      .split(" ")
      .join("");

    const metaData = {
      contentType: file.type,
    };

    const storageRef = ref(storage, "images/" + newName + uniqueKey);
    const uploadTask = uploadBytesResumable(storageRef, file, metaData);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const progress =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        alert(`error: image upload error ${JSON.stringify(error)}`);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          console.log(`완료 url: ${downloadUrl}`);
          setUploadImgFile(downloadUrl);
        });
      }
    );
  };

  return (
    <ImageUploadForm>
      <ImgUploadBox>
        <DrapFileArea onClick={onClickFileInput}>
          {thumbnail ? (
            <ThumbnailImg>
              <img src={thumbnail} alt="" />
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

export default memo(ImageUpload);
