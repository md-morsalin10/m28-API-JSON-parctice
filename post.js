const loadComment = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            displayPost(data)
        });
}

const displayPost = (posts) =>{
    // 1 get the container 
    const postContainer = document.getElementById("post-container")
    postContainer.innerHTML = "";
    
    posts.forEach(post=> {
    
        // 2 create an element
        const div = document.createElement("div");
        div.innerHTML=`
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
        postContainer.appendChild(div);
    })
}
loadComment();