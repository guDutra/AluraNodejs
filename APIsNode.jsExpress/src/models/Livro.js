import mongoose from 'mongoose';


const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: (true, 'Titúlo do livro é obrigatório')
    },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: (true, 'Autor(a) do livro é obrigatório') },
    editora: { type: String, required: (true, 'Editora do livro é obrigatória' ) },
    numeroPaginas: { type: Number }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;