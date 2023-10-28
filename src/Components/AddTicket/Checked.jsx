import { Box, FormControlLabel, Radio } from "@mui/material";
import styles from "./addTicket.module.css";

// eslint-disable-next-line react/prop-types
export default function Checked({ icon, title, titleP, value, checkedVal }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 1,
        marginBottom: 2,
        border: `3px solid ${checkedVal === value ? "#1B6792" : "transparent"}`,
        borderRadius:"8PX"
      }}
    >
      <Box className={styles.add_icon1} sx={{ alignSelf: "baseline" }}>
        <span className={styles.add_icon_nested}>{icon}</span>
      </Box>
      <FormControlLabel
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: "2",
        }}
        value={value}
        control={<Radio />}
        label={
          <>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.titleP}>{titleP}</p>
          </>
        }
        labelPlacement="start"
      />
    </Box>
  );
}
