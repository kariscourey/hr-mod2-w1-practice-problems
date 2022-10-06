# The total for a bill is calculated like this:

# total =
#     the sum of the line items (or _sub_total_)
#     + taxes
# Implement this function to calculate the total for a bill.

def bill_total(bill, tax_rate):
    # sub = 0
    # taxable_sub = 0

    # for i in bill:

    #     if i["taxable"] == True:
    #         taxable_sub += i["quantity"] * i["item_cost"]
    #     else:
    #         sub += i["quantity"] * i["item_cost"]

    # sub += taxable_sub * (1 + tax_rate)

    # return sub

    taxable_sub = sum([i["quantity"] * i["item_cost"] for i in bill if i["taxable"] == True]) * (1+tax_rate)
    sub = sum([i["quantity"] * i["item_cost"] for i in bill if i["taxable"] == False])

    total = taxable_sub + sub
    return total


bill = [
    {"description": "Tennis Ball", "quantity": 3, "item_cost": 3.50, "taxable": True,},
    {"description": "3 person tent", "quantity": 1, "item_cost": 1.00, "taxable": True,},
    {"description": "hammock", "quantity": 1, "item_cost": 2.50, "taxable": False,},
]

print(bill_total(bill,0.065))
