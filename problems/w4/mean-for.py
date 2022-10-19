# Implement the function mean(numbers), as described above, in Python with a for loop.

def mean(numbers):
    sum = 0
    count = 0

    for i in numbers:
        sum += i
        count += 1

    return sum/count # replace with your code
