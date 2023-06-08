import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Accueil from './pages/Accueil';
import Fav from './pages/Fav';
import About from './pages/about/About';
import Footer from './components/Footer/Footer';
import Article from './pages/article/Article';
import ThemedArticle from './components/ArticleIA/ArticleIA';
import './fonts/ModernAntiqua-Regular.ttf'
import ArticleIA from './components/ArticleIA/ArticleIA';
import ArticleThreeD from './components/ArticleThreeD/ArticleThreeD'

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Routes>

        <Route element={<Accueil />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Article />} path='/article/:id' />
        <Route element={<ArticleIA />} path='/articleIA' />
        <Route element={<ArticleThreeD />} path='/article3D' />



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
