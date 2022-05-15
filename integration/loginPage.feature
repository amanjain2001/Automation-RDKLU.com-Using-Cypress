Feature: Verifying login module of RDKLU.com

Background: 
    Given User successfully browsed to login page

# User should be logged in using registered username with registered password

    Scenario: Validating login page module of the site
      When User fills valid credentials
      Then Validate user login with the credentials

# User should not be logined using registered username with unregistered password

    Scenario: Validating login page module of the site 
        When User fills invalid credentials
        Then User should not be logged in and a message should be shown like incorrect email or password