const output_path = ""

var elements = {}

var count = 0

var element = function(
  display_name = 'N/A', 
  symbol = 'N/A', 
  protons = 'N/A', 
  neutrons = 'N/A',
  average_weight = 'N/A', 
  e_config = 'N/A',
  electro_negative = 'N/A',
  melting_point = 'N/A',
  boiling_point = 'N/A',
  radius = 'N/A',
  density = 'N/A',
  conductivity_thermal = 'N/A',
  conductivity_electric = 'N/A',
  heat_specific = 'N/A',
  heat_vaporization = 'N/A',
  heat_fusion = 'N/A',
  abundance = 'N/A',
  discovered = 'N/A'
  ){
    var newElement = {}

    newElement['display_name'] = display_name
    newElement['symbol'] = symbol
    newElement['protons'] = protons
    newElement['neutrons'] = neutrons
    newElement['average_weight'] = average_weight
    newElement['e_config'] = e_config
    newElement['electro_negative'] = electro_negative
    newElement['melting_point'] = melting_point
    newElement['boiling_point'] = boiling_point
    newElement['radius'] = radius
    newElement['density'] = density
    newElement['conductivity_thermal'] = conductivity_thermal
    newElement['conductivity_electric'] = conductivity_electric
    newElement['heat_specific'] = heat_specific
    newElement['heat_vaporization'] = heat_vaporization
    newElement['heat_fusion'] = heat_fusion
    newElement['abundance'] = abundance
    newElement['discovered'] = discovered

    elements[count] = newElement
    count++
  }

element("Hydrogen",         "H")
element("Helium",           "He")
element("Lithium",          "Li")
element("Beryllium",        "Be")
element("Boron",            "B")
element("Carbon",           "C")
element("Nitrogen",         "N")
element("Oxygen",           "O")
element("Fluorine",         "F")
element("Neon",             "Ne")
element("Sodium",           "Na")
element("Magnesium",        "Mg")
element("Aluminum",         "Al")
element("Silicon",          "Si")
element("Phosphorous",      "P")
element("Sulfur",           "S")
element("Chlorine",         "Cl")
element("Argon",            "Ar")
element("Scandium",         "Sc")
element("Titanium",         "Ti")
element("Vanadium",         "V")
element("Chromium",         "Cr")
element("Manganese",        "Mn")
element("Iron",             "Fe")
element("Cobalt",           "Co")
element("Nickel",           "Ni")
element("Copper",           "Cu")
element("Zinc",             "Zn")



console.log(elements)


