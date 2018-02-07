import css from './style.scss';

const render = (html = '') => {
  const elem = document.createElement('div');
  elem.innerHTML = html;
  document.body.appendChild(elem);
};

const content = {
  name: 'Leland Kwong',
  email: 'leland.kwong@gmail.com',
  website: 'https://lelandkwong.com',
  summary: 'I am a t-shaped web developer with a penchant for delightful UX and beautiful design. I believe that great software isn’t just about pixel-perfect designs and clean code, but it should also have a top-notch user experience to match. I bring a sense of empathy to my work which allows me to smoothly communicate between project managers, designers and engineers alike. I thrive in environments that encourage out-of-the-box thinking and cross-disciplinary collaboration. To me, the web is a canvas on which I can craft products that people will love to use.',
  experience: [
    {
      company: 'Netskope',
      website: 'netskope.com',
      role: 'lead frontend developer',
      date: '06/2012',
      responsibilities: [

      ]
    }
  ]
};

const header = /* @html */`
  <header>
    <h1>${content.name}</h1>
    <div>${content.website}</div>
    <div>${content.email}</div>
  </header>
`;

const htmlContent = /* @html */`
  <style>${css}</style>
  <div>
    ${header}
    <p>${content.summary}</p>
  </div>
`;

render(htmlContent);
