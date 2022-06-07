const constants = require('../data/constants.js')
const elements = require('../data/elements.json')
const compound_to_mass_converter = require('./compound-to-mass-converter.js')

function mass_to_mol_convert_compound(compound, given_mass){
    var mass = compound_to_mass_converter.calculateMass(compound)
    return given_mass / mass
}

function mass_to_mol_convert_mass(molar_mass, given_mass){
    return given_mass / molar_mass
}

module.exports = {mass_to_mol_convert_mass,mass_to_mol_convert_compound}