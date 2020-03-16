const cleanseMobilePosts = () => {
    const postTitles = document.getElementsByClassName('PostHeader__post-title-line');

    for (let postTitle of postTitles){
        const wholePost = postTitle.parentElement.parentElement.parentElement;
        
        const toSearchText = postTitle.innerHTML;
        const lowerHtml = toSearchText.toLowerCase();

        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const wordLow = word.toLowerCase();

            if (lowerHtml.includes(wordLow)) {   // && wholePost.children.length == 1
                // removeElement(wholeTweetToDelete);
                // eslint-disable-next-line no-undef
                // debugHighLight(wholePost);
                // eslint-disable-next-line no-undef
                blurElement(wholePost);
                break;
            }
        }
    }
};

const cleanseMobileComments = () => {
    const comments = document.getElementsByClassName('Comment__body');

    for (let comment of comments){
        const wholeComment = comment.parentElement;
        const toSearchText = comment.firstChild.firstChild.innerHTML;
    
        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const lowerHtml = toSearchText.toLowerCase();
            const wordLow = word.toLowerCase();

            if (lowerHtml.includes(wordLow)) {
                // removeElement(wholeTweetToDelete);
                // eslint-disable-next-line no-undef
                // debugHighLight(wholeComment);
                // eslint-disable-next-line no-undef
                blurElement(wholeComment);
                break;
            }
        }
    }
};

// eslint-disable-next-line no-unused-vars
const cleanseMobile = () => {
    cleanseMobilePosts();
    cleanseMobileComments();
};