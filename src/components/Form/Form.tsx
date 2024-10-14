import React, { useState } from 'react';
import Button from '../Button/Button';


const Form: React.FC = () => {
  const url = 'http://146.185.154.90:8000/messages';
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();

    if (author.trim() && message.trim()) {
      const data = new URLSearchParams();

      data.set('author', author);
      data.set('message', message);

      await fetch(url, {
        method: 'POST',
        body: data,
      });

      setAuthor('');
      setMessage('');

    } else {
      alert('Не оставляйте поля пустыми!');
    }
  };


  return (
    <div>
      <h1>Чатик</h1>
      <form onSubmit={submitPost}>
        <div className="form-floating mb-5 mt-5">
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            className="form-control"
            id="floatingAuthorName"
            placeholder="AuthorName"
          />
          <label htmlFor="floatingAuthorName">Author</label>
        </div>

        <div className="form-floating">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            placeholder="Leave a message here"
            id="floatingTextarea"
          />
          <label htmlFor="floatingTextarea">Message</label>
        </div>

        <Button />
      </form>
    </div>
  );
};

export default Form;