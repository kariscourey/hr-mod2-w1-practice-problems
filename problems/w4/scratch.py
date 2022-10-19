from functools import reduce

def addToTotal(total, num):
    return total + num

numbers = [1,2,3,4]
total = reduce(addToTotal, numbers)

total = reduce(lambda total, num: total + num, numbers)
print(total)
