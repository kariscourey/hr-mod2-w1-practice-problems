# The function list_to_dict takes a list as its input and transforms it into a dictionary, such that each successive pair of values in the list becomes a key and value for the dictionary.

# Example:

# list_to_dict(["a", 1, "b", 2])
# # --> {"a": 1, "b": 2}

def list_to_dict(lst):

#     dct = {}

#     for i in range(0,len(lst)-1,2):
#         dct[lst[i]] = lst[i+1]

#     return dct

# print(list_to_dict(["a", 1, "b", 2]))

# return {i:dct[i] for i in dct if i in fields}


    return {lst[i]: lst[i+1] for i in range(0, len(lst), 2)}
