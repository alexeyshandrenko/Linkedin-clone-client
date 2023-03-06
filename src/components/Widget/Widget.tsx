import styles from "./styles/widget.module.scss";

import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widget = () => {
  const article = (title: string, subtitle: string) => {
    return (
      <div className={styles.article}>
        <div className={styles.article__left}>
          <FiberManualRecordIcon />
        </div>
        <div className={styles.article__right}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.widget}>
      <div className={styles.widget__top}>
        <h4>LinkedIn News</h4>
        <InfoIcon />
      </div>
      {article("Breaking News!", "Memes is everywhere!")}
      {article("Is redux too good?", "post - 123 reads")}
      {article("Breaking News!", "Memes is everywhere!")}
      {article("Is redux too good?", "post - 123 reads")}
      {article("Breaking News!", "Memes is everywhere!")}
      {article("Is redux too good?", "post - 123 reads")}
    </div>
  );
};

export default Widget;
