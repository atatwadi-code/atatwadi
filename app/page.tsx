import Link from "next/link";
import Image from "next/image";
import styles from './styles/home.module.css';
import { bitcountGridDouble, helvetica } from './fonts';

export default function Home() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with seamless user experience',
      category: 'Web Development',
      year: '2024',
      image: '/playground/sky.webp',
      link: '/projects/ecommerce'
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity for a tech startup',
      category: 'Branding',
      year: '2024',
      image: '/playground/ice-cream.webp',
      link: '/projects/branding'
    },
    {
      title: 'Mobile App Design',
      description: 'User-centered mobile app for productivity',
      category: 'UI/UX Design',
      year: '2023',
      image: '/playground/butterfly-flutter.webp',
      link: '/projects/mobile-app'
    }
  ];

  const skills = [
    'Web Development',
    'UI/UX Design',
    'Brand Identity',
    'Product Strategy',
    'Frontend Development',
    'Design Systems'
  ];

  return (
    <div className={`${styles.container} ${bitcountGridDouble.variable} ${helvetica.variable}`}>
      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Ananya.t</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Creative Designer &<br />
            <span className={styles.heroTitleAccent}>Developer</span>
          </h1>
          <p className={styles.heroDescription}>
            I create digital experiences that combine beautiful design with 
            functional development. Specializing in modern web applications, 
            brand identity, and user-centered design.
          </p>
          <div className={styles.heroActions}>
            <a href="#projects" className={styles.primaryButton}>View My Work</a>
            <a href="#contact" className={styles.secondaryButton}>Get In Touch</a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImage}>
            <Image src="/playground/butterfly-calm.webp" alt="Portfolio hero" fill style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.sectionSubtitle}>
              Passionate about creating meaningful digital experiences
            </p>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                I'm a multidisciplinary designer and developer with over 5 years of experience 
                creating digital products that users love. My approach combines strategic thinking 
                with technical execution to deliver solutions that are both beautiful and functional.
              </p>
              <p>
                I specialize in modern web development, user experience design, and brand identity. 
                When I'm not coding or designing, you can find me exploring new technologies, 
                sketching ideas, or enjoying a good cup of coffee.
              </p>
            </div>
            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Skills & Expertise</h3>
              <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              A selection of my recent work
            </p>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <Link key={index} href={project.link} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <span className={styles.projectYear}>{project.year}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2 className={styles.contactTitle}>Let's Work Together</h2>
              <p className={styles.contactDescription}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to chat about design and development, 
                I'd love to hear from you.
              </p>
              <div className={styles.contactDetails}>
                <a href="mailto:hello@ananya.t" className={styles.contactLink}>
                  hello@ananya.t
                </a>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>LinkedIn</a>
                  <a href="#" className={styles.socialLink}>Dribbble</a>
                  <a href="#" className={styles.socialLink}>GitHub</a>
                </div>
              </div>
            </div>
            <div className={styles.contactForm}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea 
                    placeholder="Your Message" 
                    className={styles.formTextarea}
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © 2024 Ananya.t. All rights reserved.
          </p>
          <div className={styles.footerLinks}>
            <a href="#about" className={styles.footerLink}>About</a>
            <a href="#projects" className={styles.footerLink}>Projects</a>
            <a href="#contact" className={styles.footerLink}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
