import { memo } from "react";
import { Button } from "@mui/material";

import style from "./styles.module.scss";

const OrderButton = ({ title, value, handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      className={style.eventButton}
      disabled={value}
    >
      {title}
    </Button>
  );
};

export default memo(OrderButton);
