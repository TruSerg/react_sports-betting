import { memo } from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

import style from "./styles.module.scss";

const BasicSelect = ({ value, label, onChange }) => {
  return (
    <FormControl className={style.formControl} fullWidth variant="outlined">
      <InputLabel className={style.label} id="demo-simple-select-label">
        Выбор ставки
      </InputLabel>
      <Select
        className={style.select}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        value={value}
        onChange={onChange}
      >
        <MenuItem className={style.item} value={"На победу хозяев"}>
          На победу хозяев
        </MenuItem>
        <MenuItem className={style.item} value={"На ничью"}>
          На ничью
        </MenuItem>
        <MenuItem className={style.item} value={"На победу гостей"}>
          На победу гостей
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default memo(BasicSelect);
