type HookEntry = [string, string, string];

interface HooksDictionary {
  [key: string]: HookEntry;
}

const hooks: HooksDictionary = {
  "estudiar": [
    "Nos dijeron: 'Estudia. Estudia más. Estudia otra vez.' Nos lo dijeron durante años, pero el caos sigue ahí.",
    "¿Y si te dijera que hay solución para este problema?",
    "Imagina convertir la confusión en un trampolín hacia el autodominio. Nuestro enfoque con IA transforma esa energía en ventaja usando repetición espaciada y estímulos psicológicos."
  ],
  "resaltar": [
    "¿Acaso tú resaltas, subrayas, resaltas, subrayas… y olvidas?",
    "Considera modificar esto.",
    "Tu mente te ha engañado por años, pero nuestro sistema de repetición espaciada con IA te invita a dejar el subrayado y activar tu retención. El resultado: claridad y una sed de conocimiento que transformará tu vida."
  ],
  "memorizar": [
    "Reflexiona, ¿has estado memorizando a toda prisa en el corto plazo y luego olvidando?",
"Muéstrame tu estrategia.",
"El método de acumular todo de una vez sabotea tu memoria. Nuestra solución: lecturas de 15 minutos, comprobaciones psicológicas y cuestionarios espaciados que convierten el caos en autodominio y comprensión."
  ],
  "aprendizaje": [
    "Dijeron que aprender debe ser tranquilo y cómodo… ¿Lo es?",
"Quiero saber más.",
"El crecimiento mental surge de la tensión saludable y el significado. Aleph te impulsa con preguntas como: '¿Por qué importa? ¿Quién se beneficia?' Deja la complacencia y enciende tu propósito."
  ],
  "aburrimiento": [
    "El aburrimiento es un estado propenso al fracaso, así que domínalo y conviértelo en tu aliado.",
"Enséñame el método.",
"Usamos metáforas, motivación externa y retroalimentación en tiempo real para convertir sesiones aburridas en emocionantes 'propósitos'. Aprender puede ser liberador con nuestro método, probado estadísticamente."
  ],
  "retencion": [
    "¿Sientes que tras leer cinco páginas no recuerdas la mayoría de las cosas?",
"Muéstrame la técnica.",
"Tu impotencia puede ser tu mayor arma si la controlas. Es la oportunidad para reutilizar conocimientos, recordarlos con cuestionarios y fortalecer tu creatividad en la memoria a corto y largo plazo."
  ],
  "proposito": [
    "Dijeron que todo se trata de aprobar el examen o un proyecto académico… pero ese es el verdadero peligro.",
"Explícate, necesito entender más.",
"Nuestro sistema te impulsa a dar significado a cada sesión, transformando conocimiento fugaz en sabiduría duradera. ¿El resultado? No solo apruebas, sino que superas tus límites creativos."
  ],
  "miedo": [
    "¿Quieres silenciar la temida voz de 'Voy a fallar'? Sorpréndela con intención paradójica.",
"Dime más, por favor.",
"Incorporamos psicología analítica y filosofía, enseñándote a reconocer vacíos teóricos y a diseñar estrategias adaptadas a tu memoria, identificando el material que mejor retienes. La ironía desarma antiguas ansiedades."
  ],
  "acumulacion": [
    "Deja de acumular conocimiento que no usas y no sirve a la vida.",
"Dime cómo reorientar la búsqueda.",
"Espacia tu práctica, recuerda activamente y usa nuestro Bot de Análisis de PDFs para eliminar el desorden mental. Cada nuevo tema encajará como la pieza final de un rompecabezas gracias a nuestros algoritmos."
  ],
  "control": [
    "¿Crees que lo tienes todo bajo control releyendo? No caigas en la soberbia y atrévete a descubrir lo contrario.",
"Explica tu idea.",
"Nuestra plataforma revela cómo la relectura por sí sola puede ser una cinta de correr ilusoria. Fragmentamos ese ciclo con cuestionarios guiados, mapas mentales e intervalos espaciados, llevándote al gratificante impacto de superar tus propias expectativas."
  ],
  "objetivos": [
    "Has estado persiguiendo tus objetivos como un hámster en una rueda, gastando energía valiosa que no te lleva a ningún propósito plausible.",
"Quiero reorganizarme para ser funcional y servir al bien común.",
"Y, ¿si decides bajar de la rueda para atraer tus sueños? Prepárate: esto no es lo que te han enseñado, pero es exactamente lo que necesitas."
  ],
  "recordar": [
    "Cuando intentas recordar, tu información vuelve parcialmente y desorganizada.",
"¿Cómo lo supiste? Necesito orientación.",
"No es tu culpa, es cosa de tu cerebro. Si aceptas tus vacíos teóricos y decides actuar, podrás ser tu mejor versión con una gran capacidad de retención. Todo depende de nuestros algoritmos de IA y tu decisión de cambiar."
  ],
  "enfoque": [
    "Has estado invirtiendo energía en resolver el problema equivocado de aprehensión cognitiva todo este tiempo.",
"¿Cuál es el problema? Quiero entender.",
"No importa cuánto estudies, sino cuánto no lo haces. Menos acumulación significa más retención. Nuestros algoritmos de IA organizan la información clave con cuestionarios guiados y prácticas espaciadas para ayudarte a cumplir tus sueños."
  ],
  "distraccion": [
    "Te han dicho que te concentres más, pero ¿y si la distracción es la clave?",
"Parece paradójico, dime más.",
"Tu cerebro busca novedad y rechaza la monotonía. No luches contra el caos, úsalo a tu favor, como una planta que aprovecha cada rayo de luz para crecer."
  ],
  "sistema": [
   "No eres perezoso, solo estás atrapado en un sistema que desconoce la realidad objetiva.",
"Quiero entender.",
"El problema son los métodos obsoletos. Con nuestros algoritmos de IA, optimizarás tu energía y desarrollarás recordación activa."
  ],
  "concentracion": [
    "Has estado leyendo la misma frase una y otra vez, ¿verdad?",
"Es curioso que sepas eso de mí, necesito cambiar.",
"Eso no es falta de concentración, es falta de técnica y significado. ¿Y si cada lectura que hicieras te provocara la sensación de que importa y, posteriormente, pudieras aplicar lo aprendido? Imagina la diferencia."
  ],
  "velocidad": [
    "Has estado intentando aprender más rápido, pero ¿y si la respuesta fuera ir más lento?",
"Parece que te estás contradiciendo, sin embargo, cuéntame más.",
"Acumular información sin estrategia te deja estancado. Con práctica espaciada y enfoque, alcanzarás el dominio en tu área y cumplirás tus sueños."
  ],
  "debilidades": [
    "Has estado intentando superar tus debilidades, pero ¿y si fueran tu mayor fortaleza?",
"Muéstrame cómo mis debilidades se pueden transformar en fortalezas.",
"Las limitaciones en tu aprendizaje son oportunidades. Con nuestro perfilamiento psicológico (BFI) basado en IA y modelos estadísticos, te guiaremos para enfocar tu energía en un propósito con resultados gratificantes."
  ],
  "trabajo": [
    "Te han dicho que trabajes más duro, pero ¿y si trabajar de forma más dura no fuera suficiente?",
"¿Cómo así? Si es lo que he tratado de hacer hasta ahora. Quiero saber más, me intriga.",
"El trabajo es fuerza por distancia, pero desgastarte físicamente no tiene sentido si buscas una vida gratificante. El secreto es trabajar inteligentemente: con nuestros algoritmos de IA entenderás tu entorno y crearás herramientas para simplificar el trabajo. Todo empieza rompiendo las reglas actuales."
  ],
  "reglas": [
    "Te han dicho que sigas las reglas, pero ¿y si las reglas son el problema?",
"¿Dime un ejemplo de una regla que sea un problema a la vez para poder entenderte?",
"La búsqueda de materia y energía, como dijo Einstein, muestra que son lo mismo. Consumir sin límite es visto como progreso, pero también es un problema para la humanidad. Los avances ocurren al liberarte de sistemas que te frenan. ¿Listo para reescribir el guion del conocimiento?"
  ],
  "confusion": [
    "Has estado persiguiendo la claridad, pero ¿y si la confusión es la clave?",
"No te entiendo, por favor explícame.",
"Reconocer que no podemos saberlo todo requiere valentía. Buscar claridad en la ciencia enfoca tu energía en objetivos reales y sueños alcanzables. La claridad trae nuevos retos, pero con nuestros algoritmos de IA optimizarás tu energía, lograrás tus metas y emprenderás nuevos proyectos. En el caos del no saber está el descubrimiento. ¿Lo aceptarás?"
  ],
  "perfeccion": [
    "Te han dicho que busques la perfección, pero ¿y si la imperfección es tu superpoder?",
"Quiero entender.",
"Las grietas en tu proceso son oportunidades para crecer. Con el perfilamiento psicológico (BFI) y nuestros algoritmos de IA, identificarás y abordarás esas grietas para desarrollar un proceso cognitivo efectivo y alineado al bien común."
  ],
  "cantidad": [
    "Has estado intentando aprender todo, pero ¿y si aprender menos es la respuesta?",
"Dime el secreto.",
"El secreto no está en saberlo todo, sino en saber qué es lo que realmente importa."
  ],
  "oportunidad": [
    "Te han dicho que te mantengas en tu carril, pero ¿y si la verdadera oportunidad está fuera del camino conocido?",
"Quiero explorar.",
"El conocimiento más valioso a menudo se encuentra donde nadie más está buscando."
  ],
  "presente": [
    "Te han dicho que te enfoques en el futuro, pero ¿y si el presente es todo lo que necesitas?",
"Muéstrame cómo.",
"Transforma tu aprendizaje aprovechando el presente. El pasado y el futuro son abismos que no merecen tanta energía. Concéntrate."
  ],
  "fracaso": [
    "Te han dicho que evites el fracaso, pero ¿y si el fracaso es el único camino hacia adelante?",
"Quiero entender.",
"Cada error es un paso más cerca de la maestría, si actúas para entenderlo y resolverlo."
  ],
  "eficiencia": [
    "Te han dicho que trabajes más duro, pero ¿y si trabajar inteligentemente es el secreto?",
"Dime más.",
"Los aprendices efectivos usan sus habilidades para crear sistemas que optimizan energía y trabajo, siempre orientados al bien común."
  ],
  "proceso": [
    "Te han dicho que confíes en el proceso, pero ¿y si el proceso no es significativo estadísticamente?",
"Quiero cambiar.",
"Es hora de dejar de seguir y empezar a aplicar un sistema de técnicas de aprendizaje interrelacionadas que funcione para ti, técnicas de aprendizaje respaldadas por la estadística."
  ],
  "limites": [
    "Te han dicho que pienses fuera de la caja, pero ¿y si la caja no existe?",
"Quiero descubrir.",
"Los límites que ves son ilusiones. La verdadera pregunta es: ¿hasta dónde estás dispuesto a llegar?"
  ],
  "potencial": [
    "Desbloquea tu potencial. Conquista tus desafíos. Domina tus estudios.",
"Quiero empezar.",
"Nuestra plataforma de aprendizaje impulsada por IA está aquí para ayudarte."
  ],
  "esfuerzo": [
    "Olvida el estudio interminable. Abraza el aprendizaje mientras valoras el esfuerzo.",
"Muéstrame cómo.",
"Nuestro perfil psicológico te guiará hacia un objetivo acorde a tus intereses. Verás que el esfuerzo será gratificante y progresivo, convirtiéndose en un gimnasio cognitivo para construir tu mejor versión."
  ],
  "comprension": [
    "Deja atrás el frenesí de subrayar. Desbloquea una comprensión real.",
"Quiero aprender.",
"Nuestro sistema transforma la forma en que aprendes para siempre."
  ],
  "memoria": [
    "¿Cansado de olvidar? Prepárate para recordar creativamente.",
"Necesito ayuda.",
"Experimenta el poder de la práctica de recuperación activa, para que, cuando quieras recordar algo objetivo a voluntad, la información llegue de forma coherente y armonice con la realidad del entorno."
  ],
  "progreso": [
    "Deja de luchar. Empieza a prosperar.",
    "Quiero avanzar.",
    "Nuestra plataforma impulsada por IA hace que aprender sea atractivo y efectivo."
  ],
  "exito": [
    "Reimagina el aprendizaje. Redefine el éxito.",
    "Quiero más.",
    "Nuestro enfoque innovador te empodera para alcanzar tus metas."
  ],
  "viaje": [
    "Aprender no debería ser una tarea. Debería ser un viaje.",
    "Quiero comenzar.",
    "Únete a nosotros en el camino hacia la maestría."
  ],
  "dominio": [
    "Entiende a tu cerebro. Domina temas acordes con tu perfil psicológico.",
"Quiero dominar.",
"Nuestra plataforma utiliza IA de vanguardia para un aprendizaje óptimo."
  ],
  "transformacion": [
    "Transforma tus hábitos de estudio. Transforma tu vida.",
"Quiero transformarme.",
"Experimenta la diferencia por medio de la útil herramienta Aleph."
  ],
  "entendimiento": [
    "Más allá de la memorización. Hacia una verdadera comprensión.",
    "Quiero entender.",
    "Nuestro sistema fomenta una comprensión profunda y una retención duradera."
  ],
  "instintos": [
    "Te han dicho que confíes en tus instintos, pero ¿y si tus instintos están saboteando tu éxito?",
"¿Cómo logro saber mis intereses?",
"La verdad sobre el aprendizaje podría ser lo opuesto a lo que siempre has creído. Por eso es imperativo que culmines el proceso de perfilamiento psicológico (BFI)."
  ],
  "preguntas": [
    "Has estado persiguiendo respuestas, pero ¿y si las preguntas son más poderosas?",
"Quiero descubrir.",
"La pregunta correcta puede desbloquear más de lo que mil respuestas podrían. Usa la técnica de la mayéutica a tu favor."
  ],
  "detalles": [
    "Te han dicho que te enfoques en los detalles, pero ¿y si estás perdiendo de vista el panorama general?",
    "Muéstrame más.",
    "A veces, las distracciones más pequeñas esconden las mayores oportunidades."
  ],
  "errores": [
    "Te han dicho que evites los errores, pero ¿y si los errores son el único camino hacia adelante?",
"Quiero aprender.",
"Cada error es un paso más cerca de la maestría si sabes cómo aprovecharlo."
  ],
  "constancia": [
    "Te han dicho que seas constante, pero ¿y si la inconsistencia es la clave del crecimiento?",
"Dime más.",
"Romper el ritmo puede ser clave. Leer 100 hojas en un día es útil, pero distribuirlas según tus intereses y perfil psicológico en varios días mejora la comprensión. Esto se basa en la técnica de práctica espaciada, respaldada por la estadística."
  ],
  "simplicidad": [
    "Te han dicho que simplifiques, pero ¿y si la complejidad es donde ocurre la magia?",
"Quiero entender.",
"Las capas que evitas podrían contener las respuestas que buscas. Ve armando tu conocimiento a partir de ideas que serás capaz de simplificar."
  ],
  "libertad": [
    "Te han dicho que mantengas el control, pero ¿y si no entiendes en qué consiste el control y qué parámetros seguir?",
"Quiero aprender a liberarme.",
"Cumple tus sueños en armonía con el bien común, reduciendo el sufrimiento ajeno. No puedes ser libre si buscas placer dañando a otros. Nuestro perfil psicológico identificará tus intereses y te guiará hacia el mejor objetivo."
  ]
};

export default hooks;