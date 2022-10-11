# Please write your multiply_by function here
def multiply_by(left):
    def multiply_right(right):
        return left * right
    return multiply_right
