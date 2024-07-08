import { BookDetail, Form, MainContent } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />}></Route>
      <Route path="/new-book" element={<Form />}></Route>
      <Route path="books/:bookId" element={<BookDetail />}></Route>
      <Route path="books/:bookId/edit" element={<Form />}></Route>
    </Routes>
  );
};

export default App;
