import React from 'react'
import { IMAGE_API } from '../../api/constant';
import './detail.css'

const Gender = ({cast}) => {
    const topCast = cast && cast.filter((gend) => gend.gender === 1);
    return (
        <div className="gender">
        <h3 className="title-gender">Gender</h3>
        <div className="gender-list" data-aos="fade-right" data-aos-offset="300" data-aos-duration="700">
          {cast &&
            topCast.map((gend) => (
              <div className="gender-item" key={gend.id}>
                <img
                  src={
                    gend.profile_path !== null
                      ? `${IMAGE_API}${gend.profile_path}`
                      : `https://i.imgur.com/Nd7b2Ha.jpg`
                  }
                ></img>
                <h3>{gend.name}</h3>
              </div>
            ))}
        </div>
      </div>
    )
}

export default Gender
