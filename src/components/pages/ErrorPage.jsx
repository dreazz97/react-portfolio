import React from 'react';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but an error has occurred.</p>
      <button onClick={() => window.location.href = '/'}>
        Go back to homepage
      </button>
    </div>
  );
};

export default ErrorPage;