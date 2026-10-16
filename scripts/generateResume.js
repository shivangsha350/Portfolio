import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 },
});

const outputPath = path.join(__dirname, '../public/Shivang_Sharma_Resume.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Color palette
const PRIMARY = '#0f172a';
const ACCENT = '#059669';
const SECONDARY = '#334155';
const MUTED = '#64748b';

// Header
doc.fontSize(22).font('Helvetica-Bold').fillColor(PRIMARY).text('SHIVANG SHARMA', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(11).font('Helvetica-Bold').fillColor(ACCENT).text('MERN STACK DEVELOPER | FULL-STACK SOFTWARE ENGINEER', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(8.5).font('Helvetica').fillColor(MUTED).text(
  'Jaipur, India  |  +91 9680699836  |  Shivangsh350@gmail.com  |  linkedin.com/in/shivang-sharma-93ba1727b  |  github.com/shivangsha350',
  { align: 'center' }
);
doc.moveDown(0.5);

function sectionTitle(title) {
  doc.fontSize(11).font('Helvetica-Bold').fillColor(PRIMARY).text(title.toUpperCase());
  doc.strokeColor(ACCENT).lineWidth(1.2).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.4);
}

// Summary
sectionTitle('Professional Summary');
doc.fontSize(9.5).font('Helvetica').fillColor(SECONDARY).text(
  "MERN Stack Developer with hands-on experience in React.js, Node.js, Express.js, MongoDB, and JavaScript. Demonstrated ability in delivering live client projects, high-performance responsive web interfaces, robust REST APIs, and AI-powered applications. Passionate about engineering clean, maintainable code, solving real-world user problems, and continuously advancing software craftsmanship."
);
doc.moveDown(0.6);

// Technical Skills
sectionTitle('Technical Skills');
const skills = [
  { cat: 'Languages:', items: 'JavaScript (ES6+), Python, Java, HTML5, CSS3' },
  { cat: 'Frontend:', items: 'React.js, Tailwind CSS, Bootstrap, Responsive Web Design, Component Architecture' },
  { cat: 'Backend & APIs:', items: 'Node.js, Express.js, RESTful APIs, JWT Authentication, Middleware' },
  { cat: 'Databases:', items: 'MongoDB, Mongoose ODM, Data Modeling, CRUD Operations' },
  { cat: 'Tools & Cloud:', items: 'Git, GitHub, VS Code, Postman, Vercel, Render' },
];

skills.forEach(s => {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text(s.cat + ' ', { continued: true });
  doc.font('Helvetica').fillColor(SECONDARY).text(s.items);
});
doc.moveDown(0.6);

// Experience
sectionTitle('Professional Experience');

function expItem(role, company, period, bullets) {
  doc.font('Helvetica-Bold').fontSize(10).fillColor(PRIMARY).text(role + ' ', { continued: true });
  doc.font('Helvetica').fillColor(ACCENT).text(`— ${company}`, { continued: true });
  doc.font('Helvetica-Bold').fillColor(MUTED).text(period, { align: 'right' });
  doc.moveDown(0.2);
  bullets.forEach(b => {
    doc.font('Helvetica').fontSize(8.8).fillColor(SECONDARY).text(`•  ${b}`, { indent: 10 });
  });
  doc.moveDown(0.4);
}

expItem(
  'Web Development Intern',
  'Simtrak Solutions',
  'May 2025 – December 2025',
  [
    'Spearheaded frontend engineering using React.js, JavaScript, Tailwind CSS, and Bootstrap.',
    'Contributed directly to two production client web solutions: JIT Polytechnic and TiCi NatureLab.',
    'Developed and integrated an AI-powered conversational chatbot assistant utilizing Node.js and API endpoints.',
    'Engineered responsive layouts, API data flow, and conducted cross-browser performance optimizations.'
  ]
);

expItem(
  'Full-Stack Development Intern',
  'BR Softech',
  'March 2025 – July 2025',
  [
    'Built dynamic web solutions utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js).',
    'Implemented responsive React.js interfaces, modular components, and integrated backend REST APIs.',
    'Collaborated on database query design, code debugging, and cloud deployment pipelines.'
  ]
);

expItem(
  'Frontend Development Intern',
  'BR Softech',
  'March 2025 – May 2025',
  [
    'Engineered clean, standards-compliant user interfaces using HTML5, CSS3, JavaScript, and Bootstrap.',
    'Resolved UI inconsistencies and optimized responsiveness across varied device viewports.',
    'Collaborated with senior engineers adhering to industry Git workflows and agile sprints.'
  ]
);

// Projects
sectionTitle('Featured Projects');

function projectItem(title, type, stack, desc) {
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY).text(title + ' ', { continued: true });
  doc.font('Helvetica-Oblique').fillColor(ACCENT).text(`(${type})`, { continued: true });
  doc.font('Helvetica-Bold').fillColor(MUTED).text(stack, { align: 'right' });
  doc.moveDown(0.15);
  doc.font('Helvetica').fontSize(8.6).fillColor(SECONDARY).text(desc, { indent: 8 });
  doc.moveDown(0.35);
}

projectItem(
  'Nielacare — E-Commerce Web Platform',
  'Freelance Client Project',
  'Next.js, React, Express, MongoDB, Razorpay, JWT',
  'Built full-stack e-commerce system with JWT authentication, cart, checkout, Razorpay payment gateway integration, automated invoice generation, and customer email alerts. Deployed on Vercel and Render.'
);

projectItem(
  'Poiya Health — Healthcare Corporate Portal',
  'Freelance Client Project',
  'React.js, Node.js, Express.js, MongoDB, REST APIs',
  'Engineered corporate web solution and comprehensive admin panel for enquiries, specialists, categories, and career applications with secure REST APIs and full CRUD capabilities.'
);

projectItem(
  'JIT Polytechnic & TiCi NatureLab',
  'Internship Client Projects',
  'React.js, JavaScript, Tailwind CSS, Bootstrap',
  'Delivered responsive educational and corporate business web applications with modular components, interactive UI, and cross-browser responsiveness.'
);

// Education
sectionTitle('Education');
const education = [
  { degree: 'Master of Computer Applications (MCA)', period: '2026 – 2028', detail: 'Pursuing' },
  { degree: 'Bachelor of Computer Applications (BCA)', period: '2023 – 2026', detail: 'CGPA: 7.89' },
  { degree: 'Senior Secondary (Class XII) — CBSE', period: '2021 – 2022', detail: 'Score: 60%' },
  { degree: 'Secondary (Class X) — CBSE', period: '2019 – 2020', detail: 'Score: 57%' },
];

education.forEach(e => {
  doc.font('Helvetica-Bold').fontSize(8.8).fillColor(PRIMARY).text(e.degree + ' ', { continued: true });
  doc.font('Helvetica').fillColor(ACCENT).text(`(${e.detail})`, { continued: true });
  doc.font('Helvetica').fillColor(MUTED).text(e.period, { align: 'right' });
});

doc.end();

stream.on('finish', () => {
  console.log('Resume successfully generated at:', outputPath);
});
