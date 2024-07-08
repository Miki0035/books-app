import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/book-detail.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Book } from "../types";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const BookDetail = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>();
  const getBookById = async () => {
    try {
      const response = await axios.get(`/api/v1/books/${bookId}`);
      setBook(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBookById();
  }, []);

  const handleDelete = () => {
    const answer = confirm(
      `Are you sure you want to delete Book: ${book?.title}`
    );
    if (answer) {
      deleteBook();
    } else {
      return;
    }
  };

  const deleteBook = async () => {
    try {
      await axios.delete(`/api/v1/books/${book?.id}`);
      alert("Book has been deleted");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="detail-btn-container">
        <Link to={"/"}>
          <IoArrowBackCircleOutline color="#fff" size={40} />
        </Link>
      </div>
      <div className="book-detail-container">
        <h2>{book?.title}</h2>
        <div className="book-detail-card">
          <div className="book-detail-image-container">
            <img src={book?.imageUrl} alt="book image" />
          </div>
          <div className="book-detail-info">
            <h3>Author : {book?.authorName}</h3>
            <h4>price : ${book?.price}</h4>
            <h5>publisher : {book?.publisherName}</h5>
          </div>
          <div className="button-container">
            <Link to={`edit`}>Update</Link>
            <button onClick={() => handleDelete()}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
