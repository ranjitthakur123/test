
import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { setError, clearError } from '@/store/store';

class ErrorBoundaryClass extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
      retryCount: this.state.retryCount + 1
    });

    // Log error to Redux store
    this.props.setError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error);
      console.error('Error info:', errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
    this.props.clearError();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback({
          error: this.state.error,
          errorInfo: this.state.errorInfo,
          resetError: this.handleRetry,
          retryCount: this.state.retryCount
        });
      }

      // Default fallback UI
      return (
        <div className="error-boundary-fallback">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto text-center py-5">
                <h2 className="f-32 f-700 text-danger mb-3">
                  Something went wrong
                </h2>
                <p className="f-16 f-400 gray mb-4">
                  We're sorry, but something unexpected happened. Please try again.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <button 
                    className="btn btn-primary"
                    onClick={this.handleRetry}
                  >
                    Try Again
                  </button>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => window.location.reload()}
                  >
                    Reload Page
                  </button>
                </div>
                {process.env.NODE_ENV === 'development' && (
                  <details className="mt-4 text-start">
                    <summary className="cursor-pointer">Error Details (Dev Mode)</summary>
                    <pre className="text-danger small mt-2">
                      {this.state.error && this.state.error.toString()}
                    </pre>
                  </details>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Connect to Redux
const mapDispatchToProps = {
  setError,
  clearError
};

const ConnectedErrorBoundary = connect(null, mapDispatchToProps)(ErrorBoundaryClass);

// Export as both class and functional component wrapper
export const ErrorBoundary = memo((props) => (
  <ConnectedErrorBoundary {...props} />
));

ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;
