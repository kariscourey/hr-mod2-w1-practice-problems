# This function takes a list of dictionaries (items) and a list of fields (fields).

# It should return a copy of items where each dictionary only contains the fields listed in fields.

# Example:

# items = [
#     {"a": 1, "b":2, "c": 3},
#     {"a":3, "size": 4},
#     {"b": 5, "d": 7}
# ]
# fields = ["a", "b"]
# result = just_these_fields(items, fields)
# print(result) # -->
# # [
# #     {"a": 1, "b": 2},
# #     {"a":3},
# #     {"b": 5}
# # ]


def just_these_fields(items, fields):
    result = []

    # loop over the things, do something with each one
    for i in items:
        dict = {}
        for j in fields:
            if j in i:
                dict[j] = i[j]
        if dict:
            result.append(dict)

    return result




# SOLN
def just_these_fields(items, fields):
    result = []

    # loop over the things, do something with each one
    for old_dict in items:
        new_dict = {}
        for key in fields:
            if key in old_dict:
                new_dict[key] = old_dict[key]
        result.append(new_dict)

    return result



items = [
    {"a": 1, "b":2, "c": 3},
    {"a":3, "size": 4},
    {"b": 5, "d": 7}
]
fields = ["a", "b"]
result = just_these_fields(items, fields)
print(result)
