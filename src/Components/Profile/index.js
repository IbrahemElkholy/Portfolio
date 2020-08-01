import React from 'react';
import './style.css'
import axios from 'axios'

const Profile = () => {

  const [bar, setbar] = React.useState([])
  React.useEffect(() => {
    axios.get('js/data.json').then((res) => {
      setbar(res.data.profile)
    })
  }, [])

  const barItems = bar
  const barlist = barItems.map(item => {
    return (
      <div className="bar" key={item.id}>
        <span className="title">{item.title}</span>
        <span className="perc">{item.perc}</span>
        <div className="parent">
          <span className="sp1"></span>
        </div>
      </div>
    )
  })
  return (
    <div className="profile_skills">
      <div className="container">
        <div className="profile">
          <h2 className="profile-title"><span>My </span>Profile</h2>
          <ul className="profile-list">
            <li className="profile-item">
              <span>Name</span>
                            Ibrahem Elkholy
                        </li>
            <li className="profile-item">
              <span>Birthday</span>
                            20/5/1993
                        </li>
            <li className="profile-item">
              <span>Address</span>
                            Masr Elgdeda
                        </li>
            <li className="profile-item">
              <span>Phone</span>
                            0102 289 6058
                        </li>
            <li className="profile-item">
              <span>Email</span>
                            ibrahem.elkholy1993@gmail.com
                        </li>
            <li className="profile-item">
              <span>Website</span>
              <span className="web">www.google.com</span>
            </li>
          </ul>
        </div>

        <div className="skills">
          <h2 className="skills-title">Some <span>skills</span></h2>
          <p className="skills-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>

          {barlist}

        </div>

      </div>
    </div>

  );
}

export default Profile;