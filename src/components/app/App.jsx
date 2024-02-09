import "./App.scss";
import Gallery from "../gallery/Gallery";
import HeaderBlock from "../header-block/HeaderBlock";
import Contacts from "../contacts/Contacts";
import About from "../about/About";
import Facts from "../facts/Facts";

function App() {
  return (
    <main className="main">
      <Gallery />
      <HeaderBlock />
      <Facts />
      <Contacts />
      <About />
    </main>
  );
}

export default App;
