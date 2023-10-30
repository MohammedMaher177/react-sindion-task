import { FormControl, NativeSelect } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Days() {
const [value, setValue] = useState(dayjs("10/30/2023"));
  
  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 40,
          maxWidth: 100,
          display: "flex",
          marginBottom: 10,
        }}
      >
        <NativeSelect
          defaultValue="today"
          inputProps={{
            name: "day",
          }}
          IconComponent={CalendarMonthIcon}
        >
          <option value="today">Today</option>
          <option value="yesterday">yesterday</option>
          <option value="yesterday">yesterday</option>
        </NativeSelect>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DatePicker", "DatePicker"]}
          sx={{
            m: 1,
            minWidth: "180px",
            maxWidth: "200px",
            display: "flex",
            marginBottom: 10,
          }}
        >
          <DatePicker
            label="Uncontrolled picker"
            value={value}
            defaultValue={dayjs("10/30/2023")}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
