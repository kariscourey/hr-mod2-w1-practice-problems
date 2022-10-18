# Implement the function shorter_than_5(strings), which returns a list that contains all of the strings from the strings input that have a length less than 5.

def shorter_than_5(strings):
    results = []

    # your code here
    for i in strings:
        if len(i) < 5:
            results.append(i)


    return results
