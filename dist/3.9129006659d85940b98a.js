(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{HzLF:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var o=r("fXoL"),a=r("tk/3"),n=r("2Vo4"),i=r("nS6G"),p=r("AytR"),s=(new o.v("API_BASE_URL"),function(){function t(t){this.http=t,this.REST_API_SERVER=i.a.remoteServiceBaseUrl,this.$isDataLoaded=new o.q,this.data=new n.a(Response)}return t.prototype.setUserWithLocations=function(t){this.data.next(t)},t.prototype.getUserWithLocations=function(){return this.data.asObservable()},t.prototype.SubmitForReview=function(t){var e=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(p.a.apiUrl+"/api/SecUser/SubmitForReview?id="+t,{headers:e})},t.prototype.Approval=function(t){var e=JSON.stringify(t),r=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token")),Accept:"text/plain"});return this.http.post(p.a.apiUrl+"/api/SecUser/Approval",e,{headers:r})},t.prototype.create=function(t){var e=JSON.stringify(t),r=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token")),Accept:"text/plain"});return this.http.post(p.a.apiUrl+"/api/SecUser/CreateSecUser",e,{headers:r})},t.prototype.Get=function(t,e){var r=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(p.a.apiUrl+"/api/SecUser/GetPagedUser?id="+t,e,{headers:r})},t.prototype.GetLocationsById=function(t){var e=new a.f({"Content-Type":"application/json"});return this.http.get(p.a.apiUrl+"/api/SecUser/GetLocationById?id="+t,{headers:e})},t.prototype.getUserType=function(){var t=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecRole\u200b/GetUserType",{headers:t})},t.prototype.getroles=function(){var t=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecRole/GetUserType",{headers:t})},t.prototype.getlocations=function(){var t=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/Location",{headers:t})},t.prototype.getdepartments=function(){var t=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/Department",{headers:t})},t.prototype.getCities=function(){var t=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecRole/GetCities",{headers:t})},t.prototype.getCountries=function(){var t=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecRole/GetCountries",{headers:t})},t.prototype.getClient=function(){var t=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/TenantClient/client",{headers:t})},t.prototype.getPrefix=function(){var t=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecRole/GetPrefix",{headers:t})},t.prototype.getState=function(){var t=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecRole/GetState",{headers:t})},t.prototype.getStateByCountryId=function(t){var e=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/City/GetState?id="+t,{headers:e})},t.prototype.getCitiesByState=function(t){var e=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/City/GetCities?id="+t,{headers:e})},t.prototype.UserCreateWithFiles=function(t){return this.http.post(p.a.apiUrl+"/api/SecUser/CreateUserWithFiles",t)},t.prototype.GetUserbyId=function(t){return this.http.get(p.a.apiUrl+"/api/SecUser/GetUserDataById?id="+t)},t.prototype.getActiveStatus=function(){var t=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecRole/GetActiveStatus",{headers:t})},t.prototype.getAllAgency=function(){var t=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/ProjectAmountReports/getAllAgency",{headers:t})},t.prototype.getAllBuildings=function(){var t=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecUser/GetBuldings",{headers:t})},t.prototype.getAllFloors=function(t){var e=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecUser/GetFloors?id="+t,{headers:e})},t.prototype.getAllFlats=function(t){var e=new a.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecUser/GetFlats?id="+t,{headers:e})},t.prototype.getAllUsers=function(t){var e=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(p.a.apiUrl+"/api/SecUser/GetAllUsers?id="+t,{headers:e})},t.prototype.Deleteuser=function(t){var e=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(p.a.apiUrl+"/api/SecUser/UserDeleteById?id="+t,{headers:e})},t.prototype.UCreate=function(t){return new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}),this.http.post(p.a.apiUrl+"/api/SecUser/UCreate",t)},t.prototype.CheckPermission=function(t){var e=new a.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(p.a.apiUrl+"/api/Authenticate/CheckPermission?id="+t,{headers:e})},t.\u0275fac=function(e){return new(e||t)(o.ic(a.b))},t.\u0275prov=o.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}())},JFHP:function(t,e,r){"use strict";r.d(e,"b",function(){return o}),r.d(e,"a",function(){return a}),r.d(e,"c",function(){return n});var o=function(t){return t.SORT="sort",t.FILTER="filters",t.LIMIT="pageSize",t.OFFSET="page",t}({}),a=function(t){return t.EQUAL="==",t.NOTEQUAL="!=",t.CONTAINS="@=",t.GREATER_THEN=">",t.LESS_THEN="<",t.GREATER_EQUAL_TO=">=",t.LESS_EQUAL_TO=">=",t.START_WITH="_=",t.END_WITH="_-=",t}({}),n=function(t){return t.ASC="",t.DECS="-",t}({})},MYBO:function(t,e,r){"use strict";r.d(e,"a",function(){return p});var o=r("tk/3"),a=r("fXoL"),n=r("nS6G"),i=new a.v("API_BASE_URL"),p=function(){function t(t,e){this.http=t,this.REST_API_SERVER=n.a.remoteServiceBaseUrl,this.$isDataLoaded=new a.q,this.baseUrl=e||""}return t.prototype.create=function(t){var e=JSON.stringify(t),r={headers:new o.f({"Content-Type":"application/json",Accept:"text/plain"})};return this.http.post(this.REST_API_SERVER+"/api/Location",e,r)},t.prototype.getlocations=function(){var t=new o.f({"Content-Type":"application/json"});return this.http.get(this.REST_API_SERVER+"/api\u200b/Location\u200b",{headers:t})},t.\u0275fac=function(e){return new(e||t)(a.ic(o.b),a.ic(i,8))},t.\u0275prov=a.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},QBik:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var o=r("fXoL"),a=r("2Vo4"),n=(new o.v("API_BASE_URL"),function(){function t(){this.data=new a.a(Response)}return t.prototype.getSecRoleForm=function(){return this.data.next(JSON.parse(localStorage.getItem("secRoleForm"))),this.data.asObservable()},t.\u0275prov=o.Ub({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}())},SZby:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var o=function(){function t(t){if(t)for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])}return t.prototype.init=function(t){t&&(this.Id=t.Id,this.UserName=t.UserName,this.FullName=t.FullName,this.Email=t.Email,this.Password=t.Password,this.ConfirmPassword=t.ConfirmPassword,this.UserTypeId=t.UserTypeId,this.Designation=t.Designation,this.RoleId=t.RoleId,this.SecurityKey=t.SecurityKey,this.DepartmentId=t.DepartmentId,this.ApprovelStatusId=t.ApprovalStatusId,this.Remarks=t.Remarks,this.AuthorizedBy=t.AuthorizedBy)},t.fromJS=function(e){e="object"==typeof e?e:{};var r=new t;return r.init(e),r},t.prototype.toJSON=function(t){return(t="object"==typeof t?t:{}).Id=this.Id,t.UserName=this.UserName,t.FullName=this.FullName,t.Email=this.Email,t.Password=this.Password,t.ConfirmPassword=this.ConfirmPassword,t.UserTypeId=this.UserTypeId,t.Designation=this.Designation,t.RoleId=this.RoleId,t.SecurityKey=this.SecurityKey,t.DepartmentId=this.DepartmentId,t.ApprovelStatusId=this.ApprovelStatusId,t.Remarks=this.Remarks,t.AuthorizedBy=this.AuthorizedBy,t},t.prototype.clone=function(){var e=this.toJSON(),r=new t;return r.init(e),r},t}()},SreE:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var o=r("JFHP"),a=function(){return(a=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},n=+localStorage.getItem("roleId"),i=function(t){var e;t=null==t?void 0:t.map(function(t){var e,r=a({},t);return r.valid=!((null===(e=r.auth)||void 0===e?void 0:e.length)>0)||r.auth.includes(n),r}).filter(function(t){return t.valid});var r,i=[],p=((e={})[o.b.SORT]=[],e[o.b.FILTER]=[],e[o.b.LIMIT]=[],e[o.b.OFFSET]=[],e);return t&&(null==t?void 0:t.length)>0&&(null==t||t.forEach(function(t){switch(t.method){case o.b.SORT:p[o.b.SORT].push(""+t.sortOperator+t.QueryParam);break;case o.b.FILTER:p[o.b.FILTER].push(""+t.QueryParam+t.filterOperator+t.value);break;case o.b.LIMIT:p[o.b.LIMIT].push(""+t.value);break;case o.b.OFFSET:p[o.b.OFFSET].push(""+t.value)}})),p.filters.length>0&&i.push(o.b.FILTER+"="+p[o.b.FILTER].join(",")),p.pageSize.length>0&&i.push(o.b.LIMIT+"="+p[o.b.LIMIT].join(",")),p.page.length>0&&i.push(o.b.OFFSET+"="+p[o.b.OFFSET].join(",")),p.sort.length>0&&i.push(o.b.SORT+"="+p[o.b.SORT].join(",")),(r=i.join("&"))?"?"+r:r}},WgKG:function(t,e,r){"use strict";r.d(e,"a",function(){return p});var o=r("fXoL"),a=r("nS6G"),n=r("AytR"),i=r("tk/3"),p=(new o.v("API_BASE_URL"),function(){function t(t){this.http=t,this.REST_API_SERVER=a.a.remoteServiceBaseUrl,this.$isDataLoaded=new o.q}return t.prototype.getlocations=function(){return this.http.get(n.a.apiUrl+"/api/Department")},t.prototype.getdepartments=function(){return this.http.get(n.a.apiUrl+"/api/Department/GetDepartments")},t.\u0275fac=function(e){return new(e||t)(o.ic(i.b))},t.\u0275prov=o.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}())},bJ2i:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var o=r("tk/3"),a=r("fXoL"),n=r("nS6G"),i=r("2Vo4"),p=new a.v("API_BASE_URL"),s=function(){function t(t,e){this.http=t,this.REST_API_SERVER=n.a.remoteServiceBaseUrl,this.$isDataLoaded=new a.q,this.data=new i.a(Response),this.baseUrl=e||""}return t.prototype.setRolesWithPermission=function(t){this.data.next(t)},t.prototype.getRolesWithPermission=function(){return this.data.asObservable()},t.prototype.create=function(t){var e=JSON.stringify(t),r={headers:new o.f({"Content-Type":"application/json",Accept:"text/plain"})};return this.http.post(this.REST_API_SERVER+"/api/SecRole/CreatePermissions",e,r)},t.prototype.update=function(t){var e=JSON.stringify(t),r={headers:new o.f({"Content-Type":"application/json",Accept:"text/plain"})};return this.http.put(this.REST_API_SERVER+"/api/SecRole/UpdateSecRoleForm",e,r)},t.prototype.GetPagedRoles=function(t){var e=new o.f({"Content-Type":"application/json"});return this.http.post(this.REST_API_SERVER+"/api/SecRole/GetPagedRoles",t,{headers:e})},t.prototype.getroles=function(t){var e=new o.f({"Content-Type":"application/json"});return this.http.get(this.REST_API_SERVER+"/api/SecRole/GetSecRole?id="+t,{headers:e})},t.prototype.getUserType=function(t){return this.http.get(this.REST_API_SERVER+"/api/SecRole/GetUserType?id="+t)},t.prototype.Get=function(t,e){var r=new o.f({"Content-Type":"application/json"});return this.http.get(this.REST_API_SERVER+"/api/SecRole?pageNumber="+t+"&pageSize="+e,{headers:r})},t.prototype.GetAll=function(t,e){var r=new o.f({"Content-Type":"application/json"});return this.http.get(this.REST_API_SERVER+"/api/SecRole/GetAllSecForm?pageNumber="+t+"&pageSize="+e,{headers:r})},t.prototype.GetAllPermissions=function(){return this.http.get(this.REST_API_SERVER+"/api/SecRole/GetSecRolePermission")},t.prototype.GetPermissionsById=function(t){var e=new o.f({"Content-Type":"application/json"});return this.http.get(this.REST_API_SERVER+"/api/SecRole/GetById?id="+t,{headers:e})},t.prototype.createSecRoleForm=function(t){var e=JSON.stringify(t),r={headers:new o.f({"Content-Type":"application/json",Accept:"text/plain"})};return this.http.post(this.REST_API_SERVER+"/api/SecRole/CreatePermissions",e,r)},t.prototype.authorizeRole=function(t,e){var r=new o.f({"Content-Type":"application/json"});return this.http.post(this.REST_API_SERVER+"/api/SecRole/Authorize?id="+t+"&Remarks="+e,{headers:r})},t.prototype.rejectRole=function(t,e){var r=new o.f({"Content-Type":"application/json"});return this.http.post(this.REST_API_SERVER+"/api/SecRole/Reject?id="+t+"&Remarks="+e,{headers:r})},t.\u0275fac=function(e){return new(e||t)(a.ic(o.b),a.ic(p,8))},t.\u0275prov=a.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},cxbk:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var o={production:!0,hmr:!1,appConfig:"appconfig.production.json",apiUrl:"https://activofms-backend.azurewebsites.net"}},eK1Y:function(t,e,r){"use strict";r.d(e,"a",function(){return p});var o=r("tk/3"),a=r("fXoL"),n=r("nS6G"),i=r("cxbk"),p=(new a.v("API_BASE_URL"),function(){function t(t){this.http=t,this.REST_API_SERVER=n.a.remoteServiceBaseUrl,this.$isDataLoaded=new a.q}return t.prototype.downloadFile=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/DownloadAcademic?id="+t,{responseType:"blob"})},t.prototype.downloadProfessionaldocuments=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/DownloadProfessional?id="+t,{responseType:"blob"})},t.prototype.downloadCPDdocuments=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/DownloadCPD?id="+t,{responseType:"blob"})},t.prototype.DownloadConfidentially=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/DownloadConfidentially?id="+t,{responseType:"blob"})},t.prototype.DownloadContract=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/DownloadContractFile?id="+t,{responseType:"blob"})},t.prototype.DownloadImage=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/DownloadImage?id="+t,{responseType:"blob"})},t.prototype.CreateUserStandard=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/CreateUserStandard",t,{headers:e})},t.prototype.GetUserStandardById=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/GetUserStandardById?id="+t)},t.prototype.Get=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserStandard",t,{headers:e})},t.prototype.Delete=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserStandardDeleteById?id="+t,{headers:e})},t.prototype.getAllAuditorTypes=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(i.a.apiUrl+"/api/SecUser/GetAllAuditorType?id="+t,{headers:e})},t.prototype.getAllCourseTypes=function(){var t=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(i.a.apiUrl+"/api/SecUser/GetAllCourseType",{headers:t})},t.prototype.getAllApprovalStatus=function(){var t=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(i.a.apiUrl+"/api/SecUser/GetAllApprovalStatus",{headers:t})},t.prototype.GetAllContractType=function(){var t=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(i.a.apiUrl+"/api/SecUser/GetAllContractType",{headers:t})},t.prototype.getAllStandard=function(){var t=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(i.a.apiUrl+"/api/SecUser/GetAllCertification",{headers:t})},t.prototype.GetAllCertificationBody=function(){var t=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(i.a.apiUrl+"/api/SecUser/GetAllCertificationBody",{headers:t})},t.prototype.GetAllAuditType=function(){var t=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(i.a.apiUrl+"/api/SecUser/GetAllAuditType",{headers:t})},t.prototype.getAllEACode=function(){var t=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(i.a.apiUrl+"/api/SecUser/GetAllEACode",{headers:t})},t.prototype.getAllNaceCode=function(){var t=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.get(i.a.apiUrl+"/api/SecUser/GetAllNaceCode",{headers:t})},t.prototype.CreateUserDeclaration=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/CreateUserDeclaration",t,{headers:e})},t.prototype.GetUserDeclarationById=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/GetUserDeclarationById?id="+t)},t.prototype.GetUserDeclaration=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserDeclaration",t,{headers:e})},t.prototype.DeleteUserDeclaration=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserDeclarationById?id="+t,{headers:e})},t.prototype.UserAcademicCreateWithFile=function(t){var e=new o.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserAcademicCreateWithFile",t,{headers:e})},t.prototype.GetUserAcademicBYId=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/GetUserAcademicBYId?id="+t)},t.prototype.GetPagedUserAcademic=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserAcademic",t,{headers:e})},t.prototype.UserAcademicDeleteById=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserAcademicDeleteById?id="+t,{headers:e})},t.prototype.UserProfessionalCreateWithFile=function(t){var e=new o.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserProsessionalCreateWithFile",t,{headers:e})},t.prototype.GetUserProfessionalBYId=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/GetUserProfessionalBYId?id="+t)},t.prototype.GetPagedUserProfessional=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserProfessional",t,{headers:e})},t.prototype.UserProfessionalDeleteById=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserProfessionalDeleteById?id="+t,{headers:e})},t.prototype.CreateUserEmployment=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserEmploymentCreate",t,{headers:e})},t.prototype.GetUserEmploymentById=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/GetUserEmploymentBYId?id="+t)},t.prototype.GetUserEmployment=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserEmployment",t,{headers:e})},t.prototype.DeleteUserEmployment=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserEmploymentDeleteById?id="+t,{headers:e})},t.prototype.UserCPDCreateWithFile=function(t){var e=new o.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserCPDCreate",t,{headers:e})},t.prototype.GetUserCPDBYId=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/GetUserCPDBYId?id="+t)},t.prototype.GetPagedUserCPD=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserCPD",t,{headers:e})},t.prototype.UserCPDDeleteById=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserCPDDeleteById?id="+t,{headers:e})},t.prototype.CreateUserConsultancy=function(t){var e=JSON.stringify(t),r=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token")),Accept:"text/plain"});return this.http.post(i.a.apiUrl+"/api/SecUser/UserConsultancyCreate",e,{headers:r})},t.prototype.GetUserConsultancyById=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/GetUserConsultancyBYId?id="+t)},t.prototype.GetUserConsultancy=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserConsultancy",t,{headers:e})},t.prototype.DeleteUserConsultancy=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserConsultancyDeleteById?id="+t,{headers:e})},t.prototype.GetUserRemarks=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserRemarks",t,{headers:e})},t.prototype.UserAuditorNaceCreate=function(t){var e=JSON.stringify(t),r=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token")),Accept:"text/plain"});return this.http.post(i.a.apiUrl+"/api/SecUser/UserAuditorNaceCreate",e,{headers:r})},t.prototype.GetUserAuditorNaceBYId=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/GetUserAuditorNaceBYId?id="+t)},t.prototype.GetPagedUserAuditorNace=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserAuditorNace",t,{headers:e})},t.prototype.UserAuditorNaceDeleteById=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserAuditorNaceDeleteById?id="+t,{headers:e})},t.prototype.UserAuditCreate=function(t){var e=JSON.stringify(t),r=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token")),Accept:"text/plain"});return this.http.post(i.a.apiUrl+"/api/SecUser/UserAuditCreate",e,{headers:r})},t.prototype.GetUserAuditBYId=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/GetUserAuditBYId?id="+t)},t.prototype.GetPagedUserAudit=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/GetPagedUserAudit",t,{headers:e})},t.prototype.UserAuditDeleteById=function(t){var e=new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserAuditDeleteById?id="+t,{headers:e})},t.prototype.downloadFileStandard=function(t){return this.http.get(i.a.apiUrl+"/api/SecUser/DownloadStandards?id="+t,{responseType:"blob"})},t.prototype.create=function(t){var e=new o.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/UserStandardsCreateWithFile",t,{headers:e})},t.prototype.SubmitForReviewStatus=function(t){var e=new o.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/SubmitForReviewStatus?id="+t,{headers:e})},t.prototype.AuditorNaceSubmitForReviewStatus=function(t){var e=new o.f({Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))});return this.http.post(i.a.apiUrl+"/api/SecUser/AuditorNaceSubmitForReviewStatus?id="+t,{headers:e})},t.prototype.ApprovedUserStandard=function(t){return new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}),this.http.post(i.a.apiUrl+"/api/SecUser/StandardApproval",t)},t.prototype.ApprovedUserAuditor=function(t){return new o.f({"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}),this.http.post(i.a.apiUrl+"/api/SecUser/AuditorNaceApproval",t)},t.\u0275fac=function(e){return new(e||t)(a.ic(o.b))},t.\u0275prov=a.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}())},qrl3:function(t,e,r){"use strict";r.d(e,"a",function(){return p});var o=r("AytR"),a=r("SreE"),n=r("fXoL"),i=r("tk/3"),p=function(){function t(t){this.http=t,this.URLTenantBuilding=o.a.apiUrl+"/api/TenantBuilding",this.Building=this.URLTenantBuilding+"/building",this.Floor=this.URLTenantBuilding+"/floor",this.FloorType=this.URLTenantBuilding+"/floorType",this.Flat=this.URLTenantBuilding+"/flat",this.ParkingSlot=this.URLTenantBuilding+"/parkingSlot"}return t.prototype.GetAllBuildings=function(t){var e=Object(a.a)(t);return this.http.get(""+this.Building+e).toPromise()},t.prototype.GetBuildingById=function(t){return this.http.get(this.Building+"/"+t).toPromise()},t.prototype.CreateBuilding=function(t){return this.http.post(""+this.Building,t).toPromise()},t.prototype.UpdateBuilding=function(t,e){return this.http.patch(this.Building+"/"+t,e).toPromise()},t.prototype.GetAllFloor=function(t){var e=Object(a.a)(t);return this.http.get(""+this.Floor+e).toPromise()},t.prototype.GetFloorById=function(t){return this.http.get(this.Floor+"/"+t).toPromise()},t.prototype.CreateFloor=function(t){return this.http.post(""+this.Floor,t).toPromise()},t.prototype.UpdateFloor=function(t,e){return this.http.patch(this.Floor+"/"+t,e).toPromise()},t.prototype.GetAllFloorType=function(t){var e=Object(a.a)(t);return this.http.get(""+this.FloorType+e).toPromise()},t.prototype.GetFloorTypeById=function(t){return this.http.get(this.FloorType+"/"+t).toPromise()},t.prototype.CreateFloorType=function(t){return this.http.post(""+this.FloorType,t).toPromise()},t.prototype.UpdateFloorType=function(t,e){return this.http.patch(this.FloorType+"/"+t,e).toPromise()},t.prototype.GetAllFlat=function(t){var e=Object(a.a)(t);return this.http.get(""+this.Flat+e).toPromise()},t.prototype.GetFlatById=function(t){return this.http.get(this.Flat+"/"+t).toPromise()},t.prototype.CreateFlat=function(t){return this.http.post(""+this.Flat,t).toPromise()},t.prototype.UpdateFlats=function(t,e){return this.http.patch(this.Flat+"/"+t,e).toPromise()},t.prototype.GetAllParkingSlot=function(t){var e=Object(a.a)(t);return this.http.get(""+this.ParkingSlot+e).toPromise()},t.prototype.GetParkingSlotById=function(t){return this.http.get(this.ParkingSlot+"/"+t).toPromise()},t.prototype.CreateParkingSlot=function(t){return this.http.post(""+this.ParkingSlot,t).toPromise()},t.prototype.UpdateParkingSlot=function(t,e){return this.http.patch(this.ParkingSlot+"/"+t,e).toPromise()},t.\u0275fac=function(e){return new(e||t)(n.ic(i.b))},t.\u0275prov=n.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);