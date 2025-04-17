import { ArrowUpFromLine} from "lucide-react"


import NaVBar from "./sections/NavBar";
import Header from "./sections/Header";
import Me from "./sections/Me";
import Skill from "./sections/Skill";
function App() {

  return (
    <>

      <NaVBar />
      <a href="#Header" className="fixed bottom-10 right-10 bg-gray-100 p-6 opacity-60 border-1  rounded-lg z-50"><ArrowUpFromLine/></a>
      <section id="Header" className=' h-screen bg-[url(./assets/normandie.jpg)] bg-cover bg-center justify-center items-center flex'>
        <Header />
      </section>
      <section id="Me" className=' h-screen bg-gray-100 flex flex-col'>
        <div className="h-18"></div>
        <h1 className="font-Poetsen text-4xl ml-10 mt-10">À Propos :</h1>
        <Me />
      </section>
      <section id="Skill" className=' h-screen bg-gray-100 flex flex-col'>
      <div className="h-18"></div>
      <h1 className="font-Poetsen text-4xl ml-10 mt-10">Compétences :</h1>

        <Skill/>

      </section>
      <section></section>
    </>
  )
}

export default App
