import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const goto = useNavigate();
  return (
    <div style={{ padding: "1rem" }}>
      <p>Not Found 👮‍♀️</p>
      <button onClick={() => goto(-1)}>go back</button>
    </div>
  );
}
