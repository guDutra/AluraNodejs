import NaoEncontrado from '../errors/NaoEncontrado.js';

// eslint-disable-next-line no-unused-vars
function manipulador404(req, res, next) {
    const Erro404 = new NaoEncontrado();
    next(Erro404);
}


export default manipulador404;