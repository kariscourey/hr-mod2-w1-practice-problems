# This function performs a filter operation.

# Return a list of all of the dictionaries that have:

# "length" > 25 OR "max_weight" > 4000

def big_ones(cars):
    results = []

    # loop over the cars, pick out the ones you want
    # for i in cars:
    #     if i["length"] > 25 or i["max_weight"] > 4000:
    #         results.append(i)

    # return results

    return [i for i in cars if i["length"] > 25 or i["max_weight"] > 4_000]
