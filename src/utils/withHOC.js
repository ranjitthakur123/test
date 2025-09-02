
import React, { Component, Suspense } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Error Boundary HOC
export const withErrorBoundary = (WrappedComponent, ErrorFallback) => {
  const WithErrorBoundaryComponent = (props) => (
    <ErrorBoundary fallback={ErrorFallback}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
  
  WithErrorBoundaryComponent.displayName = `withErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name})`;
  return WithErrorBoundaryComponent;
};

// Suspense HOC
export const withSuspense = (WrappedComponent, fallback = <div>Loading...</div>) => {
  const WithSuspenseComponent = (props) => (
    <Suspense fallback={fallback}>
      <WrappedComponent {...props} />
    </Suspense>
  );
  
  WithSuspenseComponent.displayName = `withSuspense(${WrappedComponent.displayName || WrappedComponent.name})`;
  return WithSuspenseComponent;
};

// Performance HOC
export const withPerformanceTracking = (WrappedComponent) => {
  class WithPerformanceComponent extends Component {
    componentDidMount() {
      if (process.env.NODE_ENV === 'development') {
        console.log(`${WrappedComponent.name} mounted`);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  
  WithPerformanceComponent.displayName = `withPerformanceTracking(${WrappedComponent.displayName || WrappedComponent.name})`;
  return WithPerformanceComponent;
};
