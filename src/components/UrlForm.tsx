import React, { useState } from 'react';

interface UrlFormProps {
  setShortUrl: (url: string) => void;
}

const UrlForm: React.FC<UrlFormProps> = ({ setShortUrl }) => {
  const [longUrl, setLongUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:7000/api/url/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <input
        type="url"
        placeholder="Enter your long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Shorten URL
      </button>
    </form>
  );
};

export default UrlForm;
