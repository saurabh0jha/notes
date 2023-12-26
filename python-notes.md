
# Python Notes

## Lesson 2 - Manage Dependencies with Python Virtual Environments

Command to install virtualenv:

`pip install virtualenv`

Steps to create a new virtual environment:

```bash
mkdir my_project
cd my_project
virtualenv py3 -p /usr/local/bin/python3
source py3/bin/activate
```

Command to freeze requirements into a file:

`pip freeze > requirements.txt`

Command to install dependencies from a requirements file:

`pip install -r requirements.txt`

Command to leave a virtual environment:

`deactivate`

## Lesson 3 - Use Python Interactively with the REPL Console

Command to start a python console:

`python`

Code to print a string in Python 2:

`print "Hello World"`

Code to print a string in Python 3:

`print("Hello World")`

Code to import the datetime module:

`import datetime`

Code to create a function the sums two numbers:

```python
def add(num1, num2):
    return num1 + num2
```

Code to execute the function created above:

`add(1,2)`

## Lesson 4 - Checking for None in Python

Code to check for None in python:

```python
foo = None
if foo is None:
    print("It's not there")
```

## Lesson 5 - Mutable vs. Immutable Objects in Python

Code to see the id of a mutable object in Python:

```python
b = []
id(b)

b.append(3)
id(b)
```

Code to see the id of an immutable object in Python:

```python
a = 4
id(a)

a = a + 1
id(a)
```

## Lesson 6 - Execute a script in Python

Code to create a python script (hello.py):

```python
print("Hello world")
```

Command to execute the script:

`python hello.py`

Code to create an executable Python script:

```python
#! /usr/bin/env python

print("Hello world")
```

Command to make the script executable:

`chmod +x hello.py`

Command to execute the script:

`./hello.py`

## Lesson 7 - Math Operations in Python

Code to sum two numbers in Python:

`3 + 4`

Code to subtract two numbers in Python:

`3 - 4`

Code to multiply two numbers in Python:

`3 * 4`

Code for integer division in Python 2:

`3 / 4`

Code for float division in Python 2:

`3 / 4.`

Code for integer division in Python 3:

`3 // 4`

Code for float division in Python 3:

`3 / 4`

Code to perform math operations using variables:

```python
a = 3
b = 4
a + b
a / b
a // b
```

## Lesson 8 - Format Strings in Python

Create a string in Python:

`name = 'will`

Create a string with single quotes in Python:

`my_ball = "Will's ball"`

Create a multiline string in Python:

```python
multiline = """Will's ball
is red
and bouncy!"""
```

Code to escape a single quote in Python:

`print("Will's ball is red")`

or

`print('Will\'s ball is red')`

or

`print("""Will's ball is red""")`

Code to print tab characters in Python:

`print("Will's\tball\tis\tred")`

Code to use variable substitution in a string:

```python
item = 'ball'
color = 'red'
print("Will's %s is %s." % (item, color))
```

Code to use variable substitution with the string format method:

```python
item = 'ball'
color = 'red'
print("Will's {0} is {1}".format(item, color))
```

## Lesson 9 - Manipulate and Search Strings with Python methods

Code to use the .endswith method:

`"The ball is red".endswith("red")`

Code to find a string within a string:

`"The ball is red".find("is")`

Code to join strings together in Python:

`" ".join(["the", "ball", "is", "red"])`

Code to strip spaces from the beginning and end of a string in Python:

`"    Will    ".strip()`

Code to strip spaces from the beginning of a string in Python:

`"    Will    ".lstrip()`

Code to strip spaces from the end of a string in Python:

`"    Will    ".rstrip()`

Use the dir method to find the methods available:

`dir("Will")`

Use the help method to find out how to use a method:

`help("Will".rstrip)`

## Lesson 10 - Add Flow Control to your Python Application

Use an `if` statement in Python:

```python
x = int(input("enter an integer: "))
if x < 0:
    x = 0
    print("Negative number changed to zero")
```

Use an `elif` statement in Python:

```python
x = int(input("enter an integer: "))
if x < 0:
    x = 0
    print("Negative number changed to zero")
elif x == 0:
    print("zero")
elif x == 1:
    print("one")
else:
    print("Some other number")
```

Use a `for` statement in Python:

```python
pets = ['cat', 'dog', 'elephant']
for pet in pets:
    print('I have a pet {0}.format(pet))
```

Use `for` with a range of numbers in Python:

```python
for i in range(5):
    print(i)
```

```python
for i in range(10, 15):
    print(i)
```

```python
for i in range(9, 0, -1):
    print(i)
```

```python
for i in range(0, 15, 2):
    print(i)
```

Use a `while` statement in Python:

```python
x = 1
while x < 10:
    print(x)
    x = x + 1
```

Terminate a loop with a `break` statement in Python:

```python
pets = ['cat', 'dog', 'elephant']
for pet in pets:
    if pet == 'dog':
        print("No dogs allowed")
        break
    else:
        print("We love {0}.format(pet))
```

