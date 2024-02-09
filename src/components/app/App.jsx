import "./App.scss";
import Gallery from "../gallery/Gallery";
import HeaderBlock from "../header-block/HeaderBlock";
import Contacts from "../contacts/Contacts";
import About from "../about/About";

function App() {
  return (
    <main className="main">
      <HeaderBlock />
      <Gallery />
      <About />
      <Contacts />
    </main>
  );
}

export default App;
