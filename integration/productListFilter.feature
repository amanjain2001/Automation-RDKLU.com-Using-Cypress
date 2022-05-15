Feature: Verifying filter modules of RDKLU.com

# User should see the filter options and applying on that the products should be filtered

    Scenario: Validating product list filters module of the site
      Given User successfully browsed to printed tees section
      Then User should see filter option as Sort, Featured, Best selling, Alphabetically: A-Z, Alphabetically: Z-A, Price: low to high, Price: high to low, Date: old to new, Date: new to old
      And User apply Alphabetically, Z-A filter
      Then User should see the result in filtered alphabetically Z-A order