import { Category } from './models/category';
import { Portfolio } from './models/portfolio';

export const PORTFOLIO_DATA: Portfolio[] = [
  {
    _id: '68d6f91abab9fa356737ac17',
    title: 'Ticketing Module',
    hook: 'Digitizes route operations, ticket validation, and daily cash reporting.',
    cover: ['naji3086.png', 'naji2543.png', 'naji4122.png'],
    category: '68d6f3dea31991de841b385a',
    hashtags: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'PrimeNG'],
    github: '',
    liveDemo: 'https://www.youtube.com/embed/-xFBoObqOws?si=lbEuwdXhK2ej4fKs',
    resume: 'A full-stack ticketing system for managing stations, routes, fares, ticket issuance, and barcode-based validation.',
    description: '<p>Built to modernize transport ticket operations with stronger control, faster sales handling, and reliable reporting.</p>',
    images: [],
    caseStudy: {
      problem: 'Manual ticketing workflows made fare control, fraud detection, and sales reporting difficult.',
      solution: 'Designed a centralized module to manage routes, fares, sales, and barcode verification in one workflow.',
      features: [
        'Station, line, and route management',
        'Fare and trip configuration',
        'Printable tickets with barcode validation',
        'Luggage and travel tracking',
        'Cash register records and reporting dashboard'
      ],
      techStack: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      impact: 'Reduced manual checks and improved ticket traceability with faster controller validation.'
    }
  },
  {
    _id: '68d7208a7c3c1e7e3ec95c1d',
    title: 'Ecom Merge',
    hook: 'Combines e-commerce storefront creation with ERP-style internal operations.',
    cover: ['naji1907.png', 'naji1984.png', 'naji1546.png'],
    category: '68d6f3dea31991de841b385a',
    hashtags: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap', 'PrimeNG'],
    github: 'https://github.com/AyoubBouchkara/ECOM-MERGE',
    liveDemo: 'https://dynamic-sunburst-d50cc1.netlify.app',
    resume: 'An all-in-one platform that helps businesses run online sales and internal management from one place.',
    description: '<p>Ecom Merge unifies storefront management and business operations to reduce tool fragmentation and operational overhead.</p>',
    images: [
      'naji4532.png', 'naji953.png', 'naji3691.png', 'naji4327.png', 'naji4671.png',
      'naji2038.png', 'naji2833.png', 'naji140.png', 'naji4698.png', 'naji3835.png',
      'naji1611.png', 'naji186.png', 'naji4758.png', 'naji2687.png', 'naji1065.png'
    ],
    caseStudy: {
      problem: 'Businesses often split between an e-commerce tool and a separate ERP, creating data silos and manual sync.',
      solution: 'Built a single platform where catalog, sales flow, and internal management can be operated together.',
      features: [
        'Storefront management and product flow',
        'Integrated operational modules',
        'Unified data handling for sales and back-office',
        'Role-friendly dashboards',
        'Scalable module structure for future growth'
      ],
      techStack: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap', 'PrimeNG'],
      impact: 'Simplified operations and reduced context switching between multiple business tools.'
    }
  },
  {
    _id: '68d84ea12d8ffffd2109c019',
    title: 'Posting App',
    hook: 'Fast content publishing workflow with clean post management.',
    cover: ['naji629.jpg', 'naji2580.jpg', 'naji3508.jpg'],
    category: '68d6f3c5a31991de841b3854',
    hashtags: ['React', 'JavaScript', 'Bootstrap', 'CSS'],
    github: 'https://github.com/salahSurvivor/posting-app',
    liveDemo: 'https://salahsurvivor.github.io/posting-app/',
    resume: 'A lightweight posting platform to create, edit, and manage content through a simple interface.',
    description: '<p>Focused on rapid publishing with minimal friction and a straightforward management experience.</p>',
    images: [],
    caseStudy: {
      problem: 'Small teams need a lightweight way to publish and update content without heavy CMS complexity.',
      solution: 'Created a minimal React app optimized for quick post creation and editing.',
      features: [
        'Create and edit post workflow',
        'Clean, readable UI',
        'Responsive layout',
        'Simple content management flow'
      ],
      techStack: ['React', 'JavaScript', 'Bootstrap'],
      impact: 'Improved publishing speed and reduced friction for day-to-day content updates.'
    }
  },
  {
    _id: '68d84ff92d8ffffd2109c041',
    title: 'Educator',
    hook: 'Responsive institutional website for schools and learning platforms.',
    cover: ['naji3502.png', 'naji403.png'],
    category: '68d6f3c5a31991de841b3854',
    hashtags: ['HTML', 'CSS', 'JavaScript'],
    github: '',
    liveDemo: 'https://salahsurvivor.github.io/schoolWebsite.github.io/',
    resume: 'A modern website template for presenting academic programs, campus information, and key school details.',
    description: '<p>Designed to give institutions a clean digital presence with clear navigation and responsive behavior.</p>',
    images: [],
    caseStudy: {
      problem: 'Educational institutions need a clear and trustworthy online presence for students and parents.',
      solution: 'Built a responsive front-end website focused on structure, readability, and information clarity.',
      features: [
        'Responsive page sections',
        'Institution-focused content blocks',
        'Clean navigation and visual hierarchy',
        'Lightweight static delivery'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      impact: 'Improved clarity of institutional communication and mobile accessibility.'
    }
  },
  {
    _id: '68fbf198b277b51d43f93a2b',
    title: 'NFC Case Landing',
    hook: 'Single-product landing page optimized for product storytelling.',
    cover: ['naji1706.avif', 'naji2543.avif', 'naji3390.avif'],
    category: '68d6f3c5a31991de841b3854',
    hashtags: ['HTML', 'CSS', 'JavaScript'],
    github: '',
    liveDemo: 'https://salahsurvivor.github.io/nfc-case',
    resume: 'A modern and responsive landing page designed to showcase one product and drive user action.',
    description: '<p>Focused on product clarity, visual impact, and responsive conversion-oriented layout.</p>',
    images: [],
    caseStudy: {
      problem: 'Single-product campaigns need focused pages that highlight value quickly and drive conversion.',
      solution: 'Designed a streamlined landing page with strong visual emphasis and clear user journey.',
      features: [
        'Product-first hero presentation',
        'Responsive sections',
        'Clear CTA hierarchy',
        'Performance-friendly static structure'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      impact: 'Improved product readability and call-to-action visibility across device sizes.'
    }
  },
  // {
  //   _id: '68fcaa01b277b51d43f93b01',
  //   title: 'Document Automation Tool',
  //   hook: 'Extracts content from PDFs/images and auto-fills operational forms.',
  //   cover: ['naji1138.png', 'naji1205.png', 'naji1386.png'],
  //   category: '68d6f3dea31991de841b385a',
  //   hashtags: ['Node.js', 'Express', 'Angular', 'OCR', 'Automation'],
  //   github: '',
  //   liveDemo: '',
  //   resume: 'An internal automation tool to extract data from documents and reduce manual entry time.',
  //   description: '<p>Built to automate repetitive data processing workflows and increase operational speed.</p>',
  //   images: [],
  //   caseStudy: {
  //     problem: 'Teams were manually reading documents and retyping data into business forms, causing delays and errors.',
  //     solution: 'Developed an extraction and processing workflow that captures document content and populates target forms automatically.',
  //     features: [
  //       'Document ingestion for PDF/image inputs',
  //       'Field extraction and mapping pipeline',
  //       'Auto-fill workflow for internal forms',
  //       'Validation checkpoints before submission'
  //     ],
  //     techStack: ['Node.js', 'Express', 'Angular'],
  //     impact: 'Cut manual processing time by an estimated 50% and improved data consistency.'
  //   }
  // },
  // {
  //   _id: '68fcaa02b277b51d43f93b02',
  //   title: 'Fleet Management Web App',
  //   hook: 'Improves vehicle fleet visibility and operational tracking for transport teams.',
  //   cover: ['naji2474.png', 'naji2124.png', 'naji2791.png'],
  //   category: '68d6f3dea31991de841b385a',
  //   hashtags: ['Angular', 'Node.js', 'MongoDB', 'Dashboard'],
  //   github: '',
  //   liveDemo: '',
  //   resume: 'A web application developed during internship to support efficient fleet management operations.',
  //   description: '<p>Focused on operational monitoring and clearer fleet coordination through a centralized interface.</p>',
  //   images: [],
  //   caseStudy: {
  //     problem: 'Fleet monitoring and operational coordination lacked a centralized digital view.',
  //     solution: 'Built a custom web application to track vehicles and streamline management tasks.',
  //     features: [
  //       'Fleet status overview dashboard',
  //       'Core tracking and management flows',
  //       'Operational data visibility for teams'
  //     ],
  //     techStack: ['Angular', 'Node.js', 'MongoDB'],
  //     impact: 'Improved visibility on fleet operations and reduced coordination friction.'
  //   }
  // }
];

export const CATEGORY_DATA: Category[] = [
  {
    _id: '68d6f3c5a31991de841b3854',
    name: 'Front-end'
  },
  {
    _id: '68d6f3dea31991de841b385a',
    name: 'Full-stack'
  }
];

export const CV_FILE_NAME = 'naji1345.pdf';
