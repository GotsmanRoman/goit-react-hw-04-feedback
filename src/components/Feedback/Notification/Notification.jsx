import React from 'react';
import { Message } from './Notification.module';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export { Notification };
