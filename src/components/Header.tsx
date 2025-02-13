import { ContactInfo, WebPresence } from '../data/cv-data'
import { Spc } from './Space'

interface HeaderProps {
  name: string
  title: string
  contactInfo: ContactInfo
  webPresence: WebPresence[]
}

export function Header({
  name,
  title,
  contactInfo,
  webPresence
}: HeaderProps) {
  return (
    <header className="flex justify-between">
      <div>
        <h1 className="full-name text-lg font-bold">
          {name}
        </h1>
        <div className="headline italic">{title}</div>
      </div>
      <ul className="profile-meta list pa0 ma0">
        <li className="flex flex-row justify-end">
          <span className="dib tr text-slate-600">
            web:
            <Spc />
          </span>
          <div className="flex">
            {webPresence.map(({ desc, link }, index) => (
              <div key={index} className="comma-seperated">
                <a href={link}>{desc}</a>
              </div>
            ))}
          </div>
        </li>
        <li className="flex justify-end">
          <span className="dib tr text-slate-600">
            email:
            <Spc />
          </span>
          <a href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>
        </li>
      </ul>
    </header>
  )
}
