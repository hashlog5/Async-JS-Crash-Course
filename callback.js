const posts = [
  { title: 'post one', body: 'this is post one' },
  { title: 'post two', body: 'this is post two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callBack) {
  setTimeout(() => {
    posts.push(post);
    callBack();
  }, 2000);
}

createPost({ title: 'post three', body: 'this is post three' }, getPosts);
