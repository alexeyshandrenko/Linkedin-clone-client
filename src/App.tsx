import { ReactNode, FC } from "react";

interface AppProps {
  children: ReactNode;
}

const App: FC<AppProps> = ({ children }) => {
  return <div className="app">{children}</div>;
};

export default App;
