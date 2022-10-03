def add_item_to_cart(request):
    # Get the current customer from the request
    # that we've magically stored on there somehow
    customer = request.customer

    # Get the customer's active cart
    cart = customer.active_cart

    # if the cart doesn't exist, create one
    if cart is None:
        cart = ShoppingCart.objects.create(
          customer=customer,
        )

    # Get the product and quantity from the POST
    product = request.POST.get("product")
    quantity = request.POST.get("quantity")

    # Use the add_item method to create the new
    # shopping cart item to the shopping cart
    cart.add_item(product, quantity)

    return redirect("show_shopping_cart")
