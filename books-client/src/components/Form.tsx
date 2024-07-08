import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Book } from "../types";
import "../styles/form.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [formData, setFormData] = useState<Book>({
    title: "",
    publisherName: "",
    authorName: "",
    imageUrl: "",
    price: "",
    id: "",
  });

  const [errors, setErrors] = useState<Book>();

  const getBookById = async () => {
    const response = await axios.get<Book>(`/api/v1/books/${bookId}`);
    setFormData(response.data);
  };

  useEffect(() => {
    if (bookId) {
      getBookById();
    } else {
      return;
    }
  }, [bookId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Form has error");
    } else {
      saveBook();
    }
  };

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Form has error");
    } else {
      updateBook();
    }
  };

  const validateForm = () => {
    const tempErrors: Book = {
      title: "",
      publisherName: "",
      authorName: "",
      imageUrl: "",
      price: "",
      id: "",
    };
    if (formData.title === "") {
      tempErrors.title = "title is required";
    }
    if (formData.authorName === "") {
      tempErrors.authorName = "Author name is required";
    }
    if (formData.publisherName === "") {
      tempErrors.publisherName = "Publisher name is required";
    }
    if (formData.price === "" || isNaN(Number(formData.price))) {
      tempErrors.price = "price is required";
    }
    if (isNaN(Number(formData.price))) {
      tempErrors.price = "price must be a number";
    }
    if (formData.imageUrl === "") {
      tempErrors.imageUrl = "book image url is required";
    }
    setErrors(tempErrors);

    if (
      tempErrors.price !== "" ||
      tempErrors.authorName !== "" ||
      tempErrors.imageUrl !== "" ||
      tempErrors.publisherName !== "" ||
      tempErrors.title !== ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const saveBook = async () => {
    try {
      await axios.post("/api/v1/books", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(`${formData.title} has been saved`);
      setFormData({
        title: "",
        publisherName: "",
        authorName: "",
        imageUrl: "",
        price: "",
        id: "",
      });
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(`Something went wrong. try again`);
      return new Error("Something went wrong. try again")
    }
  };

  const updateBook = async () => {
    try {
      await axios.put(`/api/v1/books/${bookId}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(`${formData.title} has been updated`);
      setFormData({
        title: "",
        publisherName: "",
        authorName: "",
        imageUrl: "",
        price: "",
        id: "",
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="form-container">
      <div className="back-btn-container">
        <Link to={bookId ? `/books/${bookId}` : "/"}>
          <IoArrowBackCircleOutline color="#fff" size={40} />
        </Link>
      </div>
      {bookId ? (
        <form onSubmit={handleUpdate}>
          <h1>Update Book</h1>
          <div className="group-container">
            <label htmlFor="title">Book Title </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              name="title"
              onChange={handleChange}
            />
            {errors?.title && <span className="errors">{errors.title}</span>}
          </div>
          <div className="group-container">
            <label htmlFor="author">Book Author </label>
            <input
              id="author"
              type="text"
              value={formData.authorName}
              name="authorName"
              onChange={handleChange}
            />
            {errors?.authorName && (
              <span className="errors">{errors.authorName}</span>
            )}
          </div>
          <div className="group-container">
            <label htmlFor="publisher">Book Publisher</label>
            <input
              id="publisher"
              type="text"
              value={formData.publisherName}
              name="publisherName"
              onChange={handleChange}
            />
            {errors?.publisherName && (
              <span className="errors">{errors.publisherName}</span>
            )}
          </div>
          <div className="group-container">
            <label htmlFor="image">Book Image Url </label>
            <input
              id="image"
              type="text"
              value={formData.imageUrl}
              name="imageUrl"
              onChange={handleChange}
            />
            {errors?.imageUrl && (
              <span className="errors">{errors.imageUrl}</span>
            )}
          </div>
          <div className="group-container">
            <label htmlFor="price">Book price </label>
            <input
              id="price"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            {errors?.price && <span className="errors">{errors.price}</span>}
          </div>
          <button type="submit">Update</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Add A New Book</h1>
          <div className="group-container">
            <label htmlFor="title">Book Title </label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={handleChange}
            />
            {errors?.title && <span className="errors">{errors.title}</span>}
          </div>
          <div className="group-container">
            <label htmlFor="author">Book Author </label>
            <input
              id="author"
              type="text"
              name="authorName"
              onChange={handleChange}
            />
            {errors?.authorName && (
              <span className="errors">{errors.authorName}</span>
            )}
          </div>
          <div className="group-container">
            <label htmlFor="publisher">Book Publisher</label>
            <input
              id="publisher"
              type="text"
              name="publisherName"
              onChange={handleChange}
            />
            {errors?.publisherName && (
              <span className="errors">{errors.publisherName}</span>
            )}
          </div>
          <div className="group-container">
            <label htmlFor="image">Book Image Url </label>
            <input
              id="image"
              type="text"
              name="imageUrl"
              onChange={handleChange}
            />
            {errors?.imageUrl && (
              <span className="errors">{errors.imageUrl}</span>
            )}
          </div>
          <div className="group-container">
            <label htmlFor="price">Book price </label>
            <input
              id="price"
              type="text"
              name="price"
              onChange={handleChange}
            />
            {errors?.price && <span className="errors">{errors.price}</span>}
          </div>
          <button type="submit">Create</button>
        </form>
      )}
    </div>
  );
};

export default Form;
