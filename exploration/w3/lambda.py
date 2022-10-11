def greeter(greeting):
    # def get_name(name):
    #     return f"{greeting}, {name}"

    # return get_name

    return lambda name: f"{greeting}, {name}"
