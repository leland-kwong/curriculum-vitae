import React from 'react';

interface InterestsProps {
  interests: string[];
}

export function Interests({ interests }: InterestsProps) {
  return (
    <ul className="list pl0 flex flex-wrap">
      {interests.map((interest, index) => (
        <li key={index} className="Tag" style={{
          background: 'rgba(158, 11, 11, 0.25)'
        }}>
          {interest}
        </li>
      ))}
    </ul>
  );
}