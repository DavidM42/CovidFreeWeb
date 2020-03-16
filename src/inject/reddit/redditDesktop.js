const cleansePosts = () => {
    const postTitles = document.getElementsByClassName('_eYtD2XCVieq6emjKBH3m');

    for (let postTitle of postTitles){
        let starting = postTitle.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

        while (starting.children.length > 1) {
            starting = starting.parentElement;
        }
        const wholePost = starting;
        
        const toSearchText = postTitle.innerText;
        const lowerHtml = toSearchText.toLowerCase();

        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const wordLow = word.toLowerCase();

            if (lowerHtml.includes(wordLow) && wholePost.children.length <= 20) {
                // removeElement(wholeTweetToDelete);
                // debugHighLight(wholePost);
                // eslint-disable-next-line no-undef
                blurElement(wholePost);
                break;
            }
        }
    }
};

const cleanseComments = () => {
    const comments = document.getElementsByClassName('_1qeIAgB0cPwnLhDF9XSiJM');

    for (let comment of comments){
        const wholeComment = comment.parentElement.parentElement.parentElement;
        const toSearchText = comment.innerText;
    
        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const lowerHtml = toSearchText.toLowerCase();
            const wordLow = word.toLowerCase();

            if (lowerHtml.includes(wordLow)) {
                // removeElement(wholeTweetToDelete);
                // debugHighLight(wholeTweetToDelete);
                // eslint-disable-next-line no-undef
                blurElement(wholeComment);
                break;
            }
        }
    }
};

// eslint-disable-next-line no-unused-vars
const cleanse = () => {
    cleansePosts();
    cleanseComments();
};