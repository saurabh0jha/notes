
# Django Notes

## Lesson 1 - Python setup for Mac using PyEnv

1. Install brew
    
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    

2. Install pyenv dependencies
    
    ```bash
    brew install openssl readline sqlite3 xz zlib
    ```
    
3. Install pyenv
    
    ```bash
    curl [https://pyenv.run](https://pyenv.run/) | bash
    
    # configure ~/.zshrc
    # export PATH="$PATH:/usr/bin/python3"
    export PYENV_ROOT="$HOME"/.pyenv
    export PATH="$PYENV_ROOT"/bin:"$PATH"
    if command -v pyenv 1>/dev/null 2>&1; then
      eval "$(pyenv init -)"
    fi
    eval "$(pyenv virtualenv-init -)"
    ```
    
4. Install virtualenv plugin for pyenv
    
    ```bash
    brew install pyenv-virtualenv
    ```
    
5. View python versions
    
    ```bash
    pyenv install --list | grep " 3\.”
    ```
    
6. Install python version
    
    ```bash
    pyenv install -v 3.12.2
    ```
    
7. Set installed version as global
    
    ```bash
    pyenv global 3.12.2
    ```
    
8. Create a new virtual environment
    
    ```bash
    pyenv virtualenv 3.12.2 rangoenv
    ```
    
9. Activate the virtual environment
    
    ```bash
    pyenv activate rangoenv
    ```
 

## Lesson 2 - Using only Virtualenv

1. Install and setup virtualenv

`pip install virtualenv`

2. Create a new virtual environment

```bash
mkdir my_project
cd my_project
which python3 #/usr/local/bin/python3
virtualenv py3-django -p /usr/local/bin/python3
source activate py3-django/bin/activate
```

3. Leave a virtual environment

`deactivate`

## Lesson 3 - Using Pip to manage packages

1. Freeze requirements into a file

`pip freeze > requirements.txt`

2. Install dependencies from a requirements file:

`pip install -r requirements.txt`


3. Check installed dependencies

`pip freeze`

## Lesson 4 - Django

1. Install Django

```bash
(rangoenv)$ pip install django==4.0.2
(rangoenv)$ pip install pillow==9.0.1

# pip install --upgrade pip
# pip install --upgrade Pillow
# pip install pillow==9.0.1 --global-option="build_ext" --global-option="--disable-jpeg"
```
