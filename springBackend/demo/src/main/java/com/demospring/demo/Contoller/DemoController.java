package com.demospring.demo.Contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.demospring.demo.Model.Student;
import com.demospring.demo.Repository.DemoRepository;
import com.demospring.demo.Exception.UserNotFoundException;

@RestController
@CrossOrigin("http://localhost:3000")
class DemoController {

    @Autowired
    private DemoRepository demoRepository;

    // @GetMapping("readData")
    // String getData() {
    //     return "Hello..... Me Bhaiya Gaikwad Boltoy";
    // }


    @GetMapping("/readData")
    List<Student> getAllData(){
        return demoRepository.findAll();
    }

    @GetMapping("/readData/{id}")
    Student getStudentById(@PathVariable Long id) {
        return demoRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PostMapping("/writeData")
    Student newStudent(@RequestBody Student newStudent) {
        return demoRepository.save(newStudent);
    }

    @PutMapping("/updateData/{id}")
    Student updateStudent(@PathVariable Long id, @RequestBody Student newStudent){
        return demoRepository.findById(id)
        .map(Student ->{
            Student.setName(newStudent.getName());
            Student.setAddress(newStudent.getAddress());
            Student.setEmail(newStudent.getEmail());

            return demoRepository.save(Student);
        }) .orElseThrow(()->new UserNotFoundException(id));
    }


    @DeleteMapping("/deleteData/{id}")
    String deleteStudent (@PathVariable Long id){
        if (!demoRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        demoRepository.deleteById(id);
        return "User with id " + id + "has been deleted successfully."; 
    }


}