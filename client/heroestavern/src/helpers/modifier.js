export const modifierCalculator = (attribute, proflevel) => {
    let mod = Math.floor((attribute.score - 10) / 2) + proflevel;
    if (mod >= 0) {
        mod = `+${mod}`;
    }
    return mod
}

export const skillProfLevel = (skill, character) => {
    let level = undefined
    const charskill = character.skills.find(s=>s.skill.name===skill.name)
    if (charskill) {
        level = charskill.proficiency_level
    }
    if (level===undefined || level===2) {
        if (character.background.skill_proficiency_1.name === skill.name) {
            level=0;
        }
        else if (character.background.skill_proficiency_2.name === skill.name) {
            level=0;
        }
    }
    return level
}

export const proficiencyBonus = (charLevel) => {
    return Math.ceil(1+(charLevel/4))
}
