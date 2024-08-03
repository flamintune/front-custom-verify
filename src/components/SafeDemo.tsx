'use client'
import { useState } from 'react';

export default function XssDemo() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = () => {
    console.log(input)
    setOutput(input);
  };

  return (
    <div className="card">
      <h2>XSS Demo</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter some text (try <script>alert('XSS')</script>)"
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        Output: <span dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
}