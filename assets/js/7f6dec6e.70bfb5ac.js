"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Access Control Provider"},c=void 0,l={unversionedId:"authorization/access-control-provider/index",id:"authorization/access-control-provider/index",title:"Access Control Provider",description:"Access control is a broad topic with lots of advanced solutions that provide different sets of features.",source:"@site/docs/authorization/access-control-provider/index.md",sourceDirName:"authorization/access-control-provider",slug:"/authorization/access-control-provider/",permalink:"/docs/authorization/access-control-provider/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authorization/access-control-provider/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1704282135,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"Access Control Provider"},sidebar:"mainSidebar",previous:{title:"OTP Login",permalink:"/docs/examples/auth-provider/otpLogin"},next:{title:"<CanAccess />",permalink:"/docs/authorization/components/can-access/"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Meta Access",id:"meta-access",level:3},{value:"Using <code>reason</code> property",id:"using-reason-property",level:3},{value:"Hooks and Components",id:"hooks-and-components",level:2},{value:"useCan",id:"usecan",level:3},{value:"<code>&lt;CanAccess /&gt;</code>",id:"canaccess-",level:3},{value:"Performance",id:"performance",level:2},{value:"List of Default Access Control Points",id:"list-of-default-access-control-points",level:2},{value:"Sider",id:"sider",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Examples",id:"examples",level:2}],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const f={toc:u};function k(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Access control is a broad topic with lots of advanced solutions that provide different sets of features."),(0,a.kt)("p",null,"Refine provides an agnostic API via the ",(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to manage access control throughout your app, which allows you to integrate different methods, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"RBAC"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ABAC"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ACL"),", etc., and libraries, such as ",(0,a.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,a.kt)("a",{parentName:"p",href:"https://casl.js.org/v5/en/"},"CASL"),", ",(0,a.kt)("a",{parentName:"p",href:"https://cerbos.dev/"},"Cerbos")," and ",(0,a.kt)("a",{parentName:"p",href:"https://onury.io/accesscontrol/"},"AccessControl.js"),"."),(0,a.kt)("p",null,"To check if a desired access will be granted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," should at least have an asynchronous method named ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," with the following interface:"),(0,a.kt)("admonition",{title:"Interface References",type:"simple"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/interface-references#canparams"},(0,a.kt)("inlineCode",{parentName:"a"},"CanParams")),": Arguments for the ",(0,a.kt)("inlineCode",{parentName:"li"},"can")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/interface-references#canresponse"},(0,a.kt)("inlineCode",{parentName:"a"},"CanResponse")),": Return type of the ",(0,a.kt)("inlineCode",{parentName:"li"},"can")," method."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IAccessControlContext {\n  can?: ({ resource, action, params }: CanParams) => Promise<CanResponse>;\n  options?: {\n    buttons?: {\n      enableAccessControl?: boolean;\n      hideIfUnauthorized?: boolean;\n    };\n  };\n}\n\nconst accessControlProvider: IAccessControlContext = {\n  can: async ({ resource, action, params }: CanParams): Promise<CanResponse> => {\n    return { can: true };\n  },\n  options: {\n    buttons: {\n      enableAccessControl: true,\n      hideIfUnauthorized: false,\n    },\n  },\n};\n")),(0,a.kt)("p",null,"It's possible to globally configure buttons' behavior by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),".\nYou can still change the behavior of the buttons independently, however, if no configuration is found, buttons will fallback to configuration defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"options.buttons"),".\nBy default, ",(0,a.kt)("inlineCode",{parentName:"p"},"enableAccessControl")," is ",(0,a.kt)("strong",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," is ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => {\n  return (\n    <Refine\n      // other providers and props\n      accessControlProvider={{\n        can: async ({ resource, action, params }) => {\n          if (resource === "posts" && action === "edit") {\n            return {\n              can: false,\n              reason: "Unauthorized",\n            };\n          }\n\n          return { can: true };\n        },\n        options: {\n          buttons: {\n            enableAccessControl: true,\n            hideIfUnauthorized: false,\n          },\n        },\n      }}\n    >\n      {/* your app */}\n    </Refine>\n  );\n};\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Providing ",(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component ",(0,a.kt)("strong",{parentName:"p"},"won't enforce")," access control by itself; you will need to wrap protected routes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," component."),(0,a.kt)("p",{parentName:"admonition"},"Refer to one of the following documentations, based on your preferred router:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/packages/list-of-packages#usage-with-access-control-providers"},"React Router Access Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/packages/list-of-packages#access-control"},"NextJS Router Access Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/packages/list-of-packages#access-control"},"Remix Router Access Control")))),(0,a.kt)("h3",{id:"meta-access"},"Meta Access"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," method, you'll have access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," object you passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,a.kt)("p",null,"In the example below, the ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," function receives the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/core/interface-references#resourceprops"},"ResourceProps"),") object you pass to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, which allows you to use Attribute Based Access Control (ABAC), which allows you to grant permissions based on the value of a field in the resource object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'export const accessControlProvider = {\n  can: async ({ resource, action, params }) => {\n    const resourceName = params?.resource?.name;\n    const anyUsefulMeta = params?.resource?.meta?.yourUsefulMeta;\n\n    if (resourceName === "posts" && anyUsefulMeta === true && action === "edit") {\n      return {\n        can: false,\n        reason: "Unauthorized",\n      };\n    }\n  },\n};\n')),(0,a.kt)("h3",{id:"using-reason-property"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"reason")," property"),(0,a.kt)("p",null,"If your response from the ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," method has a ",(0,a.kt)("inlineCode",{parentName:"p"},"reason")," property, it will be shown at the tooltip of the buttons if they are disabled."),(0,a.kt)("h2",{id:"hooks-and-components"},"Hooks and Components"),(0,a.kt)("p",null,"Refine provides a hook and a component to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),"."),(0,a.kt)("h3",{id:"usecan"},"useCan"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," for the query function for ",(0,a.kt)("strong",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),". It takes the parameters that ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," takes, can be configured with ",(0,a.kt)("inlineCode",{parentName:"p"},"queryOptions")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," and returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useCan({\n  resource: "resource-you-ask-for-access",\n  action: "action-type-on-resource",\n  params: { foo: "optional-params" },\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const useCan: ({\n    action,\n    resource,\n    params,\n    queryOptions,\n}: CanParams* & {\n    queryOptions?: UseQueryOptions<CanReturnType>;\n}) => UseQueryResult<CanReturnType*>\n")),(0,a.kt)("h3",{id:"canaccess-"},(0,a.kt)("inlineCode",{parentName:"h3"},"<CanAccess />")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," is a wrapper component that uses ",(0,a.kt)("inlineCode",{parentName:"p"},"useCan")," to check for access control. It takes the parameters that ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," method takes and also a ",(0,a.kt)("inlineCode",{parentName:"p"},"fallback"),". If access control returns true, it renders its children; otherwise, it renders ",(0,a.kt)("inlineCode",{parentName:"p"},"fallback"),", if it was provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<CanAccess resource="posts" action="edit" params={{ id: 1 }} fallback={<CustomFallback />}>\n  <YourComponent />\n</CanAccess>\n')),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"As the number of points that check for access control in your app increases, the performance of your app may take a hit, especially if its access control involves remote endpoints. Caching the access control checks helps quite a lot, which can be done easily by configuring the ",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"cacheTime"))," properties since Refine uses react-query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n);\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"By default, Refine uses 5 minutes for ",(0,a.kt)("inlineCode",{parentName:"p"},"cacheTime")," and 0 minutes for ",(0,a.kt)("inlineCode",{parentName:"p"},"staleTime")," for its own access control points.")),(0,a.kt)("h2",{id:"list-of-default-access-control-points"},"List of Default Access Control Points"),(0,a.kt)("p",null,"Here is a list of components and pages Refine checks for access control:"),(0,a.kt)("h3",{id:"sider"},"Sider"),(0,a.kt)("p",null,"Sider is integrated, which means that unaccessible resources won't appear in the sider menu."),(0,a.kt)("p",null,"Menu items will check access control with ",(0,a.kt)("inlineCode",{parentName:"p"},'{ resource, action: "list" }'),". For example, if your app has a resource called ",(0,a.kt)("inlineCode",{parentName:"p"},"posts"),", it will be checked with ",(0,a.kt)("inlineCode",{parentName:"p"},'{ resource: "posts", action: "list" }'),"."),(0,a.kt)("h3",{id:"buttons"},"Buttons"),(0,a.kt)("p",null,"These buttons will be checked for access control."),(0,a.kt)("p",null,"Let's say they are rendered where ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," where applicable. The ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," function will receive the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/core/interface-references#resourceprops"},"ResourceProps"),") object you passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, which allows you to use Attribute Based Access Control (ABAC), which allows you to grant permissions based on the value of a field in the resource object."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/list-button"},(0,a.kt)("strong",{parentName:"a"},"List")),": ",(0,a.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "list", params: { *resource } }')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/create-button"},(0,a.kt)("strong",{parentName:"a"},"Create")),": ",(0,a.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { *resource } }')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/clone-button"},(0,a.kt)("strong",{parentName:"a"},"Clone")),": ",(0,a.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { id: 1, *resource } }')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/edit-button"},(0,a.kt)("strong",{parentName:"a"},"Edit")),": ",(0,a.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "edit", params: { id: 1, *resource } }')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/delete-button"},(0,a.kt)("strong",{parentName:"a"},"Delete")),": ",(0,a.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "delete", params: { id: 1, *resource } }')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/show-button"},(0,a.kt)("strong",{parentName:"a"},"Show")),": ",(0,a.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "show", params: { id: 1, *resource } }'))),(0,a.kt)("p",null,"These buttons will be disabled if access control returns ",(0,a.kt)("inlineCode",{parentName:"p"},"{ can: false }")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"This example is for ",(0,a.kt)("strong",{parentName:"p"},"Casbin")," access control provider. You can check our other access control provider, ",(0,a.kt)("a",{parentName:"p",href:"/docs/examples/access-control/cerbos/"},(0,a.kt)("strong",{parentName:"a"},"Cerbos"))," as well."),(0,a.kt)(d,{path:"access-control-casbin",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);