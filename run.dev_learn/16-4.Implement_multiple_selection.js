'use client';

import { useState } from 'react';

const letters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
  }, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
  }, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
  }];
  
function Letter({
    letter,
    onToggle,
    isSelected,
  }) {
    return (
      <li className={
        isSelected ? 'selected' : ''
      }>
        <label>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => {
              onToggle(letter.id);
            }}
          />
          {letter.subject}
        </label>
      </li>
    )
  }  

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    if (selectedIds.includes(toggledId)) {
        setSelectedIds(selectedIds.filter(selectedId => selectedId !== toggledId));
    } else {
        setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
