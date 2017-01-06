//package com.share.service.impl;
//
//import com.share.mapper.UserMapper;
//import com.share.model.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//
//import java.util.ArrayList;
//import java.util.List;
//
///**
// * Created by max on 2016/11/16.
// */
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    UserMapper userMapper;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userMapper.getUserByTel(username);
//        if(user == null){
//            throw new UsernameNotFoundException("not found");
//        }
//        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority("user"));
//        System.err.println("username is " + username + ", password id" + user.getPassword());
//        return new org.springframework.security.core.userdetails.User(user.getUserTel(),
//                user.getPassword(), authorities);
//    }
//}