## Lesson 11 - Use Comparison Operators in Python

```python
5 == 5                    # True
5 != 4                    # True
5 > 3                     # True
3 < 5                     # True

4 < x < 6                 # True
5 >= 3                    # True
[1, 2, 4] > [1, 2, 3]     # True

1 < 2 and 5 > 4           # True
1 > 2 or 5 > 4            # True

isinstance("will", str)   # True

a = True
b = True
a is b                    # True

x = [1, 2, 3]
y = [1, 2, 3]
x is y                    # False

x = [1, 2, 3]
3 in x                    # True

car = {
    'model': 'Chevy',
    'year': 1970,
    'color': 'red'
}

if 'model' in car:
    print('This is a {0}'.format(car['model'])) # This is a Chevy

```

## Lesson 12: Use Lists in Python

```python
a = [1, 2, 3, 4]

b = [1, 'cat', 7, {'car': 'chevy'}, 'bear']
b.append('dog')                               # [1, 'cat', 7, {'car': 'chevy'}, 'bear', 'dog']
b.remove('dog')                               # [1, 'cat', 7, {'car': 'chevy'}, 'bear']
b.pop()                                       # 'bear'
b.pop(0)                                      # 1

pets = ['cat', 'dog', 'bear', 'shark']
pets.sort()
pets                                          # ['bear', 'cat', 'dog', 'shark']
pets.reverse()                                # ['shark', 'dog', 'cat', 'bear']
len(pets)                                     # 4
```

## Lesson 13: Slice Lists in Python

```python
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
a[2:5]                                        # [3, 4, 5]
a[2:]                                         # [3, 4, 5, 6, 7, 8, 9]
a[:5]                                         # [1, 2, 3, 4, 5]
a[-4:]                                        # [6, 7, 8, 9]
a[2:5] = ['foo', 'bar', 'baz']                
a                                             # [1, 2, 'foo', 'bar', 'baz', 6, 7, 8, 9]
```

## Lesson 14: Slice Lists in Python

```python
zoo_animals = ['giraffe', 'monkey', 'elephant', 'lion', 'bear', 'pig', 'horse', 'aardvark']
my_animals = ['monkey', 'bear', 'pig']
not_my_animal = []
for animal in zoo_animals:
    if animal not in my_animals:
        not_my_animal.append(animal)
not_my_animal                                       # ['giraffe', 'elephant', 'lion', 'horse', 'aardvark']
not_my_animal = [animal for animal in zoo_animals if animal not in my_animals]

sales = [3.14, 7.99, 10.99, 0.99, 1.24]
sales_with_tax = [sale * 1.07 for sale in sales]

not_my_animal = [
    animal
    for animal in zoo_animals
    if animal not in my_animals
]
```

## Lesson 15: Manipulate Data with Dictionaries in Python

```python
age = {}
age['rohit'] = 34
age['virat'] = 33
age['jasprit'] = 28
print(age['jasprit'])                   # 28
'rohit' in age                          # True
'rahul' not in age                      # True
print(age.get('rohit', 'Not found'))    # 34
del age['rohit']
print(age.get('rohit', 'Not found'))    # 'Not found'

for key, value in age.items(): 
    print(key, value)

```

## Lesson 16: Create Immutable Values in Python with Tuples

The difference between a list and a tuple is the fact that tuples are immutable and can't be changed once they're created. 
If we use the DIR method and specify our tuple you can see in the list of objects, methods, and properties that are available there's nothing for append, or add, or extend

```python

t = 'dog', 'cat', 12345           # ('dog', 'cat', 12345)
t[0]                              # 'dog'

id(t)                             # 4492264648
t = 'dog', 'cat', 12345, 'foo'    # t cannot be edited in place, we can create a new tuple but its id will be different; its a different object.
id(t)                             # 4491890504

```

## Lesson 17: Create Unique Unordered Collections in Python with Set

A set is an unordered collection with no duplicate items in Python.

```python

animals = {'monkey', 'bear', 'dog', 'monkey', 'cat', 'bear', 'gorilla'}
animals                                                                   # {'dog', 'cat', 'bear', 'monkey', 'gorilla'}
'monkey' in animals                                                       # True
fish = set()                                                              # Empty Set
fish.add('shark')
fish.add('guppy')
fish.add('whale')
fish                                                                      # {'shark', 'whale', 'guppy'}
fish.remove('whale')
fish                                                                      # {'shark', 'guppy'}

fish.union(animals)                                                       # {'dog', 'cat', 'bear', 'monkey', 'shark', 'gorilla', 'guppy'}                                                                   
```

## Lesson 18: Invoke the built-in help system with python's dir and help methods

```python
"foo"          # 'foo'
dir("foo")
"""
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title','translate', 'upper', 'zfill']
"""

"foo + bar"    # 'foobar' uses __add__
help("foo".upper)
"foo".upper()                    # "FOO"
```

