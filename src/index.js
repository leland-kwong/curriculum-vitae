import css from './style.scss';
import content from './cv-data';
import marked from 'marked';
import trimIndentation from './trim-indentation';

const TYPES = {
  string: 0,
  array: 1,
  null: 2
};

const valueType = (v) => {
  if (typeof v === 'undefined') {
    return TYPES.null;
  }
  if (Array.isArray(v)) {
    return TYPES.array;
  }
  return TYPES.string;
};

const html = (strings, ...vals) => {
  return strings.map((s, i) => {
    const v = vals[i];
    const type = valueType(v);
    const normalizedString = !s.trim() ? '' : s;
    switch(type) {
      case TYPES.null:
        return normalizedString + '';
      case TYPES.array:
        return normalizedString + v.join('');
      default:
        return normalizedString + v;
    }
  }).join('');
};

const CVSource = html /*html*/`
  <a
    href="https://github.com/Leland-Kwong/curriculum-vitae"
  >
    &lt;view source&gt;
  </a>
`;

const Link = ({ href, content }) => {
  const isEmail = href.indexOf('@') !== -1;
  return html /*html*/`
    <a href="${isEmail ? 'mailto:' : ((href.indexOf('http') === -1) ? 'https://' : '')}${href}">
      ${content}
    </a>
  `;
};

const Header = (content) => html /*html*/`
  <header class="flex justify-between">
    <div>
      <h1 class="full-name ma0 mb1 f3">${content.name}</h1>
      <div class="headline i ttc">${content.title}</div>
      <div class="flex">
        ${content.webPresence.map(({ desc, link }) => html /*html*/`
          <div class="comma-seperated">
            <a href="${link}">${desc}</a>
          </div>
        `)}
      </div>
      <div>${CVSource}</div>
    </div>
    <ul class="profile-meta list pa0 ma0">
      <li>
        <span class="w4-ns dib tr gray">email: </span>
        ${Link({
          href: content.contactInfo.email,
          content: content.contactInfo.email
        })}
      </li>
      <li>
        <span class="w4-ns dib tr gray">web: </span>
        ${Link({
          href: content.website,
          content: content.website
        })}
      </li>
      <li>
        <span class="w4-ns dib tr gray">phone: </span>
        <span>${content.contactInfo.phone}</span>
      </li>
    </ul>
  </header>
`;

const Style = (css = '') => html /*html*/`
  <style>${css}</style>
`;

const Section = (title, content) => {
  const SectionTitle = title
    ? html /*html*/`
      <h3 class="SectionTitle Section_${title} ttu f5 normal tracked">
        ${title}
      </h3>
    `
    : '';
  return html /*html*/`
    <section class="Section">
      ${SectionTitle}
      ${content}
    </section>
  `;
};

const WorkDatesSummary = ({ start, end }) => {
  const [m1, y1] = start.split('/');
  const [m2, y2] = end.split('/');
  const d1 = new Date(`${m1}/01/${y1}`);
  const d2 = new Date(`${m2}/01/${y2}`);
  const totalMonths = Math.round(
    (d2 - d1) / 1000 / 60 / 60 / 24 / 30
  );
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yearText = years ? years + ' yr ' : '';
  const monthText = months ? months + ' mos' : '';
  return `${yearText}${monthText}`;
};

const WorkDates = (date) => {
  const { start, end } = date;

  const DateSummary = end
    ? html /*html*/`
      <span> ∙ </span>
      <span>${WorkDatesSummary({ start, end })}</span>
    `
    : '';
  return html /*html*/`
    <div>
      <time>${start}</time>
      <span>-</span>
      <time>${end || 'present'}</time>
      ${DateSummary}
    </div>
  `;
};

const WorkExperience = (cvExperienceData) => {
  const exp = cvExperienceData.map(({
    company,
    website,
    date,
    role,
    summary = '',
    techStack = [],
    responsibilities = []
  }) => {
    const ResponsibilitiesList = responsibilities.length
      ? html /*html*/`
        <ul>
          ${responsibilities.map(r => html /*html*/`
            <li>${r}</li>
          `)}
        </ul>
      `
      : '';


    const TechStack = html /*html*/`
      <div class="TechStack">
        <div class="ttu f7">
          Tech Stack
        </div>
        <ul class="flex flex-wrap list pl0 mt1">
          ${techStack.map(stack => html /*html*/`
            <li class="Tag bg-light-gray">${stack}</li>
          `)}
        </ul>
      </div>
    `;
    const CompanyNameClasses = 'CompanyName color-inherit';
    const CompanyName = website
      ? html /*html*/`
        <a href="${website}" class="${CompanyNameClasses}">
          ${company}
        </a>
      `
      : html /*html*/`
        <div class="${CompanyNameClasses}">
          ${company}
        </div>
      `;
    return html /*html*/`
      <div class="ExperienceBlock ma4 mh0">
        <ul class="ExperienceMeta list pl0">
          <li class="WorkRole ttc b f5">${role}</li>
          <li>${CompanyName}</li>
          <li class="work-date gray">${WorkDates(date)}</li>
        </ul>
        ${TechStack}
        <div>${marked(
          trimIndentation(summary)
        )}</div>
        ${ResponsibilitiesList}
      </div>
    `;
  });
  return exp;
};

const Education = () => Section(
  'education',
  html /*html*/`
<ul class="list pl0">
  ${content.education.map(({
    school,
    degree,
    years: [yearStart, yearEnd],
    education,
  }) => {
    return html /*html*/`
      <li class="mb4">
        <div class="ttc f5 b">${school}</div>
        <div class="i">${degree}</div>
        <div>${education}</div>
        <div>
          <time>${yearStart}</time>
          <span>-</span>
          <time>${yearEnd}</time>
        </div>
      </li>
    `;
  })}
</ul>
`);

const OtherInterests = (items = []) => html /*html*/`
  <ul class="list pl0 flex flex-wrap">
    ${items.map(item => html /*html*/`
      <li class="Tag bg-washed-red">${item}</li>
    `)}
  </ul>
`;

const htmlContent = html`
  ${Style(css)}
  ${Section(
    null,
    Header(content)
  )}
  ${Section(
    null,
    html /*html*/`<p>${content.summary}</p>`
  )}
  ${Section(
    'experience',
    WorkExperience(content.experience)
  )}
  ${Section(
    'interests & hobbies',
    OtherInterests(content.interestsAndHobbies)
  )}
  ${Education()}
`;

const render = (html = '') => {
  const elem = document.createElement('div');
  elem.innerHTML = html;
  document.body.appendChild(elem);
};

render(htmlContent);
