package com.example.SMS.Controller;

/* Author : pasindu
 place: ACPT student*/

import com.example.SMS.Entity.Student;
import com.example.SMS.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping(value = "/save")
    public String saveStudent(@RequestBody Student students) {
    studentService.saveorupdate(students);
        return students.get_id();
    }

    @GetMapping(value = "/getAll")
    private Iterable<Student> getStudents() {
        return studentService.listAll();
    }


}
