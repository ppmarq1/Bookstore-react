import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CategoryPage from './components/CategoryPage';
import BooksPage from './components/BookPage';

const App = () => (
  <div className="App">
    <nav>
      <h1> Bookstore CMS</h1>
      <ul>
        <li>
          <Link
            to="/"
            className="active"
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
          >
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<BooksPage />} />
      <Route exact path="/categories" element={<CategoryPage />} />
    </Routes>
  </div>
);

export default App;
