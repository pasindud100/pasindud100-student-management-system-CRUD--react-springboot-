package com.example.SMS.Service;
/* Author : pasindu
 place: ACPT student*/
import com.example.SMS.Entity.Student;
import com.example.SMS.Repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StudentService {

    @Autowired
    private StudentRepo repo;
    public void saveorupdate(Student students) {
        repo.save(students);
    }

    public Iterable<Student> listAll() {
        return repo.findAll(); // This should fetch all students
    }

    public void deleteStudent(String id) {
        repo.deleteById(id);
    }

    public Student getStudentByID(String studentid) {
        return repo.findById(studentid).get();
    }
}