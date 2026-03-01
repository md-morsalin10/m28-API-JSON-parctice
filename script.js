// const student = {
//     name: "Mohammad",
//     roll: 10,
//     class: 7,
//     books: ['math', 'english', 'python']
// }

// console.log(student);

// const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

// const studentPhrase =JSON.parse(studentJSON);
// console.log(studentPhrase, typeof studentPhrase);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response=> response.json()
//        .then(data=> console.log(data)));



// const jsonBtn = () => {

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json()
//             .then(data => console.log(data)));
// }

// const loadComment = () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts'
//     fetch(url)
//     .then(res => res.json()
//     .then(data => {
//         console.log(data);
//         displayPost(data);
//     }))
// }

// const displayPost = (posts) => {
//     posts.forEach((post=>{
//         console.log(post)
//     }))
// }