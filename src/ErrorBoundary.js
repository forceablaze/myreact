import React from 'react';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error);
    console.log(info);
  }

  render() {
    if(this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    console.log('hello');
    return this.props.children;
  }
}

export default ErrorBoundary;
