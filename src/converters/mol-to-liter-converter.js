const constants = require('../data/constants.js')

function mol_to_liter_convert(given_mol){
    return constants['stp'] * given_mol
}

module.exports = {mol_to_liter_convert}