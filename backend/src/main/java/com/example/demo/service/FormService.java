package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.model.FormData;

@Service
public class FormService {

    public String processForm(FormData data) {
        // Later: save to DB

        // For now, just return a message showing all fields
        StringBuilder sb = new StringBuilder();
        sb.append("Form received:\n");
        sb.append("Name: ").append(data.getName()).append("\n");
        sb.append("Mobile: ").append(data.getMobile()).append("\n");
        sb.append("Gender: ").append(data.getGender()).append("\n");
        sb.append("Password: ").append(data.getPassword()).append("\n");

        return sb.toString();
    }
}
