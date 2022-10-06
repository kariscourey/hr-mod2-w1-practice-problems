# A line-item is considered "taxable" if its "taxable" field is True.

# This is a filter type of problem.

# Implement this function to return a list of all of the line_items that are taxable.

def taxable_items(bill):
    # taxable = []
    # for i in bill:
    #     if i["taxable"] == True:
    #         taxable.append(i)

    # return taxable

    return [i for i in bill if i["taxable"] == True]
