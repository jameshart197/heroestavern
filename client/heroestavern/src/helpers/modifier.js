export const modifierCalculator = (attribute, profbonus) => {
    let mod = Math.floor((attribute.score - 10) / 2) + profbonus;
    if ( mod >= 0 ) {
        mod = `+${mod}`;
    }
    return mod
}

