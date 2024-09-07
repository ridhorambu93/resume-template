import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/my-photo.jpeg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Muhammad Ridho`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I specialize in Front-End Development with{' '}
        <strong className="text-stone-100">
          Angular, React JS, and Back-End Development using CodeIgniter, Laravel, and Node.js (including Express.js and
          Nest.js).{' '}
        </strong>{' '}
        I bring extensive experience in{' '}
        <strong className="text-stone-100">
          server management and maintenance on Linux OS, with expertise in configuring Apache and Nginx web servers and
          handling databases using MariaDB and MySQL.
        </strong>{' '}
        My strengths are in designing responsive user interfaces, optimizing backend performance, and delivering
        successful project outcomes with a strong emphasis on efficiency and innovation.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1xmsN3iiDGWPR4_GM7CuTG0UsiqgPy6w8/view',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I blend creativity with technical skills to create engaging interfaces and robust backend systems. Throughout my career, I've successfully developed web applications from concept to launch, often collaborating within diverse teams. I'm eager to continue learning and growing in this dynamic technology landscape. I look forward to collaborating with you to create inspiring web solutions that deliver significant value.`,
  aboutItems: [
    {label: 'Location', text: 'Kwitang, Central Jakarta, Indonesia', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesia', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Football, Nature Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'Nusa Mandiri University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Angular',
        level: 7,
      },
      {
        name: 'Bootstrap',
        level: 9,
      },
      {
        name: 'Tailwind CSS',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Express.js',
        level: 7,
      },
      {
        name: 'Nest js',
        level: 7,
      },
      {
        name: 'PHP',
        level: 8,
      },
    ],
  },
  {
    name: 'Infrastructure Management',
    skills: [
      {
        name: 'Linux OS',
        level: 8,
      },
      {
        name: 'Apache',
        level: 7,
      },
      {
        name: 'Nginx',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'November 2023',
    location: 'Nusa Mandiri University',
    title: 'Bachelor Degree | Faculty Of Informatic System',
    content: (
      <p>
        Graduated with a thesis on developing a web-based tracking application for a Jakarta-based company specializing
        in inter-regional vehicle delivery services.
      </p>
    ),
  },
  {
    date: 'November 2019',
    location: 'Bina Sarana Informatika University',
    title: 'Diploma Degree | Faculty Of Informatic System',
    content: (
      <p>
        Graduated with a project developing a web-based rental system for outdoor equipment for an outdoor enthusiasts'
        community located in Kwitang, Central Jakarta.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 22 2023 - Present',
    location: 'PT Nawadata Tech (Placement On Bank Mega Syariah Central Office',
    title: 'Web Developer | Front End Developer',
    content: (
      <p>
        Developed & Maintenance(new feature & bug fixing) on Corporate Web Designing and developing customized
        applications to meet the workflow requirements of the Human Capital department. Creating supplementary
        documentation for additional information on the upcoming new feature release, as part of the ongoing Software
        Development Life Cycle (SDLC) within the company.
      </p>
    ),
  },
  {
    date: 'December 16 2020 - December 22 2022',
    location: 'PT Jaring Synergy Mandiri',
    title: 'Fullstack Web Developer',
    content: (
      <p>
        Developed service APIs to facilitate the implementation of diverse business processes within a ticketing web
        application, enhancing functionality and supporting seamless integration. Maintenance, deploy on server (staging
        & production) in existing and new project. Enhancing a ticketing web application for user convenience and
        optimizing data flow to improve application performance.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'ridhodavybones@gmail.com',
      href: 'mailto:ridhodavybones@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Jl Kembang 1 RT 02/01, Kelurahan Kwitang, Kecamatan Senen 10420, Central Jakarta - Indonesia',
      href: 'https://maps.app.goo.gl/rqiSNfBPFXQVecP8A',
    },
    {
      type: ContactType.Github,
      text: 'ridhorambu93',
      href: 'https://github.com/ridhorambu93',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ridhorambu93'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/muhammad-ridho-443623168/'},
];
