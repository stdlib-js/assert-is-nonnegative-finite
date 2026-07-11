"use strict";var r=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(c){throw (i=0, c)}};};var t=r(function(d,n){
var q=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,m=require('@stdlib/constants-float64-pinf/dist');function b(e){return q(e)&&e<m}n.exports=b
});var s=r(function(y,v){
var O=require('@stdlib/assert-is-nonnegative-number/dist').isObject,P=require('@stdlib/constants-float64-pinf/dist');function g(e){return O(e)&&e.valueOf()<P}v.exports=g
});var N=r(function(R,a){
var F=t(),f=s();function j(e){return F(e)||f(e)}a.exports=j
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=N(),p=t(),x=s();o(u,"isPrimitive",p);o(u,"isObject",x);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
