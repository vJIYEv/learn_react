'use client';

import { useState, useRef } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const getMap = function() {
    if (!ref.current) {
      ref.current = new Map();
    }
    return ref.current;
  };

  return (
    <>
      <nav>
        <button onClick={() => {
          const map = getMap();
          let newIndex = 0;
          if (index < catList.length - 1) {
            newIndex = index + 1;
          }
          setIndex(newIndex);
          map.get(newIndex).scrollIntoView({
           behavior: 'smooth',
           block: 'nearest',
           inline: 'center'
          });
        }}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li 
              key={cat.id} 
              ref={(node)=>{
                const map = getMap();
                map.set(cat.id, node);                
              }
            }>
              <img
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}