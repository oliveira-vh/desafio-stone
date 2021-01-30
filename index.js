const { items } = require('./listas/items');
const { emails } = require('./listas/emails');
const { corrigirValor } = require('./corrigirValor')

const calcular = (items, emails) => {
    //checar se há listas vazias
    if(!(Object.keys(items).length === 0) && emails.length > 0){
        //calcular o total
        const total = items.map(item => item.preco*item.qte).reduce((acc, preco) => acc + preco, 0)

        //dividir entre os usuarios
        const arrayCustoPorUsuario = emails.map(email => total/emails.length)

        //corrigir valor
        const custoPorUsuarioCorrigido = corrigirValor(arrayCustoPorUsuario, total)

        let mapCustoPorUsuario = {};
        let i = 0;
        emails.forEach((email) => {
            mapCustoPorUsuario[email] = custoPorUsuarioCorrigido[i];
            i++
        });

        return {
            total, 
            'custo por usuário: ': mapCustoPorUsuario
        }
    } else {
        return 'Entradas inválidas. Uma ou ambas as listas não podem estar vazias!'
    }

}

console.log(calcular(items, emails))
