import {
  Brain,
  HeartHandshake,
  MessageCircleMore,
  Puzzle,
  Speech,
  Users,
} from 'lucide-react'

export const contact = {
  whatsappDisplay: '+54 9 11 3140-4501',
  whatsappUrl:
    'https://wa.me/5491131404501?text=Hola%2C%20quisiera%20realizar%20una%20consulta%20sobre%20la%20atenci%C3%B3n%20en%20Consultorio%20Integral%20Psique.',
  email: 'lic.jimenacofman@gmail.com',
  instagram: '@consultoriointegral_psique',
  instagramUrl: 'https://www.instagram.com/consultoriointegral_psique/',
  address: 'Rotta 219, Monte Grande, Buenos Aires 1842',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rotta%20219%2C%20Monte%20Grande%2C%20Buenos%20Aires%201842',
  hours: 'Lunes a viernes, de 9 a 18 h',
}

export const services = [
  {
    title: 'Psicología',
    description:
      'Acompañamiento clínico infantojuvenil desde un enfoque cognitivo conductual, adaptado a cada etapa.',
    icon: Brain,
  },
  {
    title: 'Psicopedagogía',
    description:
      'Evaluación y acompañamiento de los procesos de aprendizaje, contemplando el contexto de cada niño o adolescente.',
    icon: Puzzle,
  },
  {
    title: 'Fonoaudiología',
    description:
      'Abordaje profesional del lenguaje y la comunicación, en articulación con la familia y el equipo cuando corresponde.',
    icon: Speech,
  },
  {
    title: 'Evaluación WISC-V',
    description:
      'Evaluación cognitiva mediante WISC-V y espacio de devolución para orientar los próximos pasos.',
    icon: MessageCircleMore,
  },
  {
    title: 'Habilidades sociales',
    description:
      'Talleres para practicar recursos de comunicación, interacción y participación en un entorno cuidado.',
    icon: Users,
  },
  {
    title: 'Orientación a padres',
    description:
      'Un espacio para comprender situaciones cotidianas y construir herramientas de acompañamiento familiar.',
    icon: HeartHandshake,
  },
]

export const faqs = [
  {
    question: '¿A quiénes está dirigida la atención?',
    answer:
      'Trabajamos con niños, niñas y adolescentes, acompañando también a sus familias cuando el proceso lo requiere.',
  },
  {
    question: '¿La atención es presencial o virtual?',
    answer:
      'La atención presencial se realiza en Monte Grande. Psicología y orientación a padres también pueden realizarse de manera virtual, según cada situación.',
  },
  {
    question: '¿Cómo se solicita un primer turno?',
    answer:
      'Podés escribirnos por WhatsApp. Haremos un relevamiento breve del motivo de consulta para asignar al profesional adecuado y coordinar el primer encuentro.',
  },
  {
    question: '¿Qué incluye la evaluación WISC-V?',
    answer:
      'Es una evaluación cognitiva administrada por un profesional y contempla una instancia de devolución para conversar los resultados y orientaciones.',
  },
  {
    question: '¿Atienden por obra social?',
    answer:
      'Contamos con atención mediante obras sociales para pacientes con Certificado Único de Discapacidad. Consultanos para verificar la cobertura de cada caso.',
  },
  {
    question: '¿Dónde está ubicado el consultorio?',
    answer:
      'Estamos en Rotta 219, Monte Grande, Buenos Aires. Podés abrir la ubicación desde el enlace de Google Maps al final de la página.',
  },
]

export const gallery = [
  {
    src: '/assets/consultorio-infantil.jpeg',
    alt: 'Consultorio infantil luminoso con mesa, sillas, juegos y materiales de trabajo',
    label: 'Espacio de trabajo infantil',
  },
  {
    src: '/assets/consultorio-trabajo.jpeg',
    alt: 'Mesa preparada con útiles y materiales para actividades psicopedagógicas',
    label: 'Recursos para aprender y expresarse',
  },
  {
    src: '/assets/consultorio-entrevista.jpeg',
    alt: 'Consultorio privado con escritorio, sillones y luz natural',
    label: 'Un entorno cuidado y confidencial',
  },
  {
    src: '/assets/consultorio-acceso.jpeg',
    alt: 'Interior del consultorio con biblioteca infantil y acceso a los espacios de atención',
    label: 'Consultorio Integral Psique',
  },
]
