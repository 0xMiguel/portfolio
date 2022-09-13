type TranslationInterface = {
  [index in 'navbar' | 'mainHeader' | 'featured' | 'quotes' | 'articles']: {
    english: { [index: string]: string };
    spanish: { [index: string]: string };
  };
};

export const translations: TranslationInterface = {
  navbar: {
    english: {
      about: 'About me',
      home: 'Home',
    },
    spanish: {
      about: 'Sobre mi',
      home: 'Inicio',
    },
  },
  mainHeader: {
    english: {
      name: 'I’m Miguel 👋',
      role: 'Full Stack Software Developer',
      mainButton: "Let's talk!",
      about: 'About me',
    },
    spanish: {
      name: 'Soy Miguel 👋',
      role: 'Desarrollador de Software Full Stack',
      mainButton: 'Hablemos!',
      about: 'Sobre mi',
    },
  },
  featured: {
    english: {
      title: 'Featured projects ✨',
      description: 'A collection of some side projects I have made',
      projectDescriptionOne:
        'A web scraper that searches for any article in medium, hashnode, dev.to, and hackernews. Articles are ranked based on number of likes and comments then shown in the  frontend.',
      projectDescriptionTwo:
        'Where I showcase my personal work, skills, and blog about things I like.',
    },
    spanish: {
      title: 'Proyectos destacados ✨',
      description: 'Una colección de algunos proyectos que he hecho.',
      projectDescriptionOne:
        'Un web scraper que busca cualquier artículo en medium, hashnode, dev.to y hackernews. Los artículos se clasifican según la cantidad de Me gusta y comentarios que luego se muestran en la interfaz.',
      projectDescriptionTwo:
        'Donde muestro mi trabajo personal, habilidades, y blogeo sobre cosas que me gustan.',
    },
  },
  quotes: {
    english: {
      title: 'Quote of the day ✍️',
    },
    spanish: {
      title: 'Cita del día ✍️',
    },
  },
  articles: {
    english: {
      titles: 'Useful articles ✅',
    },
    spanish: {
      title: 'Artículos útiles ✅',
    },
  },
};
