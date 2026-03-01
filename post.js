const loadComment = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            displayPost(data)
        });
}
//  get the container 
const postContainer =  document.getElementById('post-container')
// console.log(postContainer);

const displayPost = (posts) => {
    posts.forEach(post =>{
        // console.log(post.title);
        // create list element
        const li = document.createElement("li");
        li.innerText = post.title;

        // 3 append to the container 
        postContainer.appendChild(li);

        
    })
}