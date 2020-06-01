import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__wallpaper">
        <img src="https://images5.alphacoders.com/102/1026346.jpg" alt="font-wallpaper" />
      </div>

      <div className="profile__info">
        <div className="profile__info__photo">
          <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="profile-photo" />
        </div>

        <div className="profile__info__data">
          <div className="profile__info__data--name">Rick Sanchez</div>
          <div className="profile__info__data--dateOfBirth">Date of birth: <span>1 Jan. 2000 year.</span></div>
          <div className="profile__info__data--city">City: <span>Minsk</span></div>
          <div className="profile__info__data--education">Education: <span>BSU'11</span></div>
          <div className="profile__info__data--webSite">Web site: <a href="#">www.it-kamasutra.com</a></div>
        </div>
      </div>

      <div className="profile__posts">
        <div className="profile__posts__title">My posts</div>
        <form className="profile__posts__creator">
          <textarea className="profile__posts__creator--input" type="text" placeholder="What is new?"></textarea>
          <input className="profile__posts__creator--submit" type="submit" value="Sent"></input>
        </form>
        <div className="profile__posts__history">
          <div className="profile__posts__history--photo">I'm</div>
          <div className="profile__posts__history--text">Hey, Today I'm create my first React application!</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;