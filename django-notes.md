
# Django Notes

## Lesson 1 - Virtualenv and installations

### Install and setup virtualenv

`pip install virtualenv`

#### Create a new virtual environment

```bash
mkdir my_project
cd my_project
which python3 #/usr/local/bin/python3
virtualenv py3-django -p /usr/local/bin/python3
source activate py3-django/bin/activate
```

#### Freeze requirements into a file

`pip freeze > requirements.txt`

#### install dependencies from a requirements file:

`pip install -r requirements.txt`

#### Leave a virtual environment

`deactivate`

#### Check installed dependencies

`pip freeze`

### Install Django

`pip install django==2.0.7`
