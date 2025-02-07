import React, { useState } from "react";
import EditSeminarModal from "../EditSeminarModal";
import styles from "./SeminarItem.module.scss";

interface Seminar {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

interface SeminarItemProps {
  seminar: Seminar;
}

const SeminarItem: React.FC<SeminarItemProps> = ({ seminar }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this seminar?")) {
      // Логика удаления
    }
  };

  return (
    <div className={styles.seminarItem}>
      <div>
        <img src={seminar.photo} alt={seminar.title} className={styles.image} />
        <h2 className={styles.title}>{seminar.title}</h2>
        <p className={styles.description}>{seminar.description}</p>
        <p className={styles.date}>Date: {seminar.date}</p>
        <p className={styles.time}>Time: {seminar.time}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {isEditing && (
        <EditSeminarModal
          seminar={seminar}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default SeminarItem;
