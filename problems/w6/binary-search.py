from math import floor

def binary_search(items, target):
    start = 0
    end = len(items) - 1
    while start <= end:
        half = floor((start + end)/2)
        value = items[half]
        if target == value:
            return value
        elif target < value:
            end = half - 1
        else:
            start = half + 1
    return None

it = [3, 5, 8, 13, 21, 34, 55]
targ = 8
print(binary_search(it,targ))
