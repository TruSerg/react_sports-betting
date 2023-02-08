import { memo } from "react";

import style from "./styles.module.scss";

const Event = ({ title, date, handleDetails }) => {
  return (
    <li className={style.event} onClick={handleDetails}>
      <p className={style.eventTitle}>{title}</p>
      <p className={style.eventDate}>{date}</p>
    </li>
  );
};

export default memo(Event);
