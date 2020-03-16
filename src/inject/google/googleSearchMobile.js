const cleanseMobileHeadlines = () => {
    const headlineTexts = document.querySelectorAll('.rQMQod.Xb5VRe');

    for (let headlineText of headlineTexts){
        let wholeCard = headlineText.parentElement.parentElement.parentElement.parentElement;
        let searchHtml = headlineText.innerHTML;
        const lowerHtml = searchHtml.toLowerCase();

        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const wordLow = word.toLowerCase();

            if (lowerHtml.includes(wordLow)) {
                // removeElement(wholeCard);
                // debugHighLight(wholeCard);
                // eslint-disable-next-line no-undef
                blurElement(wholeCard);
                break;
            }
        }
    }
};

const cleanseMobileResults = () => {
    const titles = document.querySelectorAll('.BNeawe.vvjwJb.AP7Wnd');

    // title document.querySelectorAll('.BNeawe.vvjwJb.AP7Wnd');
    // body div document.querySelectorAll('.BNeawe.s3v9rd.AP7Wnd');

    for (let title of titles){
        const headlineText = title.innerHTML.toLowerCase();
        const completeResult = title.parentElement.parentElement.parentElement;
        const infoText = completeResult.querySelector('.BNeawe.s3v9rd.AP7Wnd').innerHTML.toLowerCase();

        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const wordLow = word.toLowerCase();

            if (headlineText.includes(wordLow) || infoText.includes(wordLow)) {
                // removeElement(wholeTweetToDelete);
                // debugHighLight(wholeTweetToDelete);
                // eslint-disable-next-line no-undef
                blurElement(completeResult);
                break;
            }
        }
    }
};

// eslint-disable-next-line no-unused-vars
const cleanseMobile = () => {
    cleanseMobileHeadlines();
    cleanseMobileResults();
};