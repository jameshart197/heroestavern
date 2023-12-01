# HeroesTavern

![HeroesTavern](https://res.cloudinary.com/dgyweielh/image/upload/v1701456634/heroestavern-response_fomlwz.png)

The live site can be found here: [Site](https://heroestavern-d4f7b4a77ff6.herokuapp.com/)

# Table of Contents
- [User Experience]
- [Features]
  - [Feature1]
  - [Feature2]
- [Design]
- [Technologies Used]
- [Testing]
- [Deployment]
- [Credits]

# Objective

The goal of the Heroes Tavern application is to provide a site where users can create Dungeons and Dragons character sheets and save them. Users can edit their characters indefinitely, delete them when they wish, view a full list of their characters and make unlimited characters.

# User Experience

### User Stories

![Project Board](https://github.com/users/jameshart197/projects/4/)
![User Stories](https://github.com/jameshart197/heroestavern/issues)

# Features

## Entity Relationship Diagram
![ERD](https://res.cloudinary.com/dgyweielh/image/upload/v1701456858/heroestavern-ERD_u1grk4.png)
## General
### Navigation Bar

<details>
<summary>Navbar</summary>

![Navbar](https://res.cloudinary.com/dgyweielh/image/upload/v1701457093/NAVBAR_j8shs6.png)
</details>

The navigation bar is featured across all pages.

For unregistered or logged out users of the site, the navbar displays Home, Login, Signup On large screens, the links are visible on the right hand side of the navbar. The list collapses into a dropdown menu on smaller screens which can be toggled by clicking the bars icon.

For registered users of the site, the navbar displays Home and Logout.
The navbar is a component called "Header" and that includes both the hamburger menu and the full navbar.
Within this Header component is also a Create Character CTA Button that is shown at all points on the site other than when you are in the character creation or character update process. 
On the left hand side of the header, there is the logo which acts as a link to the home or index page depending on whether you are logged in (home) or logged out (index). 

### Footer

In this project I chose not to include a footer as it felt unnecessary and added very little to the project. In the case that there was a design team, or that there were important links to include such as social media links, this would be something worth adding.

### Index Page

<details>
<summary>Index Page Unregistered</summary>

![Index Page]
</details>

<details>
<summary>Index Page Logged In</summary>

![Index Page]
</details>

The index page has two states depending on the user.

For unregistered or logged out users, the index page displays...

For users who are registered and logged in, the index page displays...

The index page is responsive in that....

### Feature2

<details>
<summary>Feature2</summary>

![Feature2]
</details>

The Feature2 page is available for... registered/unregistered

The primary purpose of feature2 page...

Feature2 page is responsive in that...

### Feature3

<details>
<summary>Feature3</summary>

![Feature3]
</details>

The Feature3 page is available for... registered/unregistered

The primary purpose of Feature3 page...

Feature3 page is responsive in that...

## Accounts

### Registration Page

<details>
<summary>Registration Page</summary>

![Registration]
</details>

The registration page is accessible through a "Sign Up" link in the navbar or "Register" CTA button on the index page for users who are not logged in. The page features a simple form that requires the users "Email", "First Name", "Last Name", "Password" and "Confirm Password". 

If the user attempts to register while leaving any of the fields blank, they are prompted to fill in the missing field. If the user attempts to register with an email that is already registered, they are given a message that the email is already in use. If the user attempts to register without the passwords matching, they are given a message that the password fields don't match. 

When the user registers, they are logged in and redirected to the index page where they are informed their account is awaiting approval.

### Login Page

<details>
<summary>Login Page</summary>

![Login]
</details>

The login page is accessible through a "Sign In" link in the navbar. The page features a simple form that requires the user's "Email" and "Password". If the user attempts to submit an empty field, they are prompted to fill in the required field. If the user's credentials are invalid, they are given a message that their login is invalid.

When the user logs in, they are redirected to...

![Logout]
</details>

The logout option is accessible through a "Logout" link in the navbar. When the user logs out, they are redirected to...


## Admin Panel

### Admin Panel

<details>
<summary>Admin Panel</summary>

![Admin Panel]
</details>

From the admin panel, the admin user is able to create, update and delete...This is done through...


## Future Features
1. __Stretch One__. This is a description of a stretch goal that provides a new feature
2. __Stretch Two__. This is a description of a stretch goal that provides a new feature
3. __Stretch Three__. This is a description of a stretch goal that provides a new feature


# Design

The concept for ApplicationName was a site for... As such, the aim of the design ...


## CRUD Functionality

This describes CRUD functionality for all users that have it.


## Colour
![Colour Palette]

Clarity, Accessibility, Aesthetic


## Typography

Font Choices detailed here and why


## Wireframes

Wireframes were created in Balsamiq. They were used for initial planning of template layouts.

<details>
<summary>Index Wireframe</summary>

![Index Wireframe]()
</details>

<details>
<summary>Feature1 Wireframe</summary>

![Feature1 Wireframe]()
</details>

<details>
<summary>Feature2 Wireframe</summary>

![Feature2 Wireframe]()
</details>

<details>
<summary>Register Wireframe</summary>

![Register Wireframe]()
</details>

<details>
<summary>Login Wireframe</summary>

![Login Wireframe]()
</details>

<details>
<summary>Admin Panel Wireframe</summary>

![Admin Panel Wireframe]()
</details>


## Agile Methodology

[GitHub Projects Page]()

GitHub Projects was used in part for the planning of this website to create and track User Stories as they were implemented and fulfilled. This section documents sprints and implementation of the plan


## Entity Relationship Diagram

The below Entity Relationship Diagram was created on [diagrams.net](https://www.diagrams.net/). It illustrates the relationships between the models present in the project: 

<details>
<summary>ERD</summary>

![ERD]()
</details>


# Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5): mark-up language.
- [CSS3](https://en.wikipedia.org/wiki/CSS): styling.
- [JavaScript](https://www.javascript.com/): programming language.
- [Python 3](https://www.python.org/): programming language.
- [Django 3.2](https://www.djangoproject.com/)
  - [Django Crispy Forms](https://pypi.org/project/django-crispy-forms/): for forms.
  - [Crispy Bootstrap5](https://pypi.org/project/crispy-bootstrap5/): bootstrap5 template pack for crispy forms.
- [Bootstrap](https://getbootstrap.com/): styling.
- [Cloudinary](https://cloudinary.com/): store static and media files.
- [GIT](https://git-scm.com/): for version control.
- [GitHub](https://github.com/): for host repository.
- [Gitpod](https://www.gitpod.io/): online IDE.
- [Heroku](https://)
- [Google Fonts](https://fonts.google.com/): to import fonts.
- [Font Awesome](https://fontawesome.com/): to import icons.
- [Balsamiq](https://balsamiq.com/): to create wireframes.
- [Diagrams.net](https://www.diagrams.net/): for Entity Relationship Diagram.

# Testing

Testing for the site can be found at the below link:

[Link to TESTING.md](TESTING.md)


# Deployment
## Steps to deploy site using Heroku:
- Assuming gunicorn, dj_database_url, psycopg2 and dj3-cloudinary-storage have been installed
- On the Heroku dashboard, select "New" and click "Create new app"
  - Create a unique app name - this will be added to allowed hosts in the project settings
  - Select your region
  - Click "Create app"
- Go to the Resources tab:
  - Search for "postgres" in the add-ons search bar and select "Heroku Postgres"
  - Click "Submit Order Form"
- Go to the settings tab:
  - Scroll down to the config vars section and select "Reveal Config Vars"
  - DATABASE_URL will be set after adding Heroku Postgres - this will be copied to the project
  - Add a new config var for SECRET_KEY - create your own or use a django secret key generator
  - Add a new config var for CLOUDINARY_URL - copy the "API Environment variable" from your cloudinary dashboard, remove "CLOUDINARY_URL="
  - Add a new config var for DISABLE_COLLECTSTATIC, with the value 1 - this will be removed before deployment
- In your project, for your environment variables:
  - Create a new env.py file in the top level directory
  - In env.py:
    - Import os
    - Add 'os.environ["DATABASE_URL"] = "Paste the DATABASE_URL from the Heroku app here"'
    - Add 'os.environ["SECRET_KEY"] = "Paste your new secret key here"'
    - Add 'os.environ["CLOUDINARY_URL"] = "Paste your CLOUDINARY_URL as in the Heroku app here"'
  ```
  import os

  os.environ['DATABASE_URL'] = 'postgres://exampledatabaseurl'
  os.environ['SECRET_KEY'] = 'examplesecretkey'
  os.environ['CLOUDINARY_URL'] = 'cloudinary://examplecloudinaryurl'
  ```
  - If not already present, create a .gitignore file and add env.py to it

- In your project, in settings.py:
  - Import os
  - Import dj_database_url
  - if os.path.isfile('env.py'):
	import env
  ```
  import os
  import dj_database_url
  if os.path.isfile('env.py'):
      import env
  ```
  - Replace the insecure secret key with "SECRET_KEY = os.environ.get('SECRET_KEY')"
  ```
  SECRET_KEY = os.environ.get('SECRET_KEY')
  ```
  - Link new database by commenting out old DATABASES section and adding:
	DATABASES = {
			'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))
			}
  ```
  DATABASES = {
        'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))
    }
  ```
  - Add Heroku to the allowed hosts: "ALLOWED_HOSTS = ['the_app_name_from_heroku.herokuapp.com']
  ```
  ALLOWED_HOSTS = ['example-heroku-app-name.herokuapp.com', 'localhost']
  ```
  - Add 'cloudinary_storage' (above 'django.contrib.staticfiles') and 'cloudinary' (below) to INSTALLED_APPS
  ```
  ...
  'cloudinary_storage',
  'django.contrib.staticfiles',
  'cloudinary',
  ...
  ```
  - Setup Cloudinary to store static and media files
  ```
    STATIC_URL = '/static/'
	STATICFILES_STORAGE = 'cloudinary_storage.storage.StaticHashedCloudinaryStorage'
	STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
	STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

	MEDIA_URL = '/media/'
	DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'
  ```
  - Run 'python3 manage.py collectstatic' to collect static files
- In your project:
  - Create a Procfile in the top level directory and add 'web: gunicorn project_name.wsgi' to tell 
  ```
  web: gunicorn project_name.wsgi
  ```
  - Create a requirements file with 'pip3 freeze --local > requirements.txt' for Heroku to install required packages
  ```
  pip3 freeze --local > requirements.txt
  ```
  - Make migrations with 'python3 manage.py migrate'
  ```
  python3 manage.py migrate
  ```
  - Commit and push to GitHub
- Prior to final deployment:
  - Set DEBUG = False in project settings.py
  - Remove DISABLE_COLLECTSTATIC config var from Heroku
- Go to the Deploy tab:
  - Select GitHub and confirm connection to GitHub account
  - Search for the repository and click "Connect"
  - Scroll down to the deploy options
  - Select automatic deploys if you would like automatic deployment with each new push to the GitHub repository
  - In manual deploy, select which branch to deploy and click "Deploy Branch"
  - Heroku will start building the app
- The link to the app can be found at the top of the page by clicking "Open app"

The live site can be found here: [Application]()


## Steps to clone site:
- In the GitHub repository, click the "Code" button.
- Select "HTTPS" and copy the URL.
- Open Git Bash and navigate to the repository where you would like to locate the cloned repository.
- Type "git clone" followed by the copied URL.
- Press enter to create the clone.
- Install required packages with the command "pip3 install -r requirements.txt"

# Credits
## Code
- 

## Media
- Icons are from [Font Awesome](https://fontawesome.com)
- The  fonts are imported from [Google Fonts](https://fonts.google.com)

- Images from 
  - 
  - 

## Acknowledgement
I'd like to thank my mentor...
