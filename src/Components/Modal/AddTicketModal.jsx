import {
  Box,
  Button,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "../AddTicket/addTicket.module.css";
import ImageUpload from "../ImageUpload/ImageUpload.jsx";
import { useState } from "react";
import { Textarea } from "../../Theme/ThemeProvider.js";
import { useDispatch } from "react-redux";
import { addTicket } from "../../Redux/Slices/TicketsSlice/TicketsSlice.js";

// eslint-disable-next-line react/prop-types
export default function AddTicketModal({ handleClose }) {
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    Subject: yup.string("Enter your Subject").required("Subject is required"),
    from: yup.string("Enter your from").required("from is required"),
    to: yup.string("Enter your to").required("to is required"),
    Description: yup
      .string("Enter your Description")
      .required("Description is required")
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
    isInitialValid: false,
    validationSchema,
  });
  function handleSubmit(values) {
    dispatch(addTicket(values));
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
        <form onSubmit={formik.handleSubmit} noValidate>
          <>
            <label className="mb-2" htmlFor="Subject">
              Subject*
            </label>
            <TextField
              onChange={formik.handleChange}
              error={formik.touched.Subject && Boolean(formik.errors.Subject)}
              // helperText={
              //   formik.touched.Subject ? formik.errors.Subject : null
              // }
              id="Subject"
              label="Subject"
              name="Subject"
              type="text"
              required
              placeholder="What is your Subject?"
              fullWidth
              value={formik.values.Subject}
              onBlur={formik.handleBlur}
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
                  error={formik.touched.from && Boolean(formik.errors.from)}
                  required
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
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  {formik.touched.from ? formik.errors.from : null}
                </FormHelperText>
              </Box>
              <Box sx={{ width: "50%", position: "relative" }}>
                <InputLabel id="to">To</InputLabel>
                <Select
                  error={formik.touched.to && Boolean(formik.errors.to)}
                  required
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
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  {formik.touched.to ? formik.errors.to : null}
                </FormHelperText>
              </Box>
            </Box>
            <label className="mb-2" htmlFor="Description">
              Description*
            </label>
            <Textarea
              error={
                formik.touched.Description && Boolean(formik.errors.Description)
              }
              // helperText={
              //   formik.touched.Description
              //     ? formik.errors.Description
              //     : null
              // }
              required
              // fullWidth
              id="Description"
              name="Description"
              label="Description"
              value={formik.values.Description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-label="minimum height"
              minRows={4}
              sx={{ width: "100%" }}
              placeholder={`e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints.`}
            />
            <FormHelperText sx={{ color: "#d32f2f", marginBottom: 2 }}>
              {formik.touched.Description ? formik.errors.Description : null}
            </FormHelperText>
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
                disabled={!(formik.dirty && formik.isValid)}
              >
                Create
              </Button>
            </Box>
          </>
        </form>
      </Box>
    </>
  );
}
