import React from "react";
import styles from "./EditSeminarModal.module.scss";

interface Seminar {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

interface EditSeminarModalProps {
  seminar: Seminar;
  onClose: () => void;
}

const EditSeminarModal: React.FC<EditSeminarModalProps> = ({
  seminar,
  onClose,
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Edit Seminar</h2>
        <input type="text" defaultValue={seminar.title} />
        <textarea defaultValue={seminar.description} />
        <input type="date" defaultValue={seminar.date} />
        <input type="time" defaultValue={seminar.time} />
        <input type="text" defaultValue={seminar.photo} />
        <div className={styles.modalActions}>
          <button onClick={onClose}>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditSeminarModal;
