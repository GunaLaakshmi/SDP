package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.AddToCart;
import com.example.demo.service.AddToCartService;

@RestController
@RequestMapping("/cart")
public class AddToCartController {

    @Autowired
    private AddToCartService addToCartService;

    // Create a new item
    @PostMapping
    public AddToCart createItem(@RequestBody AddToCart item) {
        return addToCartService.createItem(item);
    }

    // Retrieve all items
    @GetMapping("/all")
    public List<AddToCart> getAllItems() {
        return addToCartService.getAllItems();
    }

    // Retrieve an item by ID
    @GetMapping("/{id}")
    public ResponseEntity<AddToCart> getItemById(@PathVariable Integer id) {
        Optional<AddToCart> item = addToCartService.getItemById(id);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update an item
    @PutMapping("/{id}")
    public ResponseEntity<AddToCart> updateItem(@PathVariable Integer id, @RequestBody AddToCart itemDetails) {
        AddToCart updatedItem = addToCartService.updateItem(id, itemDetails);
        if (updatedItem != null) {
            return ResponseEntity.ok(updatedItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete an item
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Integer id) {
        addToCartService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}
