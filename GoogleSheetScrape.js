// This is the key that is in the URL when you're editing
var mykey = "14bUBPatyCQ8Xx4wMeatBc2Wm513zQC7LHGBBVMrAebU"

// Arbitrary class
// I used a class because I improved upon an old design
// from github user mikeymckay, where he also used classes.
// I might change this later...
class GoogleUrl {
  constructor(key) {
    this.key = key
    this.jsonCellsUrl = "https://spreadsheets.google.com/feeds/cells/" + this.key + "/od6/public/basic?alt=json-in-script";
    this.jsonListUrl = "https://spreadsheets.google.com/feeds/list/" + this.key + "/od6/public/basic?alt=json-in-script";
    this.jsonUrl = this.jsonCellsUrl;
  }
}

// Creating instance
let me = new GoogleUrl(mykey);

// This function just imports one of Google's json api so 
// it executes callbackCells with the appropriate data
load = function() {
  var url;
  url = me.jsonUrl + "&callback=callbackCells";
  $("body").append("<script src='" + url + "'/>");
}

// iterates through the data and pulls the cell location
// and its value and puts it into a dictionary
var results = {};
callbackCells = function(data) {
  var _i, _len, _ref;
  _ref = data.feed.entry;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    results[_ref[_i].title.$t] = _ref[_i].content.$t;
  }
  $('#results').html(JSON.stringify(results).replace(/,/g,',\n'));
  return 1
}
let h = load();