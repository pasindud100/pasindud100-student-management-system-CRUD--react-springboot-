package com.example.SMS.Repo;

/* Author : pasindu
 place: ACPT student*/


import com.example.SMS.Entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepo extends MongoRepository<Student, String> {
}
