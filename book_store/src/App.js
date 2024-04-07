import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetails";
import axios from "axios";
function App() {
  // console.log("hjjhgjh  :  ", process.env.REACT_APP_BACKEND_ENDPOINT)
  const response = axios.get('/api/books');
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {/* this is must these are all syntax */}
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          {/* exact helps to batch exact route ('/') and path */}
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          {/* <Route path="/books/:id" element={<BookDetail />} exact /> */}
          <Route path="/books/:id" element={<BookDetail />} exact />

          {/* books/:id means it take book URL and then update. this BookDetails component will fetch the data from the id */}
        </Routes>
      </main>
    </>
  );
}

export default App;
