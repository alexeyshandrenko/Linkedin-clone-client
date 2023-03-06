import { Avatar } from "@mui/material";
import { FC } from "react";

import { Link } from "react-router-dom";

import styles from "./styles/option.module.scss";

import { HeaderOptionProps } from "../../../types/types";

const HeaderOption: FC<HeaderOptionProps> = ({ Icon, avatar, title }) => {
  return (
    <Link to="/app" className={styles.option}>
      {Icon && <Icon className={styles.option__icon} />}
      {avatar && <Avatar className={styles.option__icon} src={avatar} />}
      <h3 className={styles.option__title}>{title}</h3>
    </Link>
  );
};

export default HeaderOption;
