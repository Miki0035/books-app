package com.mikiyas.books_server;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String title;
    private Double price;
    private String authorName;
    private String publisherName;
    private String imageUrl;

    public Book(String title, Double price, String authorName, String publisherName, String imageUrl) {
        this.title = title;
        this.price = price;
        this.authorName = authorName;
        this.publisherName = publisherName;
        this.imageUrl = imageUrl;
    }

}
