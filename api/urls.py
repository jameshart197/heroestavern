from django.urls import path
from api import views
app_name = 'api'

urlpatterns = [
    path('attributes/', views.AttributeList.as_view()),
    path('skills/', views.SkillsList.as_view()),
    path('races/', views.RaceList.as_view()),
    path('subraces/', views.SubRaceList.as_view()),
    path('spells/', views.SpellsList.as_view()),
    path('classes/', views.ClassList.as_view()),
    path('subclasses/', views.SubClassList.as_view()),
    path('languages/', views.LanguageList.as_view()),
    path('backgrounds/', views.BackgroundList.as_view()),
    path('alignments/', views.AlignmentList.as_view()),
    path('tools/', views.ToolList.as_view()),
    path('instruments/', views.InstrumentList.as_view()),
    path('mycharacters/', views.MyCharacters.as_view()),
    path('characters/<int:pk>/', views.CharacterDetails.as_view()),
    path('characters/', views.CharacterCreation.as_view()),
    path('characterupdate/<int:pk>/', views.CharacterUpdate.as_view()),
    path('characterdelete/<int:pk>/', views.CharacterDelete.as_view()),
    path('characterattributes/', views.CharacterAttributes.as_view()),
    path('characterlevels/', views.CharacterLevels.as_view()),
    path('characterskills/', views.CharacterSkills.as_view()),
    path('charactersavingthrows/', views.CharacterSavingThrows.as_view()),
    path('characterspells/', views.CharacterSpells.as_view()),
    path('characterlanguages/', views.CharacterLanguages.as_view()),
    path('charactersubclass/', views.CharacterSubclass.as_view()),
    path('addcharactersubclass/', views.CharacterSubclassAdd.as_view()),
    path('addcharacterlevel/', views.CharacterLevelAdd.as_view()),
    path('addcharacterattributes/', views.CharacterAttributesAdd.as_view())
]