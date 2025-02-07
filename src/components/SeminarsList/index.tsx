import React, { useEffect, useState } from "react";
import SeminarItem from "../SeminarItem";
import styles from "./SeminarsList.module.scss";

interface Seminar {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

const SeminarsList: React.FC = () => {
  const [seminars, setSeminars] = useState<Seminar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3001/seminars")
      .then((response) => response.json())
      .then((data) => {
        setSeminars(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching seminars:", error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.seminarList}>
      {seminars.map((seminar) => (
        <SeminarItem key={seminar.id} seminar={seminar} />
      ))}
    </div>
  );
};

export default SeminarsList;
