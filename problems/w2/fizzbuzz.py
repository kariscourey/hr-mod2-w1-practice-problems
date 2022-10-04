# Our first practice problem today is an old interviewers' favorite: FizzBuzz.

# FizzBuzz is a children's game that helps them learn division. The players count up from 1 and if the number they get is divisible by 3, they should say "fizz" instead of the number. If the number is divisible by 5, they should say "buzz." If the number is divisible by 3 and 5, they should say "fizzbuzz."

# The progression of words spoken by the children should be:

# 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz... up-to the maximum number.

# Your mission, should you accept it, is to implement the function fizzbuzz(maximum), which will return an array containing the expected responses for a game of FizzBuzz.

# Sample input/outputs:

# maximum	fizzbuzz(maximum)
# 0	[]
# 1	["1"]
# 3	["1", "2", "fizz"]
# 6	["1", "2", "fizz", "4", "buzz", "6"]

def fizzbuzz(maximum):
    result = []

    for i in range(1, maximum + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("fizzbuzz")
        elif i % 3 == 0:
            result.append("fizz")
        elif i % 5 == 0:
            result.append("buzz")
        else:
            result.append(str(i))

    return result

print(fizzbuzz(6))
