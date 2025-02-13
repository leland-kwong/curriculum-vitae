import { Education as EducationType } from '../data/cv-data'

interface EducationProps {
  education: EducationType[]
}

export function Education({ education }: EducationProps) {
  return (
    <ul className="list pl0">
      {education.map((edu, index) => (
        <li key={index} className="mb4">
          <div className="ttc font-bold">{edu.school}</div>
          <div className="italic">{edu.degree}</div>
          {edu.years && (
            <div>
              <time>{edu.years[0]}</time>
              <span>-</span>
              <time>{edu.years[1]}</time>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

