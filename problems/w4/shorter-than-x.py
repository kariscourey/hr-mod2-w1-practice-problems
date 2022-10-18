# This pattern of selecting some of the items from an input list is so common that the ability to do so is built into Python's list comprehensions.

# Here's an example that selects all of the numbers from a list that are greater than 4.

# numbers = [1,2,3,4,5,6,7,8]

# greater_than_4 = [number for number in numbers if number > 4]

# print(greater_than_4)  # --> [5,6,7,8]
# The if number > 4 at the end is what does the filtering.

# This example will select all of the strings that represent a number:

# strings = ["cat", "1", "a", "5.3"]

# number_strings = [string for string in strings if string.isnumeric()]

# print(number_strings)  # --> ["1", "5.3"]
# Here if string.isnumeric() is the part that's specifying which elements should be included.

# Implement the function shorter_than(strings, max_length) in Python using a list comprehension.

def shorter_than_X(strings, max_length):
    # your list comprehension here
    return [i for i in strings if len(i) < max_length]
