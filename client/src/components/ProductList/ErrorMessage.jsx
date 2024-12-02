import React from 'react';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center p-4 bg-red-50 rounded-lg">
      <p className="text-red-600">
        {message || 'Something went wrong. Please try again later.'}
      </p>
    </div>
  );
};