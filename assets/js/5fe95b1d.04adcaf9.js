"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>d});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},l=void 0,s={unversionedId:"tutorial/adding-crud-pages/chakra-ui/add-create-page",id:"tutorial/adding-crud-pages/chakra-ui/add-create-page",title:"4. Adding Create Page",description:"Creating Create Page",source:"@site/docs/tutorial/4-adding-crud-pages/chakra-ui/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/chakra-ui",slug:"/tutorial/adding-crud-pages/chakra-ui/add-create-page",permalink:"/docs/tutorial/adding-crud-pages/chakra-ui/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/chakra-ui/add-create-page.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1703159466,formattedLastUpdatedAt:"Dec 21, 2023",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},c={},d=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Hooks and Components in Create Page",id:"hooks-and-components-in-create-page",level:3},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=u("Checklist"),h=u("ChecklistItem"),g={toc:d};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,n.kt)("p",null,"First, we need to create our file, named ",(0,n.kt)("inlineCode",{parentName:"p"},"create.tsx"),", under the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will then copy the create page code generated by Inferencer and paste it into the file; for this, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Create" button in the top right corner of the table to open the create page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Copy it by clicking on the "Copy" button.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the code into the newly created ",(0,n.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,n.kt)("p",null,"You can see an example create page generated by Inferencer below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { ChakraProvider } from "@chakra-ui/react";\nimport { ErrorComponent, ThemedLayoutV2, notificationProvider, RefineThemes } from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\nimport routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={RefineThemes.Blue}>\n      <BrowserRouter>\n        <Refine\n          notificationProvider={notificationProvider()}\n          routerProvider={routerBindings}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          resources={[\n            {\n              name: "blog_posts",\n              list: "/blog-posts",\n              show: "/blog-posts/show/:id",\n              create: "/blog-posts/create",\n              edit: "/blog-posts/edit/:id",\n            },\n          ]}\n          options={{\n            syncWithLocation: true,\n            warnWhenUnsavedChanges: true,\n          }}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route index element={<NavigateToResource resource="blog_posts" />} />\n\n              {/* highlight-start */}\n              <Route path="blog-posts">\n                <Route index element={<ChakraUIInferencer />} />\n                <Route path="show/:id" element={<ChakraUIInferencer />} />\n                <Route path="edit/:id" element={<ChakraUIInferencer />} />\n                <Route path="create" element={<ChakraUIInferencer />} />\n              </Route>\n              {/* highlight-end */}\n\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n\n          <UnsavedChangesNotifier />\n        </Refine>\n      </BrowserRouter>\n    </ChakraProvider>\n  );\n};\n\nrender(<App />);\n')),(0,n.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,n.kt)("h3",{id:"hooks-and-components-in-create-page"},"Hooks and Components in Create Page"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<Create/>")," is a Refine component that is used for presentation purposes like showing the title of the page, save button etc."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/ui-integrations/chakra-ui/components/basic-views/create"},(0,n.kt)("inlineCode",{parentName:"a"},"<Create/>")," documentation","\u2192")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useForm")," hook is imported from ",(0,n.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),", which combines the features of ",(0,n.kt)("inlineCode",{parentName:"p"},"useForm")," hook from both ",(0,n.kt)("strong",{parentName:"p"},"React Hook Form")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),". When used in the create page, it sends the form data to ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted. It also offers ",(0,n.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," for the form's submit button."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,n.kt)("inlineCode",{parentName:"a"},"useForm"))," and",(0,n.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},(0,n.kt)("strong",{parentName:"a"},"React Hook Form")," documentation","\u2192")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All other components provided by ",(0,n.kt)("strong",{parentName:"p"},"Chakra UI")," are used to display the form fields."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},(0,n.kt)("strong",{parentName:"a"},"Chakra UI")," documentation","\u2192"))))),(0,n.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,n.kt)("p",null,"In the create page, we may need to select a record from another resource."),(0,n.kt)("p",null,"For example, if we need to select a category from the ",(0,n.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category, we can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by Refine. This hook fetches the data by passing the params to the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"getList")," method and then returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"options")," to be used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,n.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,n.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,n.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options: categoryOptions } = useSelect({\n  resource: "categories",\n});\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/hooks/use-select"},(0,n.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/select/usage"},(0,n.kt)("strong",{parentName:"a"},"Chakra UI")," ",(0,n.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation","\u2192"))),(0,n.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,n.kt)("p",null,"Now that we have created the create page, we can add it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"App.tsx")," file:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the created ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"ChakraUIInferencer")," component with the ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { ChakraProvider } from "@chakra-ui/react";\nimport { ErrorComponent, ThemedLayoutV2, notificationProvider, RefineThemes } from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostShow } from "pages/blog-posts/show";\n//highlight-next-line\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={RefineThemes.Blue}>\n      <BrowserRouter>\n        <Refine\n          notificationProvider={notificationProvider()}\n          routerProvider={routerBindings}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          resources={[\n            {\n              name: "blog_posts",\n              list: "/blog-posts",\n              show: "/blog-posts/show/:id",\n              // highlight-next-line\n              create: "/blog-posts/create",\n              edit: "/blog-posts/edit/:id",\n            },\n          ]}\n          options={{\n            syncWithLocation: true,\n            warnWhenUnsavedChanges: true,\n          }}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route index element={<NavigateToResource resource="blog_posts" />} />\n\n              <Route path="blog-posts">\n                <Route index element={<BlogPostList />} />\n                <Route path="show/:id" element={<BlogPostShow />} />\n                <Route path="edit/:id" element={<BlogPostEdit />} />\n                {/* highlight-start */}\n                <Route path="create" element={<BlogPostCreate />} />\n                {/* highlight-end */}\n              </Route>\n\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n\n          <UnsavedChangesNotifier />\n        </Refine>\n      </BrowserRouter>\n    </ChakraProvider>\n  );\n};\nexport default App;\n')),(0,n.kt)("p",null,"Now, we can see the create page in the browser at ",(0,n.kt)("a",{href:"http://localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create")),(0,n.kt)("br",null),(0,n.kt)(m,{mdxType:"Checklist"},(0,n.kt)(h,{id:"add-create-page-chakra-ui",mdxType:"ChecklistItem"},"I have added the create page to the app."),(0,n.kt)(h,{id:"add-create-page-chakra-ui-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,n.kt)(h,{id:"add-create-page-chakra-ui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}f.isMDXComponent=!0}}]);