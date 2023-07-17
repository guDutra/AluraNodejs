import NaoEncontrado from '../errors/NaoEncontrado.js';
import autores from '../models/Autor.js';

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado);
    } catch (error) {
      next(error);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autoresResultado = await autores.findById(id);
      if (autoresResultado !== null) {
        res.status(200).send(autoresResultado);
      } else {
        next(new NaoEncontrado('Id do Autor não localizado.'));
      }
    } catch (error) {
      next(error);
    }
  };


  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);
      const autoresResultado = await autor.save();
      res.status(201).send(autoresResultado.toJSON());
    } catch (error) {

      next(error);
    }

  };


  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      await autores.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: 'Autor atualizado com sucesso' });
    } catch (error) {
      next(error);
    }
  };

  static excluirAutor = (req, res, next) => {
    try {
      const id = req.params.id;

      autores.findByIdAndDelete(id);

      res.status(200).send({ message: 'Autor removido com sucesso' });
    } catch (error) {
      next(error);
    }
  };
}


export default AutorController;