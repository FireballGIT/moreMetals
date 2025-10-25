// === Arlo's Metals Mod ===
// Adds Platinum, Titanium, and Chromium to Sandboxels
// Made with ✨ genius energy ✨

// --- Platinum ---
elements.platinum = {
    color: "#e5e4e2",
    behavior: behaviors.SOLID,
    category: "metals",
    density: 21450,
    conduct: 1,
    hardness: 0.9,
    tempHigh: 2041,
    stateHigh: "molten_platinum",
    desc: "A rare, noble metal. Extremely resistant to corrosion.",
}

elements.molten_platinum = {
    color: "#ffcccc",
    behavior: behaviors.LIQUID,
    category: "molten",
    density: 20000,
    tempLow: 2041,
    stateLow: "platinum",
}

// --- Titanium ---
elements.titanium = {
    color: "#b8b8b8",
    behavior: behaviors.SOLID,
    category: "metals",
    density: 4500,
    conduct: 1,
    tempHigh: 1668,
    stateHigh: "molten_titanium",
    desc: "Strong, light metal. Resistant to heat and corrosion.",
}

elements.molten_titanium = {
    color: "#ffaaaa",
    behavior: behaviors.LIQUID,
    category: "molten",
    density: 4300,
    tempLow: 1668,
    stateLow: "titanium",
}

// --- Chromium ---
elements.chromium = {
    color: "#a9a9a9",
    behavior: behaviors.SOLID,
    category: "metals",
    density: 7190,
    conduct: 1,
    tempHigh: 1907,
    stateHigh: "molten_chromium",
    desc: "Shiny, reflective metal that forms a green oxide layer.",
}

elements.molten_chromium = {
    color: "#ff9999",
    behavior: behaviors.LIQUID,
    category: "molten",
    density: 7000,
    tempLow: 1907,
    stateLow: "chromium",
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
