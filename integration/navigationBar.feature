Feature: Verifying navigation bar of RDKLU.com

# User should see polo Tees,active tees,basic tees, printed tees,pocket tees, raglan tees and oversizr tees under men tees sub-menu

    Scenario: Validating navigation bar of the site
      Given User successfully browserd to site
      When User hovers over mens section
      And User hovers to tees section
      Then User should be able to see described sub-menu