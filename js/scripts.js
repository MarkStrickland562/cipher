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

var midchar = function(str) {
  var sength = Math.round((str.length) / 2);
  return str.charAt(sength);
};
//alert(midchar(usrresp));

alert(midchar(usrresp) + usrresp + lastfirst.charAt(1) + lastfirst.charAt( 0 ));

//alert(revstring(lastfirst,usrresp));
