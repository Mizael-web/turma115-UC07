import React, { useState } from 'react';
import styles from './CadastrarAluno.module.css';
import { criar } from '../../../service/alunoService'; // Importa a função do serviço para criar aluno

function CadastrarAluno({ onCadastro }) {
  // Estados dos campos do formulário
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Estado para mensagem de feedback
  const [mensagem, setMensagem] = useState('');

  // Lógica para envio do formulário
  async function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    try {
      await criar({ matricula, nome, email, senha });
      setMensagem('Aluno cadastrado com sucesso!');// Informação de sucesso no cadastro

      // Limpar os campos
      setMatricula('');
      setNome('');
      setEmail('');
      setSenha('');
      // Dispara o gatilho para ListarAlunos recarregar
      onCadastro(); // Chama a função passada via prop, que é handleRefresh do componente pai
      //console.log(onCadastro());

    } catch (error) {
      setMensagem(error.response.data.mensagem || 'Erro ao cadastrar aluno.'); // Mensagem de erro caso o cadastro falhe
    }
  }
console.log(matricula)
  return (
    <div className={styles.container}>
      <h2>Cadastrar Aluno</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        <label htmlFor="matricula">Matrícula:</label>
        <input
          id="matricula"
          type="text"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>

      {mensagem && <p className={styles.message}>{mensagem}</p>}
    </div>
  );
}

export default CadastrarAluno;
