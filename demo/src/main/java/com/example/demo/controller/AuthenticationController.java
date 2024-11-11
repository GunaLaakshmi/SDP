 package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AuthRequest;
import com.example.demo.service.JwtService;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

            // Check if authentication was successful
            if (authentication.isAuthenticated()) {

                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
                String userRole = userDetails.getAuthorities().iterator().next().getAuthority();

                String jwtToken = jwtService.generateToken(authRequest.getEmail());

                // Prepare response with JWT token and role
                Map<String, String> responseModel = new HashMap<>();
                responseModel.put("token", jwtToken);
                responseModel.put("role", userRole);

                return ResponseEntity.ok(responseModel);

            } else {
                throw new BadCredentialsException("Invalid credentials");
            }
        } catch (BadCredentialsException ex) {
            // Return 401 Unauthorized status on bad credentials
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }
}
