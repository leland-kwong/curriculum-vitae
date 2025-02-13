import { ReactElement } from 'react'
import { Experience as ExperienceType } from '../data/cv-data'
import { renderMarkdown } from '../utils/markdown'
import { Spc } from './Space'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiBackstage,
  SiDocker,
  SiElasticsearch,
  SiPostgresql,
  SiAmazondynamodb,
  SiVuedotjs,
  SiGraphql,
  SiSass,
  SiLua,
  SiExpress,
  SiPostcss,
  SiJest,
  SiWebpack,
  SiTypescript,
  SiMongodb,
  SiBem,
  SiFigma,
  SiReactquery,
  SiMui,
  SiMockserviceworker,
  SiHaxe
} from 'react-icons/si'

interface WorkDatesProps {
  start: string
  end?: string
}

function WorkDatesSummary({ start, end }: WorkDatesProps) {
  if (!end) return null

  const [m1, y1] = start.split('/')
  const [m2, y2] = end.split('/')
  const d1 = new Date(`${m1}/01/${y1}`)
  const d2 = new Date(`${m2}/01/${y2}`)
  const totalMonths = Math.round(
    (d2.getTime() - d1.getTime()) / 1000 / 60 / 60 / 24 / 30
  )
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const yearText = years
    ? `${years} yr${years > 1 ? 's' : ''} `
    : ''
  const monthText = months ? `${months} mos` : ''
  return `${yearText}${monthText}`
}

function WorkDates({ start, end }: WorkDatesProps) {
  const summary = end ? (
    <>
      <Spc />·<Spc />
      <span>{WorkDatesSummary({ start, end })}</span>
    </>
  ) : null

  return (
    <div>
      <time>{start}</time>
      <span>
        <Spc />-<Spc />
      </span>
      <time>{end || 'present'}</time>
      {summary}
    </div>
  )
}

interface ExperienceProps {
  experiences: ExperienceType[]
}

const techStackMap: Record<string, ReactElement> = {
  react: <SiReact />,
  'next.js': <SiNextdotjs />,
  'node.js': <SiNodedotjs />,
  'tailwind css': <SiTailwindcss />,
  backstage: <SiBackstage />,
  docker: <SiDocker />,
  elasticsearch: <SiElasticsearch />,
  postgresql: <SiPostgresql />,
  dynamodb: <SiAmazondynamodb />,
  'vue.js': <SiVuedotjs />,
  graphql: <SiGraphql />,
  sass: <SiSass />,
  lua: <SiLua />,
  'express.js': <SiExpress />,
  postcss: <SiPostcss />,
  jest: <SiJest />,
  webpack: <SiWebpack />,
  typescript: <SiTypescript />,
  mongodb: <SiMongodb />,
  bem: <SiBem />,
  figma: <SiFigma />,
  'react query': <SiReactquery />,
  'material-ui': <SiMui />,
  'mock service worker': <SiMockserviceworker />,
  haxe: <SiHaxe />
}

function getTechStackIcon(tech: string) {
  return techStackMap[tech.toLowerCase()]
}

export function Experience({
  experiences
}: ExperienceProps) {
  return (
    <>
      {experiences.map((exp, index) => {
        const company = exp.website ? (
          <a
            href={exp.website}
            className="CompanyName color-inherit"
          >
            {exp.company}
          </a>
        ) : (
          <div className="CompanyName color-inherit">
            {exp.company}
          </div>
        )
        return (
          <div
            key={index}
            className="ExperienceBlock ma4 mh0 mb-12"
          >
            <ul className="ExperienceMeta list pl0">
              <li className="WorkRole ttc font-bold text-lg">
                {exp.role}
              </li>
              <li>{company}</li>
              {exp.date && (
                <li className="work-date text-slate-600">
                  <WorkDates
                    start={exp.date.start}
                    end={exp.date.end}
                  />
                </li>
              )}
            </ul>

            {exp.summary && (
              <div
                className="max-w-none mt-4"
                dangerouslySetInnerHTML={{
                  __html: renderMarkdown(exp.summary)
                }}
              />
            )}

            {exp.techStack && exp.techStack.length > 0 && (
              <div className="TechStack">
                <div className="ttu mt-4">Tools Used:</div>
                <ul className="flex flex-wrap list pl0 mt-1">
                  {exp.techStack.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="Tag flex bg-gray-800 text-slate-200 items-center"
                    >
                      <div>{tech}</div>
                      <div className="ml-2">
                        {getTechStackIcon(tech)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exp.responsibilities &&
              exp.responsibilities.length > 0 && (
                <ul>
                  {exp.responsibilities.map(
                    (resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    )
                  )}
                </ul>
              )}
          </div>
        )
      })}
    </>
  )
}

