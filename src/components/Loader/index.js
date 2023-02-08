import { memo } from "react";
import { CircularProgress } from "@mui/material";

import style from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={style.loaderArea}>
      <CircularProgress className={style.loader} />
    </div>
  );
};

export default memo(Loader);
