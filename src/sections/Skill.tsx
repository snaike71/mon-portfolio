function Skill() {


    const sections = [
        {
            title: "Backend :",
            item: <>
                <p className="mb-2 md:mb-3"><strong>Nodejs</strong></p>
                <p className="mb-2 md:mb-3"><strong>Sympfony</strong></p>
                <p className="mb-2 md:mb-3"><strong>Python</strong></p>
                <p className="mb-2 md:mb-3"><strong>Sequelize</strong></p>
                <p className="mb-2 md:mb-3"><strong>SQL/NoSQL</strong></p>
            </>
        },
        {
            title: "Frontend :",
            item: <>
                <p className="mb-2 md:mb-3"><strong>HTML / CSS / JS(TS)</strong></p>
                <p className="mb-2 md:mb-3"><strong>Vuejs</strong></p>
                <p className="mb-2 md:mb-3"><strong>Reactjs</strong></p>
                <p className="mb-2 md:mb-3"><strong>React Nativ</strong></p>
                <p className="mb-2 md:mb-3"><strong>Flutter</strong></p>
            </>
        },
        {
            title: "Autres :",
            item: <>
                <p className="mb-2 md:mb-3"><strong>Docker</strong></p>
                <p className="mb-2 md:mb-3"><strong>Jest</strong></p>
                <p className="mb-2 md:mb-3"><strong>Git</strong></p>
                <p className="mb-2 md:mb-3"><strong>GitLab CI/CD</strong></p>
                <p className="mb-2 md:mb-3"><strong>Flutter</strong></p>
            </>
        }];
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="flex  gap-10 lg:flex-3/4 md:justify-center flex-col md:flex-row">
                    {sections.map((section, i) => (
                        <div key={i}
                            className="bg-gray-200 p-2 md:p-10 rounded-xl md:max-w-100 shadow-lg flex-1 flex-col w-70 hover:scale-105 transition"
                        >
                            <h2 className="font-Poetsen text-xl md:text-3xl mb-10 text-center" >{section.title}</h2>
                            <p className="whitespace-pre-line font-Rubik text-ms md:text-xl">{section.item}</p>
                        </div>

                    ))}
                </div>
            </div>

        </>
    )
}

export default Skill;