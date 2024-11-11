package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private int rating;

    @Column(nullable = false)
    private String message;

    @Column(nullable = false)
    private String email;

    // Default constructor
    public Feedback() {
    }

    // Parameterized constructor
    public Feedback(int rating, String message, String email) {
        this.rating = rating;
        this.message = message;
        this.email = email;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "id=" + id +
                ", rating=" + rating +
                ", message='" + message + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
