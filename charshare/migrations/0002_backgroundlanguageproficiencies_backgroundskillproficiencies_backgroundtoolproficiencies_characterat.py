# Generated by Django 3.2.21 on 2023-09-12 10:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('charshare', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubraceToSkillProficiencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill_proficiency_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SubraceSkillGranted', to='charshare.skillscontenttable')),
                ('subrace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SkillprofsSubrace', to='charshare.subracecontenttable')),
            ],
            options={
                'verbose_name': 'Subrace Granted Skill',
            },
        ),
        migrations.CreateModel(
            name='SubraceTools',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subrace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ToolsSubrace', to='charshare.subracecontenttable')),
                ('tool_proficiency_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SubraceToolProficiencyGranted', to='charshare.toolcontenttable')),
            ],
            options={
                'verbose_name': 'Subrace Granted Tool',
            },
        ),
        migrations.CreateModel(
            name='SubraceSpells',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('spells_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SubraceSpellsGranted', to='charshare.spellscontenttable')),
                ('subrace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SpellsSubrace', to='charshare.subracecontenttable')),
            ],
            options={
                'verbose_name': 'Subrace Granted Spell',
            },
        ),
        migrations.CreateModel(
            name='SubraceLanguages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SubraceLanguageGranted', to='charshare.languagecontenttable')),
                ('subrace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='LanguagesSubrace', to='charshare.subracecontenttable')),
            ],
            options={
                'verbose_name': 'Subrace Granted Language',
            },
        ),
        migrations.CreateModel(
            name='SubclassSpellsGranted',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('spells_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SubclassSpellsGranted', to='charshare.spellscontenttable')),
                ('subclass', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SpellsSubclass', to='charshare.subclasscontenttable')),
            ],
            options={
                'verbose_name': 'Subclass Granted Spell',
            },
        ),
        migrations.CreateModel(
            name='SubclassSkillProficiencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill_proficiency_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SubclassSkillGranted', to='charshare.skillscontenttable')),
                ('subclass', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SkillprofsSubclass', to='charshare.subclasscontenttable')),
            ],
            options={
                'verbose_name': 'Subclass Granted Skill',
            },
        ),
        migrations.CreateModel(
            name='SubclassLanguageProficiencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SubclassLanguageGranted', to='charshare.languagecontenttable')),
                ('subclass', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='LanguagesSubclass', to='charshare.subclasscontenttable')),
            ],
            options={
                'verbose_name': 'Subclass Granted Language',
            },
        ),
        migrations.CreateModel(
            name='ClassSpellsGranted',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('character_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SpellsClass', to='charshare.classcontenttable')),
                ('spells_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ClassSpellsGranted', to='charshare.spellscontenttable')),
            ],
            options={
                'verbose_name': 'Class Granted Spell',
            },
        ),
        migrations.CreateModel(
            name='ClassSkillProficiencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('character_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SkillProfsClass', to='charshare.classcontenttable')),
                ('skill_proficiency_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ClassSkillGranted', to='charshare.skillscontenttable')),
            ],
            options={
                'verbose_name': 'Class Granted Skill',
            },
        ),
        migrations.CreateModel(
            name='ClassLanguageProficiencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('character_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='LanguagesClass', to='charshare.classcontenttable')),
                ('language_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ClassLanguageGranted', to='charshare.languagecontenttable')),
            ],
            options={
                'verbose_name': 'Class Granted Language',
            },
        ),
        migrations.CreateModel(
            name='CharacterSpells',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('character', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SpellsCharacter', to='charshare.characterdetails')),
                ('spell', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='CharacterSpells', to='charshare.spellscontenttable')),
            ],
            options={
                'verbose_name': 'Character Spell',
            },
        ),
        migrations.CreateModel(
            name='CharacterSkillProficiencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('proficiency_level', models.IntegerField(choices=[(0, 'Proficient'), (1, 'Expertise'), (2, 'Half-Proficiency (Bard)')])),
                ('character', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SkillsCharacter', to='charshare.characterdetails')),
                ('skill', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SkillsSkill', to='charshare.skillscontenttable')),
            ],
            options={
                'verbose_name': 'Character Skill',
            },
        ),
        migrations.CreateModel(
            name='CharacterSavingThrows',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attribute', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SavingThrowsGoverningAttribute', to='charshare.attributecontenttable')),
                ('character', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SavingThrowsCharacter', to='charshare.characterdetails')),
            ],
            options={
                'verbose_name': 'Character Saving Throw',
            },
        ),
        migrations.CreateModel(
            name='CharacterLevels',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.IntegerField(default=1)),
                ('char_class', models.ForeignKey(default=0, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='LevelsClass', to='charshare.classcontenttable')),
                ('character', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='LevelsCharacter', to='charshare.characterdetails')),
            ],
            options={
                'verbose_name': 'Character Level',
            },
        ),
        migrations.CreateModel(
            name='CharacterLanguages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('character', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='LanguagesCharacter', to='charshare.characterdetails')),
                ('language_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='CharacterLanguageGranted', to='charshare.languagecontenttable')),
            ],
            options={
                'verbose_name': 'Character Language',
            },
        ),
        migrations.CreateModel(
            name='CharacterAttributes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField(default=10)),
                ('attribute', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='AttributesAttribute', to='charshare.attributecontenttable')),
                ('character', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='AttributesCharacter', to='charshare.characterdetails')),
            ],
            options={
                'verbose_name': 'Character Attribute',
            },
        ),
        migrations.CreateModel(
            name='BackgroundToolProficiencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('background', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ToolsBackground', to='charshare.backgroundcontenttable')),
                ('tool_proficiency_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='BackgroundToolProficiencyGranted', to='charshare.toolcontenttable')),
            ],
            options={
                'verbose_name': 'Background Granted Tool',
            },
        ),
        migrations.CreateModel(
            name='BackgroundSkillProficiencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('background', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SkillprofsBackground', to='charshare.backgroundcontenttable')),
                ('skill_proficiency_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='backgroundSkillGranted', to='charshare.skillscontenttable')),
            ],
            options={
                'verbose_name': 'Background Granted Skill',
            },
        ),
        migrations.CreateModel(
            name='BackgroundLanguageProficiencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('background', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='LanguagesBackground', to='charshare.backgroundcontenttable')),
                ('language_granted', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='BackgroundLanguageGranted', to='charshare.languagecontenttable')),
            ],
            options={
                'verbose_name': 'Background Granted Language',
            },
        ),
    ]
