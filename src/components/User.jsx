import React from "react";

const User = (props) => {
  if (props.user == null) {
    return <h1>Loading</h1>;
  } else {
    let user = props.user[0];
    console.log(user);
    return (
      <>
        <h1 className="title">Random User</h1>
        <div className="card">
          <div className="card-image">
            <figure className="image is-128x128">
              <img src={user.picture.large} alt={`${user.name}'s photo`} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  Name: {`${user.name.first} ${user.name.last}`}
                </p>
                <p className="subtitle is-6">@{user.login.username}</p>
              </div>
            </div>
            <div className="content">
              <p>
                Address:{" "}
                {`${user.location.street.number} ${user.location.street.name}`}
              </p>
              <p>City: {user.location.city} </p>
              <p>
                State: {user.location.state} | Postcode:{" "}
                {user.location.postcode}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default User;
