import { motion } from "framer-motion";
import { useState } from "react";



const textes = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
];


function Me() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row h-full ">
            <div className="flex-1/3 flex justify-center items-center">
                <div className=" h-80 w-80 md:h-100 md:w-100 bg-[url(./assets/moi.png)] bg-contain bg-center bg-no-repeat border-3 rounded-3xl">
                </div>
            </div>
            <div className="flex-2/3 flex justify-center items-center">
                <div className="flex flex-col items-center p-10 w-full">
                    <div className="relative w-full h-80 md:h-150 flex justify-center items-center overflow-hidden">
                        {textes.map((texte, index) => {
                            const isActive = index === selectedIndex;
                            const isLeft = index < selectedIndex;
                            const isExtremity = index + selectedIndex === 2;

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute w-3/4 max-w-xl px-6 py-4 font-Rubik bg-gray-200 rounded-2xl shadow-lg text-sm lg:text-2xl"
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
                                    <p>{texte}</p>
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
                                {["Présentation", "Langues", "Soft Skills"][index]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me;