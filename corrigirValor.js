const _ = require('underscore')

function corrigirValor(l, total) {
    var off = total - _.reduce(l,(acc, x) => acc + Math.round(x) , 0);
    return _.chain(l).
            map((x, i) => Math.round(x) + (off > i) - (i >= (l.length + off)) ).
            value();
}

module.exports = {
    corrigirValor
}