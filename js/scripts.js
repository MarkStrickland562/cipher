var usrresp = prompt("Write a sentence:");

var firstlast = function(respstring) {
return (respstring.charAt( 0 ) + respstring.charAt(respstring.length - 1));
};


var lastfirst = (firstlast(usrresp).toUpperCase());

var revstring = function(str,usrresp) {
  var splitstr = str.split("");
  var reverseArray = splitstr.reverse();
  var joinArray = reverseArray.join("");
  return usrresp + joinArray;
};

alert(revstring(lastfirst,usrresp));
