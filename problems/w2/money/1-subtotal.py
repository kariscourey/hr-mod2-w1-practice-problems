"""Money matters.

When a bill is presented, at a store, restaurant, hotel, etc. it's a collection (list) of line-items. Each line-item represents a unique type of thing that was purchased, the cost of that item, the quantity purchased, and some other information.

For all of the problems in this set, we'll represent a line-item like this:

line_item = {
    "description": "Tennis Ball",
    "quantity": 3,
    "item_cost": 3.50,
    "taxable": True,
    "weight_lbs": 1.0
}
A bill is just a list of line-items, like this:

bill = [
    {"description": "Tennis Ball", "quantity": 3, ...},
    {"description": "3 person tent", "quantity": 1, ...},
    {"description": "hammock", "quantity": 1, ...},
]

NOTE: There are no overt or implied requirements for how you solve these problems. Use whatever means feel easiest or most natural to you. Use filter if you want, or don't if you don't."""

# The sub-total of a bill is the sum of all of its line-items. The total for a line item is:

# line_item["quantity"] * line_item["item_cost"]
# This is a "do something to every item in the list" type of problem.

# Implement this function to return the sub-total of the bill.

def sub_total(bill):
    # sub = 0
    # for i in bill:
    #     sub += i["quantity"] * i["item_cost"]

    # return sub

    return sum([i["quantity"] * i["item_cost"] for i in bill])
