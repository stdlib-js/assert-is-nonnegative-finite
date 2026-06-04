"use strict";var r=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var t=r(function(I,n){
var c=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,q=require('@stdlib/constants-float64-pinf/dist');function m(e){return c(e)&&e<q}n.exports=m
});var s=r(function(d,v){
var b=require('@stdlib/assert-is-nonnegative-number/dist').isObject,O=require('@stdlib/constants-float64-pinf/dist');function P(e){return b(e)&&e.valueOf()<O}v.exports=P
});var N=r(function(y,a){
var g=t(),F=s();function f(e){return g(e)||F(e)}a.exports=f
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=N(),j=t(),p=s();o(u,"isPrimitive",j);o(u,"isObject",p);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
