import styled from '@emotion/styled';
import { useRef } from 'react';

export const mountPointCss = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Fundo escurecido para destacar o diálogo */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Dialog = styled.dialog`
  max-width: 400px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
`;

const DialogContent = styled.section`
  width: 100%;
  text-align: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const DialogSubscribe = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputRef.current?.value;

    console.log(name);
  };

  return (
    <Dialog open>
      <DialogContent>
        <h2>Receba Novidades</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Seu e-mail"
            required
            ref={inputRef}
          />
          <Button type="submit">Inscrever-se</Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
