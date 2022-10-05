# This function, like the previous, takes a list of car dictionaries as an input. However, instead of filtering the list, we're going to sort it by the make of the car.

# If we have an input like this:

# cars = [
#     {"make": "ford", "model": 8, "year": 1955},
#     {"make": "chevy", "model": 12, "year": 1964},
#     {"make": "ford", "model": 11, "year": 1978},
#     {"make": "chevy", "model": 19, "year": 2000},
# ]
# your function will produce this as the output:

# output = {
#     "ford": [
#         {"make": "ford", "model": 8, "year": 1955},
#         {"make": "ford", "model": 11, "year": 1978},
#     ],
#     "chevy": [
#         {"make": "chevy", "model": 12, "year": 1964},
#         {"make": "chevy", "model": 19, "year": 2000},
#     ]
# }
# Note that the output is a dictionary where each key is the make of a car and the value is a list of the car-dictionaries that have that make.

# Here is pseudocode for the function:

# sort_by_make(cars)
#     results = empty dictionary
#     for each car in cars
#         make = the value for the "make" key for this car
#         if results does NOT have make as a key
#             results[make] = empty list
#         add the car to the results[make] list

#     Quiz: is there anything else to do?

#     return the results list

def sort_by_make(cars):
    results = {}

    # loop over the cars and stick each one in its list
    for i in cars:
        if i["make"] not in results:
            make_list = []
            make_list.append(i)
            results[i["make"]] = make_list
        else:
            results[i["make"]].append(i)

    return results

    for i in cars:
        make = car['make']
        if i["make"] in results:
            results[make].append(i)
        else:
            results[make] = [i]

    return results

cars = [
    {"make": "ford", "model": 8, "year": 1955},
    {"make": "chevy", "model": 12, "year": 1964},
    {"make": "ford", "model": 11, "year": 1978},
    {"make": "chevy", "model": 19, "year": 2000},
]

print(sort_by_make(cars))
