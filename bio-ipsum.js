const openers = ["Presenting to the emergency room, the", "When on board H.M.S 'Beagle', as naturalist, the", "This is our planet's final frontier;", "We humans still have a long way to go with learning to live harmoniously with our environment and its wildlife, and as such, the", "Statistically, the"];

const adjectives = ["contractile", "deoxyribose", "convergent", "transverse", "local", "lateral", "ventral", "dorsal", "cranial", "caudual", "gram-negative", "gram-positive", "carbon-dated", "jurassic", "segmented", "ordovician", "pre-cambrian", "acute", "chronic", "diploid", "haploid", "germinating", "native", "inclusive", "foreign", "invasive", "homogeneous", "inferior", "mycorrhizal", "sessile", "pelagic", "benthic", "commensal", "nuclear", "carcinogenic", "acidic", "cretaceous", "phylogenetic", "monophyletic", "benign", "resulting", "colonizing", "endangered", "extant", "vestigial", "avian", "virulant", "contagious", "distant", "arterial", "pulmonary", "skeletal", "cranial", "digital", "fungal", "bacterial", "mutant", "pathogenic", "circalittoral", "respiratory", "circulatory", "excretory", "glandular", "bulbous", "chitinous", "aboral", "adambulacral", "asexual", "basal", "rhinal", "buccal", "dendritic", "embryonic", "larval", "pinnate", "radial", "adult", "anaerobic", "ribosomal", "nocturnal", "diurnal", "organic",];
const prefixes = ["ect", "eno", "ex", "mes", "haem", "therm", "dystr", "tub", "nucle", "carb", "oste", "nephr", "cardi", "neur", "lip", "glu", "therm", "leuke", "subd", "meta", "peri", "hal", "biot", "keratin", "phot", "hyp", "hyper", "phosph", "lumin", "anaesth", "mit", "chrondr", "strept", "staphyl", "plast", "pale", "arche", "spor", "clostr", "amygd", "annul", "apic", "par", "append", "asco", "auto", "troph", "chlamyd", "cellul", "corpr", "dextr", "deutero", "dichot", "monocot", "gam", "fruct", "granul", "cephal", "necr", "organ", "sept", "ventric", "zo", "phyt", "cyan", "phen", "chem", "ecot", "epib", "holoc", "ceol", "aceol", "inter", "littor", "macr", "micr", "meg", "met", "herb", "carn", "detrit", "insect", "parthen", "pherom", "physi", "osse", "symbi", "taxon", "centr", "chlor", "coll", "cotyl", "cyt", "euk", "prok", "schler", "scoli", "hepat", "synap", "psued", "dent", "lachrym"];
const ends = ["aryote", "iary", "otomy", "omy", "osaurus", "ase", "ose", "ic", "ide", "oderm", "ophile", "olipid", "enchyma", "ococcus", "obacillus", "atoma", "oprogenitor", "ocyte", "emic", "um", "osynthesis", "ogenic", "emia, (meaning presence in blood)", "escent", "osystem", "ia", "idium", "ala", "al", "ecium", "ix", "orrhage", "ulate", "ophore", "ina", "inoid", "opod", "opodium", "ophagy", "osis", "onic", "oplankton", "obacteria", "otype", "ene", "ivore", "itis", "omorph", "otaxis", "ipedal"];
const fullNouns = ["<i>Drosophila melanogaster</i>", "thoracic vertebra", "coccyx", "lymphatic node", "arachnoid mater", "environment", "coenzyme", "habitat", "diversity", "population", "sample", "selective pressure", "clade", "class", "order", "many species", "living fossil", "muscular group", "harsh conditions", "lab results", "body cavity", "mycelium", "cortex", "cell wall", "eubacteria", "phloem", "radicle", "Homo sapiens", "<i>Strigiphilus garylarsoni</i>", "<i>Velociraptor mongoliensis</i>", "</i>Anomalocaris whiteavesi</i>", "<i>Armillaria ostoyae</i>", "tibia", "infection", "ecological succession", "nematode", "<i>Latimeria chalumnae</i>", "<i>Candida albicans</i>", "golgi body", "free radical", "trilobite", "cutaneous membrane", "mucous membrane", "major artery", "RNA sequence", "serous exudate", "ossicle", "papilla", "flagella", "antibodies", "slime mold", "<i>Yersinia pestis</i>", "fluid", "nuclear envelope", "krebs cycle", "coagulation cascade", "instar", "blood-brain barrier"];
const connectors = ["is to be administered through the", "adapted to the", "parasitizes the", "is located distally to the", "of the", "consumes the", "breaks down the", "shares a common ancestor with the", "denatures the", "attaches to the", "develops into the", "differentiates the", "is secreted by the", "remains as a byproduct of", "was found in the fossil record with", "is a symptom of", "divides into the", "migrates from the", "grew rapidly in the presence of", "can process the", "sequesters the", "serves as an environmental resevoir for the", "rapidly necrotizes the", "is dependant on", "can cause complications with", "acts as a control on the population of", "shares many similarities with the", "excretes the", "moves toward the", "is a causitive agent of the", "can not pass through the"];
const fullPhrases = ["Crikey!", "The mitochrondria is the powerhouse of the cell.", "It then evolved into a crab.", "Conservation efforts are ongoing", "Our scientists were so preoccupied with whether they could, they didn't stop to think if they should.", "It seems to me that the natural world is the greatest source of excitement; the greatest source of visual beauty, the greatest source of intellectual interest. It is the greatest source of so much in life that makes life worth living.", "The patient made a full recovery", "A diagnosis can't be made at this time.",];

