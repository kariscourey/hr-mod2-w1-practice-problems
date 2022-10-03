# This is kind-of like the second problem, but a little different...

# This function takes a list of dictionaries (items) and dictionary of filters (filters). It should return a filtered copy of items with only the items that match any of the filters.

# Example:

# items = [
#     {"color":"blue", "size":"small"},
#     {"color":"red", "size":"small"},
#     {"color":"purple", "size":"medium"},
#     {"color":"green", "size":"large"},
# ]
# filters = {
#     "color": "blue",
#     "size": "medium"
# }

# result = only_items_with(items, filters)
# print(result) # --> [
#     {"color":"blue", "size":"small"},
#     {"color":"purple", "size":"medium"},
# ]

# def only_items_with(items, filters):
#     result = []
#     located = False

#     # loop over the things, get the things you want
#     for i in items:
#         for j in filters:
#             if j in items[0] and items[0][j] == filters[j]:
#                 located = True
#                 break
#         if located == True:
#             result.append(i)

#     return result



# SOLN
def only_items_with(items, filters):
    result = []

    # loop over the things, get the things you want
    for item in items:
        for key in filters.keys():
            if item[key] == filters[key]:
                result.append(item)
                break

    return result


items = [
    {"color":"blue", "size":"small"},
    {"color":"red", "size":"small"},
    {"color":"purple", "size":"medium"},
    {"color":"green", "size":"large"},
]
filters = {
    "color": "blue",
    "size": "medium"
}

result = only_items_with(items, filters)
print(result) # --> [
#     {"color":"blue", "size":"small"},
#     {"color":"purple", "size":"medium"},
# ]
