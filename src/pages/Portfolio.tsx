import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ResumeDownload from '../components/ResumeDownload';
import ResumeModal from '../components/ResumeModal';

export default function Portfolio() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleDownloadRequest = () => {
    setShowResumeModal(true);
  };

  const handleDownload = async (name: string, email: string) => {
    setIsDownloading(true);
    
    try {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: (import.meta as any).env.VITE_EMAILJS_SERVICE_ID,
          template_id: (import.meta as any).env.VITE_RESUME_NOTIFICATION_TEMPLATE_ID,
          user_id: (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: name,
            from_email: email,
            message: `${name} (${email}) downloaded your resume from your portfolio website.`,
            to_email: (import.meta as any).env.VITE_RECIPIENT_EMAIL
          }
        })
      });

      const resumeUrl = (import.meta as any).env.VITE_RESUME_URL;
      window.open(resumeUrl, '_blank');
      
    } catch (error) {
      console.error('Error sending notification:', error);
      const resumeUrl = (import.meta as any).env.VITE_RESUME_URL;
      window.open(resumeUrl, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-lg">terminal</span>
            </div>
            <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Giridharan</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#skills">Skills</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#projects">Projects</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#experience">Experience</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#certifications">Certifications</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
          </nav>
          <button onClick={handleDownloadRequest} disabled={isDownloading} className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm disabled:opacity-50">
            {isDownloading ? 'Downloading...' : 'Download Resume'}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 md:py-32" id="home">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Hi, I'm Giridharan</h1>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for work
                  </div>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
                  Crafting <span className="text-primary">MERN</span> Stack Excellence.
                </h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Full-Stack Developer with 2+ years of experience building scalable web applications using React, Next.js, Node.js, and PostgreSQL. Skilled in designing RESTful APIs, improving system performance, and delivering reliable end-to-end features across the stack. Experienced in payment integrations and automation, with a strong focus on broader product development, modern architectures, and user-centric solutions. <strong>Actively seeking new opportunities</strong> to build impactful web applications.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform flex items-center gap-2 shadow-lg shadow-primary/20">
                  Explore My Work <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a href="#contact" className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                  Let's Talk
                </a>
              </div>
            </div>
            <div className="flex-1 w-full max-w-[500px]">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                <img alt="Professional developer workstation" className="w-full h-full object-cover grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJIACr6QCsm-OhbQkQeeA5gBtdqJruO9jwk3tLlddJEi3CT59m3cY9r28fX469qhPID84kugmvU79fRa8lwmsDBFfD-rtWSNS4JKCYqWFj9PeRI_4UAvqtqIjsgYANMcSwSnvFAbE3K4mdw_oFAADswZ8HGmTKkCuKaHuhFLr4LviRmAVIcKowqsgrQ2n-HuShQXkFg7gFWobrPBjAlV6wumRLT7Pe_wfsee3E-lIHQxPiEus6h81v7BhinWPkn5LnozTVKT_eeY0"/>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl z-20">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary rounded-lg text-white">
                      <span className="material-symbols-outlined">work</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Open for Roles</p>
                      <p className="text-white/70 text-sm">Frontend/Backend/Full-Stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800" id="about">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">The Giridharan Approach</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              I believe in engineering products that deliver exceptional user experiences and business value.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My approach combines technical excellence with business understanding. I focus on building scalable architectures, implementing robust payment systems, and creating seamless user workflows that drive real business outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">architecture</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Scalable Architecture</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">I architect backends that handle growth effortlessly, utilizing Node.js and PostgreSQL to build systems that stay fast as you scale.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">devices</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Full-Stack Development</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Building end-to-end solutions with React, Next.js, Node.js, and PostgreSQL, focusing on scalable architectures and maintainable code.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">payment</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Payment Systems & Integration</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Expert in Stripe integration, payment processing, webhooks, tax calculation, and automated billing flows with ACH and card payment support.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Automation & Testing</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Implementing comprehensive testing strategies with Playwright, Jest, Chai, and Mocha to ensure reliable, production-ready applications.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">cloud</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Cloud & DevOps</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Deploying applications with AWS Lambda, S3, Docker, and implementing CI/CD pipelines for seamless development workflows.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Data Analysis & Reporting</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Experience in banking domain reporting, SQL optimization, and data transformation using Eclipse BIRT and advanced analytics.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800" id="skills">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">Tools & Tech</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">My Professional Toolkit</h3>
            </div>
            <p className="max-w-md text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              A carefully curated stack of modern technologies I use to build robust and scalable digital products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">brush</span>
                <h4 className="text-lg font-bold">Frontend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">React.js</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Next.js</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">HTML5</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">CSS3</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Bootstrap</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">TypeScript</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">JavaScript</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Tailwind CSS</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">MUI</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Redux</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Webpack</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Vite</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">React Query</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">React Router</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Headless UI</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Heroicons</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Chart.js</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Recharts</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Framer Motion</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">React PDF</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">SweetAlert2</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">database</span>
                <h4 className="text-lg font-bold">Backend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Node.js</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Express.js</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Python</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Java</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">C++</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">FastAPI</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">RESTful APIs</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Flyway Migration</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">API Authentication</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Redis</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Jest</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">JWT</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">OAuth</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">WebSockets</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Sequelize</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Bcrypt</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Helmet</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Rate Limiting</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Multer</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Node Cron</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Nodemailer</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">storage</span>
                <h4 className="text-lg font-bold">Database & Payment</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">SQL</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">PostgreSQL</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">MongoDB</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">NoSQL</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Numeral</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Stripe</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">System Design</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Flyway</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Database Migration</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">cloud</span>
                <h4 className="text-lg font-bold">Cloud & DevOps</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">AWS Lambda</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">AWS S3</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">AWS Amplify</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Git</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Cloudinary</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Docker</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">CI/CD</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Kubernetes</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Azure MSAL</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">SSH2</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Husky</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Vercel</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Render</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Neon</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Netlify</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Railway</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Ngrok</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">bug_report</span>
                <h4 className="text-lg font-bold">Testing & Automation</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Chai</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Mocha</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Playwright</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Swagger</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">ESLint</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Prettier</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Nodemon</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Sinon</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Faker.js</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">Lint Staged</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800" id="projects">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Case Studies</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-16">Selected Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 aspect-[16/10]">
                <img alt="Task management dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80"/>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="https://task-tracker-2p0p38ssm-giridharans-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">visibility</span> Live Demo
                  </a>
                  <a href="https://github.com/giridharan-gk/Task-Tracker" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 border border-white/20">
                    <span className="material-symbols-outlined">code</span> View Code
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">React</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">TypeScript</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">Node.js</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">PostgreSQL</span>
                </div>
                <h4 className="text-2xl font-bold">Task Tracker</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">A full-stack task management application with JWT authentication, role-based access control, and real-time dashboard featuring project organization and team collaboration.</p>
              </div>
            </div>
            <div className="group flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 aspect-[16/10]">
                <img alt="E-commerce REST API" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80"/>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">description</span> API Docs
                  </button>
                  <a href="https://github.com/giridharan-gk/commerce-rest-api-express-postgres" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 border border-white/20">
                    <span className="material-symbols-outlined">code</span> View Code
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">TypeScript</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">Express.js</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">PostgreSQL</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">Stripe</span>
                </div>
                <h4 className="text-2xl font-bold">Commerce REST API</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">A comprehensive e-commerce backend with Stripe payments, JWT authentication, Swagger documentation, and complete order management system built with TypeScript.</p>
              </div>
            </div>
            <div className="group flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 aspect-[16/10]">
                <img alt="Todo application" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80"/>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="https://giridharan-eeay.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">visibility</span> Live Demo
                  </a>
                  <a href="https://github.com/giridharan-gk/todo-app" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 border border-white/20">
                    <span className="material-symbols-outlined">code</span> View Code
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">React</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">Tailwind</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">LocalStorage</span>
                </div>
                <h4 className="text-2xl font-bold">Todo Application</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">A clean and intuitive todo application with task management, priority levels, filtering capabilities, and persistent local storage built with React and Tailwind CSS.</p>
              </div>
            </div>
            <div className="group flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 aspect-[16/10]">
                <img alt="Currency converter application" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80"/>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="https://fsd-assements-rvdh-giridharans-projects.vercel.app/Day_20/Currency_Converter_App/index.html" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">visibility</span> Live Demo
                  </a>
                  <a href="https://github.com/giridharan-gk/currency-converter" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 border border-white/20">
                    <span className="material-symbols-outlined">code</span> View Code
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">JavaScript</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">API</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">CSS3</span>
                </div>
                <h4 className="text-2xl font-bold">Currency Converter</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">A real-time currency converter with live exchange rates, multiple currency support, and responsive design using external API integration built with vanilla JavaScript.</p>
              </div>
            </div>
            <div className="group flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 aspect-[16/10]">
                <img alt="Dictionary application" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80"/>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="https://fsd-assements-rvdh-giridharans-projects.vercel.app/Day_20/Dictionary/index.html" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">visibility</span> Live Demo
                  </a>
                  <a href="https://github.com/giridharan-gk/dictionary-app" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 border border-white/20">
                    <span className="material-symbols-outlined">code</span> View Code
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">JavaScript</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">HTML5</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">CSS3</span>
                </div>
                <h4 className="text-2xl font-bold">Dictionary App</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">A responsive dictionary application with word search, definitions, pronunciations, and examples using external API integration built with vanilla JavaScript.</p>
              </div>
            </div>
            <div className="group flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 aspect-[16/10]">
                <img alt="Weather application" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80"/>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="https://fsd-assements-rvdh-giridharans-projects.vercel.app/Day_20/Weather_App/index.html" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">visibility</span> Live Demo
                  </a>
                  <a href="https://github.com/giridharan-gk/weather-app" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 border border-white/20">
                    <span className="material-symbols-outlined">code</span> View Code
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">JavaScript</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">Weather API</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">CSS3</span>
                </div>
                <h4 className="text-2xl font-bold">Weather App</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">A simple and clean weather application with current weather conditions, forecasts, and location-based weather data using weather API integration built with vanilla JavaScript.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800" id="experience">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">My Professional Journey</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-16">Career Path</h3>
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 flex flex-col gap-12">
            <div className="relative pl-8">
              <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-primary border-4 border-white dark:border-background-dark"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h4 className="text-xl font-bold">Associate Software Engineer</h4>
                <span className="text-sm font-bold text-slate-500">Mar 2024 — Present</span>
              </div>
              <p className="text-primary font-medium mb-4">Sync Dynamics LLP | Bangalore, India</p>
              <div className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl space-y-2">
                <p>• Improved core platform features across payments, reservations, billing (invoices, late fees, overdues), and gate scheduling to deliver a reliable and scalable user experience.</p>
                <p>• Built the Gate Schedule module to manage Gate In / Gate Out workflows, including IP-based location validation (lat/long), geofencing, and reservation verification.</p>
                <p>• Developed Instant Approval and Promo Code features and implemented reservation lifecycle workflows, including modifications, email notifications, and UBI insurance validation.</p>
                <p>• Integrated Stripe for customer management, cards and ACH payments, invoices, webhooks, and US sales tax calculation using Stripe Tax and Numeral, reducing manual billing effort and errors.</p>
                <p>• Contributed to Playwright automation testing, resolved critical production issues, delivered hotfixes, and supported ongoing platform stability and performance.</p>
              </div>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-background-dark"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h4 className="text-xl font-bold">Data Analyst Intern</h4>
                <span className="text-sm font-bold text-slate-500">Feb 2023 — Sep 2023</span>
              </div>
              <p className="text-primary font-medium mb-4">Azentio Software | Kochi, India</p>
              <div className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl space-y-2">
                <p>• Worked on banking domain reporting using Eclipse BIRT Report Viewer, creating and updating reports across different banking modules.</p>
                <p>• Wrote and optimized SQL queries and stored procedures to fetch, transform, and validate data for reporting needs.</p>
                <p>• Automated multi-segment reports and analyzed large datasets, improving reporting accuracy, consistency, and business decision-making.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800" id="certifications">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">Verified Achievements</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Professional Certifications</h3>
            </div>
            <p className="max-w-md text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Technical validations from industry leaders confirming proficiency in modern cloud and development practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Programming for Everybody (Getting Started with Python)</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Coursera • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href="#" target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">code</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">React JS</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href={import.meta.env.VITE_CERT_REACT_JS} target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">database</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">MongoDB</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href={import.meta.env.VITE_CERT_MONGODB} target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">storage</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">MySQL</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href={import.meta.env.VITE_CERT_MYSQL} target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">web</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">HTML</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href={import.meta.env.VITE_CERT_HTML} target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">style</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Bootstrap</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href={import.meta.env.VITE_CERT_BOOTSTRAP} target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">javascript</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Node JS</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href={import.meta.env.VITE_CERT_NODE_JS} target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">css</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">CSS</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href={import.meta.env.VITE_CERT_CSS} target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">javascript</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">JavaScript</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href="#" target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">code</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">TypeScript</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href="#" target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-2xl">layers</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Full Stack Software Development Program</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guvi • Does not expire</p>
              </div>
              {import.meta.env.VITE_SHOW_CERTIFICATE_LINKS === 'true' && (
                <a className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all" href={import.meta.env.VITE_CERT_FULL_STACK} target="_blank" rel="noopener noreferrer">
                  Verify Credential <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800" id="contact">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-6">Looking for a dedicated developer for your next project?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  I am currently <strong>actively looking for new opportunities</strong> and would love to hear about how I can contribute to your team. Whether you have a specific role in mind or just want to discuss a potential project, reach out!
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">mail</span>
                  <span className="font-medium">{import.meta.env.VITE_EMAIL}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">share</span>
                  <span className="font-medium">{import.meta.env.VITE_LINKEDIN_URL}</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Resume Preview Section - The Full Story Block */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800" id="resume-preview">
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch">
            <div className="flex-1 p-12 flex flex-col justify-center gap-8">
              <div>
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Credentials</h2>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-6">Want the full story?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Dive deep into my technical background and professional achievements. Download my full resume for a comprehensive overview of my career and education.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-primary">history</span>
                    <span className="text-sm font-bold">2+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-primary">layers</span>
                    <span className="text-sm font-bold">Key Tech: MERN Stack</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-primary">school</span>
                    <span className="text-sm font-bold">B.E. Electronics & Communication</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-primary">language</span>
                    <span className="text-sm font-bold">Open to Remote & Bengaluru</span>
                  </div>
                </div>
              </div>
              <ResumeDownload onDownload={handleDownloadRequest} isDownloading={isDownloading} />
            </div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-8 lg:p-12 flex items-center justify-center border-l border-slate-100 dark:border-slate-800">
              <div className="w-full max-w-md aspect-[1/1.4] bg-white dark:bg-slate-900 rounded shadow-2xl border border-slate-200 dark:border-slate-700 p-8 flex flex-col gap-6 overflow-hidden relative group">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <div className="h-6 w-32 bg-slate-200 dark:bg-slate-800 rounded"></div>
                    <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800/50 rounded"></div>
                  </div>
                  <div className="size-12 bg-primary/10 rounded-lg"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                  <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-800 rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-24 bg-primary/20 rounded"></div>
                  <div className="flex gap-4">
                    <div className="h-3 w-full bg-slate-50 dark:bg-slate-800 rounded"></div>
                    <div className="h-3 w-full bg-slate-50 dark:bg-slate-800 rounded"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-3 w-full bg-slate-50 dark:bg-slate-800 rounded"></div>
                    <div className="h-3 w-1/2 bg-slate-50 dark:bg-slate-800 rounded"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-32 bg-primary/20 rounded"></div>
                  <div className="h-12 w-full border border-dashed border-slate-200 dark:border-slate-800 rounded-lg"></div>
                  <div className="h-12 w-full border border-dashed border-slate-200 dark:border-slate-800 rounded-lg"></div>
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg border border-primary/20 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">zoom_in</span>
                    <span className="text-xs font-bold">Preview Mode</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-white text-[10px]">
              <span className="material-symbols-outlined text-sm">terminal</span>
            </div>
            <h2 className="text-md font-black tracking-tight text-slate-900 dark:text-white">Giridharan</h2>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Giridharan. Actively seeking MERN Stack Developer opportunities.</p>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">group</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
      </footer>
      
      <ResumeModal 
        isOpen={showResumeModal} 
        onClose={() => setShowResumeModal(false)} 
        onDownload={handleDownload} 
      />
    </>
  )
}