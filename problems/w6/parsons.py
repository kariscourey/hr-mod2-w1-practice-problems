def find_sums(numbers, target):
    results = []

    for i in range(len(numbers)):
        first = numbers[i]
        for j in range (i+1, len(numbers)):
            second = numbers[j]
            if first + second == target:
                results.append([first,second])
    return results

num = [2, 3, 1, 2]
targ = 4

print(find_sums(num,targ))
