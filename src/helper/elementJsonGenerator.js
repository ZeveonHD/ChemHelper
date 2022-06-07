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

element("Hydrogen",         "H",    1)
element("Helium",           "He",   2)
element("Lithium",          "Li",   3)
element("Beryllium",        "Be",   4)
element("Boron",            "B",    5)
element("Carbon",           "C",    6)
element("Nitrogen",         "N",    7)
element("Oxygen",           "O",    8)
element("Fluorine",         "F",    9)
element("Neon",             "Ne",   10)
element("Sodium",           "Na",   11)
element("Magnesium",        "Mg",   12)
element("Aluminum",         "Al",   13)
element("Silicon",          "Si",   14)
element("Phosphorous",      "P",    15)
element("Sulfur",           "S",    16)
element("Chlorine",         "Cl",   17)
element("Argon",            "Ar",   18)
element("Potassium",        "K",    19)
element("Calcium",          "Ca",   20)
element("Scandium",         "Sc",   21)
element("Titanium",         "Ti",   22)
element("Vanadium",         "V",    23)
element("Chromium",         "Cr",   24)
element("Manganese",        "Mn",   25)
element("Iron",             "Fe",   26)
element("Cobalt",           "Co",   27)
element("Nickel",           "Ni",   28)
element("Copper",           "Cu",   29)
element("Zinc",             "Zn",   30)
element("Gallium",          "Ga",   31)
element("Germanium",        "Ge",   32)
element("Arsenic",          "As",   33)
element("Selenium",         "Se",   34)
element("Bromine",          "Br",   35)
element("Krypton",          "Kr",   36)
element("Rubidium",         "Rb",   37)
element("Strontium",        "Sr",   38)
element("Yttrium",          "Y",    39)
element("Zirconium",        "Zr",   40)
element("Niobium",          "Nb",   41)
element("Molybdenum",       "Mo",   42)
element("Technetium",       "Tc",   43)
element("Ruthenium",        "Ru",   44)
element("Rhodium",          "Rh",   45)
element("Palladium",        "Pd",   46)
element("Silver",           "Ag",   47)
element("Cadmium",          "Cd",   48)
element("Indium",           "In",   49)
element("Tin",              "Sn",   50)
element("Antimony",         "Sb",   51)
element("Tellurium",        "Te",   52)
element("Iodine",           "I",    53)
element("Xenon",            "Xe",   54)



console.log(elements)
