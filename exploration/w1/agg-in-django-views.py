class CartItemCreateView(CreateView):
    model = CartItem
    fields=["quantity", "product"]
    success_url = reverse_lazy("show_shopping_cart")

    def form_valid(self, form):
        # Get the current customer from the request
        # that we've magically stored on there somehow
        customer = self.request.customer

        # Get the customer's active cart
        cart = customer.active_cart

        # if the cart doesn't exist, create one
        if cart is None:
            cart = ShoppingCart.objects.create(
              customer=customer,
            )

        # Auto-assign the customer's cart to the
        # cart item
        form.instance.cart = cart

        return super().form_valid(form)
