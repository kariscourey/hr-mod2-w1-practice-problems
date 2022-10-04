# In this problem, you'll implement a function that takes a list of numbers and returns the sum of all of the even numbers in the list.

# Sample input/outputs:

# numbers	sum_evens(numbers)
# []	0
# [3,7]	0
# [4,7]	4
# [1,2,3,4,5,6]	12
# Implement sum_evens(numbers).

def sum_evens(numbers):

    sum = 0

    for i in numbers:
        if i % 2 == 0:
            sum += i

    return sum



numbers = [1,2,3,4,5,6]
print(sum_evens(numbers))
