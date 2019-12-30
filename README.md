# GoogleSheetScrape
Small JS file that scrapes given google sheet file using only JS.

My reason for hacking this together is that GithubPages doesn't support any serverside code and this was the only solution.
# Directions
## 1. Make your Google Sheet Published.
File -> Publish to the Web. (I don't think the settings matter beyond this, but I published the whole document).
## 2. In your HTML file add a pre tag with the id results.
This is just a starting point so you can actually utilize the data.

ex: `<pre id=results></pre>`
## 3. Copy your key and replace the mykey value.
ex: My link for editing my spreadsheet looks like: https://docs.google.com/spreadsheets/d/14bUBPatyCQ8Xx4wMeatBc2Wm513zQC7LHGBBVMrAebU/edit#gid=0

My key is: 14bUBPatyCQ8Xx4wMeatBc2Wm513zQC7LHGBBVMrAebU
### Credit:
I would like to credit [@mikeymckay](https://github.com/mikeymckay/google-spreadsheet-javascript) <-- I've linked his version of my plugin here

His code is 9 years old so I had to hack around to get it to work and eventually simplify it.
### Shortcomings
I haven't spend the time searching for a way to access the second sheet yet (or maybe I never will once I get a real website).

### Example
See it on my website [crossfoot.github.io](https://crossfoot.github.io/GoogleSheetScrape)
