package com.ashok.shopInventory.service;

import com.ashok.shopInventory.entity.User;


public interface IUserService {
    User getUserByEmail(String email);
    void save(User user);

    User getUserById(long userId);

    User getUserByName(String name);
}
