package com.mikiyas.books_server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/books")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class BookController {

    // auto initializes the service class object
    @Autowired
    private BookService bookService;

    // root get mapping
    @GetMapping
    public ResponseEntity<Iterable<Book>> getAllBooks() {
        return new ResponseEntity<Iterable<Book>>(bookService.allBooks(), HttpStatus.OK);
    }

    // create book
    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody HashMap<String, String> payload) {
        return new ResponseEntity<Book>(
                bookService.createBook(
                        payload.get("title"),
                        payload.get("price"),
                        payload.get("publisherName"),
                        payload.get("authorName"),
                        payload.get("imageUrl")),
                HttpStatus.OK);
    }

    // get book by id
    @GetMapping("{bookId}")
    public ResponseEntity<Optional<Book>> getSingleBook(@PathVariable Integer bookId) {
        return new ResponseEntity<Optional<Book>>(bookService.singleBook(bookId), HttpStatus.OK);
    }

    // update book by id
    @PutMapping("{bookId}")
    public ResponseEntity<Book> updateBook(@PathVariable Integer bookId, @RequestBody HashMap<String, String> payload) {
        return new ResponseEntity<Book>(
                bookService.updateBook(
                        bookId,
                        payload),
                HttpStatus.OK);
    }

    // delete book by id
    @DeleteMapping("{bookId}")
    public ResponseEntity<Boolean> deleteBook(@PathVariable Integer bookId) {
        return new ResponseEntity<Boolean>(
                bookService.deleteBook(bookId),
                HttpStatus.OK);
    }

}
