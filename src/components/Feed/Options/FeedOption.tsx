import { FC } from "react";

import styles from "./styles/option.module.scss";

import { FeedOptionsProps } from "../../../types/types";

const FeedOption: FC<FeedOptionsProps> = ({ Icon, title, color }) => {
  return (
    <div className={styles.option}>
      <Icon style={{ color: color }} className={styles.option__icon} />
      <h3>{title}</h3>
    </div>
  );
};

export default FeedOption;
