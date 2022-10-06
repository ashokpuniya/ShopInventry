package com.ashok.shopInventory.service.impl;

import com.ashok.shopInventory.Repository.UserRepository;
import com.ashok.shopInventory.entity.User;
import com.ashok.shopInventory.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("userServiceImpl")
public class UserServiceImpl implements IUserService {

    @Autowired
    UserRepository userRepository;


    @Override
    public User getUserByEmail(String email) {
        return userRepository.getUserByEmail(email);
    }

    @Override
    public void save(User user) {
        //User userInDB = getUserByEmail(user.getEmail());
        userRepository.save(user);
    }

    @Override
    public User getUserById(long userId) {
        return userRepository.getUserById(userId);
    }

    @Override
    public User getUserByName(String name) {
        return userRepository.getUserByName(name);
    }
}
