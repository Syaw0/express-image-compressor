/* eslint-disable react/prop-types */
import React from 'react';
import FallBack from './FallBack';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch() {
    // log to service
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return (
      <>
        {!isError && children}
        {isError && <FallBack />}
      </>
    );
  }
}

export default ErrorBoundary;
