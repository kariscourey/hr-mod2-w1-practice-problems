"""Here's the bubble sort that we looked at yesterday morning:

def bubble_sort(items):
    while True:
        made_a_swap = False

        for i in range(len(items) - 1):
            if items[i] > items[i+1]:
                items[i], items[i+1] = items[i+1], items[i]
                made_a_swap = True

        if not made_a_swap:
            break

    return items
We're going to write some parts of the bubble sort, and then finish with a variation on it called cocktail sort. You may find it useful to refer to the sorting code above as you answer the questions... :-)

Let's get warmed up with an easy one."""

"""Implement a function called swap(), which will swap two items in a list.

It takes a list and two indexes and will swap the values at those two indices and then return the list.

Examples:

lst = [8,11]
print(swap(lst, 0, 1)) #  --> [11,8]

lst = [1,2,3,4]
print(swap(lst, 1, 2)) #  --> [1,3,2,4]"""

"""Recall that on each pass of the bubble sort, starting at the beginning of the list, we work through the list comparing elements next to each other and swapping them if they're out of order. Because this moves larger elements to the end of the list, we'll call it a "bubble up" procedure.
"""

def swap(items, idx_1, idx_2):
    items[idx_1], items[idx_2] = items[idx_2], items[idx_1]
    return items


"""Write a function, bubble_up() that will do one pass through the list swapping elements as needed to move the larger items toward the end of the list.

Example:

lst = [4,3,2,1]
print(bubble_up(lst)) # --> [3,2,1,4]"""

"""The code above is the trickiest code of the bubble sort. From here, you could just do this over and over until you're done.

Or...what if it bubbled down?"""

def bubble_up(items):

    for i in range(len(items)-1):
        if items[i] > items[i+1]:
            items[i], items[i+1] = items[i+1], items[i]
    return items


"""Write a function called bubble_down() that works the same as bubble_up() except that it starts at the end of the list and works its way towards the beginning of the list. This function will move smaller elements from the end of the list towards the beginning.

Example:

lst = [4,3,2,1]
print(bubble_down(lst)) # --> [1,4,3,2]
Hint: the range function can count backwards.

range(0,4)      # --> [0,1,2,3]
range(3,-1,-1)  # --> [3,2,1,0]"""

"""Bubble up, bubble down, bubble...why?

It turns out that large numbers at the beginning of the list will get moved very quickly to the end of the list. However, small numbers at the end of list move much more slowly towards the front of the list.

What if we modified the basic bubble sort to do a bubble-up/bubble-down combo over and over? Let's try it out.

"""

def bubble_down(items):
    for i in range(len(items)-1,0,-1):
        if items[i-1] > items[i]:
            items[i], items[i-1] = items[i-1], items[i]
    return items
        # print(items[i])
        # print(items[i])
        # print(items[i-1])

print(bubble_down([4,3,2,1]))


"""Finish off the implementation of the function cocktail_sort() here.

Do not try to call your functions above. That won't work.

DO use the code from your functions above (cut and paste :-) ).

Do refer back to bubble_sort() at the top for reference."""


def cocktail_sort(items):
    while True:
        made_a_swap = False

        for i in range(len(items)-1):
            if items[i] > items[i+1]:
                items[i], items[i+1] = items[i+1], items[i]
                made_a_swap = True


        if not made_a_swap:
            break

        for i in range(len(items)-1,0,-1):
            if items[i-1] > items[i]:
                items[i], items[i-1] = items[i-1], items[i]
                made_a_swap = True

        if not made_a_swap:
            break

    return items
