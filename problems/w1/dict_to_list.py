# The function dict_to_list takes a dictionary as its input and transforms the dictionary into a list by adding its keys and values to the list.

# Example:

# dict_to_list({"a": 1, "b": 2})
# # --> ["a", 1, "b", 2]

from itertools import chain

def dict_to_list(the_dict):

    # lst = []

    # for k,v in the_dict.items():
    #     lst.append(k)
    #     lst.append(v)

    # return lst

    return list(chain.from_iterable((k, v) for k,v in the_dict.items()))

def dict_to_list(the_dict):
    result = []
    [result.extend([k, v]) for k, v in the_dict.items()]
    return result


print(dict_to_list({"a": 1, "b": 2}))
