# Implement mean2(numbers) in Python using the reduce() function.

# You may define your helper function as a normal Python function with def or as an in-line lambda. If you choose to use a normal Python function, the first line of the function, add_one, is provided for you.

from functools import reduce

def add_one(sum, number):
    return sum + number # replace with your code

def mean2(numbers):

    # sum = reduce(add_one, numbers)
    sum = reduce(lambda a,b:a+b, numbers)
    mean = sum / len(numbers)

    return mean # replace with your code
