
import { Navbar }           from './components/Navbar/Navbar';
import { Hero }             from './components/Hero/Hero';
import { CuandoConsultar }  from './components/CuandoConsultar/CuandoConsultar';
import { Consulta }         from './components/Consulta/Consulta';
import { Endoscopia }       from './components/Endoscopia/Endoscopia';
import { Peso }             from './components/Peso/Peso';
import { Ubicacion }        from './components/Ubicacion/Ubicacion';
import { Agenda }           from './components/Agenda/Agenda';
import { Pagos }            from './components/Pagos/Pagos';
import { Footer }           from './components/Footer/Footer';
import { useReveal }        from './components/shared/useReveal';

function App() {
  useReveal(); // animaciones al scroll en toda la página

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CuandoConsultar />
        <Consulta />
        <Endoscopia />
        <Peso />
        <Ubicacion />
        <Agenda />
        <Pagos />
      </main>
      <Footer />
    </>
  );
}

export default App;