# All of these practice problems will use a dictionary to represent a car, like this:

# car = {
#     "make": "",
#     "model": "",
#     "year": 1995,
#     "type": "",          # types: truck, sedan, wagon, suv
#     "color": "",         # any color...
#     "vin": "",
#     "max_weight": 4000,  # maximum recommend weight in pounds (lbs.)
#     "length": 15.2,      # total length in feet
#     "fuel": "gas",       # fuel types: gas, diesel, electric
#     "mpg": 20,           # miles/gallon of gas or equiv for diesel and electric
# }
# This is what a list of cars could look like (not all of the fields are shown):

# cars = [
#     {"type": "truck", "color": "rusted", "year": 1955},
#     {"type": "sedan", "color": "red", "year": 2015},
#     {"type": "wagon", "color": "pea green", "year": 1965},
#     {"type": "truck", "color": "blue", "year": 1995},
# ]
# For all of the problems below, a car will always be a car as described above. Similarly, if you see cars, that refers to a Python list of car dictionaries.

# This function performs a filter operation, that is, it returns a subset of the input based on some filtering criteria.

# Return a list of the dictionaries that have:

# "color" = "red"

def only_the_red(cars):
    results = []

    # loop over the cars, pick out the ones with ["color"] == "red"
    # for i in cars:
    #     if i["color"] == "red":
    #         results.append(i)

    # return results

    return [i for i in cars if i['color'] == 'red']
