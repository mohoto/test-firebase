import React from 'react';
import { Modal, Input, Form } from 'antd';

export default function ModalUpdate(props) {
    return (
      <Modal
      title="Basic Modal"
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      <Input placeholder="Basic usage" />
    </Modal>
    )
}
