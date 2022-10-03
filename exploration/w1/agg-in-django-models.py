class Customer(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()


class Product(models.Model):
    sku = models.CharField(max_length=20)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(  # Remember, prices should
        max_digits=10,            # be stored in decimal
        decimal_places=3          # fields
    )


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


class CartItem(models.Model):
    quantity = models.PositiveSmallIntegerField()
    product = models.ForeignKey(
        Product,
        related_name="+",
        on_delete=models.CASCADE, # if a product is deleted, then
                                  # delete the cart items linked
                                  # to that product
    )
    cart = models.ForeignKey(
        ShoppingCart,
        related_name="items",
        on_delete=models.CASCADE, # if a shopping cart is deleted,
                                  # then delete the items in the
                                  # cart (will not delete products)
    )
