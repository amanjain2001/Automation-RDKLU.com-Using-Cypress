Feature: Verifying pagination of RDKLU.com

# User should see atmost 24 products on single page and dynamically visible previous and next buttons

    Scenario: Validating pagination module of the site.
      Given User successfully browsed to Men's tees section
      Then User shouldn't see more than 24 items
      Then Navigating to other pages should also include the page number in the URL and dynamically previous and next button