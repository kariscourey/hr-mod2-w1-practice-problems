# Implement the function below that will return a single dictionary that contains all of the key/value pairs of the two input dictionaries.

# If both inputs have the same key, then the key in d2 should override the key in d1.

# Example:

# d1 = {"a":1, "b":2}
# d2 = {"b":"bbb", "c": "ccc"}
# d3 = merge_dictionaries(d1, d2)
# print(d3) # --> {"a":1, "b":"bbb", "c": "ccc"})
# Hint: dict.copy() will make a copy of a dictionary

def merge_dictionaries(d1, d2):

    # for all the things in d1 and d2
    d3 = d1.copy()

    for k, v in d2.items():
        d3[k] = v

    return d3


# SOLN
def merge_dictionaries(d1, d2):

    # for all the things in d1 and d2
    d1.update(d2)

    return d1
