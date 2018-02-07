import css from './style.scss';
import tachyons from 'tachyons';
import content from './cs-data';

const render = (html = '') => {
  const elem = document.createElement('div');
  elem.innerHTML = html;
  document.body.appendChild(elem);
};

const TYPES = {
  string: 0,
  link: 1,
  array: 2,
  null: 3
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

const Header = html`
  <header>
    <h1 class="ma0">${content.name}</h1>
    <div class="b">${content.title}</div>
    <div>${content.email}</div>
    <div class="flex">
      ${content.webPresence.map(({ desc, link }) => html`
        <div class="mr3">
          <a href="${link}">${desc}</a>
        </div>
      `)}
    </div>
  </header>
`;

const Style = (css = '') => html`
  <style>${css}</style>
`;

const Section = (title, content) => {
  const SectionTitle = title
    ? html`
      <h3 class="SectionTitle ttu f5 tracked">
        ${title}
      </h3>
    `
    : '';
  return html`
    <section class="Section">
      ${SectionTitle}
      ${content}
    </section>
  `;
};

const WorkExperience = () => {
  const exp = content.experience.map(({
    company,
    website,
    date,
    role,
    summary = '',
    responsibilities
  }) => {
    const ResponsibilitiesList = responsibilities.length
      ? html`
        <ul>
          ${responsibilities.map(r => html`
            <li>${r}</li>
          `)}
        </ul>
      `
      : '';
    const WorkDates = html`
      <time>${date.start}</time>
      <span>-</span>
      <time>${date.end}</time>
    `;
    return html`
      <ul class="ExperienceMeta list pl0">
        <li>
          <a href="${website}" class="CompanyName f4">
            <strong>${company}</strong>
          </a>
        </li>
        <li>${WorkDates}</li>
        <li>${role}</li>
      </ul>
      <p>${summary}</p>
      ${ResponsibilitiesList}
    `;
  });
  return exp;
};

const Education = () => Section(
  'education',
  html`
<ul class="list pl0">
  ${content.education.map(({
    school,
    years: [yearStart, yearEnd],
    education,
  }) => html`
    <li class="mb2">
      <div class="f4 b">${school}</div>
      <div>${education}</div>
      <time>${yearStart}</time>
      <span>-</span>
      <time>${yearEnd}</time>
    </li>
  `)}
</ul>
  `);

const htmlContent = html`
  ${Style(tachyons)}
  ${Style(css)}
  ${Section(
    null,
    Header
  )}
  ${Section(
    null,
    html`<p>${content.summary}</p>`
  )}
  ${Section(
    'work experience',
    WorkExperience()
  )}
  ${Education()}
`;

render(htmlContent);
