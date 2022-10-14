# The median average is the value that occurs in the middle of a sorted list of numbers. For example, given this list:

# [1, 10, 2, 8, 4]

# its median average is 4 because, once its sorted, 4 is the middle value.

# If you have an even number of items in the list, you find the middle two, then take the mean average of those. For example, if you have this list:

# [1, 10, 2, 8, 4, 6]

# its median average is 5, which is the mean average of 4 and 6.

# Please complete the median function below to calculate the median average of an array of numbers. The list will never be empty.

# Example inputs and outputs:

# Input	Output
# [1, 2, 3]	2
# [3, 2, 1]	2
# [5, 3, 1, 1]	2

from math import floor

def median(numbers):
    numbers.sort()
    half = floor(len(numbers) / 2)

    if len(numbers) % 2 == 1:
        return numbers[half]
    return (numbers[half] + numbers[half - 1]) / 2


num = [3, 2, 1, 4, 5]
num = [1, 1, 3, 5]
print(median(num))
