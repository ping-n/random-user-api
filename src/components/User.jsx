import React from "react";

const User = (props) => {
  if (props.user == null) {
    return <h1>Loading</h1>;
  } else {
    let user = props.user[0];
    console.log(user);
    return (
      <>
        <h1>Random User</h1>
        <img src={user.picture.large} alt=""/>
        <p>Name: {`${user.name.title}. ${user.name.first} ${user.name.last}`}</p>
        <p></p>
      </>
    )
  }
};

export default User;
