import React, { useState } from 'react';
import { Button, Form, Input, Modal } from "antd";
import styles from './index.module.scss';
import axios from '../../services/axiosFetch';

const layout = {
  wrapperCol: {
    span: 24,
  },
};

const InviteModal = ({ isModalVisible, handleCancel, openSuccessModal }) => {
  const [loading, setLoading] = useState(false);
  const [requestErrorMessage, setRequestErrorMessage] = useState(null);

  const onFinish = (values) => {
    setRequestErrorMessage(null);

    const { name, email } = values;
    setLoading(true);
    axios.post('/prod/fake-auth', {
      name,
      email,
    }).then(() => {
      handleCancel();
      openSuccessModal();
    }).catch(res => {
      setRequestErrorMessage(res.response.data?.errorMessage);
    }).finally(() => {
      setLoading(false);
    })
  };

  return (
    <Modal
      wrapClassName={styles.container}
      style={{ top: '25%' }}
      title={<div className={styles.title}>Request an invite</div>}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
    >
      <Form
        {...layout}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your full name!',
            },
            {
              min: 3,
              // message: ''
              message: '\'full name\' must be at least 3 characters'
            }
          ]}
        >
          <Input placeholder="Full name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'email incorrect format'
            }
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="confirmEmail"
          dependencies={['email']}
          rules={[
            {
              required: true,
              message: 'Please input your confirm email',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('email') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two email that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input placeholder="Confirm email" />
        </Form.Item>

        <Form.Item
          help={requestErrorMessage || null}
          validateStatus="error"
          className={styles.submitFormItem}
        >
          <Button
            htmlType="submit"
            className={styles.sendButton}
            disabled={loading}
            loading={loading}
          >
            {loading ? 'Sending, please wait...' : 'Send'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InviteModal;
