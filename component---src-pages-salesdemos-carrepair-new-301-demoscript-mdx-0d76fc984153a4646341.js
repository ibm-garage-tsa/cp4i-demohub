(window.webpackJsonp=window.webpackJsonp||[]).push([[38,65,66,68,69,70],{"013z":function(e,t,a){"use strict";var b=a("q1tI"),n=a.n(b),i=a("NmYn"),r=a.n(i),c=a("Wbzz"),o=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),p=a.n(l),d=a("QH2O"),m=a.n(d),A=a("qKvR"),g=function(e){var t,a=e.title,b=e.theme,n=e.tabs,i=void 0===n?[]:n;return Object(A.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===b,t))},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12"},Object(A.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,b=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||b,i=n.baseUrl,r=n.subDirectory,o=i+"/edit/"+n.branch+r+"/src/pages"+t;return i?Object(A.b)("div",{className:"bx--row "+j.row},Object(A.b)("div",{className:"bx--col"},Object(A.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("dI71"),u=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,b=e.slug,n=b.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===n,o=new RegExp(n+"/?(#.*)?$"),s=b.replace(o,a);return Object(A.b)("li",{key:e,className:p()((t={},t[u.selectedItem]=i,t),u.listItem)},Object(A.b)(c.Link,{className:u.link,to:""+s},e))}));return Object(A.b)("div",{className:u.tabsContainer},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(A.b)("nav",{"aria-label":t},Object(A.b)("ul",{className:u.list},i))))))},t}(n.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,b=e.location,n=e.Title,i=t.frontmatter,l=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,m=l.tabs,j=l.title,f=l.theme,u=l.description,v=l.keywords,x=Object(y.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,k=I?b.pathname.replace(I,""):b.pathname,E=m?k.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",B=f||x;return Object(A.b)(s.a,{tabs:m,homepage:!1,theme:B,pageTitle:j,pageDescription:u,pageKeywords:v,titleType:d},Object(A.b)(g,{title:n?Object(A.b)(n,null):j,label:"label",tabs:m,theme:B}),m&&Object(A.b)(N,{title:j,slug:k,tabs:m,currentTab:E}),Object(A.b)(w.a,{padded:!0},a,Object(A.b)(O,{relativePagePath:p})),Object(A.b)(h.a,{pageContext:t,location:b,slug:k,tabs:m,currentTab:E}),Object(A.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},wAXB:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return g}));var b=a("wx14"),n=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),function(){return Object(i.b)("span",null,"Cognitive API Demo - 301 Demo Script")}),o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=s("FeatureCard"),p=s("AnchorLinks"),d=s("AnchorLink"),m={Title:c,_frontmatter:o},A=r.a;function g(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(A,Object(b.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{title:"301 Demo Script",color:"dark",mdxType:"FeatureCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.430555555555557%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAZaiLuA//8QAFxABAQEBAAAAAAAAAAAAAAAAAQISAP/aAAgBAQABBQJtsgxW3v/EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8BmER//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AW1//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQAQEUFh/9oACAEBAAY/AjNIa3//xAAaEAACAwEBAAAAAAAAAAAAAAAAAREhMUFx/9oACAEBAAE/IcbOsroyM5zaPM//2gAMAwEAAgADAAAAEIv/AP/EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQMBAT8QgKWH/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARUf/aAAgBAgEBPxBXZ7X/xAAaEAEBAAMBAQAAAAAAAAAAAAABEQAhMUFh/9oACAEBAAE/ECBCIGR9xvN7OBBaT3LLrVnM/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/cp4i-demohub/static/143fecc8dfdb9fbf8b240069a416ee9b/2e753/demo-script.jpg",srcSet:["/cp4i-demohub/static/143fecc8dfdb9fbf8b240069a416ee9b/69549/demo-script.jpg 288w","/cp4i-demohub/static/143fecc8dfdb9fbf8b240069a416ee9b/473e3/demo-script.jpg 576w","/cp4i-demohub/static/143fecc8dfdb9fbf8b240069a416ee9b/2e753/demo-script.jpg 1152w","/cp4i-demohub/static/143fecc8dfdb9fbf8b240069a416ee9b/74f4b/demo-script.jpg 1728w","/cp4i-demohub/static/143fecc8dfdb9fbf8b240069a416ee9b/cbe2c/demo-script.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"This Demo Script has multiple tasks, that have multiple steps. In each step you have the details about what you need to do (",Object(i.b)("strong",{parentName:"p"},"Actions"),") and what you can say delivering this demo step (",Object(i.b)("strong",{parentName:"p"},"Talking Points"),"). This Demo Script is a suggestion, but you are welcome to customize based in your sales opportunity. Enjoy it and good sales!"),Object(i.b)(p,{mdxType:"AnchorLinks"},Object(i.b)(d,{mdxType:"AnchorLink"},"1 - Accessing the Environment"),Object(i.b)(d,{mdxType:"AnchorLink"},"2 - Importing the Flow"),Object(i.b)(d,{mdxType:"AnchorLink"},"3 - Reviewing the Flow"),Object(i.b)(d,{mdxType:"AnchorLink"},"4 - Testing the Flow"),Object(i.b)(d,{mdxType:"AnchorLink"},"5 - Deploying the Flow"),Object(i.b)(d,{mdxType:"AnchorLink"},"6 - Managing API in API Connect"),Object(i.b)(d,{mdxType:"AnchorLink"},"7 - Exploring the Developer's Portal")),Object(i.b)("hr",null),Object(i.b)("h2",null,"1 - Accessing the Environment"),Object(i.b)("details",null,Object(i.b)("summary",null,"1.1 - Log in CP4I"),Object(i.b)("br",null),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Log in CP4I")),Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Actions")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Open CP4I and click ",Object(i.b)("strong",{parentName:"td"},"IBM provided credentials (admin only)")," and ",Object(i.b)("strong",{parentName:"td"},"og in")," with your admin user and password.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Talking Points")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"In the road to digital transformation, every organization seeks to move faster than before. But going fast without the right approach, guided by real-world operational data, has caused 70% of digital transformations to fail. A new approach with automation and continuous improvement fed by AI algorithms is required. IBM Cloud Pak for Integration is a hybrid integration solution that provides an automated and closed-loop lifecycle across multiple styles of enterprise integration. With IBM Cloud Pak for Integration, companies can speed integration development, reduce costs and maintain enhanced security, governance and availability. Let’s see IBM Cloud Pak for Integration in action. Here I have a cloud version of the product on IBM Cloud. Let me log in here.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Screenshots")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})," ","  ",Object(i.b)("br",null)," ",Object(i.b)("span",Object(b.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/0lEQVQoz52S707DIBTF+xJtAeOKQrn3wtiQbnObf2I0usSYqO//MrLWD9jMmnhD+ML9Xc45UOBkAQDnvOqrLMu011kVP5vpJMwYk1LqVjdS5nyRYYBGpe580AALzrVSrdbNbDaGwRg0Gt2C4uMyrr8HQTvAjDPDRbgA3yjPz86rusrhELt59+A3ry7cYtgiAS33/vrNEh1vFoJXNatZWkcDued0fPfyEXfP6MLcmhgjGWn92q4OSLaXLUY55bLJWQj7d7fYJPHWX/mbT9sdKNwn5SmBIe3f4OQveWuxjwrIUnxKKtBc4iB7Gh49EhjVD6T8nafhPz7JaZiI/g1/Ab+0WAxMhTAmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"login1",title:"login1",src:"/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/3cbba/demoscript-login1.png",srcSet:["/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/7fc1e/demoscript-login1.png 288w","/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/a5df1/demoscript-login1.png 576w","/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/3cbba/demoscript-login1.png 1152w","/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/0b3f2/demoscript-login1.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," ",Object(i.b)("br",null)," ",Object(i.b)("span",Object(b.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMklEQVQoz52Si07DIBSG9wpeOjhrO7puBQ70gnR3nRoXXWJM1HfzgT3rFq3aGOMJISHw/fz8h57+tZRSANBvKggCmlmrel8PYyfMOBdJMsmyoRDnJPEDJkxpOabTbSFacoCUcy2EjOMsilKAEWP9D1hJqeVE2xL9XeVnRyGVHTQ4Z0aIup7m1tIo81yF4cH/Hna+zuvbYv5o3ZV2S40Kq3WxeDKI+5s55MNoU+HKVbOyXFaViaLgANP25uHFr+61dbmR3nuUiSlmZrrTaOgRwM7Go0V68zYKDQQnA8ah9Wa0Rrn1sy3nZN4UF8Xlq6l36K7JOQUAnMVhmqhtHE8oue9pq30wmW6iUmjQb8mFlqlubAMMqE2sf9qQvLNVn01SctwIYrvPrKt6f/wk3TAi/ht+B+d1W63WXZmxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"login2",title:"login2",src:"/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/3cbba/demoscript-login2.png",srcSet:["/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/7fc1e/demoscript-login2.png 288w","/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/a5df1/demoscript-login2.png 576w","/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/3cbba/demoscript-login2.png 1152w","/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/0b3f2/demoscript-login2.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(i.b)("details",null,Object(i.b)("summary",null,"1.2 - CP4I Home"),Object(i.b)("br",null),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"CP4I Home")),Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Actions")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Show the Home Page and click on ",Object(i.b)("strong",{parentName:"td"},"Integration Capabilities"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Talking Points")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Welcome to IBM Cloud Pak for Integration! We’re now at the home screen showing all the capabilities of the pak, brought together in one place.  Specialized integration capabilities —for API management, application integration, messaging and more —are built on top of powerful automation services. Let’s see the Integration Capabilities available in this Cloud Pak for Integration.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Screenshots")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})," ","  ",Object(i.b)("br",null)," ",Object(i.b)("span",Object(b.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtUlEQVQozz1SzQ6UMBDmFdalLdCWtpTSFii7yO4a4yYme/Fg4s3zRo8evPpIvoNP5wfoTpqhLfP9zEBW17VSilLKGCuKYs97sFdQwuiRkSPLj6zYymjedSEzxlhru66TUuZ5vlZSSgjZ6bYglFvaXEvTV/GUk2NOyYHpWsmsba0xmnOutW6aBnKiltY5pfV/PC2EJUVNv/y2P/+4doz+rt//CpevmW3XEJw31vb9wIXwtbr4YKQk/8AFZUXXOXL74W7f3s2fXbuE4dP94/esErLiAm0gc6HwaIrSV4Jvuq/mTetNLTijShqrO6fD9fwhg2G8OxwO21yIVkoq9Ybku+irecyBsRKrYGVZcmTXdhmG5L1/Pp97UUppPp/7vkf/mOUwDJ33xjT7cRzHYRwwYKUVUCsYpY/HY7fXD2OI0Tm3TsLadJrH09WHiM+Bi8vlcr/fb7cbWIDKYAJMMF9VFcDL8hYLYBDjPqUxxh6bZtNOaYK1bcTtChZCAP/6HUII05RCiNgAM88zdJAhBbp+TLHvgQRTjDGTW+xI+B5T8mGVap1DxTRNy7LAM7ysRlbhVRlH0P0FIf1YRXkQan4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home",title:"home",src:"/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/3cbba/demoscript-home.png",srcSet:["/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/7fc1e/demoscript-home.png 288w","/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/a5df1/demoscript-home.png 576w","/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/3cbba/demoscript-home.png 1152w","/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/0b3f2/demoscript-home.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(i.b)("details",null,Object(i.b)("summary",null,"1.3 - Integration Capabilities"),Object(i.b)("br",null),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Integration Capabilities")),Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Actions")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Show the Integration Capabilities page and open the Designer (",Object(i.b)("strong",{parentName:"td"},"ace-designer-demo"),").")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Talking Points")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"As you can see, through a single interface you are able to access all the integration capabilities your team needs. Including API Lifecycle Management, Application & Data Integration, Enterprise Messaging, Events and High Speed Transfer. In this Demo, we will explore App Connect for Application Integration, API Connect for API Management and Asset Repository as our centralized hub for allowing our teams to work together with Integration assets. Let’s open our App Connect Designer.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Screenshots")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})," "," ",Object(i.b)("br",null)," ",Object(i.b)("span",Object(b.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLUlEQVQoz5WRTU7DQAyF58BILYtWAokdV+AQ7JE4ABJbNogDIJGGNtNpOv/j+eFlhlaRWKB+C+vFeXZsh61Wq/V6fVW5PrH8j8VieXN7x6y1WmvnnPe+XAhTSrVKRDQyxkAQUYyRTpx1ICo5fu7C8xu9fBDbbPqB831lu90iCiEQu64bhgGCc973fTPsYN19v74P94/7h6c9E4ejcaEhpcQgvoJdEJFsuhmcDwfpI4VSQsmeCTEal2PM2AE+jA0TNEY974ZMzpMh5qR8SrnEVChmprqN+uKBC7xzFQhYUZxPoHjqlQuloD0aTYaUEhtHqS3k1LgdrBXjPO2z0OiYcoKmREcX6hBlKlZKaxzY/p4a2MpZzLWxRs/y069SSqoLkRU2fzhW5B/myaZa1Q/Z6lwbjZ1L7wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"integration capabilities",title:"integration capabilities",src:"/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/3cbba/demoscript-integration.png",srcSet:["/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/7fc1e/demoscript-integration.png 288w","/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/a5df1/demoscript-integration.png 576w","/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/3cbba/demoscript-integration.png 1152w","/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/0b3f2/demoscript-integration.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(i.b)("hr",null),Object(i.b)("h2",null,"2 - Importing the Flow"),Object(i.b)("details",null,Object(i.b)("summary",null,"2.1 - Create from an asset"),Object(i.b)("br",null),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Create from an asset")),Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Actions")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Click ",Object(i.b)("strong",{parentName:"td"},"Create from an Asset"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Talking Points")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Here we are on the designer tooling. This is where we can create all of our API integration flows and also manage our connectivity to our services and endpoints. At the moment, there’s nothing here yet, so let’s build some integration logic. Let’s see how simple to create our flow from the Asset Repository.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Screenshots")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})," ","  ",Object(i.b)("br",null)," ",Object(i.b)("span",Object(b.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiklEQVQoz21STU/CQBDl9wJy4UT0n3BAbx40xuDBxJsxCmhJDGg0mvCVVqL92nan7ba7xdctAhpfJpv5ePNmZ9tKrVZrNpvVahVOo9HY06hrIFPfwZ+w1TqonF9cySxzXdf3fcYYEaVpqpTMgdWqOHIlpdRREQKZLAxdlcPDI9M0DcOYTCbz+Rz+YrGAFlF0c9tzHOfx6aXXH7CA3w/HYRgGQcC0AZVOpwNJjI2iKI5jnAQnoue3+XV//Ol4+8dsYdlfX5+DhyGq/AcQWjdDJtQos0IkJ6dnr++zgItLgzgl49FoNp0mSVJyfjVj240khLBkt9u9vetlUgkR8ohwT4/5xPn/k0mjLGCCbdsflhX7fmg75DgRzHNpB9tmsLMsU6p4WCEEfKnUCrdnLBVCpmkupQoCfIjNy2P/dTOmIUANfqzfDSw0p3h0SOh8ToRKySlp28nIYiBU4WA4ghwzORcoxXFCpBgDoWSum9vtNhqwQ6IBx9EofhvP85ZL17IKM83C9zxXAwuD+Q3zbUdpuwrECgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"import1",title:"import1",src:"/cp4i-demohub/static/f6473228a17b2bfbc8ef7976b26ae2aa/3cbba/demoscript-createfromasset.png",srcSet:["/cp4i-demohub/static/f6473228a17b2bfbc8ef7976b26ae2aa/7fc1e/demoscript-createfromasset.png 288w","/cp4i-demohub/static/f6473228a17b2bfbc8ef7976b26ae2aa/a5df1/demoscript-createfromasset.png 576w","/cp4i-demohub/static/f6473228a17b2bfbc8ef7976b26ae2aa/3cbba/demoscript-createfromasset.png 1152w","/cp4i-demohub/static/f6473228a17b2bfbc8ef7976b26ae2aa/0b3f2/demoscript-createfromasset.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(i.b)("details",null,Object(i.b)("summary",null,"2.2 - Select an asset"),Object(i.b)("br",null),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Select an asset")),Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Actions")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Click on the ",Object(i.b)("strong",{parentName:"td"},"+")," sign to the right on the ",Object(i.b)("strong",{parentName:"td"},"Car Insurance Cognitive API Lab Short V2"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Talking Points")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"We have a flow to use already stored in the Asset Repository, let’s use it to simplify our demonstration.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Screenshots")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})," ","  ",Object(i.b)("br",null)," ",Object(i.b)("span",Object(b.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQUlEQVQoz5WRTW6DMBCFuRsXYI2ybavuEqlST8M2kFwo2ygQBZIIY/yD8Q/us5NFd20+WTAe5vnNmCRN0yzLPiPrf7PZrDdf38nb+0dVVcaYZVn8K7jFJ6vVqiiKYaCMjViccynlFJERhuwvsEVNeLExiMuyPJ3qU920bXu9dqCua8SXy6VpGjy7SNt1t9vtfD4fDofj8Yg4iHdVNTDVM0OYmZSx1sIBx2MW+NMI/LqBz7NGhhCilJqNCWLMLJXlyjPlrQvzaK3neQ6DOYdqpSY5KTGFzOIWbYy31lEanXcV4fbOvdRe2yDmXMAZAcwHSseRjlwwqZBBX0JKfHD3+1M8sGkUaCRYQvC4KtTBX0SwRavGWFQghrm2Noj3+z0hPRZGxXj8L3DR8RbYU4w+cbp4BZyS5Hm+3W77Hs4v8PgdPwDQO/natmWwAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"import2",title:"import2",src:"/cp4i-demohub/static/f6abc45247b45ee76f5991cba5f60a6f/3cbba/demoscript-select-asset.png",srcSet:["/cp4i-demohub/static/f6abc45247b45ee76f5991cba5f60a6f/7fc1e/demoscript-select-asset.png 288w","/cp4i-demohub/static/f6abc45247b45ee76f5991cba5f60a6f/a5df1/demoscript-select-asset.png 576w","/cp4i-demohub/static/f6abc45247b45ee76f5991cba5f60a6f/3cbba/demoscript-select-asset.png 1152w","/cp4i-demohub/static/f6abc45247b45ee76f5991cba5f60a6f/0b3f2/demoscript-select-asset.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(i.b)("hr",null),Object(i.b)("h2",null,"3 - Reviewing the Flow"),Object(i.b)("details",null,Object(i.b)("summary",null,"3.1 - Review properties"),Object(i.b)("br",null),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Review properties")),Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Actions")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Show the ",Object(i.b)("strong",{parentName:"td"},"Properties view")," and click on ",Object(i.b)("strong",{parentName:"td"},"Operations"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Talking Points")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Designer builds your API for you – you don’t need to worry about OpenAPI specs or Swagger editors – it’s all built in.  These are the fields we are going to use for our API. Note that we tell our API which field is the key – in our case, CaseReference.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Screenshots")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})," ","  ",Object(i.b)("br",null)," ",Object(i.b)("span",Object(b.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVQoz4VR25KDIBTz/7/EVem2HX+mr3V8sIqAQMsB1E3t7lb3muEhk3iSAyZlWRZFwRjL85yx4nW3S1/yLMsgHY7Hw35/P1ukaYqPMZhM0zSOY4zRe2+uRBRCgHBXYU3zjDM++PQQ5k+e9B+QUrS9vHBB5JAhpOzaTp1O5nwm9w5rbb9CMixQSmmt4YEOgzZGex+IYtQ6WoulwgIsOKzwHDbGSCmRh5Snjxhjuq6DdQOcW7ubZpCmacDX8dAxCRF3Ie/1b82orarq+3DbtlKI/5s550jRW6AZFh7M/91c17XaAi6ae86xtXP0U/Oynr3SYG4xfMVyWY+/Db6+0RuStStQ98qIxQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"review1",title:"review1",src:"/cp4i-demohub/static/3c3261b5e2d5a7c5d8366c2b0db6c476/3cbba/demoscript-review-props.png",srcSet:["/cp4i-demohub/static/3c3261b5e2d5a7c5d8366c2b0db6c476/7fc1e/demoscript-review-props.png 288w","/cp4i-demohub/static/3c3261b5e2d5a7c5d8366c2b0db6c476/a5df1/demoscript-review-props.png 576w","/cp4i-demohub/static/3c3261b5e2d5a7c5d8366c2b0db6c476/3cbba/demoscript-review-props.png 1152w","/cp4i-demohub/static/3c3261b5e2d5a7c5d8366c2b0db6c476/bc533/demoscript-review-props.png 1443w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(i.b)("details",null,Object(i.b)("summary",null,"3.2 - Review operations"),Object(i.b)("br",null),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Review operations")),Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Actions")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Show the ",Object(i.b)("strong",{parentName:"td"},"Operations view")," and click on ",Object(i.b)("strong",{parentName:"td"},"Edit flow"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Talking Points")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"On Operations view are the actions that the API exposes with the data. In this demo, we’re going to build just one operation – we can add more if we wish. Let’s check the flow logic.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Screenshots")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})," ","  ",Object(i.b)("br",null)," ",Object(i.b)("span",Object(b.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVQoz62SzUrEQAzH+7alth56U3yVsgV9hIIgiGX1qmfBw7KwN+3uzDTJfHXamt26COsHLvg7ZJJM/kkYJsqyLM/zOI6TJEnTlMM0PWF7+jNT2dn5RVRV1TiO3vsQQtd1fT9oG8Zf4cphGNiJZrMZH0opABAKmnWLSJo0ArZKtYySfIWcJWLLCYQt7ERlWU5ivmHdq9iQI/IEGrhHS7SWEPrgrCUAq7VzburFfIoNmZVY3S3m9eL++uVmvnx4s2LjWuVIj3759Hh7efVc16HveeihGHfrCimEEshrEBpr/B6ebHkha40x+HXyFNMO3LPdkCsBv+VQfBT/IeZ3p2P4EBdFwX+jaRrxZ6SUk/gd9nFKY/MAqukAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"review2",title:"review2",src:"/cp4i-demohub/static/0eaa2ff7922dd45f87389472f25cf827/3cbba/demoscript-operations.png",srcSet:["/cp4i-demohub/static/0eaa2ff7922dd45f87389472f25cf827/7fc1e/demoscript-operations.png 288w","/cp4i-demohub/static/0eaa2ff7922dd45f87389472f25cf827/a5df1/demoscript-operations.png 576w","/cp4i-demohub/static/0eaa2ff7922dd45f87389472f25cf827/3cbba/demoscript-operations.png 1152w","/cp4i-demohub/static/0eaa2ff7922dd45f87389472f25cf827/0b3f2/demoscript-operations.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(i.b)("details",null,Object(i.b)("summary",null,"3.3 - Review the flow"),Object(i.b)("br",null),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Review the flow")),Object(i.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Actions")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Initially ",Object(i.b)("strong",{parentName:"td"},"close")," the Request dialog. Explain the Flow and Scroll through all of the connectors in the flow. After that, open the ",Object(i.b)("strong",{parentName:"td"},"Request")," again, by clicking the first step of the flow.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Talking Points")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Here we have our demo flow. In the designer flow editor, we are able to edit and change our flow.   We are a Car Repair company: We take in vehicles with problems and repair them. We want to create an API which enables customers to send us photos of their cars along with descriptions of what needs to be done. With this information, we will create a case in Salesforce and use Watson to analyze if the customer is angry or upset. Let’s explore our flow in details.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Screenshots")),Object(i.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})," ","  ",Object(i.b)("br",null)," ",Object(i.b)("span",Object(b.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGElEQVQoz9WRwUrDQBCG91mrTZo0xd4KPoF4FMUithWfIa8gevAJhGop1TZtNtnZ2dkkmnQdFUFv9ejwsfwz7AfLjgjD8KDf9zzP9/0gDKIo8gJ/r7Pf6rTaQTvohgwPe98VfRJ2e4PBoYjj2DlXVVVd103TcH7UT3fJ/c3y9gGm1r0WrnK/a+tcUX8EcXJ0jIsXo0CTJVsiUQpEZMEUGVJZlKkmJGttmQNqNFITGALQ09lcDE/Pqvkinc0TmSfrNFNaKlQaM0AJCNp8tQoMy0qbjAOfClcbKUZX19u3RibrjAUFOWi+sQsaSVyOxvx+qXZ1fsLypN46mcP/kkfjCS+XPxmQ/oo4H14YWzwvV6v1Zkd4o2mWM+/RTEWy/5woJAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"review2",title:"review2",src:"/cp4i-demohub/static/312e47fe4ba9d361ff7e5f9bc7bed086/3cbba/demoscript-review-flow.png",srcSet:["/cp4i-demohub/static/312e47fe4ba9d361ff7e5f9bc7bed086/7fc1e/demoscript-review-flow.png 288w","/cp4i-demohub/static/312e47fe4ba9d361ff7e5f9bc7bed086/a5df1/demoscript-review-flow.png 576w","/cp4i-demohub/static/312e47fe4ba9d361ff7e5f9bc7bed086/3cbba/demoscript-review-flow.png 1152w","/cp4i-demohub/static/312e47fe4ba9d361ff7e5f9bc7bed086/0b3f2/demoscript-review-flow.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(i.b)("hr",null),Object(i.b)("h2",null,"4 - Testing the Flow"),Object(i.b)("hr",null),Object(i.b)("h2",null,"5 - Deploying the Flow"),Object(i.b)("hr",null),Object(i.b)("h2",null,"6 - Managing API in API Connect"),Object(i.b)("hr",null),Object(i.b)("h2",null,"7 - Exploring the Developer’s Portal"))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-301-demoscript-mdx-0d76fc984153a4646341.js.map