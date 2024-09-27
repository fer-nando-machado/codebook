import React from "react";
import { HashRouter as Router, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Book from "./Book";
import Code from "./Code";

function BookWithParams() {
  const { page } = useParams();
  return <Book page={page} className="Box Single" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookWithParams />} />
        <Route path="/:page" element={<BookWithParams />} />
      </Routes>
      <Code title="CodeBook" className="Box Double" />
    </Router>
  );
}

export default App;
