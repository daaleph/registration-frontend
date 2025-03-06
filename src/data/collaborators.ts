const baseUrl = 'https://pub-dbd642a535de4512bfae0a5fd40ab343.r2.dev/MARKETING/ICONS/';
const g = '.gif';

const socialBaseUrls = {
  linkedin: 'https://www.linkedin.com/in/',
  x: 'https://x.com/',
  youtube: 'https://www.youtube.com/',
  instagram: 'https://www.instagram.com/'
};

const socialIcons = {
  www: `${baseUrl}www${g}`,
  linkedin: `${baseUrl}LinkedIn${g}`,
  x: `${baseUrl}X${g}`,
  youtube: `${baseUrl}YouTube${g}`,
};

const dc = 'depictedcandela';

const collaborators = [
  {
    title: 'Founder',
    name: 'Nicolás Córdoba',
    studies: 'Computer Scientist & Geodesist',
    socialLinks: [
      { url: 'https://depicted-candela.space/', icon: socialIcons.www },
      { url: `${socialBaseUrls.linkedin}nicalcoca`, icon: socialIcons.linkedin },
      { url: `${socialBaseUrls.x}${dc}`, icon: socialIcons.x },
      { url: `${socialBaseUrls.youtube}@${dc}`, icon: socialIcons.youtube }
    ],
  },
  // Add more collaborators as needed
];

export default collaborators;
