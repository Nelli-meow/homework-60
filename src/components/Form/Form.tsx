import React from 'react';

const Form: React.FC = () => {
  return (
    <div>
      <h1>Чатик</h1>
      <div className="form-floating mb-5 mt-5">
        <input type="text" className="form-control" id="floatingAuthorName" placeholder="AuthorName"/>
        <label htmlFor="floatingAuthorName">Author</label>
      </div>

      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a Message here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Message</label>
      </div>
      <button type="button" className="btn btn-danger mt-5" id="sendBtn">send</button>
    </div>
  );
};

export default Form;
