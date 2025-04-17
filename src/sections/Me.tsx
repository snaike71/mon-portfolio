import { motion } from "framer-motion";
import { useState } from "react";

const textes = [
    `Actuellement en formation Expert en Systèmes d’Information – option Big Data à la 3W Academy, je suis en recherche d’une alternance dans le domaine du développement web.
  
  Passionné par le numérique et les systèmes complexes, je m’oriente naturellement vers le développement web, où je peux allier logique, créativité et performance.
  
  J’apprécie particulièrement comprendre les rouages d’un projet, contribuer à sa mise en œuvre technique, et apprendre de nouvelles approches au contact d’équipes expérimentées.
  
  Curieux, motivé et impliqué, je suis prêt à intégrer une entreprise qui me permettra de progresser, de prendre part à des projets concrets, et de consolider mes compétences dans un environnement stimulant.
  `,
    `De 2023 à 2024, j’ai travaillé en alternance chez Authentifier.com, une entreprise spécialisée dans l’authentification d’objets de luxe. J’y ai occupé le poste de développeur full stack, avec une dominante backend.
     
    J’ai eu l’opportunité de travailler avec différentes technologies telles que Node.js, PHP et Python pour le développement d’API, ainsi que Vue.js pour le frontend. J’ai également contribué à une partie mobile à l’aide de Flutter. L’environnement de travail intégrait l’usage de Docker, de GitLab CI/CD pour les déploiements automatisés, ainsi que la mise en place de tests avec Jest.
    
    Cette expérience m’a permis de monter en compétence sur l’ensemble du cycle de développement d’une application, tout en travaillant sur des projets concrets et variés.`,
    <>
        <p><strong>Curiosité</strong> : J'aime toujours en apprendre plus sur tous les sujets.</p>
        <p><strong>Persévérance</strong> : Je ne lâche rien tant qu'une solution n’a pas été trouvée.</p>
        <p><strong>Capacité de résolution</strong> : J'aime trouver la solution la plus simple pour répondre à un besoin.</p>
    </>,
];


function Me() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row h-full ">
            <div className="flex-1/3 flex justify-center items-center">
                <div className=" h-80 w-80 lg:h-100 lg:w-100 bg-[url(./assets/moi.png)] bg-contain bg-center bg-no-repeat border-3 rounded-3xl">
                </div>
            </div>
            <div className="flex-2/3 flex justify-center items-center">
                <div className="flex flex-col items-center p-10 w-full">
                    <div className="relative w-full h-80 md:h-180 flex justify-center items-center overflow-hidden">
                        {textes.map((texte, index) => {
                            const isActive = index === selectedIndex;
                            const isLeft = index < selectedIndex;
                            const isExtremity = index + selectedIndex === 2;

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute w-5/6 max-w-xl px-6 py-4 font-Rubik bg-gray-200 rounded-2xl shadow-lg text-xs md:text-ms lg:text-xl"
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1 : 0.8,
                                        rotate: isActive ? 0 : isLeft ? -15 : 15,
                                        x: isActive ? 0 : isLeft ? "-80%" : "80%",
                                        zIndex: isActive ? 10 : 5,
                                        opacity: isActive ? 1 : isExtremity ? 0 : 0.5,
                                    }}
                                    transition={{ duration: 0.6, type: "spring" }}
                                >
                                    <p className="whitespace-pre-line">{texte}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="flex gap-4 mt-10">
                        {textes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`px-4 py-2 rounded-full border text-sm lg:text-2xl font-Rubik ${index === selectedIndex
                                    ? "bg-black text-gray-200"
                                    : "bg-gray-200"
                                    }`}
                            >
                                {["Présentation", "Expériences Pro", "Soft Skill"][index]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me;