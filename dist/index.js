"use strict";var r=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var t=r(function(d,u){
var N=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,q=require('@stdlib/assert-is-finite/dist').isPrimitive;function m(i){return N(i)&&q(i)}u.exports=m
});var s=r(function(y,v){
var b=require('@stdlib/assert-is-nonnegative-number/dist').isObject,O=require('@stdlib/assert-is-finite/dist').isObject;function g(i){return b(i)&&O(i)}v.exports=g
});var c=r(function(R,a){
var j=t(),F=s();function P(i){return j(i)||F(i)}a.exports=P
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=c(),p=t(),x=s();o(n,"isPrimitive",p);o(n,"isObject",x);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
