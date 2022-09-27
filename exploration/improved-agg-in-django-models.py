class ShoppingCart(models.Model):
    customer = models.OneToOneField(
        Customer,
        related_name="active_cart",
        on_delete=models.CASCADE, # if a customer is deleted,
                                  # then, delete their cart
    )

    # Calculate the total of all of the items in the
    # shopping cart
    def total(self):
        prices = [item.price * item.quantity
                  for item in self.items.all()]
        return sum(prices)

    # Add a product and the number of it the customer
    # wants to buy to the shopping cart
    def add_item(self, product, quantity):
        item = CartItem.objects.create(
            product=product,
            quantity=quantity,
        )
        self.items.add(item)

    # Remove an item from the cart by its id value
    def remove_item_by_id(self, id):
        CartItem.objects.filter(id=id).delete()
