// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../chunks/_rollupPluginBabelHelpers","../request"],function(k,l,d){function f(){f=l._asyncToGenerator(function*(a,b,g,h,e=null){if(null!==e){e=yield e.getToken();a=a+="?token\x3d"+e;if("get"===h.toLowerCase())return d(a,{responseType:"json",query:b});if(b)for(const c in b)a=a.includes("?")?a+"\x26":a+"?",a+=encodeURIComponent(c)+"\x3d"+encodeURIComponent(b[c]);return d(a,{method:"post",query:g,responseType:"json"})}if("get"===h.toLowerCase())return d(a,{responseType:"json",query:b});
if(b)for(const c in b)a=a.includes("?")?a+"\x26":a+"?",a+=encodeURIComponent(c)+"\x3d"+encodeURIComponent(b[c]);return yield d(a,{method:"post",responseType:"json",query:g})});return f.apply(this,arguments)}k.serviceRequest=function(a,b,g,h){return f.apply(this,arguments)};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});