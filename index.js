const { items } = require('./items');
const { emails } = require('./emails');
const { corrigirValor } = require('./corrigirValor')

const calcular = (items, emails) => {
    //calcular o total
    const total = items.map(item => item.preco*item.qte).reduce((acc, preco) => acc + preco, 0)
    console.log('total da compra', total)

    //dividir entre os usuarios
    const arrayCustoPorUsuario = emails.map(email => total/emails.length)

    //corrigir valor

    const custoPorUsuarioCorrigido = corrigirValor(arrayCustoPorUsuario, total)

    console.log('custo por usuario', custoPorUsuarioCorrigido)

    let mapCustoPorUsuario = {};
    let i = 0;
    emails.forEach((email) => {
        mapCustoPorUsuario[email] = custoPorUsuarioCorrigido[i];
        i++
    });

    return mapCustoPorUsuario

}
console.log(calcular(items, emails))