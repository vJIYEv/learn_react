'use client';

import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  let textRef = useRef(text);

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
          textRef.current = e.target.value;
        }}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
