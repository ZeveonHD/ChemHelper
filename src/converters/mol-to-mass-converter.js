const constants = require('../data/constants.js')
const elements = require('../data/elements.json')
const compound_to_mass_converter = require('./compound-to-mass-converter.js')

function mol_to_mass_convert_compound(compound, given_mol){
    var mass = compound_to_mass_converter.calculateMass(compound)
    return given_mol * mass
}

function mol_to_mass_convert_mass(molar_mass, given_mol){
    return given_mol * molar_mass
}

module.exports = {mass_to_mol_convert_mass,mass_to_mol_convert_compound}