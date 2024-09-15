import React, { useState } from 'react';
import UrlForm from './components/UrlForm';
import UrlDisplay from './components/UrlDisplay';

const App: React.FC = () => {
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">URL Shortener</h1>
      <UrlForm setShortUrl={setShortUrl} />
      {shortUrl && <UrlDisplay shortUrl={shortUrl} />}
    </div>
  );
};

export default App;
