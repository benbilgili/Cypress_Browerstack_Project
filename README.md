﻿# Cypress_Browerstack_Project

Showcase re the intergration of Cypress tests with Browerstack to allow testing across multiple browsers and devices. 

**Steps To Replicate: **
1. Clone this repository.
2. run 'npm install' to install dependencies
3. visit Browserstack webpage and create a free profile.
(https://www.browserstack.com/?utm_source=google&utm_medium=cpc&utm_platform=paidads&utm_content=668760067900&utm_campaign=Search-Brand-EMEA-Navigational&utm_campaigncode=Core+9046896&utm_term=e+browserstack&gad_source=1&gclid=EAIaIQobChMIl7ah1Z_0hAMVHZ1QBh3fxAlcEAAYASAAEgL1ZPD_BwE)
4. Take your username and access key and add these into browserstack.json file.
5. Run command 'browserstack-cypress run' to instantiate tests.


**Steps Taken**
1. I created a new Cypress spec file to test the Edgewords Demo site.
2. I installed the npm Browserstack package.
3. Within configuration:
     * I linked my Browserstack details
     * I confirmed which browers (inc versions) and devices I wanted to run my tests on
4. I was able to monitor the results of my tests to confirm success via the Browserstack Automation webpage.
(See screenshots folder for images of the above)


