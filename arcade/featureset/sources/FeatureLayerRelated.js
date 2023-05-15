// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../Graphic ../support/errorsupport ../support/FeatureSet ../support/IdSet ../support/shared ../../../rest/support/RelationshipQuery".split(" "),function(m,w,r,x,p,t,u){return function(v){function q(b){var a=v.call(this,b)||this;a.declaredClass="esri.arcade.featureset.sources.FeatureLayerRelated";a._findObjectId=-1;a._requestStandardised=!1;a._removeGeometry=!1;a._overrideFields=null;a.featureObjectId=null;b.spatialReference&&(a.spatialReference=
b.spatialReference);a._transparent=!0;a._maxProcessing=1E3;a._layer=b.layer;a._wset=null;a._findObjectId=b.objectId;a.featureObjectId=b.objectId;a.relationship=b.relationship;a._relatedLayer=b.relatedLayer;void 0!==b.outFields&&(a._overrideFields=b.outFields);void 0!==b.includeGeometry&&(a._removeGeometry=!1===b.includeGeometry);return a}m._inheritsLoose(q,v);var g=q.prototype;g._maxQueryRate=function(){return t.defaultMaxRecords};g.end=function(){return this._layer};g.optimisePagingFeatureQueries=
function(){};g.loadImpl=function(){var b=m._asyncToGenerator(function*(){yield Promise.all([this._layer.load(),this._relatedLayer?.load()]);this._initialiseFeatureSet();return this});return function(){return b.apply(this,arguments)}}();g.nativeCapabilities=function(){return this._relatedLayer.nativeCapabilities()};g._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);this.geometryType=this._relatedLayer.geometryType;this.fields=this._relatedLayer.fields.slice(0);
if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{var b=[];const a=[];for(const d of this.fields)if("oid"===d.type)b.push(d),a.push(d.name);else for(const e of this._overrideFields)if(e.toLowerCase()===d.name.toLowerCase()){b.push(d);a.push(d.name);break}this.fields=b;this._overrideFields=a}if(b=this._layer.nativeCapabilities())this._databaseType=b.databaseType,this._requestStandardised=b.requestStandardised;this.objectIdField=
this._relatedLayer.objectIdField;this.globalIdField=this._relatedLayer.globalIdField;this.hasM=this._relatedLayer.supportsM;this.hasZ=this._relatedLayer.supportsZ;this.typeIdField=this._relatedLayer.typeIdField;this.types=this._relatedLayer.types};g.databaseType=function(){var b=m._asyncToGenerator(function*(){yield this._relatedLayer.databaseType();return this._databaseType=this._relatedLayer._databaseType});return function(){return b.apply(this,arguments)}}();g.isTable=function(){return this._relatedLayer.isTable()};
g._isInFeatureSet=function(){return t.IdState.InFeatureSet};g._candidateIdTransform=function(b){return b};g._getSet=function(){var b=m._asyncToGenerator(function*(a){return null===this._wset?(yield this._ensureLoaded(),this._wset=a=yield this._getFilteredSet("",null,null,null,a)):this._wset});return function(a){return b.apply(this,arguments)}}();g._changeFeature=function(b){const a={};for(const d of this.fields)a[d.name]=b.attributes[d.name];return new w({geometry:!0===this._removeGeometry?null:b.geometry,
attributes:a})};g._getFilteredSet=function(){var b=m._asyncToGenerator(function*(a,d,e,c,h){yield this.databaseType();if(this.isTable()&&d&&null!==a&&""!==a)return new p([],[],!0,null);var f=this._layer.nativeCapabilities();if(!1===f.canQueryRelated)return new p([],[],!0,null);if(f.capabilities?.queryRelated&&f.capabilities.queryRelated.supportsPagination)return this._getFilteredSetUsingPaging(a,d,e,c,h);var k="";let l=!1;null!==c&&f.capabilities&&f.capabilities.queryRelated&&!0===f.capabilities.queryRelated.supportsOrderBy&&
(k=c.constructClause(),l=!0);c=new u;c.objectIds=[this._findObjectId];var n=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._relatedLayer.fields?this._relatedLayer.fields.map(y=>y.name):["*"]);c.outFields=n;c.relationshipId=this.relationship.id;c.where="1\x3d1";n=!0;!0===this._removeGeometry&&(n=!1);c.returnGeometry=n;this._requestStandardised&&(c.sqlFormat="standard");c.outSpatialReference=this.spatialReference;c.orderByFields=""!==k?k.split(","):null;f=yield f.source.queryRelatedFeatures(c);
this._checkCancelled(h);f=f[this._findObjectId]?f[this._findObjectId].features:[];h=[];for(k=0;k<f.length;k++)this._featureCache[f[k].attributes[this._relatedLayer.objectIdField]]=f[k],h.push(f[k].attributes[this._relatedLayer.objectIdField]);a=d&&null!==a&&""!==a;e=null!==e&&void 0!==e;return new p(a||e?h:[],a||e?[]:h,l,null)});return function(a,d,e,c,h){return b.apply(this,arguments)}}();g._fieldsIncludingObjectId=function(b){if(null===b)return[this.objectIdField];b=b.slice(0);if(b.includes("*"))return b;
let a=!1;for(const d of b)if(d.toUpperCase()===this.objectIdField.toUpperCase()){a=!0;break}!1===a&&b.push(this.objectIdField);return b};g._getFilteredSetUsingPaging=function(){var b=m._asyncToGenerator(function*(a,d,e,c,h){let f="",k=!1;var l=this._layer.nativeCapabilities();null!==c&&l&&l.capabilities?.queryRelated&&!0===l.capabilities.queryRelated.supportsOrderBy&&(f=c.constructClause(),k=!0);yield this.databaseType();c=this._maxQueryRate();l=l.capabilities?.query.maxRecordCount;null!=l&&l<c&&
(c=l);a=d&&null!==a&&""!==a;e=null!==e&&void 0!==e;d=null;d=!0;!0===this._removeGeometry&&(d=!1);l=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._relatedLayer.fields?this._relatedLayer.fields.map(n=>n.name):["*"]);d=new p(a||e?["GETPAGES"]:[],a||e?[]:["GETPAGES"],k,{outFields:l.join(","),resultRecordCount:c,resultOffset:0,objectIds:[this._findObjectId],where:"1\x3d1",orderByFields:f,returnGeometry:d,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,
fullyResolved:!1}});yield this._expandPagedSet(d,c,0,0,h);return d});return function(a,d,e,c,h){return b.apply(this,arguments)}}();g._expandPagedSet=function(b,a,d,e,c){return this._expandPagedSetFeatureSet(b,a,d,e,c)};g._clonePageDefinition=function(b){return null===b?null:!0!==b.groupbypage?{groupbypage:!1,outFields:b.outFields,resultRecordCount:b.resultRecordCount,resultOffset:b.resultOffset,where:b.where,objectIds:b.objectIds,orderByFields:b.orderByFields,returnGeometry:b.returnGeometry,returnIdsOnly:b.returnIdsOnly,
internal:b.internal}:{groupbypage:!0,outFields:b.outFields,resultRecordCount:b.resultRecordCount,useOIDpagination:b.useOIDpagination,generatedOid:b.generatedOid,groupByFieldsForStatistics:b.groupByFieldsForStatistics,resultOffset:b.resultOffset,outStatistics:b.outStatistics,geometry:b.geometry,where:b.where,objectIds:b.objectIds,orderByFields:b.orderByFields,returnGeometry:b.returnGeometry,returnIdsOnly:b.returnIdsOnly,internal:b.internal}};g._getPhysicalPage=function(){var b=m._asyncToGenerator(function*(a,
d,e){d=a.pagesDefinition.internal.lastRetrieved;var c=a.pagesDefinition.internal.lastPage,h=this._layer.nativeCapabilities();const f=new u;!0===this._requestStandardised&&(f.sqlFormat="standard");f.relationshipId=this.relationship.id;f.objectIds=a.pagesDefinition.objectIds;f.resultOffset=a.pagesDefinition.internal.lastPage;f.resultRecordCount=a.pagesDefinition.resultRecordCount;f.outFields=a.pagesDefinition.outFields.split(",");f.where=a.pagesDefinition.where;f.orderByFields=""!==a.pagesDefinition.orderByFields?
a.pagesDefinition.orderByFields.split(","):null;f.returnGeometry=a.pagesDefinition.returnGeometry;f.outSpatialReference=this.spatialReference;h=yield h.source.queryRelatedFeatures(f);this._checkCancelled(e);if(a.pagesDefinition.internal.lastPage!==c)return 0;e=h[this._findObjectId]?h[this._findObjectId].features:[];for(c=0;c<e.length;c++)a.pagesDefinition.internal.set[d+c]=e[c].attributes[this._relatedLayer.objectIdField];for(c=0;c<e.length;c++)this._featureCache[e[c].attributes[this._relatedLayer.objectIdField]]=
e[c];h=h[this._findObjectId]?!1===h[this._findObjectId].exceededTransferLimit:!0;e.length!==a.pagesDefinition.resultRecordCount&&h&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=d+e.length;a.pagesDefinition.internal.lastPage+=a.pagesDefinition.resultRecordCount;return e.length});return function(a,d,e){return b.apply(this,arguments)}}();g._getFeatures=function(){var b=m._asyncToGenerator(function*(a,d,e,c){const h=[];-1!==d&&void 0===this._featureCache[d]&&
h.push(d);var f=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,f))return yield this._expandPagedSet(a,f,0,0,c),this._getFeatures(a,d,e,c);c=0;for(f=a._lastFetchedIndex;f<a._known.length;f++){c++;c<=e&&(a._lastFetchedIndex+=1);if("GETPAGES"!==a._known[f]&&void 0===this._featureCache[a._known[f]]&&(a._known[f]!==d&&h.push(a._known[f]),h.length>e))break;if(c>=e&&0===h.length)break}if(0===h.length)return"success";throw new r.FeatureSetError(r.FeatureSetErrorCodes.MissingFeatures);});
return function(a,d,e,c){return b.apply(this,arguments)}}();g._refineSetBlock=function(){var b=m._asyncToGenerator(function*(a,d,e){return a});return function(a,d,e){return b.apply(this,arguments)}}();g._stat=function(){var b=m._asyncToGenerator(function*(a,d,e,c,h,f,k){return{calculated:!1}});return function(a,d,e,c,h,f,k){return b.apply(this,arguments)}}();g._canDoAggregates=function(){var b=m._asyncToGenerator(function*(a,d,e,c,h){return!1});return function(a,d,e,c,h){return b.apply(this,arguments)}}();
g.relationshipMetaData=function(){return this._relatedLayer.relationshipMetaData()};g.serviceUrl=function(){return this._relatedLayer.serviceUrl()};g.queryAttachments=function(b,a,d,e,c){return this._relatedLayer.queryAttachments(b,a,d,e,c)};g.getFeatureByObjectId=function(b,a){return this._relatedLayer.getFeatureByObjectId(b,a)};g.getOwningSystemUrl=function(){return this._relatedLayer.getOwningSystemUrl()};g.getIdentityUser=function(){return this._relatedLayer.getIdentityUser()};g.getDataSourceFeatureSet=
function(){return this._relatedLayer};m._createClass(q,[{key:"gdbVersion",get:function(){return this._relatedLayer.gdbVersion}},{key:"preferredTimeReference",get:function(){return this._relatedLayer?.preferredTimeReference??null}},{key:"dateFieldsTimeReference",get:function(){return this._relatedLayer?.dateFieldsTimeReference??null}},{key:"datesInUnknownTimezone",get:function(){return this._relatedLayer?.datesInUnknownTimezone}},{key:"editFieldsInfo",get:function(){return this._relatedLayer?.editFieldsInfo??
null}},{key:"timeInfo",get:function(){return this._relatedLayer?.timeInfo??null}}]);return q}(x)});