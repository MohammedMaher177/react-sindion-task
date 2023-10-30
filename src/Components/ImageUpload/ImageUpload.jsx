import PropTypes from "prop-types";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import styles from "./imageUpload.module.css";
import { useState } from "react";
import { VisuallyHiddenInput } from "../../Theme/ThemeProvider.js";
import { Box } from "@mui/material";
import Loading from "../Loading/Loading.jsx";
import DeleteIcon from "../Icons/DeleteIcon.jsx";
export default function ImageUpload({ setFormData }) {
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [isLoading, setloading] = useState(false);

  function validationImage(e) {
    setloading(true);
    const imageFile = e.target.files[0];

    setFormData(image);
    setImage((prevFormData) => [...prevFormData, imageFile]);
    setImagePreview((prevFormData) => [
      ...prevFormData,
      URL.createObjectURL(imageFile),
    ]);
    setloading(false);
  }

  return (
    <>
    {imagePreview.length < 2 &&<><label htmlFor="attach-file" className="mb-2">Attach Photo </label>
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
        variant="outlined"
        className={styles.uploadImageBtn}
        onChange={validationImage}
        name="images"
      >
        <input type="file" hidden />
        <CloudUploadIcon sx={{ marginRight: 1 }} />
        <span className={styles.uploadImage}> Click to upload photo </span>
        &nbsp; or drag and drop
        <VisuallyHiddenInput type="image" accept="image/*" id="attach-file" />
      </Button></> }
      
      <Box sx={{ display: "flex", alignItems: "center", gap:1 }}>
        {isLoading && <Loading />}
        {imagePreview.length > 0 &&
          imagePreview.map((im, i) => (
            <>
              <Box sx={{ position: "relative", width: "50%" }}>
                <Button sx={{ position: "absolute", top: "45%", left: "45%" }}>
                  <DeleteIcon />
                </Button>
                <img src={im} alt="" className="w-100" key={i} />
              </Box>
            </>
          ))}
      </Box>
    </>
  );
}
ImageUpload.propTypes = {
  setFormData: PropTypes.func,
};
