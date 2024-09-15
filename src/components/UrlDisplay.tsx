import React from 'react';

interface UrlDisplayProps {
  shortUrl: string;
}

const UrlDisplay: React.FC<UrlDisplayProps> = ({ shortUrl }) => {
  return (
    <div className="mt-8">
      <p className="text-lg font-medium">Your shortened URL:</p>
      <a
        href={shortUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {shortUrl}
      </a>
    </div>
  );
};

export default UrlDisplay;
