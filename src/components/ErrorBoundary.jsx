import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });

    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <p>Error</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
