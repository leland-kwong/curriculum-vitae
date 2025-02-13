import React from 'react';
import { Experience as ExperienceType } from '../data/cv-data';
import { renderMarkdown } from '../utils/markdown';

interface WorkDatesProps {
  start: string;
  end?: string;
}

function WorkDatesSummary({ start, end }: WorkDatesProps) {
  if (!end) return null;
  
  const [m1, y1] = start.split('/');
  const [m2, y2] = end.split('/');
  const d1 = new Date(`${m1}/01/${y1}`);
  const d2 = new Date(`${m2}/01/${y2}`);
  const totalMonths = Math.round((d2.getTime() - d1.getTime()) / 1000 / 60 / 60 / 24 / 30);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yearText = years ? `${years} yr ` : '';
  const monthText = months ? `${months} mos` : '';
  return `${yearText}${monthText}`;
}

function WorkDates({ start, end }: WorkDatesProps) {
  const summary = end ? (
    <>
      <span> ∙ </span>
      <span>{WorkDatesSummary({ start, end })}</span>
    </>
  ) : null;

  return (
    <div>
      <time>{start}</time>
      <span>-</span>
      <time>{end || 'present'}</time>
      {summary}
    </div>
  );
}

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <>
      {experiences.map((exp, index) => (
        <div key={index} className="ExperienceBlock ma4 mh0 mb-12">
          <ul className="ExperienceMeta list pl0">
            <li className="WorkRole ttc font-bold text-lg">{exp.role}</li>
            <li>
              {exp.website ? (
                <a href={exp.website} className="CompanyName color-inherit">
                  {exp.company}
                </a>
              ) : (
                <div className="CompanyName color-inherit">{exp.company}</div>
              )}
            </li>
            {exp.data && <li className="work-date gray">
              <WorkDates start={exp.date.start} end={exp.date.end} />
            </li>}
          </ul>
          
          {exp.techStack && exp.techStack.length > 0 && (
            <div className="TechStack">
              <div className="ttu uppercase mt-4 text-sm">Tech Stack</div>
              <ul className="flex flex-wrap list pl0 mt-1">
                {exp.techStack.map((tech, techIndex) => (
                  <li key={techIndex} className="Tag bg-gray-200">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {exp.summary && (
            <div 
              className="prose max-w-none mt-4"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(exp.summary) }} 
            />
          )}
          
          {exp.responsibilities && exp.responsibilities.length > 0 && (
            <ul>
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}