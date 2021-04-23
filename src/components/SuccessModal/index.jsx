import React from 'react';
import { Button, Modal } from "antd";
import styles from "./index.module.scss";

const SuccessModal = ({ isModalVisible, handleCancel }) => {
  return (
    <Modal
      wrapClassName={styles.container}
      style={{ top: '25%' }}
      title={<div className={styles.title}>All done!</div>}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <div className={styles.contentContainer}>
        <div className={styles.content}>You will be one of the first to experience</div>
        <div className={styles.content}>Broccoli & co. when we launch.</div>
      </div>
      <Button
        className={styles.sendButton}
        onClick={() => handleCancel()}
      >Ok</Button>
    </Modal>
  )
};

export default SuccessModal;
