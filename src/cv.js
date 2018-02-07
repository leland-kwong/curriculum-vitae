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
    <div class="flex items-baseline">
      <h1 class="ma0 f3">${content.name}</h1>
      <a
        href="https://github.com/Leland-Kwong/curriculum-vitae"
        class="ml4"
      >
        &lt;resume source&gt;
      </a>
    </div>
    <div class="f4">${content.title}</div>
    <div>
      <a href="mailto:${content.email}">${content.email}</a>
    </div>
    <div class="flex">
      ${content.webPresence.map(({ desc, link }) => html`
        <div class="comma-seperated">
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
    techStack = [],
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

    const { start, end } = date;
    const [m1, y1] = start.split('/');
    const [m2, y2] = end.split('/');
    const d1 = new Date(`${m1}/01/${y1}`);
    const d2 = new Date(`${m2}/01/${y2}`);
    const totalMonths = Math.round(
      (d2 - d1) / 1000 / 60 / 60 / 24 / 30
    );
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const yearText = years ? years + 'yr ' : '';
    const monthText = months ? months + 'mos' : '';
    const WorkDates = html`
      <div>
        <time>${date.start}</time>
        <span>-</span>
        <time>${date.end}</time>
        <span> ∙ </span>
        <span>${yearText}${monthText}</span>
      </div>
    `;
    const TechStack = html`
      <div class="TechStack">
        <div class="ttu f7">
          Tech Stack
        </div>
        <ul class="flex list pl0 mt1">
          ${techStack.map(stack => html`
            <li class="TechStack__Item">${stack}</li>
          `)}
        </ul>
      </div>
    `;
    const CompanyNameClasses = 'CompanyName';
    const CompanyName = website
      ? html`
        <a href="${website}" class="${CompanyNameClasses}">
          <strong>${company}</strong>
        </a>
      `
      : html`
        <strong class="${CompanyNameClasses}">
          ${company}
        </strong>
      `;
    return html`
      <div class="mb4">
        <ul class="ExperienceMeta list pl0">
          <li>${CompanyName}</li>
          <li class="i">${role}</li>
          <li>${WorkDates}</li>
        </ul>
        <p>${summary}</p>
        ${TechStack}
        ${ResponsibilitiesList}
      </div>
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
    degree,
    years: [yearStart, yearEnd],
    education,
  }) => {
    return html`
      <li class="mb4">
        <div class="b">${school}</div>
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
    'experience',
    WorkExperience()
  )}
  ${Education()}
  `;

render(htmlContent);
