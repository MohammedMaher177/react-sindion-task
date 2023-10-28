import { Typography } from "@mui/material";

export default function TypographyComp({ title }) {
  console.log(title);
  return (
    <>
      {Object.keys(title).forEach((el) => {
        console.log(el.valueOf());
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
          </Typography>
        );
      })}
    </>
  );
}
