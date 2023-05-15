// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Analysis ../core/unitUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ../geometry/Point".split(" "),function(f,c,a,k,d,m,n,l,g){a=function(h){function e(b){b=h.call(this,b)||this;b.type="direct-line-measurement";b.startPoint=null;b.endPoint=null;b.unit=null;return b}f._inheritsLoose(e,h);e.prototype.clear=function(){this.endPoint=this.startPoint=
null};f._createClass(e,[{key:"requiredPropertiesForEditing",get:function(){return[this.startPoint,this.endPoint]}}]);return e}(a);c.__decorate([d.property({type:["direct-line-measurement"]})],a.prototype,"type",void 0);c.__decorate([d.property({type:g})],a.prototype,"startPoint",void 0);c.__decorate([d.property({type:g})],a.prototype,"endPoint",void 0);c.__decorate([d.property({type:k.measurementLengthUnits,value:null})],a.prototype,"unit",void 0);c.__decorate([d.property({readOnly:!0})],a.prototype,
"requiredPropertiesForEditing",null);return a=c.__decorate([l.subclass("esri.analysis.DirectLineMeasurementAnalysis")],a)});