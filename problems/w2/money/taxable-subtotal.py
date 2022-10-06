# A line-item is considered "taxable" if its "taxable" field is True.

# This is a "do something with every item in a filtered list" type of problem.

# Implement this function to return the "taxable" sub-total of the bill. That means return the total of the costs of each item in the bill times their quantity only if the item is taxable.

def taxable_sub_total(bill):
    # sub = 0

    # for i in bill:
    #     if i["taxable"] == True:
    #         sub += i["quantity"] * i["item_cost"]

    # return sub

    return sum([i["quantity"] * i["item_cost"] for i in bill if i["taxable"] == True])
