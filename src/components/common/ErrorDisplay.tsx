// src/components/common/ErrorDisplay.tsx
import React from 'react';

export interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="error-display">
      <p className="error-message">{message}</p>
    </div>
  );
};

export default ErrorDisplay;