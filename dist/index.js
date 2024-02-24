"use strict";var r=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var t=r(function(I,u){
var c=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,q=require('@stdlib/constants-float64-pinf/dist');function m(i){return c(i)&&i<q}u.exports=m
});var s=r(function(d,v){
var b=require('@stdlib/assert-is-nonnegative-number/dist').isObject,P=require('@stdlib/constants-float64-pinf/dist');function g(i){return b(i)&&i<P}v.exports=g
});var N=r(function(y,a){
var F=t(),O=s();function j(i){return F(i)||O(i)}a.exports=j
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=N(),p=t(),x=s();o(n,"isPrimitive",p);o(n,"isObject",x);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