## Lesson 19: Create a Log for your Python application

```python

import logging
# critical
# error
# warning
# info
# debug
import sys
import getopt

log_level="INFO"


opts, args = getopt.getopt(sys.argv[1:], "l:", ["log="])
for opt, arg in opts:
  if opt in ("-l", "--log"):
    log_level = getattr(logging, arg.upper())

logging.basicConfig(filename='./demo.log', level=log_level, format='%(asctime)s %(levelname)s:%(message)s')


for i in range(0, 40):
  if i % 5 == 0:
    logging.debug('Found a number divisible by 5: {0}'.format(i))
  else:
    logging.info('At number {0}'.format(i))

logging.warning('This is test code, do not use in production')


```

## Lesson 20: Read Input in Python from the Console

```python

name = input('Name: ')
job = input('Occupation: ')
location = input('location: ')

print("Hi {0}, being a {1} in {2} must be exciting!".format(name,job,location))


num1 = input('Enter a number: ')
num2 = input('Enter another number: ')
print(int(num1) + int(num2))

```

## Lesson 21: Create Reusable Components with Functions in Python

```python

def sayName():
    print("Anonymous")
    
foo = sayName()
print(" return value when nothing is returned => ", foo)


def sayName():
    return "Hello anonymous"
foo = sayName()
print(" return value when string is returned => ", foo)


def sayName(name):
    """ returns passed name
    
    Args:
        name (string): the name to return
    """
    return name

def add(num1=1, num2=2):
  return num1 + num2

defaultNum = add()
print({"defaultNum": defaultNum})
num1 = add(10,11)
print({"num1": num1})


def madlibs(name, adjective="red", noun="shoes"):
  return "{0} has {1} {2}".format(name, adjective, noun)

print('params are name, adjective="red", noun="shoes"')

madlib = madlibs("Will")
print("both default params =>", madlib)

madlib = madlibs("Will", noun="boots")
print("adjective as default params =>", madlib)

madlib = madlibs("Will", adjective="black")
print("noun as default params =>", madlib)

madlib = madlibs("Will", "black",  "boots")
print("using all arguments as positional; no default params =>" ,madlib)

# madlib = madlibs("Will", adjective="black", "boots")   # SyntaxError: positional argument follows keyword argument

madlib = madlibs(name ="Will", noun="boots", adjective="black")
print("using all arguments as keywords; no default params =>", madlib)

```

## Lesson 22: Reuse Code in Multiple Projects with Python Modules

### tax.py

```python
def total(value):
    return value + value * 0.07

print(__name__)  # __main__ or tax


if __name__ == "__main__":
  import sys
  totalValue = total(int(sys.argv[1]))
  print({"totalValue": totalValue})

```

### use_tax.py

```python
import tax                 # tax
from tax import total      # only imports total from tax saving memory of use_tax

print(tax.total(100))
print(total(200))
```

## lesson 23 and 24: Read, Write and Parse Files in Python

```python
import csv
import json

# Simple case
f = open('animals.csv')

for line in f:
  print(line)
  
f.close()


# with auto closes the file
with open('animals.csv', 'r') as f:
  print(f.read())
  
  
# using csv module
  
  with open('animals.csv', 'r') as f:
    animals = csv.reader(f)
    for row in animals:
        lastColumn = row[-1]
        if lastColumn == 'True':
            print("{0} is a {1} and is  housebroken".format(row[0], row[1]))
        elif lastColumn == 'False':
            print("{0} is a {1} and is not housebroken!".format(row[0], row[1]))
            
            
# reading json file
with open('animals.json', 'r') as r:
    data = json.load(r)
    print(data)
    for row in data:
        print(row['name'])
        
        
# writing to a file in 'w' mode
f = open('cars.txt', 'w')         # also creates the file
cars = ['chevy', 'tesla', 'ford']
for car in cars:
    f.write(car)
f.close()                         # chevyteslaford the file is actually written when we close.


f = open('cars.txt', 'w')
cars = ['chevy', 'tesla', 'ford']
for car in cars:
    f.write(car + '\n')
f.close()                        
#chevy
#tesla
#ford

# writing to a file in 'a' append mode
f = open('cars.txt', 'a')
cars = ['chevy', 'tesla', 'ford']
for car in cars:
    f.write(car + '\n')
f.close() 
#chevy
#tesla
#ford
#chevy
#tesla
#ford

# with block automatically closes(after writing) the file 

with open('cars2.txt', 'a') as f: 
  cars = ['chevy', 'vw', 'mazda']
  for car in cars: 
    f.write(car +'\n')

f = open('cars.txt', 'w')
f.close()                         # this clears the file

f = open('cars.txt', 'a')
f.close()                         # this does not clear the file


# writing JSON

cars = [
  {"make": "chevy"},
  {"make": "tesla"},
  {"make": "porsche"}
]

with open('cars.json', 'w') as f:
  json.dump(cars, f)
```


