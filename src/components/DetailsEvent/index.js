import { memo } from "react";

import style from "./styles.module.scss";

const DetailsEvent = ({ title, place, date }) => {
  return (
    <div className={style.eventArea}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.place}>{place}</p>
      <p className={style.date}>{date}</p>
    </div>
  );
};

export default memo(DetailsEvent);
