document.addEventListener('DOMContentLoaded', () => {
    generatePosts();
});

function generatePosts () {
    let postWrapper = document.querySelector('.page2-post-wrapper');
    let content = '';

    posts.forEach((post) => {
        content += `
             <div class="page2-post" id = "${post.id}">
                <div class="header">
                    <div class="profile-info">
                        <div class="profile-img"></div>
                        <div class="profile-name">squid_tunes</div>
                    </div>
                    <div class="three-dots"></div>
                </div>

                <div class="actual-post">
                    <img class = "img1" src="${post.image}" alt="">
                    <img class = "img2" src = "images/heart-3-fill.svg">
                </div>

                <div class="selections">
                    <div class="right">
                        <div class="heart-icon action">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z" stroke="#000000" stroke-width="1"></path></svg>
                        </div>
                        <div class="comment-icon action">
                            <img src="images/comment.webp" alt="">
                        </div>
                        <div class="share-icon action">
                            <img src="images/share.webp" alt="">
                        </div>
                    </div>
                    <div class="save-icon action">
                        <img src="images/save.webp" alt="">
                    </div>
                </div>
            </div>
        `;
    });

    postWrapper.innerHTML = content;

    document.querySelectorAll('.heart-icon').forEach((like) => {
        like.addEventListener('click' , () => {
            doLike(like);
        });
    });

    document.querySelectorAll('.img1').forEach((image) => {
        image.addEventListener('dblclick' , () => {
            const parentPost = image.closest('.page2-post');
            const like = parentPost.querySelector('.heart-icon');
            const img2 = parentPost.querySelector('.img2');

            if (!like.classList.contains('liked')) {
                like.classList.add('liked');
            }

            img2.style.opacity = 0.8;
            img2.style.transform = 'translate(-50% , -50%) scale(1)';

            setTimeout(() => {
                img2.style.opacity = 0;
            } , 800);
        })
    })
}


function doLike (like) {
    if(like.classList.contains('liked')){
        like.classList.remove('liked');
    }
    else{
        like.classList.add('liked');
    }
}