function randomAdj() {
    return adjectives[Math.floor(Math.random() * adjectives.length)];
}

function randomPhrase() {
    return fullPhrases[Math.floor(Math.random() * fullPhrases.length)];
}

function randomOpen() {
    return openers[Math.floor(Math.random() * openers.length)];
}

function randomWord() {
    var fullPhraseChance = Math.floor(Math.random() * 10)
    if (fullPhraseChance < 2) {
        return prefixes[Math.floor(Math.random() * prefixes.length)] + ends[Math.floor(Math.random() * ends.length)];
    } else if (fullPhraseChance < 5) {
        return prefixes[Math.floor(Math.random() * prefixes.length)] + "o" + prefixes[Math.floor(Math.random() * prefixes.length)] + ends[Math.floor(Math.random() * ends.length)];
    } else if (fullPhraseChance < 6) {
        return prefixes[Math.floor(Math.random() * prefixes.length)] + "o" + prefixes[Math.floor(Math.random() * prefixes.length)] + "o" + prefixes[Math.floor(Math.random() * prefixes.length)] + ends[Math.floor(Math.random() * ends.length)];
    } else {
        return fullNouns[Math.floor(Math.random() * fullNouns.length)];
    }

}

function randomConnector() {
    return connectors[Math.floor(Math.random() * connectors.length)];
}

function randomSentance() {
    var sentanceStructure = Math.floor(Math.random() * 7);
    console.log(sentanceStructure);
    if (sentanceStructure < 1) {
        return `The ${randomAdj()} ${randomWord()} ${randomConnector()} ${randomWord()}.`;
    } else if (sentanceStructure < 2) {
        return `Additionally, the ${randomWord()} ${randomConnector()} ${randomWord()}, which then ${randomConnector()} ${randomWord()}.`;
    } else if (sentanceStructure < 3) {
        return `Due to the ${randomWord()}, the ${randomWord()} ${randomConnector()} ${randomAdj()} ${randomWord()}.`;
    } else if (sentanceStructure < 4) {
        var ifConclusive = Math.floor(Math.random() * 5);
        var results = "";
        if (ifConclusive < 1) {
            results = "conclusive";
        } else if (ifConclusive < 2) {
            results = "negative";
        } else if (ifConclusive < 3) {
            results = "positive";
        } else if (ifConclusive < 4) {
            results = "inconclusive";
        } else {
            results = "very concerning";
        }
        return `When we tested the ${randomWord()}, with ${randomWord()} results were ${results}.`;
    } else if (sentanceStructure < 5) {
        return `Upon further analysis, it is evident that the ${randomWord()} ${randomConnector()} ${randomWord()}.`;
    } else if (sentanceStructure < 6) {
        return `In certain conditions, the ${randomWord()} ${randomConnector()} ${randomWord()} and ${randomAdj()} ${randomWord()}.`;
    } else {
        return `The ${randomWord()} was found to be ${randomAdj()}.`;
    }
}

function generate() {
    document.getElementById("paragraph1").innerHTML = `${randomOpen()} ${randomWord()} is often ${randomAdj()}. ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()}`;

    document.getElementById("paragraph2").innerHTML = `${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomPhrase()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()}`

    document.getElementById("paragraph3").innerHTML = `${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()}`

    document.getElementById("paragraph4").innerHTML = `${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} ${randomSentance()} Further studies are needed.`
}

document.getElementById("generate").addEventListener("click", generate);