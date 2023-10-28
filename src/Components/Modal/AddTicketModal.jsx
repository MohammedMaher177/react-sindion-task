import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import styles from "../AddTicket/addTicket.module.css";
import ImageUpload from "../ImageUpload/ImageUpload.jsx";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddTicketModal({ handleClose }) {
  const [formData, setFormData] = useState({});
  const validationSchema = yup.object({
    Subject: yup.string("Enter your Subject").required("Subject is required"),
    Description: yup
      .string("Enter your Description")
      .min(8, "Description should be of minimum 8 characters length"),
  });

  const formik = useFormik({
    initialValues: {
      Subject: "",
      from: "",
      to: "",
      Description: "",
    },
    onSubmit: handleSubmit,
  });
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Box className={styles.add_icon1} sx={{ alignSelf: "baseline" }}>
            <span className={styles.add_icon_nested}>
              <EditNoteIcon />
            </span>
          </Box>
          <span>
            <h4>Create Company Ticket </h4>
            <p>Creating a new ticket to be sent between company departments</p>
          </span>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Formik
            validationSchema={validationSchema}
            onSubmit={formik.handleSubmit}
          >
            {({ isSubmitting }) => (
              <>
                <TextField
                  fullWidth
                  id="Subject"
                  name="Subject"
                  label="Subject"
                  value={formik.values.Subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.Subject && Boolean(formik.errors.Subject)
                  }
                  helperText={formik.touched.Subject && formik.errors.Subject}
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  fullWidth
                  id="Description"
                  name="Description"
                  label="Description"
                  value={formik.values.Description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.Description &&
                    Boolean(formik.errors.Description)
                  }
                  helperText={
                    formik.touched.Description && formik.errors.Description
                  }
                  sx={{ marginBottom: 2 }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  <Box sx={{ width: "50%", position: "relative" }}>
                    <InputLabel id="from">From</InputLabel>
                    <Select
                      placeholder="Select Department"
                      labelId="from"
                      id="from"
                      label="from"
                      name="from"
                      onChange={formik.handleChange}
                      fullWidth
                      defaultValue="none"
                    >
                      <MenuItem value="none" disabled>
                        Select Department
                      </MenuItem>
                      <MenuItem value="NY">New York</MenuItem>
                      <MenuItem value="SF">San Francisco</MenuItem>
                      <MenuItem value="CH">Chicago</MenuItem>
                      <MenuItem value="OTHER">Other</MenuItem>
                    </Select>
                  </Box>
                  <Box sx={{ width: "50%", position: "relative" }}>
                    <InputLabel id="to">To</InputLabel>
                    <Select
                      labelId="to"
                      id="to"
                      label="to"
                      name="to"
                      onChange={formik.handleChange}
                      fullWidth
                      defaultValue="none"
                    >
                      <MenuItem value="none" disabled>
                        Select Department
                      </MenuItem>
                      <MenuItem value="NY">New York</MenuItem>
                      <MenuItem value="SF">San Francisco</MenuItem>
                      <MenuItem value="CH">Chicago</MenuItem>
                      <MenuItem value="OTHER">Other</MenuItem>
                    </Select>
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <ImageUpload setFormData={setFormData} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 2,
                    height: "45px",
                    gap: "20px",
                  }}
                >
                  <Button
                    onClick={handleClose}
                    sx={{
                      color: "#616363",
                      boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                      borderRadius: "8px",
                      border: "1px solid #1B6792",
                      width: "50%",
                      fontSize: "14px",
                      ":hover": {
                        backgroundColor: "#1B6792",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    color="primary"
                    variant="contained"
                    sx={{
                      width: "50%",
                      backgroundColor: "#1B6792",
                      color: "#FFFFFF",
                      boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                      fontSize: "14px",
                      borderRadius: "8px",
                      border: "1px solid #1B6792",
                      ":hover": {
                        backgroundColor: "#185b81",
                        color: "black",
                      },
                    }}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Create
                  </Button>
                </Box>
              </>
            )}
          </Formik>
        </form>
      </Box>
    </>
  );
}
