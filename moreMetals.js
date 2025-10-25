// --- Platinum ---
elements.platinum = {
    color: ["#969393b3", "#9f9e9eff", "#a89a9aff", "#b7b0b0ff"],
    behavior: behaviors.SOLID,
    category: "solids",
    density: 21450,
    conduct: 1,
    hardness: 0.9,
    tempHigh: 2041,
    stateHigh: "molten_platinum",
    desc: "A rare, noble metal. Extremely resistant to corrosion.",
    hidden: false
}

elements.molten_platinum = {
    color: "#ffcccc",
    behavior: behaviors.LIQUID,
    category: "states",
    density: 20000,
    tempLow: 2041,
    stateLow: "platinum",
    hidden: false
}

// --- Titanium ---
elements.titanium = {
    color: "#b8b8b8",
    behavior: behaviors.SOLID,
    category: "solids",
    density: 4500,
    conduct: 1,
    tempHigh: 1668,
    stateHigh: "molten_titanium",
    desc: "Strong, light metal. Resistant to heat and corrosion.",
    hidden: false
}

elements.molten_titanium = {
    color: "#ffaaaa",
    behavior: behaviors.LIQUID,
    category: "states",
    density: 4300,
    tempLow: 1668,
    stateLow: "titanium",
    hidden: false
}

// --- Chromium ---
elements.chromium = {
    reactions: {
        "water": { elem2:null, elem1:"oxidized_chromium", chance:10, tempMin:80 }
    },
    color: "#a9a9a9",
    behavior: behaviors.SOLID,
    category: "solids",
    density: 7190,
    conduct: 1,
    tempHigh: 1907,
    stateHigh: "molten_chromium",
    desc: "Shiny, reflective metal that forms a green oxide layer.",
    hidden: false
}

elements.oxidized_chromium = {
    color: ["#05a32aff", "#08c15bff", "#00d1aaff"],
    behavior: behaviors.SOLID,
    category: "states",
    density: 5230,
    conduct: 0,
    tempHigh: 1832,
    stateHigh: "molten_chromium",
    hidden: false,
}

elements.molten_chromium = {
    color: ["#ff9999", "#fe6969ff", "#ee5d72ff"],
    behavior: behaviors.LIQUID,
    category: "molten",
    density: 7000,
    tempLow: 1907,
    stateLow: "chromium",
    hidden: false
}

// --- Bonus Reaction: Iron + Chromium = Stainless Steel ---
if (elements.iron && !elements.stainless_steel) {
    elements.iron.reactions = {
        "chromium": { elem1: "stainless_steel", elem2: null }
    }

    elements.stainless_steel = {
        color: "#c0c0c0",
        behavior: behaviors.SOLID,
        category: "alloys",
        density: 8000,
        tempHigh: 1500,
        stateHigh: "molten_steel",
        desc: "An alloy of iron and chromium. Resistant to rust.",
    }
}
