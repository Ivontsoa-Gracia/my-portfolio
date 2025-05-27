const projets = [
    {
      id: "project-1",
      titre: "Project 1",
      marque: "Nom de la marque", // facultatif
      categories: "ui/ux", // ou "branding" ou "web"
      images: [
        "assets/img/projet/proj1_img1.png",
        "assets/img/projet/proj1_img2.png",
        "assets/img/projet/proj1_img3.png"
      ],
      lienGit: "https://github.com/utilisateur/project1", // seulement si categorie ==s= "web"
      concepts: [
        "Minimalisme",
        "Accessibilité",
        "Interactivité"
      ],
      description: "Voici une description complète du projet, détaillant son objectif, son processus de création et son impact."
    },
  
    {
      id: "project-2",
      titre: "Project 2",
      marque: "",
      categories: "branding",
      images: [
        "assets/img/projet/proj1_img1.png",
        "assets/img/projet/proj1_img2.png",
        "assets/img/projet/proj1_img3.png"
      ],
      lienGit: "", // vide si pas de lien
      concepts: [
        "Élégance",
        "Harmonie de couleurs",
        "Typographie forte"
      ],
      description: "Projet de branding axé sur l'identité visuelle d'une marque émergente."
    },
  
    {
      id: "project-3",
      titre: "Project 3",
      marque: "Zest",
      categories: "web",
      images: [
        "assets/img/projet/proj1_img1.png",
        "assets/img/projet/proj1_img2.png",
        "assets/img/projet/proj1_img3.png"
      ],
      lienGit: "https://github.com/utilisateur/zest",
      concepts: [
        "Responsive design",
        "Expérience utilisateur fluide Plateforme web développée pour améliorer la visibilité d’une startup tech",
        "Composants modulaires",
        "Design orienté conversion"
      ],
      description: "Plateforme web développée pour améliorer la visibilité d’une startup tech."
    }
  ];
  