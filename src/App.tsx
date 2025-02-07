import React from "react";
import SeminarList from "./components/SeminarsList";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <SeminarList />
    </div>
  );
};

export default App;
