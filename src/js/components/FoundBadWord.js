import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { message: state.message };
};

const FoundBadWordMessage = ({ message }) => <h3>{message}</h3>;

const Message = connect(mapStateToProps)(FoundBadWordMessage);

export default Message;
