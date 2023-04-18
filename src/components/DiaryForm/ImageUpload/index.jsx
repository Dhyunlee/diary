import { memo, useRef, useState } from "react";
import {
  getDownloadURL,
  ref,
  getStorage,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";

import {
  ImgUploadBox,
  DrapFileArea,
  ImageUploadForm,
  ThumbnailImg,
} from "./styles";
import { InputGroup } from "../styles";
import Label from "@components/Base/Label";

const storage = getStorage();

const ImageUpload = ({ diaryItem, setImgUrl, setImgFileName }) => {
  const inputFileRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(diaryItem?.imgUrl);

  const onChangeImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("loadend", (e) => {
        const { result } = e.currentTarget;
        console.log({ result });
        setThumbnail(result);
        onSaveToFStorage(file);
      });
    }
  };
  const onClickFileInput = () => {
    inputFileRef?.current.click();
  };

  const onCancelImageUpload = () => {
    if (diaryItem?.imgFileName || thumbnail) {
      setThumbnail("");
      setImgUrl("");
      setImgFileName("");
      const desertRef = ref(storage, diaryItem?.imgFileName);
      deleteObject(desertRef)
        .then(() => {
          console.log("삭제완료");
          // File deleted successfully
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    }
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
          setImgUrl(downloadUrl);
          setImgFileName("images/" + newName + uniqueKey);
        });
      }
    );
  };

  return (
    <>
      <Label text="이미지 추가" />
      <button
        onClick={onCancelImageUpload}
        type="button"
        style={{ position: "absolute", right: 0, top: 0 }}
      >
        이미지 취소
      </button>
      <InputGroup>
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
      </InputGroup>
    </>
  );
};

export default memo(ImageUpload);
