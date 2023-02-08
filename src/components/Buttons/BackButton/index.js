import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import style from "./styles.module.scss";

const BackButton = ({ size }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={style.button}>
      <IconButton
        className={style.btn}
        size={size}
        color="inherit"
        onClick={goBack}
      >
        <ArrowBack fontSize="large" />
      </IconButton>
    </div>
  );
};

export default memo(BackButton);
