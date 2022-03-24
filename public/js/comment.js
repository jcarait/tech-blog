const newCommentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#msg').value.trim();
  const postDataId = document.getElementById('post-link');
  const id = postDataId.getAttribute('data-id');

  if (comment && id) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment: comment, post_id: id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert('Failed to comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentFormHandler);
