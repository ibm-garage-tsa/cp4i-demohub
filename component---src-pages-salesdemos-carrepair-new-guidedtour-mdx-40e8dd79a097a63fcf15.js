(window.webpackJsonp=window.webpackJsonp||[]).push([[35,52,54,55],{"013z":function(e,t,a){"use strict";var b=a("q1tI"),i=a.n(b),o=a("NmYn"),c=a.n(o),n=a("Wbzz"),l=a("Xrax"),r=a("k4MR"),s=a("TSYQ"),m=a.n(s),p=a("QH2O"),d=a.n(p),u=a("qKvR"),g=function(e){var t,a=e.title,b=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(u.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===b,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},A=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,b=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||b,o=i.baseUrl,c=i.subDirectory,l=o+"/edit/"+i.branch+c+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),N=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,b=e.slug,i=b.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),o=a===i,l=new RegExp(i+"/?(#.*)?$"),r=b.replace(l,a);return Object(u.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(n.Link,{className:N.link,to:""+r},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},o))))))},t}(i.a.Component),f=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,b=e.location,i=e.Title,o=t.frontmatter,s=void 0===o?{}:o,m=t.relativePagePath,p=t.titleType,d=s.tabs,A=s.title,h=s.theme,N=s.description,v=s.keywords,x=Object(y.a)().interiorTheme,C=Object(n.useStaticQuery)("2456312558").site.pathPrefix,T=C?b.pathname.replace(C,""):b.pathname,k=d?T.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",I=h||x;return Object(u.b)(r.a,{tabs:d,homepage:!1,theme:I,pageTitle:A,pageDescription:N,pageKeywords:v,titleType:p},Object(u.b)(g,{title:i?Object(u.b)(i,null):A,label:"label",tabs:d,theme:I}),d&&Object(u.b)(w,{title:A,slug:T,tabs:d,currentTab:k}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:m})),Object(u.b)(O.a,{pageContext:t,location:b,slug:T,tabs:d,currentTab:k}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},sdJo:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return n})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var b=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),n=(a("qKvR"),function(){return Object(o.b)("span",null,"Car Crash Repair - Guided Tour")}),l={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=r("Row"),m=r("Column"),p={Title:n,_frontmatter:l},d=c.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(b.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Guided Tour"),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Scenario Introduction - Car Crash Repair"),Object(o.b)(s,{mdxType:"Row"},Object(o.b)(m,{colLg:5,colMd:5,mdxType:"Column"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Demo Screenshot")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVQoz5WTy08TURTG75S+aIEydkpBCEULtdRpC5bH0EJb2yINCSImxoDGha/UAKYCMZJgjAvQFIxANIoJulE3LjRRwsKtC/8JNcYQZaULXU1yPue2pcS40cXJd869md/9zrl3mNFoJIPBQCaTicxmM+n1emKMlUJggqbCbi0IfwRfMxhNJEp10HKVxWIxRCIRcE2lUkgkEnA4HHzzn8NsFSk+dLEArK2thSiKZLVayWKxEM9tNlvJUaPkJEe1nao1ZUIZ7W1opKDso8a6GmppbqYWj4cCgQDJsh8aQ2U6nY6TiavWAgq1AK31/OmjmQWcGMuiocGFyZk5fPj0Be9fPMPGvXmsPrqPh4/X8Xpzkz5vfUNfNKqydDrNW6ZkMoloNFqKeDzOncPb0Q85lIDP34WP29/xc/srlmeyyJ4cxuJqDrkHq5i4Ok2v3r5DT6RXZZpdtLa2ks/n4wpZluH1euF2u1GmE2Aqr8w7PTc+ha0fv7By5xYi3SHYpXqMZy9haW0ZmenLdPPuGuS2TpWFw2EoikJKjwIODYVCCAaDaG9vg9PphLVKygNPnc3g6cs3iCW6INW50N2XwtS1CVyZzeJM5gJNXl/Cfo9PZZIkwVFTQxXlltKt7cyT5y73QUSSYxgYOY+524sYOj6Co6dvoPfIKHIrCxgcGUTy2DDNLj0pAIsQKhOr0D8/C9fhcAFcBFZUimjydMLubIZXPgT3AVmrO7DHuQ9Kbw/8bQF4ZJmU+ABsol1lQvGWy5vqkdl4Dr82bA4SdML/vEUq6q7DPKTKqjn7+4NC+0Jed4LXO6Phf0zx+am/AccXR6m4dWvJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home01",title:"home01",src:"/cp4i-demohub/static/bda913303995d0c9405c9a326fff005a/3cbba/home01.png",srcSet:["/cp4i-demohub/static/bda913303995d0c9405c9a326fff005a/7fc1e/home01.png 288w","/cp4i-demohub/static/bda913303995d0c9405c9a326fff005a/a5df1/home01.png 576w","/cp4i-demohub/static/bda913303995d0c9405c9a326fff005a/3cbba/home01.png 1152w","/cp4i-demohub/static/bda913303995d0c9405c9a326fff005a/5dce9/home01.png 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)(m,{colLg:7,colMd:7,mdxType:"Column"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Demo Outline")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Use Case Overview"),Object(o.b)("li",{parentName:"ol"},"Focus Corp Demo Dashboard review"),Object(o.b)("li",{parentName:"ol"},"Customer persona",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Submit rejected invoice"),Object(o.b)("li",{parentName:"ol"},"Turn on decision labels, fix $0 and submit approved"),Object(o.b)("li",{parentName:"ol"},"Submit invoice that should be rejected, but is approved"))),Object(o.b)("li",{parentName:"ol"},"Operations Specialist persona",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Week 1 dashboard"))),Object(o.b)("li",{parentName:"ol"},"Rule Manager persona",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Decision model review"),Object(o.b)("li",{parentName:"ol"},"Create new branch"),Object(o.b)("li",{parentName:"ol"},"Add a new row in the table for IN / Inc scenario"),Object(o.b)("li",{parentName:"ol"},"Validate"),Object(o.b)("li",{parentName:"ol"},"Simulate rules and compare with original simulation report"),Object(o.b)("li",{parentName:"ol"},"Deploy new version"))),Object(o.b)("li",{parentName:"ol"},"Customer persona",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Turn on new rule version"),Object(o.b)("li",{parentName:"ol"},"Same invoice is correctly rejected"))),Object(o.b)("li",{parentName:"ol"},"Operations Specialist persona",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Week 2 dashboard"))),Object(o.b)("li",{parentName:"ol"},"Use case review and value of decision services")),Object(o.b)("br",null)))),Object(o.b)("details",null,Object(o.b)("summary",null,"2 - API Request"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate back to the ",Object(o.b)("strong",{parentName:"li"},"Focus Corp Demos Dashboard")," browser window/tab"),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"Week 2")," under the picture of the ",Object(o.b)("strong",{parentName:"li"},"Operations Specialist")),Object(o.b)("li",{parentName:"ol"},"Review the dashboard metrics and note the following:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Lower average invoice processing time below 100 minutes"),Object(o.b)("li",{parentName:"ol"},"Less deviation from the final result per week")))),Object(o.b)("br",null),Object(o.b)("p",null," ",Object(o.b)("span",Object(b.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeklEQVQoz1VTS08TYRSdn2JMjCsX/gET44IYXbgAlRCkkcSFAYlx48YFGwMxJEUTSdSYGFyID6IriUJaoKUPIFEebWf6mjKdQl/T0pl27LS9xzsDaPmSk3PvnTtn7tw5IyQSCZIkiTKZDKXTaUomk04uiiKlUimnbtcURSGZ41Q65eSGYVC706FWq3UKQjweRyQSBYuBBSCKEjKyjATXVTWLRr0OvVZzuG4YDB2GrqPVbKLTbqPdajl8coSJqRl4vMsU3gjT65duevLoAfFDSNcKVM7nqLSfpfKBSkXmamGf/lQ1MhkNrUR1G+UimbVDIoDsI3j8G1jx+SkQCmD6xXMMDtyFf2UVlUIOB4p8CkV1D/VSASzShQJY0JmO9SDsxmQsLPpo+/cWPrx7g76bg/AuLcGolJBnAZuNahm6VkRTP4RVq6KW34epldCsajCK+dOCet2EYVp0yHsxTROWZTm7ajQMtKwm1vw+rC57EVxbw+LPH1CzWedmg3s17rNPu3uHFfkzDC1KWqWMMkPijzI39xFu9zS8Hg+GXUPo7+vF2Mh9DPTfxitey863L3j7cARTfTcQnv90NF2nczThztfHEBenSPw+jQ3fAu64huEacmF0dAyzs+/hfjaJgVu96LlyGdev9mByfBzXzp/DpbNncO/iBcxMPIXFE+r8hmwlCKlEAjL7LSlFoOxlIEm2jThWFOTzeWTSKcQiu1gPh51XT7O11jc38WtrG7Kq4qBYRC6XY4upDguiJCLGJhZZKBaLQYpLsL1px9Fo1L7m5GzmY5+KTsw/BMdHPd0QgsEgQqEgHTNsdhCy89D/PBhAIBD4F5/U7Z5u/AWY6PlaZy3blwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/cp4i-demohub/static/826dd7b588e4e55ca978ded4a2476c38/3cbba/demo01.png",srcSet:["/cp4i-demohub/static/826dd7b588e4e55ca978ded4a2476c38/7fc1e/demo01.png 288w","/cp4i-demohub/static/826dd7b588e4e55ca978ded4a2476c38/a5df1/demo01.png 576w","/cp4i-demohub/static/826dd7b588e4e55ca978ded4a2476c38/3cbba/demo01.png 1152w","/cp4i-demohub/static/826dd7b588e4e55ca978ded4a2476c38/5dce9/demo01.png 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("details",null,Object(o.b)("summary",null,"3 - Image Recognition"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate back to the ",Object(o.b)("strong",{parentName:"li"},"Focus Corp Demos Dashboard")," browser window/tab"),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"Week 2")," under the picture of the ",Object(o.b)("strong",{parentName:"li"},"Operations Specialist")),Object(o.b)("li",{parentName:"ol"},"Review the dashboard metrics and note the following:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Lower average invoice processing time below 100 minutes"),Object(o.b)("li",{parentName:"ol"},"Less deviation from the final result per week")))),Object(o.b)("br",null),Object(o.b)("p",null," ",Object(o.b)("span",Object(b.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmUlEQVQoz02Ty2sTURTG82cIghuXgv+AICLqRhCLiCJK05crpRQUdy2KIF2oLVYaQYQuuqpUGgo+UNvm0c5M2ia2TdLJPJNK0jTYZJJOkuZxPs9MlHbgxznncu7Hufd+41FVlVIpmUzTdNE0jesUyYxhGGSm06RzTGcynJuU4ahyT8myqE1EzWbTpdFsuHgURUEikQQLMTpkOQVd15GSZWTSaVTKFqxSCVXbhn1Q4bqMMtf1Wg3NRgONw0O0Wy38/zyjryexsLREa9FVmno/SU+fDFEkEqE41+uiQKsrYVISW5RNG5TLmBTltY21CGmJOO39zlCBsYt/iAByPs/3gIRgOExCRMT4xBv0dA9gbvYT1oVlCIFFrDCR5RBiEQGGzCdJxqEmtqBzZDGU93ZRLe07ap0JN5MG/J8XKLoew/SHd7jedRuzMzPY0RXoLODAk6FY4I3WPpoVCweFPKp/Ci4VR7B4TLBs11Gx62RVyqhVbVSrVcZGo15Du93C5sYvSKKA6NoqwsEA36vpbmzwfqtWd/NWs3kkWNqZh22pVOTLLrHobm4Xfr8fPp8PoWAQgw8f4M6tm3g0NIg+bzfejo1B+/ENH58NY6L3LsLTU66QI+jgic89hvLzFclfxhFd/gpvbz96vF709w3AN+nDy9EXuHHtKi5fPI8rly7g+cgwus6ewbmTJ3Dv9CmM3O9HjV/atg8YGx41yResyPySUaRNHbEYH1GSYBg68vk8TF3D1kYMwaVFzPvnsJ1MIBAKYZGnVwwT2b095HI5ZHNZN3oUVUVKUUhRNbCh2YMa2Mhw/Lktb7trjkcN0wSbGk4//wAuKvfI7Fenz4kOHkkSeSKROlGCKIouTt5B/LcmQBCEo5wRpeN9Hf4C3c/yJRY1NrcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/cp4i-demohub/static/6bcb00b647eb6180fe9abe80276167c3/3cbba/demo02.png",srcSet:["/cp4i-demohub/static/6bcb00b647eb6180fe9abe80276167c3/7fc1e/demo02.png 288w","/cp4i-demohub/static/6bcb00b647eb6180fe9abe80276167c3/a5df1/demo02.png 576w","/cp4i-demohub/static/6bcb00b647eb6180fe9abe80276167c3/3cbba/demo02.png 1152w","/cp4i-demohub/static/6bcb00b647eb6180fe9abe80276167c3/5dce9/demo02.png 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("details",null,Object(o.b)("summary",null,"4 - Error Handling"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate back to the ",Object(o.b)("strong",{parentName:"li"},"Focus Corp Demos Dashboard")," browser window/tab"),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"Week 2")," under the picture of the ",Object(o.b)("strong",{parentName:"li"},"Operations Specialist")),Object(o.b)("li",{parentName:"ol"},"Review the dashboard metrics and note the following:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Lower average invoice processing time below 100 minutes"),Object(o.b)("li",{parentName:"ol"},"Less deviation from the final result per week")))),Object(o.b)("br",null),Object(o.b)("p",null," ",Object(o.b)("span",Object(b.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACK0lEQVQoz21R2W7bMBDU/39KH/rSAAFaoPCRxI7s1JUdw5JtRYcjiTqTyDotaackm+Sh6AoD7uySs0NKcYKYWJyRFyb0zBIKeO76Iek2I/3JJcv1JA/T109E2ZtE/JLLnoDjhXC9sFOm2hGznYd7w4dqBFjsGdR9gNsd4zWGh2PI6z5+mRFHLPFwjLB64jnHykqwPMb0m+dfbs1OCT0bJ8eit5eMurbhqGnoWuovNXVNRReJ+n2tZK0q8s99TVlQxYG+5cb8TnnNC7A4pb7v0V4uYIwhSVOUVYVhIBRlifP5jIEIeX6G67py5RRFUSJNMzRtS8PQw3xOuWBRIX7jE3gMw4DT6QTLsqSIiLquUXJREUVRyF6e55/8fR8RFzy4Uaecqxov55LESOEyiiKEYYiKOxTRNI0UFSFqQRBIoQ8uhpEILnh0Yy5Y1siEII+eOxRi4tCHq38FPc/7jyD4N/wVDOIUDoup4YfExsPhgN1uJ9+ybVtkWcbfKZXCSZJA13V5C9ETPI5jVHUtfgweD6dOOVo2dNMixgJ4vo/tdov1eg3TNMFCBsd1YDu2HGDbNjabjXzHDy5yfiMKfA/zh22nrLQ1Fqs1GYYunc3v55jNZtA0DcbewOZxI0UMw5CD7u7uZG+/30uurTXhmgx9hx/jeaf8HE/xfTSh5ULlYve4vr7G1dUVRqMRlsslbm5uMJ1OsVgs5Cp64/FY9gSfTCZQVZVUbuTrt+/dH9NALLmjnAAcAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/cp4i-demohub/static/a2fbe93766a1db27258f44365c8869ca/3cbba/demo03.png",srcSet:["/cp4i-demohub/static/a2fbe93766a1db27258f44365c8869ca/7fc1e/demo03.png 288w","/cp4i-demohub/static/a2fbe93766a1db27258f44365c8869ca/a5df1/demo03.png 576w","/cp4i-demohub/static/a2fbe93766a1db27258f44365c8869ca/3cbba/demo03.png 1152w","/cp4i-demohub/static/a2fbe93766a1db27258f44365c8869ca/5dce9/demo03.png 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("details",null,Object(o.b)("summary",null,"5 - Salesforce Integration"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate back to the ",Object(o.b)("strong",{parentName:"li"},"Focus Corp Demos Dashboard")," browser window/tab"),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"Week 2")," under the picture of the ",Object(o.b)("strong",{parentName:"li"},"Operations Specialist")),Object(o.b)("li",{parentName:"ol"},"Review the dashboard metrics and note the following:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Lower average invoice processing time below 100 minutes"),Object(o.b)("li",{parentName:"ol"},"Less deviation from the final result per week")))),Object(o.b)("br",null),Object(o.b)("p",null," ",Object(o.b)("span",Object(b.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVQoz32S247aMBCG8/4P1IvlAlTaamGrNlQtBJblFAghISfnQBIn83fsELGt1Eb6NPZ4Dr89MfwwIjdI6BLElKYZpVlOUZwwMXm+T/71SolISfCZSNM7Kq6LVecK1/PhuL401tstrK2D5fYIxwsQZyWitGBuvO7o9g9UTMjn4T0uEAXptcilwSoQBgFFYUC3W0Ft21AjJcm6fiA727ANkowVBRRHkY6r64rKsiRqJRa7izREEiOKYi52Q1lWULaqKqiP3kPaBVHUuHhXhGGApmn7OH26cUJppCJBkiTcqYaUEr1t2/YPmqYBy0dWVEoAE+k44k5EXbuTn7DCNEPMQ1CqVJIK+jc1RF7hfHaxXC4hhNAK27YraHtcMGanmm5Vln23/5KXEifnjNVq9Xiau8KjKpiEJ6jfgB8WRVFosjzX9PseHhqCOMX+cGCFlr72PU8NB282D8W2bez3B3Ich69y1uzto6bfKxzGdc/Y7Gys3jZ43e5w5ByVb1kWeRcX5q+1NGamCdP8TovFHD2WtdC892k/Y/74iefpV0xfXrDka8/nc8xmM1q/rjB+/iaN0fgLhh8/k7I9wzt/+5R9Gn7CcDjCYPCEyWSiGY/HNJ1O8GEwkr8BTVc6FVIhiL0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/cp4i-demohub/static/7036d578c9d0e5921b59b2b888a0151c/3cbba/demo04.png",srcSet:["/cp4i-demohub/static/7036d578c9d0e5921b59b2b888a0151c/7fc1e/demo04.png 288w","/cp4i-demohub/static/7036d578c9d0e5921b59b2b888a0151c/a5df1/demo04.png 576w","/cp4i-demohub/static/7036d578c9d0e5921b59b2b888a0151c/3cbba/demo04.png 1152w","/cp4i-demohub/static/7036d578c9d0e5921b59b2b888a0151c/5dce9/demo04.png 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("details",null,Object(o.b)("summary",null,"6 - Summary"),Object(o.b)("br",null),Object(o.b)("p",null,"We just used decision automation, a capability within IBM Cloud Pak for Automation, to automate an accounts payable process. With growing volumes of invoices, business rule automation helps reduce the amount of human intervention for account processing, detect issues earlier, and incorporate changes quickly when needed.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-guidedtour-mdx-40e8dd79a097a63fcf15.js.map