import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          title: "Sobre",
          subtitle: "Contribuidor em inovações na ufs",
          researchAndExtension: "Pesquisa e extensão",
          description: "O Centro de Inovação em Durabilidade Acelerada (CIDA), criado em 2024 a partir do Laboratório de Projetos Mecânicos da Universidade Federal de Sergipe (UFS), em parceria com o Instituto de Pesquisas sobre Desastres (IPD), promove ensino, pesquisa e extensão voltados à inovação tecnológica. O centro desenvolve pesquisas em áreas como drones, enxames, metamateriais, visão computacional, Structural Health Monitoring, metrologia, inteligência artificial, fotogrametria e energias renováveis. Também realiza atividades de extensão, como oficinas de minifoguetes, astronomia e apoio a equipes como a Zenith (foguetes) e a Swarm 79 (drones), fortalecendo a formação prática de estudantes e a difusão científica.",
          instagram: "Instagram",
          email: "E-mail",
          equipmentsTitle: "Equipamentos",
          equipmentsDescription: "Aqui estão alguns dos equipamentos utilizados pelo laboratório.",
          contactTitle: "Contato",
          contactAddressTitle: "Endereço",
          contactAddressData: [ // AGORA É UM ARRAY DE STRINGS
            "Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000",
            "Nupeg, sala 3 (laboratório)",
            "sala 4 (gabinete)"
          ],
          contactEmailTitle: "Email",
          contactEmailData: "alexandre.ramos@academico.ufs.br",
          contactExtensionTitle: "Ramais",
          contactExtensionData: [
            "Gabinete CIDA: (79) 3194-7680",
            "Laboratório CIDA: (79) 3194-7681"
          ],
          contactName: "Alexandre Carlos Rodrigues Ramos",
          contactBio: "Doutorado em Engenharia Mecânica pela EESC-USP, Mestrado em Engenharia Mecânica pelo ITA, e graduação em Engenharia Mecatrônica pela EESC-USP.",
          studentsTitle: "Alunos",
          publicationsTitle: "Publicações",
          projectsTitle: "Projetos",
          all: "Todos"
        },
      },
      en: {
        translation: {
          title: "About",
          subtitle: "Contributor in innovations at UFS",
          researchAndExtension: "Research and Extension",
          description: "The Center for Innovation in Accelerated Durability (CIDA), established in 2024 from the Mechanical Projects Laboratory at the Federal University of Sergipe (UFS), in partnership with the Institute for Disaster Research (IPD), promotes education, research, and outreach focused on technological innovation. The center conducts research in areas such as drones, swarms, metamaterials, computer vision, structural health monitoring, metrology, artificial intelligence, photogrammetry, and renewable energy. It also carries out outreach activities, including model rocket workshops, astronomy, and support for student teams such as Zenith (rockets) and Swarm 79 (drones), strengthening students’ practical training and scientific dissemination.",
          instagram: "Instagram",
          email: "Email",
          equipmentsTitle: "Equipment",
          equipmentsDescription: "Here are some of the equipment used by the laboratory.",
          contactTitle: "Contact",
          contactAddressTitle: "Address",
          contactAddressData: [ // NOW IT'S AN ARRAY OF STRINGS
            "Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000",
            "Nupeg, Room 3 (laboratory)",
            "Room 4 (office)"
          ],
          contactEmailTitle: "Email",
          contactEmailData: "alexandre.ramos@academico.ufs.br",
          contactExtensionTitle: "Extensions",
          contactExtensionData: [
            "CIDA Office: (79) 3194-7680",
            "CIDA Laboratory: (79) 3194-7681"
          ],
          contactName: "Alexandre Carlos Rodrigues Ramos",
          contactBio: "PhD in Mechanical Engineering from EESC-USP, Master's in Mechanical Engineering from ITA, and a degree in Mechatronic Engineering from EESC-USP.",
          studentsTitle: "Students",
          publicationsTitle: "Publications",
          projectsTitle: "Projects",
          all: "All"
        },
      },
      fr: {
        translation: {
          title: "À propos",
          subtitle: "Contributeur aux innovations à l'UFS",
          researchAndExtension: "Recherche et Extension",
          description: "Le Centre d’Innovation en Durabilité Accelerée (CIDA), créé en 2024 à partir du Laboratoire de Projets Mécaniques de l’Université Fédérale de Sergipe (UFS), en partenariat avec l’Institut de Recherches sur les Catastrophes (IPD), développe des activités d’enseignement, de recherche et de vulgarisation axées sur l’innovation technologique. Il travaille sur des thèmes tels que les drones, les essaims, les métamatériaux, la vision par ordinateur, l’intelligence artificielle, la photogrammétrie et les énergies renouvelables. Le centre organise aussi des ateliers pratiques, comme ceux de mini-fusées, d’astronomie, et soutient des équipes étudiantes comme Zenith (fusées) et Swarm 79 (drones).",
          instagram: "Instagram",
          email: "Email",
          equipmentsTitle: "Équipements",
          equipmentsDescription: "Voici quelques-uns des équipements utilisés par le laboratoire.",
          contactTitle: "Contact",
          contactAddressTitle: "Adresse",
          contactAddressData: [ // MAINTENANT C'EST UN TABLEAU DE CHAÎNES
            "Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000",
            "Nupeg, salle 3 (laboratoire)",
            "salle 4 (bureau)"
          ],
          contactEmailTitle: "Email",
          contactEmailData: "alexandre.ramos@academico.ufs.br",
          contactExtensionTitle: "Postes",
          contactExtensionData: [
            "Bureau CIDA: (79) 3194-7680",
            "Laboratoire CIDA: (79) 3194-7681"
          ],
          contactName: "Alexandre Carlos Rodrigues Ramos",
          contactBio: "Doctorat en génie mécanique de l'EESC-USP, maîtrise en génie mécanique de l'ITA et diplôme en génie mécatronique de l'EESC-USP.",
          studentsTitle: "Étudiants",
          publicationsTitle: "Publications",
          projectsTitle: "Projets",
          all: "Tous"
        },
      },
    },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
  });

export default i18n;