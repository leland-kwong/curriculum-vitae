interface InterestsProps {
  interests: string[]
}

export function Interests({ interests }: InterestsProps) {
  return (
    <ul className="list pl0 flex flex-wrap">
      {interests.map((interest, index) => (
        <li
          key={index}
          className="Tag"
          style={{
            background: 'var(--color-primary)'
          }}
        >
          {interest}
        </li>
      ))}
    </ul>
  )
}

