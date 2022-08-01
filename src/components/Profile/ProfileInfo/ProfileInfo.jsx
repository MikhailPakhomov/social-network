import React from 'react';
import Preloader from '../../../common/Preloader';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
 console.log (props)
     if(!(props.userInfo)) {
         <Preloader />
    }
    return (
        <div>
            <div className={s.main_img}>
                <div>
                    <img src='https://cs7.pikabu.ru/post_img/big/2017/12/14/6/151324248417431745.jpg'/>
                </div>
            </div>
            <div className={s.blockProfile}>
                    <div>
                    <img src={props.userInfo.photos.large}></img>
                </div>
                <div>{props.userInfo.fullName}</div> 
                <div>contacts
                    <div>vk</div>
                    <div>fb</div>
                    <div>ig</div>
                    <div>git</div>
                </div>
            </div>
            
        </div>
    );
}

export default ProfileInfo;