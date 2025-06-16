import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
