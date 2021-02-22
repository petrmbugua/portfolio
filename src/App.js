import { Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Projects from './components/Projects';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Route exact path='/about' component={About} />
      <Route  path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
    </Layout>
  );
}

export default App;
