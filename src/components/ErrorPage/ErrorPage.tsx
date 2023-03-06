import { useRouteError } from "react-router-dom";

import styles from "./styles/error.module.scss";

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className={styles.error}>
      <img src="/images/linkedin.png" alt="linkedin" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
