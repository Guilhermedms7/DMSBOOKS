import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Conta.css';

const Conta = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  // Função para listar usuários
  const listarUsuarios = () => {
    axios.get('http://localhost:8800/users')
      .then((res) => {
        // Ao listar os usuários, convertemos a data para o formato correto
        const usuariosComDataFormatada = res.data.map((usuario) => ({
          ...usuario,
          data_nascimento: formatDate(usuario.data_nascimento),
        }));
        setUsuarios(usuariosComDataFormatada);
      })
      .catch((err) => console.error('Erro ao listar usuários:', err));
  };

  // formato brasileiro
  const formatDate = (date) => {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`; // Formato brasileiro
  };

  // formato brasileiro
  const formatToDateInput = (date) => {
    const data = new Date(date);
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    return `${ano}-${mes}-${dia}`; // muda o formato date
  };

  // Função para adicionar um usuário
  const adicionarUsuario = () => {
    const novoUsuario = {
      nome,
      email,
      fone,
      data_nascimento: formatToDateInput(dataNascimento),
    };

    axios.post('http://localhost:8800/users', novoUsuario)
      .then((res) => {
        listarUsuarios(); // Atualiza a lista de usuários após adicionar
        setNome('');
        setEmail('');
        setFone('');
        setDataNascimento('');
      })
      .catch((err) => console.error('Erro ao adicionar usuário:', err));
  };

  // Função para remover um usuário
  const removerUsuario = (id) => {
    axios.delete(`http://localhost:8800/users/${id}`)
      .then((res) => listarUsuarios()) // Atualiza a lista de usuários após remover
      .catch((err) => console.error('Erro ao remover usuário:', err));
  };

  // Função para editar um usuário
  const editarUsuario = (id) => {
    // Encontra o usuário a ser editado e preenche os campos do formulário
    const usuario = usuarios.find((user) => user.id === id);
    setNome(usuario.nome);
    setEmail(usuario.email);
    setFone(usuario.fone);
    setDataNascimento(formatToDateInput(usuario.data_nascimento));
    setUsuarioEditando(usuario); // Marca o usuário como editando
  };

  // Função para atualizar os dados do usuário
  const atualizarUsuario = () => {
    const usuarioAtualizado = {
      nome,
      email,
      fone,
      data_nascimento: formatToDateInput(dataNascimento),
    };

    axios.put(`http://localhost:8800/users/${usuarioEditando.id}`, usuarioAtualizado)
      .then((res) => {
        listarUsuarios(); // Atualiza a lista de usuários após edição
        setNome('');
        setEmail('');
        setFone('');
        setDataNascimento('');
        setUsuarioEditando(null); // Limpa o estado de edição
      })
      .catch((err) => console.error('Erro ao atualizar usuário:', err));
  };

  // Carregar usuários ao montar o componente
  useEffect(() => {
    listarUsuarios();
  }, []);

  return (
    <div className="conta-container">
      <h1 className="conta-title">Conta de Usuário</h1>

      <h2>{usuarioEditando ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>
      <form
        className="conta-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (usuarioEditando) {
            atualizarUsuario(); // Se estiver editando, atualiza
          } else {
            adicionarUsuario(); // Caso contrário, adiciona um novo
          }
        }}
      >
        <div>
          <label>Nome</label>
          <input
            className="conta-input"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className="conta-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone</label>
          <input
            className="conta-input"
            type="text"
            value={fone}
            onChange={(e) => setFone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Data de Nascimento</label>
          <input
            className="conta-input"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <button className="conta-button" type="submit">
          {usuarioEditando ? 'Atualizar Usuário' : 'Adicionar Usuário'}
        </button>
      </form>

      <h2>Usuários Cadastrados</h2>
      <ul className="conta-list">
        {usuarios.map((usuario) => (
          <li className="conta-list-item" key={usuario.id}>
            <p><strong>{usuario.nome}</strong></p>
            <p>Email: {usuario.email}</p>
            <p>Telefone: {usuario.fone}</p>
            <p>Data de Nascimento: {usuario.data_nascimento}</p>
            <button
              className="conta-edit-button"
              onClick={() => editarUsuario(usuario.id)}
            >
              Editar
            </button>
            <button
              className="conta-remove-button"
              onClick={() => removerUsuario(usuario.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conta;
