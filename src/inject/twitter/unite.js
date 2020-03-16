/* eslint-disable no-undef */
const cleanseUnit = () => {
    cleanseTweets();
    cleanseTweetsMobile();
};

document.body.onscroll = cleanseUnit;
document.body.onload = cleanseUnit;