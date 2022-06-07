const constants = require('../data/constants.js')

function liter_to_mol_convert(given_liter){
    return given_liter / constants['stp']
}

module.exports = {liter_to_mol_convert}