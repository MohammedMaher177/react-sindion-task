import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function TypographyComp({ title }) {
  return (
    <>
      {Object.keys(title).forEach((el) => {
        return (
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "400",
              letterSpacing: "0.25px",
              color: "#616363",
            }}
            
          >
            {el.valueOf()}
            moh
          </Typography>
        );
      })}
    </>
  );
}
