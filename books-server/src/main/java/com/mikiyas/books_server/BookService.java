package com.mikiyas.books_server;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    //retrieve all book
    public Iterable<Book> allBooks() {
        return bookRepository.findAll();
    }

    //insert a book
    public Book createBook(String title, String price, String publisherName, String authorName, String imageUrl) {

        return bookRepository.save(new Book(title, Double.parseDouble(price), authorName, publisherName, imageUrl));
    }

    //retrieve a single book by id
    public Optional<Book> singleBook(Integer bookId) {
        return bookRepository.findById(bookId);
    }

    //update a book
    public Book updateBook(Integer bookId, HashMap<String, String> payload) {
        Book book = bookRepository.getById(bookId);
        book.setAuthorName(payload.get("authorName") != null ? payload.get("authorName") : book.getAuthorName());
        book.setPublisherName(
                payload.get("publisherName") != null ? payload.get("publisherName") : book.getPublisherName());
        book.setPrice(payload.get("price") != null ? Double.parseDouble(payload.get("price")) : book.getPrice());
        book.setImageUrl(payload.get("imageUrl") != null ? payload.get("imageUrl") : book.getImageUrl());
        book.setTitle(payload.get("title") != null ? payload.get("title") : book.getTitle());
        return bookRepository.save(book);
    }

    //delete a book
    public Boolean deleteBook(Integer bookId) {
        bookRepository.deleteById(bookId);
        return true;
    }
}
