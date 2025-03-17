import { Collaborator } from "@/types/data";

const baseIconsUrl = 'https://pub-dbd642a535de4512bfae0a5fd40ab343.r2.dev/MARKETING/ICONS/';
const basePeopleURl = 'https://pub-9762778e027149868587040d11f35a2d.r2.dev/PHOTOS/'
const g = '.gif';
const p = '.png';
const j = '.jpeg';

const socialUrls = {
  linkedin: 'https://www.linkedin.com/in/',
  x: 'https://x.com/',
  youtube: 'https://www.youtube.com/',
  instagram: 'https://www.instagram.com/'
};

const socialIcons = {
  www: `${baseIconsUrl}www${g}`,
  linkedin: `${baseIconsUrl}LinkedIn${p}`,
  x: `${baseIconsUrl}X${g}`,
  youtube: `${baseIconsUrl}YouTube${g}`,
  instagram: `${baseIconsUrl}Instagram${p}`
};

const dc = 'depictedcandela';

const collaborators: Collaborator[] = [
  {
    title: 'Fundador',
    name: 'Nicolás Córdoba',
    role: 'Visión estratégica',
    studies: 'Científico Computacional & Geodesta',
    photo: `${basePeopleURl}NICOLAS-min${p}`,
    socialLinks: [
      { url: 'https://depicted-candela.space/', icon: socialIcons.www },
      { url: `${socialUrls.linkedin}nicalcoca`, icon: socialIcons.linkedin },
      { url: `${socialUrls.x + dc}`, icon: socialIcons.x },
      { url: `${socialUrls.youtube}@${dc}`, icon: socialIcons.youtube },
      { url: `${socialUrls.instagram + dc}`, icon: socialIcons.instagram}
    ],
  },
  {
    title: 'CGA',
    name: 'Javier Daza',
    role: 'Chief Growth Architect',
    studies: 'Ingeniero de Producción',
    photo: `${basePeopleURl}JAVIER-min${j}`,
    socialLinks: [
      { url: `${socialUrls.linkedin}javier-daza-5201b1176`, icon: socialIcons.linkedin },
      { url: `${socialUrls.instagram}javiflak`, icon: socialIcons.instagram }
    ],
  },
  // Add more collaborators as needed
];

export default collaborators;
