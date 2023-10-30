import PropTypes from "prop-types";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import styles from "./imageUpload.module.css";
import { useState } from "react";
import { VisuallyHiddenInput } from "../../Theme/ThemeProvider.js";
import { Box, Typography } from "@mui/material";
import Loading from "../Loading/Loading.jsx";
import DeleteIcon from "../Icons/DeleteIcon.jsx";
export default function ImageUpload({ setFormData }) {
  const [image, setImage] = useState([]);
  const [isLoading, setloading] = useState(false);

  const validationImage = (e) => {
    setloading(true);
    const imageFile = e.target.files[0];

    setFormData(image);
    setImage((prevFormData) => [...prevFormData, imageFile]);

    setloading(false);
  };

  const removeItem = (i) => {

    setImage([...image.splice(i, 1)]);
  };
  return (
    <>
      {image.length < 2 && (
        <>
          <label htmlFor="attach-file" className="mb-2">
            Attach Photo{" "}
          </label>
          <Button
            sx={{
              color: "#475467",
              border: "1px dashed #ced6dd",
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
            <VisuallyHiddenInput
              type="image"
              accept="image/*"
              id="attach-file"
            />
          </Button>
        </>
      )}

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {isLoading && <Loading />}
        {image.length > 0 &&
          image.map((im, i) => (
            <>
              <Box
                sx={{
                  position: "relative",
                  width: "50%",
                  border: "2px solid #1B6792",
                  height: "80px",
                  color: "#475467",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  borderRadius: "8px",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={URL.createObjectURL(im)}
                  alt=""
                  className="w-25"
                  key={i}
                />
                <Typography>
                  {image[i]?.name?.slice(0, 10)}....
                  <br />
                  {Math.floor(image[i]?.size / 1000)}KB
                </Typography>
                <Button onClick={() => removeItem(i)}>
                  <DeleteIcon fill="#475467" />
                </Button>
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
