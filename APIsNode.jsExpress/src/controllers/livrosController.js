import livros from '../models/Livro.js';

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find()
        .populate('autor')
        .exec(livrosResultado);
      res.status(200).json(livrosResultado);
    } catch (error) {
      next(error);

    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livrosResultado = await livros.findById(id)
        .populate('autor', 'nome')
        .exec(livrosResultado);
      res.status(200).send(livrosResultado);

    } catch (error) {
      next(error);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      const livrosResultado = await livro.save();
      res.status(201).send(livrosResultado.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: 'Livro atualizado com sucesso' });
    } catch (error) {
      next(error);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndDelete(id);

      res.status(200).send({ message: 'Livro removido com sucesso' });
    } catch (error) {
      next(error);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;

      const livrosResultado = await livros.find({ 'editora': editora });
      res.status(200).send(livrosResultado);
    } catch (error) {
      next(error);
    }
  };



}

export default LivroController;