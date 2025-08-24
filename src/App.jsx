import Aboutme from "./blocks/Aboutme";
import Cta from "./blocks/Cta";
import Footer from "./blocks/Footer";
import Header from "./blocks/Header";
import Hero from "./blocks/Hero";
import MyProjects from "./blocks/MyProjects";
import Tech from "./blocks/Tech";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Aboutme />
      <MyProjects />
      <Tech />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;

// npx shadcn@latest add button
// commit
