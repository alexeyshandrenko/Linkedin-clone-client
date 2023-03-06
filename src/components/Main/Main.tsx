import { FC, ReactNode } from "react";

import styles from "./styles/main.module.scss";

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
