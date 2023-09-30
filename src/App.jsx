import { Articles, Easybank, Footer, Hero } from "./sections";
import { Nav } from "./components";
import "./sass/style.scss";
function App() {
  return (
    <>
     
        <Nav></Nav>
      
      <main>
        <section className="bg-very-light-gray pt-space-4xl pb-space-2xl">
          <Hero></Hero>
        </section>
        <section className="bg-light-gray-blue py-space-4xl relative">
          <Easybank></Easybank>
        </section>
        <section className="bg-very-light-gray py-space-4xl">
          <Articles></Articles>
        </section>
        <section className="py-space-2xl bg-primary">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

export default App;
