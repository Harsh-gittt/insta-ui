document.querySelector('.follow-button').addEventListener('click' , () => {
    follow();
});

function follow () {
    let followerCountElem = document.querySelector('.follower-count-number');
    let followerCount = Number(followerCountElem.innerHTML);
    let followButtonElem = document.querySelector('.follow-button');

    if(followButtonElem.innerHTML === 'Follow'){
        followButtonElem.innerHTML = 'Following';
        followButtonElem.classList.add('following-button');
        followerCount ++;
        followerCountElem.innerHTML = followerCount;
    }
    else{
        followButtonElem.innerHTML = 'Follow';
        followButtonElem.classList.remove('following-button');
        followerCount --;
        followerCountElem.innerHTML = followerCount;
    }
}

let feedOption = document.querySelectorAll('.navigator-icon').forEach((feed , index) => {
    feed.addEventListener('click' , () => {
        showfeed(index);
    });
});

showfeed(0);

function showfeed (index) {
    let feed;
    let whatToDisplay = document.querySelector('.post-wrapper')
    if(index === 0){
        feed = document.querySelector('.post-icon');
        whatToDisplay.innerHTML = generateFeed();
        whatToDisplay.classList.remove('nothing-in-feed');
    }
    else if(index === 1){
        feed = document.querySelector('.reels-icon');
        whatToDisplay.innerHTML = 'No reels uploaded';
        whatToDisplay.classList.add('nothing-in-feed');
    }
    else if(index === 2){
        feed = document.querySelector('.tagged-icon');
        whatToDisplay.innerHTML = 'No tagged posts';
        whatToDisplay.classList.add('nothing-in-feed');
    }

    let isToggled = feed.classList.contains('toggle');

    if(isToggled){
        return;
    }
    else{
        unTogglePrev();
        feed.classList.add('toggle');
    }
}

function unTogglePrev(){
    const prevFeed = document.querySelector('.toggle');
    if(prevFeed){
        prevFeed.classList.remove('toggle');
    }
}

function generateFeed () {
    let html = '';
    posts.forEach((post) => {
        html +=  `
            <div class="post" id = "${post.id}">
                <a href="post.html#${post.id}" class="post-link">
                    <img src="${post.image}" alt="">
                </a>
            </div>
        `
    });
    return html;
}

const profilePicElem = document.querySelector('.profile-pic');
profilePicElem.addEventListener('click' , () => {
    showStory();
});

function showStory () {
    const storyelem = document.querySelector('.story');
    storyelem.style.opacity = 1;
    storyelem.style.transform = 'scale(1)';

    const load = document.querySelector('.progress');
    load.classList.add('progress-anim')

    setTimeout( () => {
        storyelem.style.opacity = 0;
        storyelem.style.transform = 'scale(0)';
        profilePicElem.style.border = '3px solid #dadada';
        load.classList.remove('progress-anim');
    } , 3000);
}

const likeStoryElem = document.querySelector('.like-story');
likeStoryElem.addEventListener('click' , () => {
    doLike(likeStoryElem);
})

function doLike (like) {
    if(like.classList.contains('liked')){
        like.classList.remove('liked');
    }
    else{
        like.classList.add('liked');
    }
}