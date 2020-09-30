import React from 'react'
import './Post.css'
import menu from '../../assets/icons/open-menu.png'
import like from '../../assets/icons/heart.png'
import comment from '../../assets/icons/comment.png'
import send from '../../assets/icons/send.png'
import save from '../../assets/icons/save.png'

export default function Post() {

    const looper = [1, 2]
    return (
        <div className="post_container">
            <div className="post_header">
                <section style={{ 'display': 'inline-flex' }}>
                    <img className="avatar_image"
                        src="https://smartinbound.com/wp-content/uploads/2014/02/JD-Laughing-Portrait-Square-Black-BG.jpg"
                        alt="" />
                    <p className="user_name">martianpop42</p>
                </section>
                <section>
                    <button className="action_button"> <img className="action_button_icon"
                        src={menu}
                        alt=""
                    />
                    </button>
                </section>
            </div>

            <br></br>
            <img className="post_image"
                src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"
                alt="" />

            <div className="action_area">
                <section>
                    <button className="action_button"><img className="action_button_icon bottom_action" src={like} alt="" /></button>
                    <button className="action_button"><img className="action_button_icon bottom_action" src={comment} alt="" /></button>
                    <button className="action_button"><img className="action_button_icon bottom_action" src={send} alt="" /></button>
                </section>

                <section>
                    <button className="action_button"><img className="action_button_icon bottom_action" src={save} alt="" /></button>
                </section>
            </div>

            <span className="custom_span">4567 likes</span>

            <div className="caption_area">
                <p><a href="/" className="custom_span">afasfaf</a>asfafafasfasfafafafafafasfasfafjkjkjgnjashfsa,bjasbsafafafasfsafasfasfagasgrnhrjhrjerjeragdghrejetntegeuytkuyluterhejre</p>
            </div>

            <div className="comment_area">
                <a href="/" className="custom_span"> view all 20 comments</a>
                {looper.map(function () {
                    return <PostComment />
                })}
            </div>
        </div >
    )
}

function PostComment() {
    return (
        <div className="post_paginated_comment">
            <p><a href="/" className="custom_span">afasfaf</a>asfafafasfasfafafafafafasfasfafjkjkjgnjashfsa,bjasbsafafafasfsafasfasfagasgrnhrjhrjerjeragdghrejetntegeuytkuyluterhejre</p>
        </div>
    )
}