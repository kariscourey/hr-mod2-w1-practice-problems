# This function performs a filter operation.

# Return a list of all of the dictionaries that have:

# "year" < 1980 AND "mpg" < 12

def old_guzzlers(cars):
    results = []

    # loop over the cars, pick out the ones you want
    # for i in cars:
    #     if i["year"] < 1980 and i["mpg"] < 12:
    #         results.append(i)

    # return results

    return [i for i in cars if i['year'] < 1980 and i['mpg'] < 12]
