package com.ashok.shopInventory.service;

import com.ashok.shopInventory.entity.Course;

import java.util.List;

public interface ICourseServiceImpl {
    List<String> getAllCourses();
    Course getCourseByName(String name);
}
