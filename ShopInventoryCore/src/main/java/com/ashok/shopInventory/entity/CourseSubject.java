package com.ashok.shopInventory.entity;

import javax.persistence.*;

import java.io.Serializable;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "course_subject")
public class CourseSubject implements Serializable {
    private static final long serialVersionUID = -7946466636427976204L;
    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name="courseId")
    private Integer courseId;

    @Column(name="subjectId")
    private Integer subjectId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    @Override
    public String toString() {
        return "CourseSubject{" +
                "id=" + id +
                ", courseId=" + courseId +
                ", subjectId=" + subjectId +
                '}';
    }
}
