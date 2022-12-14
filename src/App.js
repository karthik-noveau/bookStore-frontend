
import { Routes, Route } from 'react-router-dom';
import ABooks from './components/books/ABooks';

import Books from './components/books/Books';
import AddBook from './components/pages/AddBook';
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import UpdateBook from './components/pages/UpdateBook';


function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} exact />
        <Route path="/Books" element={<Books />} exact />
        <Route path="/AddBook" element={<AddBook />} exact />
        <Route path="/ABooks" element={<ABooks />} exact />
        <Route path="/books/:id" element={<UpdateBook />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
