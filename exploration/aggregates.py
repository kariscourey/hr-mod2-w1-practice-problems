class ShoppingCart:
    def __init__(self, customer):
      self.customer = customer
      self.items = []

    def remove_item_by_index(self, index):
        self.items.pop(index)
        # more interesting code here

    def remove_item_by_sku(self, sku):
        for index, item in enumerate(self.items):
            if item.sku == sku:
                self.items.pop(index)
                break
        # interesting code here

    # Other interesting code

class ShoppingCart:
    @staticmethod
    def createShoppingCart(self, customer):
        cart = ShoppingCart(customer)
        cart.tax = TaxCalculator(customer.location)
        return cart

    # Other interesting code
