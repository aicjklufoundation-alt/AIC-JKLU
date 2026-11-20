export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

// Kept untouched for the homepage team section
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '01',
    name: 'Nidhi Kachhawa',
    role: 'Chief Executive Officer',
    image: '/team/final_ceo.png',
    linkedin: 'https://www.linkedin.com/in/nidhi-kachhawa-97492b191/',
  },
  {
    id: '02',
    name: 'Shivam Vijay',
    role: 'Associate Manager',
    image: '/team/final_shivam_sir.png',
    linkedin: 'https://www.linkedin.com/in/shivam-vijay-8048a01ab/',
  },
  {
    id: '03',
    name: 'Divyanshu joshi',
    role: 'Executive at AIC JKLU',
    image: '/team/final_diyanshu_sir.png',
    linkedin: 'https://www.linkedin.com/in/divyanshu-joshi-5a5084274/',
  },
];

// Dedicated data models for the full Team page
export interface DetailedTeamMember {
  id: string;
  name: string;
  role?: string;
  affiliation?: string; // e.g. '(INTERNAL)', '(EXTERNAL)'
  image: string;
  category: 'leadership' | 'core' | 'shared';
  linkedin?: string;
}

export const BOARD_OF_DIRECTORS: DetailedTeamMember[] = [
  {
    id: 'bod-01',
    name: 'Prof. (Dr.) Vijaya Sekhar Chellaboina',
    role: 'VC, JKLU',
    affiliation: '(INTERNAL)',
    image: '/team/directors/111.png',
    category: 'leadership',
    linkedin: 'https://www.linkedin.com/in/vchellaboina/',
  },
  {
    id: 'bod-02',
    name: 'Mr. Prem Singh',
    role: 'President, Group HR, JKIL',
    affiliation: '(INTERNAL)',
    image: '/team/directors/prem sir.png',
    category: 'leadership',
    linkedin: 'https://www.linkedin.com/in/prem-singh-7140bb8/',
  },
  {
    id: 'bod-03',
    name: 'Mr. Sundeep Tibrewal',
    role: 'Partner, Elev8 Venture',
    affiliation: '(EXTERNAL)',
    image: '/team/directors/33.png',
    category: 'leadership',
    linkedin: 'https://www.linkedin.com/in/sundeeptibrewal/',
  },
  {
    id: 'bod-04',
    name: 'Dr. Dinesh Kumar Goyal, IAS (R)',
    role: '',
    affiliation: '(EXTERNAL)',
    image: '/team/directors/44.png',
    category: 'leadership',
    linkedin: 'https://www.linkedin.com/in/dineshkumargoyal/',
  },
  {
    id: 'bod-05',
    name: 'Mr. Naveen Kumar Sharma',
    role: 'Senior Vice President, JK Cement',
    affiliation: '(EXTERNAL)',
    image: '/team/directors/55.png',
    category: 'leadership',
  },
  {
    id: 'bod-06',
    name: 'Mr. Sanjib Subba',
    role: 'Consultant, UNDP+',
    affiliation: '(EXTERNAL)',
    image: '/team/directors/66.png',
    category: 'leadership',
    linkedin: 'https://www.linkedin.com/in/sanjibsubba/',
  },
  {
    id: 'bod-07',
    name: 'Dr. Alka Mittal',
    role: 'Member, Administration Capacity Building Commission, CMD, ONGC',
    affiliation: '(EXTERNAL)',
    image: '/team/directors/77.png',
    category: 'leadership',
    linkedin: 'https://www.linkedin.com/in/alka-mittal-1a9994103/',
  },
];

export const AIC_CORE_TEAM: DetailedTeamMember[] = [
  {
    id: 'core-01',
    name: 'Nidhi Kachhawa',
    role: 'CEO',
    image: '/team/final_ceo.png',
    category: 'core',
    linkedin: 'https://www.linkedin.com/in/nidhi-kachhawa-97492b191/',
  },
  {
    id: 'core-02',
    name: 'Shivam Vijay',
    role: 'Associate Manager',
    image: '/team/final_shivam_sir.png',
    category: 'core',
    linkedin: 'https://www.linkedin.com/in/shivam-vijay-8048a01ab/',
  },
  {
    id: 'core-03',
    name: 'Divyanshu Joshi',
    role: 'Executive',
    image: '/team/final_diyanshu_sir.png',
    category: 'core',
    linkedin: 'https://www.linkedin.com/in/divyanshu-joshi-5a5084274/',
  },
  {
    id: 'core-04',
    name: 'Rohit Arora',
    role: 'Senior Executive',
    image: '/team/directors/99.png',
    category: 'core',
    linkedin: 'https://www.linkedin.com/in/rohit-arora-3842rna/',
  },
];

export const SHARED_RESOURCES: DetailedTeamMember[] = [
  {
    id: 'shared-01',
    name: 'K.K. Maheshwari',
    role: 'Registrar & CFO, JKLU',
    image: '/team/shared/kk-maheshwari.jpg',
    category: 'shared',
  },
  {
    id: 'shared-02',
    name: 'Arvind Sharma',
    role: 'Head of Accounts, JKLU',
    image: '/team/shared/arvind-sharma.jpg',
    category: 'shared',
  },
  {
    id: 'shared-03',
    name: 'Laxmi Narayan Sharma',
    role: 'Accounts Officer, JKLU',
    image: '/team/shared/laxmi-narayan-sharma.jpg',
    category: 'shared',
  },
  {
    id: 'shared-04',
    name: 'Sheetal Mundra',
    role: 'Acting Head IM, JKLU',
    image: '/team/shared/sheetal-mundra.jpg',
    category: 'shared',
  },
];
