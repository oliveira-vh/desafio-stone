const _ = require('underscore')

function corrigirValor(l, target) {
    var off = target - _.reduce(l, function(acc, x) { return acc + Math.round(x) }, 0);
    return _.chain(l).
            sortBy(function(x) { return Math.round(x) - x }).
            map(function(x, i) { return Math.round(x) + (off > i) - (i >= (l.length + off)) }).
            value();
}

//console.log(corrigirValor([333.3333333333333, 333.3333333333333, 333.3333333333333], 1000))

module.exports = {
    corrigirValor
}