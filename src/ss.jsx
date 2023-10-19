import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    // Здесь вы можете выполнить дополнительную обработку ошибки, например, отправку ее на сервер для журналирования.
  }

  render() {
    if (this.state.hasError) {
      // Здесь вы можете отобразить запасной интерфейс или сообщение об ошибке.
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
