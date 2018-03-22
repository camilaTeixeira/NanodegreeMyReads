import React from 'react';
import { Alert } from 'antd';


const Message = () => (
  <div>
    <Alert
      description="Nenhm resultado econtrado!"
      type="warning"
      showIcon
    />
  </div>
);

export default Message;
