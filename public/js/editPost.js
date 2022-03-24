const editPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const titleEl = document.getElementById('post-title');
  const content = document.querySelector('#post-content').value.trim();
  const id = titleEl.getAttribute('data-id');

  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to edit post');
    }
  }
};

document
  .querySelector('.form-edit-post')
  .addEventListener('submit', editPostFormHandler);
