(function (exports) {
  'use strict';

  /*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

  function twoSum( nums, target ) {
      var r = {};
      for ( var i = 0; i < nums.length; i++ ){
          r[nums[i]] = i;
      }

      var resp = [];
      for ( var i = 0; i < nums.length; i++ ){
          var diff = target - nums[i];
          if ( r.hasOwnProperty( diff) && r[diff] != i ) return [ i, r[diff] ];
      }
  }

  twoSum([2,7,11,15], 17);

  exports.twoSum = twoSum;

})(typeof window === 'undefined' ? module.exports : window);



(function (exports) {
  'use strict';

  /*

Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

*/

  function addBorder( picture ) {
     var topOrBottom = "*".repeat( picture[0].length + 2 );
     var resp = [ topOrBottom ];
     for ( var i = 0; i < picture.length; i++ ){
         resp.push('*' + picture[i] + '*');
     }
     resp.push(topOrBottom);
     return resp;
  }



  exports.addBorder = addBorder;

})(typeof window === 'undefined' ? module.exports : window);

(function (exports) {
  'use strict';

  /*

Some people are standing in a row in a park.
There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights
in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be

sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

*/


  function sortByHeight(a) {
    var as = a.slice();
    var as = as.sort( function( a, b ){
                        return a - b;
                          });
    var r = [];
    r = [-1,-1,-1,2,3,4]
    var m1 = as.lastIndexOf( -1 );
      m1++;
    for ( var i = 0; i < a.length; i++ ){
      if ( a[ i ] == -1 ) r.push( -1 );
      else{
        r.push( as[m1++] );
      }
    }
    return r;
  }

  exports.sortByHeight = sortByHeight;

})(typeof window === 'undefined' ? module.exports : window);


(function (exports) {
  'use strict';

  /*


Given a string, find out if its characters can be rearranged to f
orm a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

*/

function palindromeRearranging( s ) {
  var a = [];
  for ( var i = 0; i < 26; i++ ) a.push( 0 );
  for ( var i = 0; i < s.length; i++ ){
      a[ s[i].charCodeAt() - 'a'.charCodeAt() ]++;
  }

  var c = 0;
  for ( var i = 0; i < 26; i++ ){
      if ( a[i] % 2 == 1 ) c++;
      if ( c == 2 ) return false;
  }
    return true;
}




  exports.palindromeRearranging = palindromeRearranging;

})(typeof window === 'undefined' ? module.exports : window);

(function (exports) {
  'use strict';

  /*

You are given an array of integers. On each move you are allowed to 
increase exactly one of its element by one. 
Find the minimal number of moves required to 
obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.
[ 1, 1, 1 ] -> 3
[-1000, 0 , -2, 0 ] -> 5
[2,1,10,1] -> 12
[2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15] -> 13

*/

  function arrayChange( inputArray ) {
     var c=0;
    for(var i=0;i<inputArray.length-1;i++){
        if ( inputArray[i+1] <= inputArray[ i ]){
            var dif = inputArray[i] - inputArray[i+1] + 1;
            inputArray[i+1] += dif;
            c += dif;
        }
    }

    return c;
  }



  exports.arrayChange = arrayChange;

})(typeof window === 'undefined' ? module.exports : window);

(function (exports) {
  'use strict';

  /*
https://codefights.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

Two arrays are called similar if one can be obtained from another 
by swapping at most one pair of elements.

Given two arrays, check whether they are similar.

Example

For A = [1, 2, 3] and B = [1, 2, 3], the output should be
areSimilar(A, B) = true;
For A = [1, 2, 3] and B = [2, 1, 3], the output should be
areSimilar(A, B) = true;
For A = [1, 2, 2] and B = [2, 1, 1], the output should be
areSimilar(A, B) = false.

[1 2 3][3 1 2t]

*/

  function checkIguales( A, B ){
      for ( var i = 0; i < A.length; i++ ){
         if ( A[i] != B[i] ) return false;
      }
      return true;
  }

  function areSimilar1( A, B  ) {
    if ( checkIguales(A,B) ) return true ;

    for ( var i = 0; i < A.length; i++ ){
      for ( var j = i + 1; j < A.length; j++ ){
          var C = A.slice();
          var tmp = C[i];
          C[i] = C[j];
          C[j] = tmp;
          if ( checkIguales(B, C ) ) return true;
      }
    }
    return false;
  }


  function areSimilar2( A, B  ) {
     var c = 0;
     var x = [];
     for ( var i = 0; i < A.length; i++ ){
       if ( A[i] !== B[i] ){
         c++;
         x.push(A[i] + B[i]);
       }
       if ( c > 2) return false;
     }
     if ( c == 1 ) return false;
     if ( c == 2 ) return x[0] == x[1];
     return true;
  }


  exports.areSimilar1 = areSimilar1;
  exports.areSimilar2 = areSimilar2;

})(typeof window === 'undefined' ? module.exports : window);




