import RequisicaoIncorreta from './RequisicaoIncorreta.js';

class ErroValidacao extends RequisicaoIncorreta {
    constructor(error) {

        const mensagensErro = Object.values(error.errors)
            .map(erro => erro.message)
            .join('; ');
        super(`Os seguintes erros foram encontradas: ${mensagensErro}`);
    }
}

export default ErroValidacao;