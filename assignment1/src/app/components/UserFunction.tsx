import UserCard from "./UserCard"; 
import React from "react";

type User = {
  name: string,
  email: string,
  avatar: string,
};

const users : User[]= [
  {
    name : "Aarushi",
    email : "aarushi@gmail.com",
    avatar : "https://images.icon-icons.com/2643/PNG/512/female_woman_user_people_avatar_white_tone_icon_159354.png"
  },
  {
    name : "eklavya", 
    email : "eklavya@gmail.com",
    avatar : "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
  },
  {
    name : "Vaishnavi", 
    email : "vaishnavi@gmail.com",
    avatar : "https://images.icon-icons.com/2643/PNG/512/female_woman_user_people_avatar_white_tone_icon_159354.png"
  }
];

export const Userfunction =() =>{
  return(
    <div>
      {users.map((user, index) =>(
        <UserCard key = {index} name = {user.name} email = {user.email} avatar = {user.avatar}/>
      ))}
    </div>
  )
}
