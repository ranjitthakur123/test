
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Page Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback({ 
          error: this.state.error, 
          resetError: () => this.setState({ hasError: false, error: null })
        });
      }

      return (
        <div className="error-boundary">
          <div className="container text-center py-5">
            <h2>Oops! Something went wrong</h2>
            <p className="text-muted mb-4">We're having trouble loading this page.</p>
            <button 
              className="btn btn-primary"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
