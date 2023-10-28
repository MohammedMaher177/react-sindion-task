import { FormControl, NativeSelect } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export default function Days() {
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
      {/* <div className=" position-relative">
        <div className={styles.solved}></div>
        <div className={styles.over}>
          <div className={styles.solved_text}>
            <div>Solved</div>
            <div className={styles.solved_text_0}>0</div>
            <div className={styles.solved_text_out}>Out of 0</div>
          </div>
        </div>
        <div className={styles.text}></div>
      </div> */}
    </div>
  );
}
