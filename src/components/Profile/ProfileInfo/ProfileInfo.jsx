import React from 'react';
import s from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.main_img}>
                <div>
                    <img src='https://cs7.pikabu.ru/post_img/big/2017/12/14/6/151324248417431745.jpg' />
                </div>
            </div>
            <div className={s.blockProfile}>
                <div className={s.ava}>
                    <img src={props.userProfile.photos.large}></img>
                </div>
                <ProfileStatus />
                <div>{props.userProfile.fullName}</div>
                <div>Обо мне: {props.userProfile.aboutMe}</div>
                <div>contacts
                    <div>VK: {props.userProfile.contacts.vk}</div>
                    <div>Facebook: {props.userProfile.contacts.facebook}</div>
                    <div>Instagram: {props.userProfile.contacts.instagram}</div>
                    <div>GitHub: {props.userProfile.contacts.github}</div>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;