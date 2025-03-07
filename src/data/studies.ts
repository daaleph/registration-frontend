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
        reason: "¿Están los trabajadores del conocimiento perdiendo sus habilidades de pensamiento crítico en la era de la IA? Esta encuesta a 319 profesionales revela una realidad matizada. Aunque la IA generativa puede reducir el esfuerzo en algunas tareas de pensamiento crítico, también cambia cómo pensamos críticamente. En lugar de buscar información, la verificamos. En lugar de resolver problemas, integramos las soluciones de la IA. Curiosamente, la confianza en la IA puede obstaculizar el pensamiento crítico, mientras que la confianza en uno mismo lo fomenta. ¿Cómo ser diferente? La IA generativa transforma, pero no elimina, la necesidad de pensamiento crítico, destacando la importancia de adaptar nuestras habilidades a esta nueva era de colaboración entre humanos e IA.",
        authors: ['Hao-Ping (Hank) Lee', 'Ian Drosos', 'Advait Sarkar', 'Sean Rintel', 'Nicholas Wilson', 'Lev Tankelevitch', 'Richard Banks']
    },
    {
        title: 'A long-term timeline of technology',
        thumbnail: `${baseUrl}technologicalGrowth-min${pn}`,
        link: `${h}ourworldindata.org/technology-long-run`,
        reason: "Nunca innovar y aprender fue tan fácil. Ahora es el momento de los sistemas de IA, los grandes avances de Ciencias de la Salud y Cohetes. ¿Lo que sigue? No estás preparado para los sistemas IA más avanzados.",
        authors: ['Our World in Data']
    },
    {
        title: 'The influences of the Big Five personality traits on academic achievements: Chain mediating effect based on major identity and self-efficacy',
        thumbnail: `${baseUrl}wang2023-min${pn}`,
        link: `${h}pubmed.ncbi.nlm.nih.gov/36777199/`,
        reason: "Aprovechando los cinco grandes rasgos de personalidad, Aleph Space optimiza el aprendizaje al personalizar el contenido y las técnicas de estudio. La conciencia y la extraversión impactan significativamente el logro académico a través de la autoeficacia, potenciada aún más por una fuerte identidad con la carrera. Este enfoque personalizado maximiza los resultados de aprendizaje y fomenta un compromiso significativo, creando un camino poderoso hacia el éxito.",
        authors: ['Hui Wang', 'Yuxia Liu', 'Zhanying Wang', 'Ting Wang']
    },
    {
        title: 'Personality Predictors of Academic Outcomes: Big Five Correlates of GPA and SAT Scores',
        thumbnail: `${baseUrl}wang2023-min${pn}`,
        link: `${h}psycnet.apa.org/doiLanding?doi=10.1037%2F0022-3514.93.1.116`,
        reason: "La personalidad predice significativamente los resultados académicos, independientemente de la inteligencia. La conciencia predijo de manera robusta el GPA, mediado por el esfuerzo y la capacidad académica percibida. La apertura predijo las puntuaciones verbales del SAT, mediado por la inteligencia verbal percibida. Estos hallazgos destacan la importancia de la personalidad en el éxito académico, más allá de las medidas tradicionales.",
        authors: ['Erik E Noftle', 'Richard W Robins']
    },
    {
        title: 'Learning Strategy, Personality Traits and Academic Achievement of University Students',
        thumbnail: `${baseUrl}marcela2014-min${pn}`,
        link: `${h+w}sciencedirect.com/science/article/pii/S1877042815010800`,
        reason: "Revelación de ingredientes secretos: no solo inteligencia, sino también personalidad y estrategias de aprendizaje. Es emocionante ver cómo la conciencia y la apertura pueden empoderar a los estudiantes para adoptar un aprendizaje efectivo, mejorando sus calificaciones e encendiendo una pasión por el conocimiento. Este estudio ilumina un camino hacia el aprendizaje personalizado, donde comprender las fortalezas únicas de tu hijo puede desbloquear un futuro más brillante.",
        authors: ['Marcela Verešová']
    },
    {
        title: 'Big Five personality traits and academic performance: A meta-analysis',
        thumbnail: `${baseUrl}mammadov2021-min${pn}`,
        link: `${h+w}pubmed.ncbi.nlm.nih.gov/34265097/`,
        reason: "¡Para estudiantes que luchan alcanzan  do su máximo potencial! Es increíblemente revelador aprender cómo rasgos de personalidad como la conciencia y la apertura pueden influir en los estilos de aprendizaje y, en última instancia, impactar el GPA. Imagina un aula donde la enseñanza se adapte a estos rasgos, despertando curiosidad intelectual y desbloqueando una comprensión más profunda. Este estudio ofrece una hoja de ruta prometedora para que los educadores creen un entorno de aprendizaje donde cada estudiante pueda prosperar.",
        authors: ['Sakhavat Mammadov']
    },
    {
        title: 'The Big Five personality traits, learning styles, and academic achievement',
        thumbnail: `${baseUrl}komarraju2011-min${pn}`,
        link: `${h+w}sciencedirect.com/science/article/abs/pii/S0191886911002194`,
        reason: "¿Alguna vez te has preguntado por qué algunos estudiantes avanzan fácilmente en la universidad mientras otros luchan? Esta investigación revela un factor oculto: la personalidad. Resulta que rasgos como la conciencia y la amabilidad no solo son buenos para hacer amigos, ¡son oro académico! Realmente influyen en cómo aprenden los estudiantes, allanando el camino para mejores calificaciones. Pero hay un giro: la curiosidad intelectual, vinculada a la apertura, potencia el éxito académico cuando se combina con un aprendizaje profundo y reflexivo. Imagina estudiantes que no solo memorizan datos, sino que realmente comprenden y aplican el conocimiento, conectándolo con sus propias vidas. Ese es el poder de la personalidad trabajando de la mano con el estilo de aprendizaje. Comprender la personalidad única de un estudiante puede desbloquear su potencial académico, es nuestro valor, transformando su experiencia universitaria de una lucha en un viaje de descubrimiento y logros.",
        authors: ['Meera Komarraju', 'Steven J. Karau', 'Ronald R. Schmeck' , 'Alen Avdic']
    },
    {
        title: 'A Meta-Analysis of Ten Learning Techniques',
        thumbnail: `${baseUrl}donoghue2021-min${pn}`,
        link: `${h+w}frontiersin.org/journals/education/articles/10.3389/feduc.2021.581216/full`,
        reason: "¿Quieres destacar en exámenes? ¡Olvídate de estudiar a última hora! Este metanálisis revela la sorprendente efectividad de las sesiones de estudio espaciadas y las pruebas prácticas. Aunque resaltar y resumir puede parecer productivo, no tienen el mismo impacto. Este estudio no solo trata sobre calificaciones; se trata de fomentar una comprensión profunda y una retención a largo plazo. Desafía a los educadores a repensar sus métodos de enseñanza y empoderar a los estudiantes con técnicas de aprendizaje efectivas. La solución es que el aprendizaje inteligente, no el aprendizaje duro, es la clave para desbloquear el éxito académico.",
        authors: ['Gregory M Donoghue', 'John A C Hattie']
    },
    {
        title: 'External and Internal Barriers to Studying Can Affect Student Success and Retention in a Diverse Classroom',
        thumbnail: `${baseUrl}clement2016-min${pn}`,
        link: `${h}pubmed.ncbi.nlm.nih.gov/28101261/`,
        reason: "¿Enfrentamos obstáculos ocultos en las aulas de ciencias? Este estudio revela la preocupante realidad de los estudiantes que equilibran trabajos, familia: poco apoyo académico es poco tiempo para prosperar. Es desgarrador que estas presiones externas, combinadas con luchas internas como habilidades de autorregulación deficientes, conducen a tasas de abandono más altas. Aunque el tiempo de estudio por sí solo no garantiza las mejores calificaciones, es crucial para mantenerse en el juego. Esta investigación llama a los educadores a reconocer estas barreras y crear un entorno más solidario, transformando cómo aprendemos en oportunidades para el éxito. ¿La lección? El éxito no se trata solo de inteligencia; también se trata de apoyo.",
        authors: ['Laurence Clement']
    },
    {
        title: 'Understanding Difficulties and Resulting Confusion in Learning: An Integrative Review',
        thumbnail: `${baseUrl}lodge2018-min${pn}`,
        link: `${h}frontiersin.org/journals/education/articles/10.3389/feduc.2018.00049/full`,
        reason: "¿Está el exceso de estudio dañando nuestras relaciones? Este estudio introduce el 'lado oscuro' del estudio: la Escala de Conflicto entre Estudio y Relaciones. Estudiar excesivamente puede, tensar las relaciones con la familia y los amigos, a veces incluso generando conflictos en la escuela. Curiosamente, los GPA más altos se relacionaron con más quejas de los seres queridos, sugiriendo una difícil compensación. ¿La conclusión? Aunque el éxito académico es importante, no debería venir a costa de relaciones saludables. Podemos identificar a estudiantes en riesgo, permitiendo una intervención temprana promoviendo un enfoque equilibrado de aprendizaje para la vida.",
        authors: ['Jason M Lodge', 'Gregor Kennedy', 'Lori Lockyer', 'Amael Arguel', 'Mariya Pachman']
    },
    {
        title: 'The effect of cognitive ability on academic achievement: The mediating role of self-discipline and the moderating role of planning',
        thumbnail: `${baseUrl}shi2022-min${pn}`,
        link: `${h}pubmed.ncbi.nlm.nih.gov/36275240/`,
        reason: "¡Desvelando los secretos del éxito académico! Este estudio profundiza en cómo las habilidades cognitivas, la autodisciplina y la planificación afectan las calificaciones de los estudiantes de secundaria. Es fascinante ver el poderoso papel de la autodisciplina en convertir la inteligencia en logros reales. Mejor aún, una buena planificación amplifica este efecto, especialmente en materias como matemáticas e inglés que demandan un pensamiento enfocado. ¿La moraleja? No se trata solo de ser brillante; se trata de aprovechar esa brillantez a través del autocontrol y un plan bien elaborado. Este estudio ofrece valiosas perspectivas para los educadores que buscan empoderar a sus estudiantes para que alcancen su máximo potencial.",
        authors: ['Yueqi Shi', 'Shaowei Qu']
    },
];

export default studies; 

export function generateLoremIpsum(paragraphs: number = 1): string {
    const loremIpsum = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. 
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, 
        lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. 
        Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
    `;
    return Array(paragraphs).fill(loremIpsum).join('\n\n');
}