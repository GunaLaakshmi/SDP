package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ManageUser;

@Repository
public interface ManageUserRepository extends JpaRepository<ManageUser, Long> {
    // You can add custom query methods here if necessary
    ManageUser findByEmail(String email);
}
