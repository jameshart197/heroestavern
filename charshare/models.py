from django.db import models
from .contentmodels import *
from django.contrib.auth.models import User

# top level models


class CharacterDetails(models.Model):
    """
    Full character model with foreign keys to User, Alignment and Background.
    ManyToMany relations to Character Attributes, Levels, 
    Skill Proficiencies, Saving Throws, Spells, Languages and Subclass
    'owner' is the User that created this character.
    'Alignment' is the alignment selected from the alignment content model'.
    'Background' is the background selected from the background content model'.
    The Many to Many fields allow multiple characters to have the same language, 
    and one character to have multiple languages, for example.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subrace = models.ForeignKey(
        SubRaceContentTable,
        on_delete=models.SET_DEFAULT,
        default=0,
        related_name="CharacterSubrace",
    )
    alignment = models.ForeignKey(
        AlignmentContentTable,
        on_delete=models.SET_DEFAULT,
        default=0,
        related_name="CharacterAlignment",
    )
    background = models.ForeignKey(
        BackgroundContentTable,
        on_delete=models.SET_DEFAULT,
        default=0,
        related_name="CharacterBackground",
    )
    character_name = models.CharField(max_length=200)
    gender = models.CharField(max_length=200, blank=True)
    inspiration = models.BooleanField(default=False)
    faith = models.TextField(blank=True)
    age = models.CharField(max_length=24, blank=True)
    height = models.CharField(max_length=24, blank=True)
    weight = models.CharField(max_length=24, blank=True)
    notes = models.TextField(blank=True)
    backstory = models.TextField(blank=True)
    allies = models.TextField(blank=True)
    enemies = models.TextField(blank=True)
    factions_and_orgs = models.TextField(blank=True)
    hit_points = models.IntegerField(default=12)
    armor_class = models.IntegerField(default=10)
    attributes = models.ManyToManyField("CharacterAttributes", blank=True)
    levels = models.ManyToManyField("CharacterLevels", blank=True)
    skills = models.ManyToManyField("CharacterSkillProficiencies", blank=True)
    saving_throws = models.ManyToManyField("CharacterSavingThrows", blank=True)
    spells = models.ManyToManyField("CharacterSpells", blank=True)
    languages = models.ManyToManyField("CharacterLanguages", blank=True)
    subclass = models.ManyToManyField("CharacterSubclass", blank=True)
    character_art = models.ImageField(
        upload_to='images', default='https://res.cloudinary.com/dgyweielh/image/upload/v1698071582/stockchar_oquoft.jpg'
    )

    def __str__(self):
        return f"ID: {self.id} - {self.character_name}"

    class Meta:
        verbose_name = "Character"


class CharacterSpells(models.Model):
    """
    Model for character spells, connecting 2 foreign keys to 
    Character and Spells. This links a single character to various spells from
    the spells content table. Many characters can have the same spells. 
    """
    character = models.ForeignKey(
        CharacterDetails, on_delete=models.CASCADE, related_name="SpellsCharacter"
    )
    spell = models.ForeignKey(
        SpellsContentTable, on_delete=models.CASCADE, related_name="CharacterSpells"
    )

    def __str__(self):
        return f"ID: {self.id} - {self.character.character_name} {self.spell}"

    class Meta:
        verbose_name = "Character Spell"


class CharacterLevels(models.Model):
    """
    Model for character levels, with a foreign key to character, and then a foreign key to char_class. 
    For each selected class, a character may have a level (usually a number between 1 and 20)
    """
    character = models.ForeignKey(
        CharacterDetails, on_delete=models.CASCADE, related_name="LevelsCharacter"
    )
    char_class = models.ForeignKey(
        ClassContentTable,
        on_delete=models.SET_DEFAULT,
        default=0,
        related_name="LevelsClass",
    )
    level = models.IntegerField(default=1) 

    def __str__(self):
        return f"ID: {self.id} - {self.character.character_name} - {self.char_class.name} - {self.level}"

    class Meta:
        verbose_name = "Character Level"


class CharacterSavingThrows(models.Model):
    """
    Model for Saving Throws with a foreign key to character and to attributes. Each character
    will be usually be proficient in 2 saving throws, always of 2 different attributes. 
    This model allows us to mark them as proficient in those. 
    """
    character = models.ForeignKey(
        CharacterDetails, on_delete=models.CASCADE, related_name="SavingThrowsCharacter"
    )
    attribute = models.ForeignKey(
        AttributeContentTable,
        on_delete=models.CASCADE,
        related_name="SavingThrowsGoverningAttribute",
    )

    def __str__(self):
        return (
            f"ID: {self.id} - {self.character.character_name} - {self.attribute.name}"
        )

    class Meta:
        verbose_name = "Character Saving Throw"


class CharacterSkillProficiencies(models.Model):
    """
    Model for character skill proficiencies with a foreign key to character and skill, and a
    choices field to define their level of proficiency. 
    """
    PROFICIENCY_LEVEL = (
        (0, "Proficient"),
        (1, "Expertise"),
        (2, "Half-Proficiency (Bard)"),
    )
    character = models.ForeignKey(
        CharacterDetails, on_delete=models.CASCADE, related_name="SkillsCharacter"
    )
    skill = models.ForeignKey(
        SkillsContentTable, on_delete=models.CASCADE, related_name="SkillsSkill"
    )
    proficiency_level = models.IntegerField(choices=PROFICIENCY_LEVEL)

    def __str__(self):
        return f"ID: {self.id} - {self.character.character_name} - {self.skill.name} - {self.proficiency_level}"

    class Meta:
        verbose_name = "Character Skill"


class CharacterAttributes(models.Model):
    """
    Model for character attributes with a foreign key to character and to attributes. Characters will always
    have 6 attributes, each with a different score. The range of these attributes is limited on the front-end. 
    """
    character = models.ForeignKey(
        CharacterDetails, on_delete=models.CASCADE, related_name="AttributesCharacter"
    )
    attribute = models.ForeignKey(
        AttributeContentTable,
        on_delete=models.CASCADE,
        related_name="AttributesAttribute",
    )
    score = models.IntegerField(default=10)  # range limit 1-30

    def __str__(self):
        return f"ID: {self.id} - {self.character.character_name} - {self.attribute.name} - {self.score}"

    class Meta:
        verbose_name = "Character Attribute"


class CharacterLanguages(models.Model):
    """
    Model for character languages, with a foreign key to the language content table and to character.
    Each character may speak multiple languages, and many characters will share the same languages. 
    """
    character = models.ForeignKey(
        CharacterDetails, on_delete=models.CASCADE, related_name="LanguagesCharacter"
    )
    language_granted = models.ForeignKey(
        LanguageContentTable,
        on_delete=models.CASCADE,
        related_name="CharacterLanguageGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.character.character_name} - {self.language_granted.name}"

    class Meta:
        verbose_name = "Character Language"


class CharacterSubclass(models.Model):
    """
    Model for character subclasses, with a foreign key to character and to the subclass content table. A character
    may have multiple subclasses if they have multiple levels in different classes as per the levels table. 
    """
    character = models.ForeignKey(
        CharacterDetails, on_delete=models.CASCADE, related_name="SubclassCharacter"
    )
    subclass = models.ForeignKey(
        SubClassContentTable,
        on_delete=models.SET_DEFAULT,
        default=0,
        related_name="CharacterSubclass",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.subclass.name}"

    class Meta:
        verbose_name = "Character Subclass"


# Link Models

# SUBRACE


class SubraceToSkillProficiencies(models.Model):
    """
    Model linking each subrace to certain skill proficiencies with a foreign key to subrace content table and skills
    content table. Some subraces grant proficiencies in certain skills. 
    """
    subrace = models.ForeignKey(
        SubRaceContentTable, on_delete=models.CASCADE, related_name="SkillprofsSubrace"
    )
    skill_proficiency_granted = models.ForeignKey(
        SkillsContentTable, on_delete=models.CASCADE, related_name="SubraceSkillGranted"
    )

    def __str__(self):
        return f"ID: {self.id} - {self.subrace.name} - {self.skill_proficiency_granted.name}"

    class Meta:
        verbose_name = "Subrace Granted Skill"


class SubraceLanguages(models.Model):
    """
    Model linking each subrace to certain language proficiencies with a foreign key to subrace content table and languages
    content table. Some subraces grant proficiencies in certain languages. 
    """
    subrace = models.ForeignKey(
        SubRaceContentTable, on_delete=models.CASCADE, related_name="LanguagesSubrace"
    )
    language_granted = models.ForeignKey(
        LanguageContentTable,
        on_delete=models.CASCADE,
        related_name="SubraceLanguageGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.subrace.name} - {self.language_granted.name}"

    class Meta:
        verbose_name = "Subrace Granted Language"


class SubraceSpells(models.Model):
    """
    Model linking each subrace to certain spells with a foreign key to subrace content table and spells
    content table. Some subraces grant certain spells. 
    """
    subrace = models.ForeignKey(
        SubRaceContentTable, on_delete=models.CASCADE, related_name="SpellsSubrace"
    )
    spells_granted = models.ForeignKey(
        SpellsContentTable,
        on_delete=models.CASCADE,
        related_name="SubraceSpellsGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.subrace.name} - {self.spells_granted.name}"

    class Meta:
        verbose_name = "Subrace Granted Spell"


class SubraceTools(models.Model):
    """
    Model linking each subrace to certain tool proficiencies with a foreign key to subrace content table and tools
    content table. Some subraces grant proficiencies in certain tools. 
    """
    subrace = models.ForeignKey(
        SubRaceContentTable, on_delete=models.CASCADE, related_name="ToolsSubrace"
    )
    tool_proficiency_granted = models.ForeignKey(
        ToolContentTable,
        on_delete=models.CASCADE,
        related_name="SubraceToolProficiencyGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.subrace.name} - {self.tool_proficiency_granted.name}"

    class Meta:
        verbose_name = "Subrace Granted Tool"


# CLASS


class ClassSkillProficiencies(models.Model):
    """
    Model linking each class to certain skill proficiencies with a foreign key to class content table and skills
    content table. Some classes grant proficiencies in certain skills. 
    """
    character_class = models.ForeignKey(
        ClassContentTable, on_delete=models.CASCADE, related_name="SkillProfsClass"
    )
    skill_proficiency_granted = models.ForeignKey(
        SkillsContentTable, on_delete=models.CASCADE, related_name="ClassSkillGranted"
    )

    def __str__(self):
        return f"ID: {self.id} - {self.character_class.name} - {self.skill_proficiency_granted.name}"

    class Meta:
        verbose_name = "Class Granted Skill"


class ClassLanguageProficiencies(models.Model):
    """
    Model linking each class to certain skill proficiencies with a foreign key to class content table and skills
    content table. Some classes grant proficiencies in certain skills. 
    """
    character_class = models.ForeignKey(
        ClassContentTable, on_delete=models.CASCADE, related_name="LanguagesClass"
    )
    language_granted = models.ForeignKey(
        LanguageContentTable,
        on_delete=models.CASCADE,
        related_name="ClassLanguageGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.character_class.name} - {self.language_granted.name}"

    class Meta:
        verbose_name = "Class Granted Language"


class ClassSpellsGranted(models.Model):
    """
    Model linking each class to certain spells with a foreign key to class content table and spells
    content table. Some classes grant certain spells. 
    """
    character_class = models.ForeignKey(
        ClassContentTable, on_delete=models.CASCADE, related_name="SpellsClass"
    )
    spells_granted = models.ForeignKey(
        SpellsContentTable, on_delete=models.CASCADE, related_name="ClassSpellsGranted"
    )

    def __str__(self):
        return (
            f"ID: {self.id} - {self.character_class.name} - {self.spells_granted.name}"
        )

    class Meta:
        verbose_name = "Class Granted Spell"


# SUBCLASSES


class SubclassSkillProficiencies(models.Model):
    """
    Model linking each subclass to certain skill proficiencies with a foreign key to subclass content table and skills
    content table. Some subclasses grant proficiencies in certain skills. 
    """
    subclass = models.ForeignKey(
        SubClassContentTable,
        on_delete=models.CASCADE,
        related_name="SkillprofsSubclass",
    )
    skill_proficiency_granted = models.ForeignKey(
        SkillsContentTable,
        on_delete=models.CASCADE,
        related_name="SubclassSkillGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.subclass.name} - {self.skill_proficiency_granted.name}"

    class Meta:
        verbose_name = "Subclass Granted Skill"


class SubclassLanguageProficiencies(models.Model):
    """
    Model linking each subclass to certain language proficiencies with a foreign key to subclass content table and languages
    content table. Some subclasss grant proficiencies in certain languages. 
    """
    subclass = models.ForeignKey(
        SubClassContentTable, on_delete=models.CASCADE, related_name="LanguagesSubclass"
    )
    language_granted = models.ForeignKey(
        LanguageContentTable,
        on_delete=models.CASCADE,
        related_name="SubclassLanguageGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.subclass.name} - {self.language_granted.name}"

    class Meta:
        verbose_name = "Subclass Granted Language"


class SubclassSpellsGranted(models.Model):
    """
    Model linking each subclass to certain spells with a foreign key to subclass content table and spells
    content table. Some subclasss grant certain spells. 
    """
    subclass = models.ForeignKey(
        SubClassContentTable, on_delete=models.CASCADE, related_name="SpellsSubclass"
    )
    spells_granted = models.ForeignKey(
        SpellsContentTable,
        on_delete=models.CASCADE,
        related_name="SubclassSpellsGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.subclass.name} - {self.spells_granted.name}"

    class Meta:
        verbose_name = "Subclass Granted Spell"


# BACKGROUND


class BackgroundSkillProficiencies(models.Model):
    """
    Model linking each background to certain skill proficiencies with a foreign key to background content table and skills
    content table. Some backgrounds grant proficiencies in certain skills. 
    """
    background = models.ForeignKey(
        BackgroundContentTable,
        on_delete=models.CASCADE,
        related_name="SkillprofsBackground",
    )
    skill_proficiency_granted = models.ForeignKey(
        SkillsContentTable,
        on_delete=models.CASCADE,
        related_name="backgroundSkillGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.background.name} - {self.skill_proficiency_granted.name}"

    class Meta:
        verbose_name = "Background Granted Skill"


class BackgroundToolProficiencies(models.Model):
    """
    Model linking each background to certain tool proficiencies with a foreign key to background content table and tools
    content table. Some backgrounds grant proficiencies in certain tools. 
    """
    background = models.ForeignKey(
        BackgroundContentTable, on_delete=models.CASCADE, related_name="ToolsBackground"
    )
    tool_proficiency_granted = models.ForeignKey(
        ToolContentTable,
        on_delete=models.CASCADE,
        related_name="BackgroundToolProficiencyGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.background.name} - {self.tool_proficiency_granted.name}"

    class Meta:
        verbose_name = "Background Granted Tool"


class BackgroundLanguageProficiencies(models.Model):
    """
    Model linking each background to certain language proficiencies with a foreign key to background content table and languages
    content table. Some backgrounds grant proficiencies in certain languages. 
    """
    background = models.ForeignKey(
        BackgroundContentTable,
        on_delete=models.CASCADE,
        related_name="LanguagesBackground",
    )
    language_granted = models.ForeignKey(
        LanguageContentTable,
        on_delete=models.CASCADE,
        related_name="BackgroundLanguageGranted",
    )

    def __str__(self):
        return f"ID: {self.id} - {self.background.name} - {self.language_granted.name}"

    class Meta:
        verbose_name = "Background Granted Language"
