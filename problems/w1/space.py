# The input is a list of dictionaries where each dictionary represents an object in space that has a probability of smashing into earth. You're going help sort out the more dangerous objects for further analysis. Follow this pseudo-code:

# big_objects = new list
# for each of the input space objects
#     if the object's estimated diameter is less than 1, skip it
#     create a new dictionary with these fields (and values) from the space-object:
#         * `estimated_diameter`
#         * `impact_probability`
#     encoded_object = json encode the dictionary
#     add encoded_object to the big_objects list
# return the big_objects list

import json
def find_big_space_objects(space_objects):

    big_objects = []

    for i in space_objects:

        if i["estimated_diameter"] >= 1:
            dct = {}
            dct["estimated_diameter"] = i["estimated_diameter"]
            dct["impact_probability"] = i["impact_probability"]

        encoded_object = json.dumps(dct)
        big_objects.append(encoded_object)

    return big_objects


import json
def find_big_space_objects(space_objects):

    big_objects = []

    for i in space_objects:

        if i["estimated_diameter"] < 1.0:
            continue

        dct = {}
        dct["estimated_diameter"] = i["estimated_diameter"]
        dct["impact_probability"] = i["impact_probability"]

        big_objects.append(json.dumps(dct))

    return big_objects
