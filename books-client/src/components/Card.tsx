import React from "react";
import { CardProps } from "../types";
import { useNavigate } from "react-router-dom";
import "../styles/card.css";

const Card: React.FC<CardProps> = ({ book }) => {

  const navigate = useNavigate();

  return (
    <div className="book-card" onClick={() => navigate(`books/${book.id}`)}>
      <div className="book-card-img">
        <img src={book.imageUrl} alt="book image" />
      </div>
      <div className="book-card-info">
        <h2>Title : {book.title}</h2>
        <h3>Author : {book.authorName}</h3>
      </div>
    </div>
  );
};

export default Card;
