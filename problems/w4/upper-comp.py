# Implement the function uppercase_all(strings) in Python, but this time use a list comprehension to do it.

# Recall that a list comprehension is shorthand way to do common list operations. In the following code, the loop at the top and the list comprehension at the bottom perform the same task:

# # loop
# result = []
# for number in numbers:
#     result.append(number * number)

# # list comprehension
# result = [number * number for number in numbers]

def uppercase_all2(strings):
    # return [... for ... in ...]

    return [i.upper() for i in strings]
