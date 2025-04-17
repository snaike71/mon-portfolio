import NaVBar from "./sections/NavBar";
import Header from "./sections/Header";
import Me from "./sections/Me";
function App() {

  return (
    <>

      <NaVBar />
      <section id="Header" className=' h-screen bg-[url(./assets/normandie.jpg)] bg-cover bg-center justify-center items-center flex'>
        <Header />
      </section>
      <section id="Me" className=' h-screen bg-gray-100  flex flex-col'>
        <div className="h-18"></div>
        <h1 className="font-Poetsen text-4xl ml-10 mt-10">À Propos :</h1>
        <Me />
      </section>
      <section>

      </section>
      <section></section>
    </>
  )
}

export default App
