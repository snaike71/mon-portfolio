import { useState } from "react";
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion";


function NaVBar() {
    const [navMenu, setNavMenu] = useState<boolean>(false)
    const toggleNavMenu = () => {
        setNavMenu(!navMenu)
    }
    return (
        <nav className="md:h-18 h-auto fixed flex justify-between w-screen p-5 bg-transparent backdrop-blur-md  transition duration-300">
            <div>
                <a href="#Header" className=" font-Poetsen text-2xl">
                    KL
                </a>
                <AnimatePresence>
                    {navMenu && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden"
                        >
                            <motion.ul
                                className="flex flex-col items-center font-Rubik gap-5 py-6"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                        },
                                    },
                                    hidden: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            staggerDirection: -1,
                                        },
                                    },
                                }}
                            >
                                {[
                                    { href: "#Me", label: "À Propos" },
                                    { href: "#Skill", label: "Compétences" },
                                    { href: "#Experience", label: "Expériences" },
                                    { href: "#Diplomes", label: "Diplômes" },
                                    { href: "#Contact", label: "Me Contacter" },
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: -10 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <a href={item.href} onClick={() => setNavMenu(false)}>
                                            {item.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex">
                <ul className="hidden md:flex font-Rubik gap-5">
                    <li className="">
                        <a href="#Me">À Propos</a>
                    </li>
                    <li>
                        <a href="#Skill">Compétences</a>
                    </li>
                    <li>
                        <a href="#Skill">Expériences</a>
                    </li>
                    <li>
                        <a href="#Skill">Diplômes</a>
                    </li>
                    <li>
                        <a href="#Skill">Me Contacter</a>
                    </li>

                </ul>

                <div className="md:hidden">
                    <button onClick={toggleNavMenu} className="">
                        {navMenu ? <X size={40} /> : <Menu size={40} />}
                    </button>
                </div>
            </div>



        </nav>
    )
}

export default NaVBar;