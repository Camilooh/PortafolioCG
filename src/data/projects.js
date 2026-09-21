// Fuente única de datos de los proyectos (usada por la lista y por la página de detalle).
//
// Campos opcionales del proyecto: imageFit ('cover' por defecto) e imageBg (fondo detrás de la imagen).
//
// Campos opcionales dentro de `detail` (la página solo muestra las secciones que tengan contenido):
//   summary       -> Frase corta de mi aporte, se muestra en las tarjetas
//   role          -> Mi rol en el proyecto (texto corto)
//   team          -> Equipo / contexto (texto corto)
//   period        -> Periodo o año (texto corto)
//   overview      -> Resumen del proyecto (array de párrafos)
//   contributions -> Mi participación: lista de aportes concretos. Cada item puede ser un
//                    string o un objeto { title, text } (el título se muestra en negrita)
//   challenges    -> Retos técnicos y cómo los resolví
//   learnings     -> Aprendizajes
//   gallery       -> [{ src: require('...'), caption: '...' }]
//   links         -> [{ label: 'Devlog', url: '...' }] enlaces extra

export const projects = [
  // --- Web ---
  {
    slug: 'portafoliocg',
    title: 'PortafolioCG',
    image: require('../assets/images/Logo.png'),
    description: 'Portafolio personal desarrollado con React. Diseño moderno y responsivo que muestra mis proyectos, habilidades y formas de contacto.',
    tags: ['React', 'JavaScript', 'CSS'],
    category: 'Web',
    imageFit: 'contain',
    imageBg: '#EAF2EC',
    demo: 'https://camilooh.github.io/PortafolioCG',
    github: 'https://github.com/Camilooh/PortafolioCG',
    detail: {
      role: 'Diseño y desarrollo completo',
      team: 'Proyecto personal',
      contributions: [
        'Diseño de la interfaz responsiva de todas las páginas.',
        'Desarrollo de la aplicación en React con navegación mediante React Router.',
        'Listado de proyectos con filtros por categoría y una página de detalle por proyecto.',
        'Publicación en GitHub Pages.',
      ],
    },
  },
  {
    slug: 'consistec-sa',
    title: 'Consistec S.A',
    image: require('../assets/images/Consistec.png'),
    description: 'Diseño de página web estática para una empresa dedicada a la construcción de Centros de Procesamiento de Datos y de Telecomunicaciones.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    category: 'Web',
    demo: 'https://www.consistecsa.com',
    github: null,
    detail: {
      role: 'Diseño y desarrollo del sitio web',
      team: 'Proyecto para cliente',
      contributions: [
        'Diseño de la página web estática de la empresa.',
        'Maquetación con HTML, CSS y JavaScript.',
      ],
    },
  },
  // --- Apps ---
  {
    slug: 'neuronautas',
    title: 'Neuronautas',
    image: require('../assets/images/NeuronautasMain.png'),
    description: 'Aplicación móvil para Android e iOS con actividades de enseñanza para niños. Aplicación de refuerzo educativo con minijuegos y videos.',
    tags: ['Unity', 'C#', 'Firebase', 'React'],
    category: 'Apps',
    imageFit: 'contain',
    imageBg: '#EEF3DD',
    demo: null,
    appStore: 'https://apps.apple.com/ec/app/neuronautas/id6753188244',
    playStore: 'https://play.google.com/store/apps/details?id=com.DefaultCompany.Neuri&pcampaignid=web_share',
    github: null,
    detail: {
      summary: 'Arquitectura, minijuegos, backend y publicación',
      contributions: [
        {
          title: 'Arquitectura de la app',
          text: 'Diseñé una base de código modular y escalable en Unity, con separación clara entre datos, lógica e interfaz.',
        },
        {
          title: 'Contenido dinámico',
          text: 'Implementé un sistema que permite actualizar y organizar el contenido de la app sin necesidad de publicar nuevas versiones, con control del contenido en tiempo real mediante Firebase Storage y Firestore.',
        },
        {
          title: 'Autenticación de usuarios',
          text: 'Diseñé y desarrollé el sistema de autenticación de usuarios con el SDK de Firebase Auth y Firestore.',
        },
        {
          title: 'Minijuegos',
          text: 'Desarrollé desde cero aproximadamente 75 minijuegos educativos, con progresión por rondas, sistema de recompensas, animaciones 2D y diseño de audio.',
        },
        {
          title: 'Backend y seguridad',
          text: 'Integré servicios en la nube con entornos de desarrollo y producción separados, y con la protección de datos como criterio de diseño por tratarse de un público infantil.',
        },
        {
          title: 'Publicación y entrega',
          text: 'Gestioné builds, pruebas y despliegues en ambas tiendas (App Store y Google Play), incluyendo pipelines automatizados para iOS, además del mantenimiento posterior a la publicación.',
        },
        {
          title: 'Documentación',
          text: 'Creé y mantengo documentación técnica interna para facilitar el trabajo del equipo y el onboarding.',
        },
      ],
    },
  },
  // --- Videojuegos ---
  {
    slug: 'dyst02pia',
    title: 'Dyst02pia',
    image: require('../assets/images/Dyst02pia.png'),
    description: 'Juego en primera persona con narrativa distópica ambientado en un mundo post-apocalíptico. Trabajo conjunto realizado en Unreal Engine junto a compañeros del diplomado en diseño de videojuegos. Mi rol fue el de programador de sonido y ambiente.',
    tags: ['Unreal', 'C++', 'Blueprints'],
    category: 'Videojuegos',
    demo: 'https://chaosmonkeystudios.itch.io/dysto2pia',
    github: null,
    detail: {
      role: 'Programador de sonido y ambiente',
      team: 'Chaos Monkey Studios — diplomado en diseño de videojuegos',
      contributions: [
        'Programación del sistema de sonido del juego.',
        'Programación del ambiente del mundo post-apocalíptico.',
      ],
    },
  },
  {
    slug: 'unreal-shooter',
    title: 'Unreal-Shooter',
    image: require('../assets/images/Unreal.jpg'),
    description: 'Concepto de shooter en primera persona desarrollado en Unreal Engine. Sin gráficos personalizados, el enfoque principal fue la programación de mecánicas de disparo, enemigos y sistema de salud usando C++ únicamente.',
    tags: ['Unreal', 'C++'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/Unreal-Shooter',
    detail: {
      summary: 'Disparo, enemigos y salud en C++',
      contributions: [
        'Programación de las mecánicas de disparo en C++.',
        'Programación de los enemigos.',
        'Sistema de salud.',
      ],
    },
  },
  {
    slug: 'fpshooter-unreal-bp',
    title: 'FPShooter-Unreal-BP',
    image: require('../assets/images/Unreal.jpg'),
    description: 'FPS shooter básico desarrollado en Unreal Engine usando Blueprints. Incluye mecánicas de disparo, recarga, salud y enemigos con IA simple.',
    tags: ['Unreal', 'Blueprints'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/FPShooter-Unreal-BP',
    detail: {
      summary: 'Disparo, recarga, salud e IA',
      contributions: [
        'Mecánicas de disparo y recarga con Blueprints.',
        'Sistema de salud.',
        'Enemigos con IA simple.',
      ],
    },
  },
  {
    slug: 'angry-pixels',
    title: 'Angry Pixels',
    image: require('../assets/images/AngryPixels.png'),
    description: 'Juego 2D desarrollado en Unity inspirado en el clásico Angry Birds. Mecánica de lanzamiento de personajes con física realista.',
    tags: ['Unity', 'C#'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/Angry-Pixels',
    detail: {
      summary: 'Lanzamiento con física realista',
      contributions: [
        'Mecánica de lanzamiento de personajes con física realista.',
      ],
    },
  },
  {
    slug: 'city-disorder',
    title: 'City Disorder',
    image: require('../assets/images/CityDisorder.jpeg'),
    description: 'Runner infinito con generación procedural de obstáculos, sistema de puntuación y dificultad escalable. Optimizado para móviles.',
    tags: ['Unity', 'C#'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/City-Disorder',
    detail: {
      summary: 'Generación procedural y optimización móvil',
      contributions: [
        'Generación procedural de obstáculos.',
        'Sistema de puntuación y dificultad escalable.',
        'Optimización para dispositivos móviles.',
      ],
    },
  },
  {
    slug: 'slimy-woods',
    title: 'Slimy-Woods',
    image: require('../assets/images/Unity.png'),
    description: 'Demo hecho en Unity de un plataformero 2D en el que se experimentan con diferentes mecánicas de juego.',
    tags: ['Unity', 'C#'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/Slimy-Woods',
    imageBg: '#000000',
    detail: {
      summary: 'Prototipo de mecánicas 2D',
    },
  },
  // --- Diseño ---
  {
    slug: 'manual-marca-consistec',
    title: 'Manual de Marca - Consistec S.A',
    image: require('../assets/images/ConsistecManual.png'),
    description: 'Desarrollo de un Manual de Identidad Corporativa. Uso del stack de adobe, específicamente Illustrator y Photoshop para la creación de logotipo, paleta de colores, tipografía y aplicaciones de marca.',
    tags: ['Illustrator', 'Photoshop'],
    category: 'Diseño',
    demo: 'https://drive.google.com/file/d/1TrFZOYKf4IANdOeycwPoXz3XsAw8ItEB/view?usp=sharing',
    github: null,
    detail: {
      summary: 'Logotipo, paleta, tipografía y aplicaciones',
      contributions: [
        'Creación del logotipo.',
        'Definición de la paleta de colores y la tipografía.',
        'Diseño de las aplicaciones de marca.',
      ],
    },
  },
  {
    slug: 'manual-marca-estudia-inteligente',
    title: 'Manual de Marca - Estudia Inteligente',
    image: require('../assets/images/EstudiaInteligente.png'),
    description: 'Desarrollo de un Manual de Identidad Corporativa. Uso del stack de adobe, específicamente Illustrator y Photoshop para la creación de logotipo, paleta de colores, tipografía y aplicaciones de marca.',
    tags: ['Illustrator', 'Photoshop'],
    category: 'Diseño',
    demo: 'https://drive.google.com/file/d/1KORkPI7SJAzsfrVQ6XfQbHUkgqqDdAPY/view?usp=sharing',
    github: null,
    detail: {
      summary: 'Logotipo, paleta, tipografía y aplicaciones',
      contributions: [
        'Creación del logotipo.',
        'Definición de la paleta de colores y la tipografía.',
        'Diseño de las aplicaciones de marca.',
      ],
    },
  },
];

export const CATEGORIES = ['Todos', 'Web', 'Apps', 'Videojuegos', 'Diseño'];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
