import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function UserIcon({ name }) {
  const shapeStyles = { bgcolor: "primary.main", width: 40, height: 40 };
  const shapeCircleStyles = { borderRadius: "50%" };
  const circle = (
    <Box
      component="span"
      sx={{
        ...shapeStyles,
        ...shapeCircleStyles,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#68005E"
      }}
    >
      {name.slice(0, 1)}
    </Box>
  );
  return (
    <Box
      component="span"
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      <Stack spacing={3} direction="row">
        {circle}
      </Stack>
      <Typography component="span">{name}</Typography>
    </Box>
  );
}

UserIcon.propTypes = {
  name: PropTypes.string,
};
