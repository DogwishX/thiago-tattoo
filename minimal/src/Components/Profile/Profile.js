import React from "react";
import "./Profile.css";
class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <img
          className="profile__image"
          src="https://m.media-amazon.com/images/I/41ZlUB3EKxL._AC_SY1000_.jpg"
          alt="thiago barbosa"
        />
        <h4 className="profile__name">Thiago Barbosa</h4>
        <p className="profile__description">
          This is Thiago Barbosa. Born in Brazil and raised in Brazil, he has
          been tattooing for over 15 years.
        </p>
      </div>
    );
  }
}

export default Profile;
