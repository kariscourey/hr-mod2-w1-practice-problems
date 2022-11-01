# You're given two sorted lists. Your job is to write a function that merges those two sorted lists into one big sorted list.

# List 1	List 2	Output
# [1, 3, 5]	[2, 100]	[1, 2, 3, 5, 100]
# []	[2, 4, 5]	[2, 4, 5]
# [1, 2, 3]	[1, 2, 4]	[1, 1, 2, 2, 3, 4]
# To figure out how to solve this problem, think about how you would do this given two lists on a piece of paper. Try to come up with a step-by-step way that you would do it. Then, try to write that as code.

def merge_sorted_lists(list1, list2):
    # return sorted(list1 + list2)

    combined = []
    while len(list1) > 0 or len(list2) > 0:
        if len(list1) > 0 and len(list2) > 0:
            if list1[0] < list2[0]:
                # take list1[0] and add it to combined
                combined.append(list1[0])
                # remove list1[0] from list
                list1.pop(0)
            else:
                combined.append(list2[0])
                list2.pop(0)
        elif len(list1) > 0:
            combined.extend(list1)
            list1 = []
        elif len(list2) > 0:
            combined.extend(list2)
            list2 = []

    return combined
