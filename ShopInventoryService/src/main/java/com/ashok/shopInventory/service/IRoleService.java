package com.ashok.shopInventory.service;

import com.ashok.shopInventory.entity.Role;

import java.util.List;

public interface IRoleService {

    Role getRoleByName(String email);
    void save(String roleName);
    List<Role> getAllRoles();
}
