# The taxes are calculated as:

# tax_rate * (taxable total of the bill)
# This is a "do something with every item in a filtered list" type of problem.

# Implement this function to return the taxes for the bill.

def taxes(bill, tax_rate):
    # sub = 0

    # for i in bill:
    #     if i["taxable"] == True:
    #         sub += i["quantity"] * i["item_cost"]

    # return sub * tax_rate

    sub = sum([i["quantity"] * i["item_cost"] for i in bill if i["taxable"] == True])

    return sub * tax_rate
