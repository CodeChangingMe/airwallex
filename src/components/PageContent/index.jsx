import React, { useState } from 'react';
import { Button } from "antd";
import styles from './index.module.scss';
import InviteModal from "../InviteModal";
import SuccessModal from "../SuccessModal";

const PageContent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const onClickInviteButton = () => {
    setModalVisible(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>A better way</div>
        <div className={styles.title}>to enjoy every day.</div>
        <div className={styles.describe}>
          Be the first to know when we launch.
        </div>

        <Button onClick={onClickInviteButton}>Request an invite</Button>
      </div>

      <InviteModal
        handleCancel={() => setModalVisible(false)}
        isModalVisible={modalVisible}
        openSuccessModal={() => setSuccessModalVisible(true)}
      />

      <SuccessModal
        isModalVisible={successModalVisible}
        handleCancel={() => setSuccessModalVisible(false)}
      />
    </div>
  );
};

export default PageContent;
