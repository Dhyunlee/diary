import { Dispatch, memo, useRef, useState } from "react";
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
import Label from "components/Base/Label";
import { IDiary } from "types/db";

const storage = getStorage();

interface IProps {
  diaryItem?: IDiary, 
  setImgUrl: Dispatch<React.SetStateAction<string>>, 
  setImgFileName: Dispatch<React.SetStateAction<string>>
}

const ImageUpload = ({ diaryItem, setImgUrl, setImgFileName }: IProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(diaryItem?.imgUrl ?? '');

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    if (file) {
      const fileReader: FileReader  = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("loadend", (e: ProgressEvent<FileReader>) => {
        const { result } = e.currentTarget as FileReader;
        console.log({ result });
        setThumbnail(result as string);
        onSaveToFStorage(file);
      });
    }
  };
  const onClickFileInput = () => {
      inputFileRef?.current?.click();
  };

  const onCancelImageUpload = () => {
    if (diaryItem?.imgFileName || thumbnail) {
      setThumbnail("");
      setImgUrl("");
      setImgFileName("");
      const fileRef = ref(storage, "images/" + diaryItem?.imgFileName);
      deleteObject(fileRef)
        .then(() => {
          console.log("삭제완료");
          // File deleted successfully
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    }
  };

  const onSaveToFStorage = (file: File) => {
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
          setImgFileName(newName + uniqueKey);
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
