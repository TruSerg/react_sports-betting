import { memo } from "react";

import style from "./styles.module.scss";

const Modal = ({ title, handleClose }) => {
  return (
    <>
      <div className={style.overlay} onClick={handleClose} />
      <div className={style.modal}>
        <p className={style.title}>{title}</p>
      </div>
    </>
  );
};

export default memo(Modal);
