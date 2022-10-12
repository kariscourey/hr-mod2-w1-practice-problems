
def third_largest_value(values):
    if len(values) > 3:

        max = 0
        second = 0
        third = 0

        for i in values:
            if i > max:
                second = max
                max = i
            if i < max and i > second:
                third = second
                second = i

        return third


values = [4,2,4,1,3,3,3,5]
print(third_largest_value(values))


def third_largest_value(values):
    if len(values) > 3:
        values.sort()
        return values[-3]


def third_largest_value(values):
    if len(values) < 3:
        return None

    for _ in range(2):
        largest = max(values)
        while largest in values:
            values.pop(values.index(largest))

    return max(values)
