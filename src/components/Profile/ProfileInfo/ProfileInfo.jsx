import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.main_img}>
                <div>
                    <img src='https://cs7.pikabu.ru/post_img/big/2017/12/14/6/151324248417431745.jpg'/>
                </div>
            </div>
            <div className={s.blockProfile}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;