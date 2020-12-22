import React, { ErrorInfo } from 'react';
import './ErrorBoundary.css';

class IProps {
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Something went wrong');
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error-message">Oops, something went wrong...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
