# The function above has the max_length hard coded as 5. Let's make this function a little more flexible and pass the max_length in as a function parameter.

# Implement the Python function: shorter_than(strings, max_length)

# Hint: You should be able to use your solution from above with just one change.

def shorter_than(strings, max_length):
    results = []

    # your code here
    for i in strings:
        if len(i) < max_length:
            results.append(i)


    return results
