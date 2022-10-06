package com.ashok.shopInventory.service.impl;

import com.ashok.shopInventory.Repository.RoleRepository;
import com.ashok.shopInventory.entity.Role;
import com.ashok.shopInventory.service.IRoleService;
import com.ashok.shopInventory.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service("roleServiceImpl")
public class RoleServiceImpl implements IRoleService {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    IUserService userService;

    @Override
    public Role getRoleByName(String name) {
        return roleRepository.getRoleByName(name);
    }

    @Override
    public void save(String roleName) {
        Role role = new Role();
        role.setName(roleName);
        roleRepository.save(role);
    }

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

}
