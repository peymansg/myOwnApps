package com.luv2code.spring.boot.library.entity;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "book")
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "copies")
    private int copies;

    @Column(name = "copies_available")
    private int copies_available;

    @Column(name = "category")
    private String category;

    @Column(name = "img")
    private String img;

}
