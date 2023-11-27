export const getCharacterInfo = (Character, Userid) => {
    const character = {};

    // direct correlation
    
    character.age = Character.age
    character.alignment = Character.alignment.id
    character.allies = Character.allies
    character.armor_class = Character.armor_class
    character.background = Character.background.id
    character.backstory = Character.backstory
    character.character_art = Character.character_art
    character.character_art_name = Character.character_art_name
    character.character_name = Character.character_name
    character.charclass = Character.charclass
    character.enemies = Character.enemies
    character.factions_and_orgs = Character.factions_and_orgs
    character.faith = Character.faith
    character.gender = Character.gender
    character.height = Character.height
    character.hit_points = Character.hit_points
    character.inspiration = Character.inspiration
    character.languages = Character.languages
    character.notes = Character.notes
    character.race = Character.subrace.race
    character.saving_throws = Character.saving_throws
    character.selectedAlignment = Character.alignment
    character.selectedBackground = Character.background
    character.selectedSubrace = {...Character.subrace}
    character.selectedSubrace.race = Character.subrace.race.name
    character.skills = Character.skills
    character.spells = Character.spells
    character.subrace = Character.subrace.id
    character.user = Userid
    character.weight = Character.weight

    // placeholders
    character.attributes = []
    character.levels = []

    // map

    character.subclass = Character.subclass.map(sc=>sc.subclass)
    character.charlevel = Character.levels.map((l) => l.level);
    
    // find

    character.charisma = Character.attributes.find(a=>a.attribute.name==="Charisma").score
    character.constitution = Character.attributes.find(a=>a.attribute.name==="Constitution").score
    character.dexterity = Character.attributes.find(a=>a.attribute.name==="Dexterity").score
    character.intelligence = Character.attributes.find(a=>a.attribute.name==="Intelligence").score
    character.strength = Character.attributes.find(a=>a.attribute.name==="Strength").score
    character.wisdom = Character.attributes.find(a=>a.attribute.name==="Wisdom").score

    return character;
};