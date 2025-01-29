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
    private String saveStudent(@RequestBody Student students) {
    studentService.saveorupdate(students);
        return students.get_id();
    }

    @GetMapping(value = "/getAll")
    public Iterable<Student> getStudents() {
        return studentService.listAll();
    }



    @PutMapping(value = "/edit/{id}")
    private Student update(@RequestBody Student student, @PathVariable(name = "id") String _id) {
        student.set_id(_id);
        studentService.saveorupdate(student);
        return student;
    }

    @DeleteMapping("/delete/{id}")
    private void deleteStudent(@PathVariable("id") String _id) {
        studentService.deleteStudent(_id);
    }

    @RequestMapping("/search/{id}")
    private Student getStudent(@PathVariable(name="id") String studentid) {
        return studentService.getStudentByID(studentid);
    }
}
