Feature: Verifying product purchase of RDKLU.com
  @e2e
# User should naviagate back to RDKLU domain on cancelling payment   
    Scenario: Validating product purchase functionality of the site
      Given User successfully browsed to women's hoodies and jacket page
      When User search a item with ID RDKLU#32 and add the item in the cart and checkout from cart pane
      And User fill all the details of shipping address with opt out of Email me and offers and proceeds to payment page

# Because of cypress limitation it is unable to go on two superdomains

    Scenario: Validating payment page module for the site
      Given User redirects to cashfree online payments page
      Then Payment page should contain brand RDKLU name
      And User fill all the details of card in card payment method and cancel the transaction

# Because of cypress limitation it is unable to go on two superdomains

    Scenario: Validating the payment cancel functionality of the site.
      Then On cancelling order user should be redirected to RDKLU domain page