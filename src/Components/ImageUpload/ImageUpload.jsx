// import { Button } from "@mui/base";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styles from "./imageUpload.module.css";
import { useState } from "react";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
export default function ImageUpload({ setFormData }) {
  const [file, setFile] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    // setFile(target.files);
    // getBase64(target.files[1].originFileObj, (url) => {
    //   // setLoading(false);
    // });
    setImageUrl(e.target.value);
    console.log(imageUrl);
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <Button
        sx={{
          color: "#475467",
          border: "2px dashed #ced6dd",
          borderRadius: "8px",
          fontFamily: "Roboto",
          marginBottom: 2,
          padding: 2,
        }}
        component="label"
        // variant="contained"
        className={styles.uploadImageBtn}
        onChange={handleChange}
        name="images"
      >
        <input type="file" hidden />
        {/* {file.map((el, i) => (
          <img src={el} alt="" key={i} />
        ))} */}
        <CloudUploadIcon sx={{ marginRight: 1 }} />
        <span className={styles.uploadImage}> Click to upload photo </span>
        &nbsp; or drag and drop
        <VisuallyHiddenInput type="image" onChange={handleChange} />
      </Button>
    </>
  );
}
