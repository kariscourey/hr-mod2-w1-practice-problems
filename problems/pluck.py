# Implement this function: decode_and_pluck

# Inputs:

# input_json: a JSON encoded string that, once decoded, should be a Python dictionary
# field: a list of field names that we want to extract
# The function should decode input_json into a dictionary and then pluck out the fields named in fields as a new dictionary to return.

# Example:

# decode_and_pluck('{"a": 1, "b": 2, "c": 3}', ["a", "c"])
# # --> {"a": 1, c": 3}

import json
def decode_and_pluck(input_json, fields):
    dct = json.loads(input_json)

    plucked = {}

    for i in dct:
        if i in fields:
            plucked[i] = dct[i]

    return plucked

print(decode_and_pluck('{"a": 1, "b": 2, "c": 3}', ["a", "c"]))
print(type(decode_and_pluck('{"a": 1, "b": 2, "c": 3}', ["a", "c"])))
