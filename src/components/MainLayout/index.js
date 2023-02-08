import { memo } from "react";

import style from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return <div className={style.mainWrapper}>{children}</div>;
};

export default memo(MainLayout);
