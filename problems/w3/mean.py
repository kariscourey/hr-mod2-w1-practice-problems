# he mean average is the sum of the numbers divided by the number of numbers.

# Please complete the mean function to find the mean average of an array of numbers. The array will never be empty.

# Example inputs and outputs:

# Input	Output
# [2, 1, 2, 3]	2
# [3, 2, 2, 3]	2.5
# [10]	10


def mean(numbers):
    return sum(numbers) / len(numbers)
