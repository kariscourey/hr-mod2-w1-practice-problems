from math import floor

def repeats(s):
    # solution
    # if s:
    half = floor(len(s) / 2)
    for i in range(half):
        if s[i] != s[half + i]:
            return False
    return True


print(repeats(""))
print(repeats("pushpush"))

def repeats(s):
    return s[:len(s)//2] == s[len(s)//2:]

def repeats(s):

    sl = len(s)

    if (sl == 0):
        return True

    if (sl % 2 == 1):
        return False

    if (s[0:int(sl/2)] == s[int(sl)/2:int(sl+1)]):
        return True
