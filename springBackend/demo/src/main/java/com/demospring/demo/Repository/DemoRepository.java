package com.demospring.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demospring.demo.Model.Student;

public interface DemoRepository extends JpaRepository<Student, Long> {

}
