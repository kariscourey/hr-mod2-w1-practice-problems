"""Replace the comment "swap the items" with code that will swap the first two items if the first item in the list is greater than the second item in the list.

For example:

If the input is [1, 2], it should return [1, 2].

If the input is [4, 2], then it should return [2, 4]."""

def sort(items):
    # while forever
    #   for each index except the last

    #       if items at index and index+1 need swapped
    #           swap the items

    if items[0] > items[1]:
        temp = items[0]
        items[0] = items[1]
        items[1] = temp

    return items

    #   if we didn't swap
    #       break out of the loop
    #   return the items
    # pass


"""Solution"""
def sort(items):
    # while forever
    #   for each index except the last

    #       if items at index and index+1 need swapped
    #           swap the items


    if items[0] > items[1]:
        (items[0], items[1]) = (items[1], items[0])

    return items






"""Replace the for comment above the code you wrote to run that swapping code for every pair of elements in the input list.

Do you remember the range and len functions? """

def sort(items):
    # while forever

    #   for each index except the last
    for i in range(len(items) - 1):
        if items[i] > items[i + 1]:
            (items[i], items[i + 1]) = (items[i + 1], items[i])

    #   if we didn't swap
    #       break out of the loop
        else:
            break
    return items

"""Solution"""
def sort(items):
    for i in range(len(items) - 1):
        if items[i] > items[i + 1]:
            (items[i], items[i + 1]) = (items[i + 1], items[i])
        else:
            break
    return items






"""We almost have a sort here.

If you continually perform this swapping routine over the entire list, it will eventually end up sorted.

Add a variable that will get set to True if a swap happens inside of the for loop.

After the loop, if no swaps were performed, we know the list is sorted and we can break out of the loop and return the results.

You use the break keyword to break out of a loop, in case you've forgotten."""

def sort(items):

    swap = True

    # while forever
    while swap:

        for i in range(len(items) - 1):

            if items[i] > items[i+1]:
                (items[i], items[i+1]) = (items[i+1], items[i])
        #   if we didn't swap
        #       break out of the loop
            else:
                swap = False


    return items


"""Solution"""
def sort(items):
    while True:
        made_a_swap = False
        for i in range(len(items) - 1):
            if items[i] > items[i+1]:
                (items[i], items[i+1]) = (items[i+1], items[i])
                made_a_swap = True
        if not made_a_swap:
            break
    return items




# """Alt"""
# def sort(items):
#     for i in range(0, len(items)):
#         for j in range(0, len(items)):
#             if i < j and items[i] > items[j]:
#                 items[i], items[j] = items[j], items[i]
#     return items
