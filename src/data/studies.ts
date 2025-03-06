import { Study } from "@/types/data";

const h = 'https://';
const w = 'www.';
const p = '.pdf';
const pn = '.png';

const baseUrl = 'https://pub-dbd642a535de4512bfae0a5fd40ab343.r2.dev/MARKETING/STUDIES/';

const studies: Study[] = [
    {
        title: 'The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers',
        thumbnail: `${baseUrl}leeEtAl2025${pn}`,
        link: `${h + w}microsoft.com/en-us/research/wp-content/uploads/2025/01/lee_2025_ai_critical_thinking_survey${p}`,
        reason: generateLoremIpsum(1),
        authors: ['Hao-Ping (Hank) Lee', 'Ian Drosos', 'Advait Sarkar', 'Sean Rintel', 'Nicholas Wilson', 'Lev Tankelevitch', 'Richard Banks']
    },
    {
        title: 'A long-term timeline of technology',
        thumbnail: `${baseUrl}technologicalGrowth-min${pn}`,
        link: `${h}ourworldindata.org/technology-long-run`,
        reason: generateLoremIpsum(1),
        authors: ['Our World in Data']
    },
    {
        title: 'The influences of the Big Five personality traits on academic achievements: Chain mediating effect based on major identity and self-efficacy',
        thumbnail: `${baseUrl}wang2023-min${pn}`,
        link: `${h}pubmed.ncbi.nlm.nih.gov/36777199/`,
        reason: generateLoremIpsum(1),
        authors: ['Hui Wang', 'Yuxia Liu', 'Zhanying Wang', 'Ting Wang']
    }
];

export default studies;

function generateLoremIpsum(paragraphs: number = 1): string {
    const loremIpsum = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. 
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, 
        lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. 
        Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
    `;
    console.log(`${baseUrl}technologicalGrowth${pn}`);
    return Array(paragraphs).fill(loremIpsum).join('\n\n');
}