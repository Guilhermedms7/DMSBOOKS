import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [bookEditando, setBookEditando] = useState(null); // Estado para o livro sendo editado
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2]; // Pega o ID do livro na URL

  // Função para carregar as informações do livro a ser editado
  const editarLivro = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/books/${bookId}`);
      const livro = res.data;
      setBook({
        title: livro.title,
        desc: livro.desc,
        price: livro.price,
        cover: livro.cover,
      });
      setBookEditando(livro); 
    } catch (err) {
      console.log(err);
      setError(true); 
    }
  };

  useEffect(() => {
    editarLivro(); 
  }, [bookId]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const atualizarLivro = async () => {
    const livroAtualizado = {
      title: book.title,
      desc: book.desc,
      price: book.price,
      cover: book.cover,
    };

    try {
      await axios.put(`http://localhost:8800/books/${bookEditando.id}`, livroAtualizado);
      navigate("/"); 
    } catch (err) {
      console.error('Erro ao atualizar livro:', err);
      setError(true); 
    }
  };

  return (
    <div className="form">
      <h1>Atualizar Livro</h1>
      <input
        type="text"
        placeholder="Título do livro"
        name="title"
        value={book.title} // Preenche o campo com o valor atual
        onChange={handleChange}
      />
      <textarea
        rows={5}
        placeholder="Descrição do livro"
        name="desc"
        value={book.desc} 
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Preço do livro"
        name="price"
        value={book.price} 
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Capa do livro"
        name="cover"
        value={book.cover} 
        onChange={handleChange}
      />
      <button onClick={atualizarLivro}>Atualizar</button>
      {error && <p>Algo deu errado! Tente novamente.</p>}
    </div>
  );
};

export default Update;
