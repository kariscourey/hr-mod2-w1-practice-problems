# make class
class Counter:
    pass

# set property
class Counter:
    count = 0


# return property
class Counter:
    count = 0

    def get_count(self):
        return self.count


# add method
class Counter:
    count = 0

    def get_count(self):
        return self.count


    def increment(self):
        self.count += 1
        return self.count


# create child
class Counter:
    count = 0

    def get_count(self):
        return self.count

    def increment(self):
        self.count += 1


class ConfigurableCounter(Counter):
    pass


# initializer, store value in a property
class Counter:
    count = 0

    def get_count(self):
        return self.count

    def increment(self):
        self.count += 1


class ConfigurableCounter(Counter):

    def __init__(self, change_by):
        self.change_by = change_by


# override increment .. DRY - don't repeat yourself
class Counter:
    count = 0

    def get_count(self):
        return self.count

    def increment(self):
        self.count += 1


class ConfigurableCounter(Counter):
    def __init__(self, change_by):
        self.change_by = change_by

    def increment(self):
        self.count += self.change_by
        return self.count


# DRY - easier to test, less possibility for error
class Counter:
    count = 0
    change_by = 1

    def get_count(self):
        return self.count


class ConfigurableCounter(Counter):
    def __init__(self, change_by):
        self.change_by = change_by

    def increment(self):
        self.count += self.change_by
        return self.count


# decrement
class Counter:
    count = 0

    def get_count(self):
        return self.count

    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1


class ConfigurableCounter(Counter):
    def __init__(self, change_by):
        self.change_by = change_by

    def increment(self):
        self.count += self.change_by

    def decrement(self):
        self.count -= self.change_by


# decrement DRY
class Counter:
    count = 0
    change_by = 1

    def get_count(self):
        return self.count

    def increment(self):
        self.count += self.change_by

    def decrement(self):
        self.count -= self.change_by


class ConfigurableCounter(Counter):
    def __init__(self, change_by):
        self.change_by = change_by



# inherit
class Mammal:
    def __init__(self, temperature, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.temperature = temperature

class Flyer:
    altitude = 0

    def flap(self):
        self.altitude += 10

    def dive(self):
        self.altitude -= 10


class Bat(Mammal, Flyer):
    pass


# super method
# Have it use the super method to call the initializer of its parent class, Person, and have it set the employee id to a property named employee_id.
class Person:
    def __init__(self, name):
        self.name = name.upper()


class Employee(Person):
    def __init__(self, employee_id, name):
        super().__init__(name)  # this will run initializer
        self.employee_id = employee_id


# str method
class Person:
    def __init__(self, name):
        self.name = name.upper()

    def __str__(self):
        return self.name


class Employee(Person):
    def __init__(self, employee_id, name):
        super().__init__(name)
        self.employee_id = employee_id

    def __str__(self):
        return super().__str__() + f' #{self.employee_id}'
        # name = self.name + " #" + str(self.employee_id)
        # return name

        # above is more DRY
