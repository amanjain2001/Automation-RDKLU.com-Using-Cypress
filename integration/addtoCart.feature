Feature: Verifying cart module of RDKLU.com

# User should see the exact added item with its size in the cart 
  @e2e
    Scenario: Validating add to cart module of the site
      Given User successfully browsed to mens printed tees section
      When User search for the item TEE#125
      And User add the item in cart with random size
      Then The cart should contain the same add product with same name and size