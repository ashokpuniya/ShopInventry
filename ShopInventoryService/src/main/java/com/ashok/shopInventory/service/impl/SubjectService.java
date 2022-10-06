package com.ashok.shopInventory.service.impl;

import com.ashok.shopInventory.Repository.ISubjectRepository;
import com.ashok.shopInventory.service.ISubjectServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SubjectService implements ISubjectServiceImpl {

    @Autowired
    private ISubjectRepository subjectRepository;

    @Transactional
    @Override
    public List<String> getAllSubjectById(Long id) {
        return subjectRepository.getAllSubjectById(id);
    }
}
