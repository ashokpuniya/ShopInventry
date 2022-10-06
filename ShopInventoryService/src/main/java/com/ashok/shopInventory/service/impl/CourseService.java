package com.ashok.shopInventory.service.impl;

import com.ashok.shopInventory.Repository.ICourseRepository;
import com.ashok.shopInventory.entity.Course;
import com.ashok.shopInventory.service.ICourseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CourseService implements ICourseServiceImpl {
    @Autowired
    private ICourseRepository courseRepository;

    @Transactional
    @Override
    public List<String> getAllCourses() {
        return courseRepository.getAllCourses();
    }

    @Transactional
    @Override
    public Course getCourseByName(String name) {
        return courseRepository.getCourseByName(name);
    }
}
