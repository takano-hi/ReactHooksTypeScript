import React from 'react';

const LoadingComponent: React.FC = () => <p>Loading...</p>;

type WithLoading = <Props = {}>(Component: React.FC<Props>) => React.FC<Props>;

const withLoading: WithLoading = Component => props => (
  <React.Suspense fallback={<LoadingComponent />}>
    <Component {...props} />
  </React.Suspense>
);

export default withLoading;
