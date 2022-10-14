# The mode average is the number that occurs most often in a list of numbers. For example, the mode average

# Please complete the mode function to find the mode average of an array of numbers. The array will never be empty. There will only be one modal value.

# Example inputs and outputs:

# Input	Output
# [1, 1, 2, 3]	1
# [3, 2, 1, 3]	3
# [10]	10

def mode(numbers):
    return max(numbers, key=numbers.count)


num = [3, 2, 1, 3]
print(mode(num))
