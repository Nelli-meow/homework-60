import React from 'react';
import { Button, InputGroup, Form as BootstrapForm } from 'react-bootstrap';

const Form: React.FC = () => {
  return (
    <InputGroup className="mb-3">
      <BootstrapForm.Control
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
      />
      <Button variant="outline-secondary" id="button-addon1">
        Отправить
      </Button>
    </InputGroup>
  );
};

export default Form;