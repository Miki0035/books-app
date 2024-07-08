package com.mikiyas.books_server;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.micrometer.common.lang.NonNull;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {
    @NonNull
    Book getById(Integer Id);
}
