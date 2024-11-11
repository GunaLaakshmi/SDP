package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ManageUser;
import com.example.demo.service.ManageUserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")  // Replace with your frontend URL
public class ManageUserController {

    @Autowired
    private ManageUserService manageUserService;

    // Endpoint to get all users (admin only)
    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<ManageUser> getAllUsers() {
        return manageUserService.getAllUsers();
    }

    // Endpoint to update a user (admin only)
    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<ManageUser> updateUser(@PathVariable Long id, @RequestBody ManageUser userDetails) {
        ManageUser updatedUser = manageUserService.updateUser(id, userDetails);
        return ResponseEntity.ok(updatedUser);
    }

    // Endpoint to delete a user (admin only)
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        manageUserService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
