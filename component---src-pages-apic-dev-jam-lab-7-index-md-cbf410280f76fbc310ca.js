(window.webpackJsonp=window.webpackJsonp||[]).push([[25,53,55,56],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),l=a.n(i),c=a("NmYn"),o=a.n(c),b=a("Wbzz"),n=a("Xrax"),s=a("k4MR"),r=a("TSYQ"),p=a.n(r),d=a("QH2O"),m=a.n(d),A=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,l=e.tabs,c=void 0===l?[]:l;return Object(A.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===i,t))},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12"},Object(A.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||i,c=l.baseUrl,o=l.subDirectory,n=c+"/edit/"+l.branch+o+"/src/pages"+t;return c?Object(A.b)("div",{className:"bx--row "+u.row},Object(A.b)("div",{className:"bx--col"},Object(A.b)("a",{className:u.link,href:n},"Edit this page on GitHub"))):null},f=a("FCXl"),w=a("dI71"),O=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,l=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),c=a===l,n=new RegExp(l+"/?(#.*)?$"),s=i.replace(n,a);return Object(A.b)("li",{key:e,className:p()((t={},t[O.selectedItem]=c,t),O.listItem)},Object(A.b)(b.Link,{className:O.link,to:""+s},e))}));return Object(A.b)("div",{className:O.tabsContainer},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(A.b)("nav",{"aria-label":t},Object(A.b)("ul",{className:O.list},c))))))},t}(l.a.Component),j=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,l=e.Title,c=t.frontmatter,r=void 0===c?{}:c,p=t.relativePagePath,d=t.titleType,m=r.tabs,u=r.title,w=r.theme,O=r.description,x=r.keywords,v=Object(N.a)().interiorTheme,k=Object(b.useStaticQuery)("2456312558").site.pathPrefix,E=k?i.pathname.replace(k,""):i.pathname,I=m?E.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",C=w||v;return Object(A.b)(s.a,{tabs:m,homepage:!1,theme:C,pageTitle:u,pageDescription:O,pageKeywords:x,titleType:d},Object(A.b)(g,{title:l?Object(A.b)(l,null):u,label:"label",tabs:m,theme:C}),m&&Object(A.b)(y,{title:u,slug:E,tabs:m,currentTab:I}),Object(A.b)(j.a,{padded:!0},a,Object(A.b)(h,{relativePagePath:p})),Object(A.b)(f.a,{pageContext:t,location:i,slug:E,tabs:m,currentTab:I}),Object(A.b)(n.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},u7Tq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return r}));var i=a("wx14"),l=a("zLVn"),c=(a("q1tI"),a("7ljp")),o=a("013z"),b=(a("qKvR"),{}),n={_frontmatter:b},s=o.a;function r(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(c.b)(s,Object(i.a)({},n,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In this lab, you will explore the consumer experience for APIs that have\nbeen exposed to your Sandbox catalog. Using the Developer Portal, you\nwill log in and subscribe to the latest Accessories Product and test the\nAPIs from the portal, before testing it in a live Web Application."),Object(c.b)("p",null,"In this tutorial, you will explore the following key capabilities:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Subscribe to a plan in order to consume an API.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Test an API from the developer portal.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Consume an API from a sample test application."),Object(c.b)("h2",{parentName:"li"},"APIC Dev Jam Series"))),Object(c.b)("p",null,"The APIC Dev Jam Series is a hands-on workshop with lab exercises that\nwalk you through designing, publishing, and securing APIs. This workshop\nis for API developers, architects, and line of business people who want\nto create a successful API strategy. There are 8 labs and each is 30\nminutes long. Make sure you choose enough time in your reservation to\nget through all the labs! "),Object(c.b)("p",null,"[NOTE: ]",Object(c.b)("strong",{parentName:"p"},"[This demo environment contains a\nfull API Connect installation in Cloud Pak for Integration. The login\ninformation to the APIC cluster will be sent in a separate email when\nyou reserve the instance. Use Google Chrome, Firefox or Microsoft Edge\nto access the cluster using the credentials supplied. Make sure you\nlogin using API Manager User Registry not Common Services\nregistry.]")),Object(c.b)("p",null,"Prerequisites: Labs 1-6"),Object(c.b)("h2",null,"Subscribe o the Accessories Product"),Object(c.b)("p",null,"In this section, you will subscribe to a plan for the\nAccessories Product using the IBM Consumer application."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Launch the Developer Portal in a browser using the link provided.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"If you are logged in to the portal, log out to clear your session.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the [","[API\nProducts]","] link.  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"594px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"8.333333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVQI1x3MyQoBcQCA8XkKCWU9oIwlM/6z2ZLtIqUsKVlKkyIuopQncfAMEuEg3uujOX2/0yfZqyeL9YupfWc4vTIYXxjOHnS6J0b5BjVhUc9Z/+ZpKxpBWRBSCrjjCp6EIJAx8ckarlgWf9pA2h+/bHZvtocP8+WDweRGq3cmkqrQF4K6XqShFWiaZTqqQTCpEzWqzswr64TVEv6MhSuuOv4BdEtMexbRPb8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 444fff2d8e0d46b7",title:"tutorial html 444fff2d8e0d46b7",src:"/cp4i-demohub/static/31d54a4a50d15206d415f6b488a0ed0c/d7406/tutorial_html_444fff2d8e0d46b7.png",srcSet:["/cp4i-demohub/static/31d54a4a50d15206d415f6b488a0ed0c/7fc1e/tutorial_html_444fff2d8e0d46b7.png 288w","/cp4i-demohub/static/31d54a4a50d15206d415f6b488a0ed0c/a5df1/tutorial_html_444fff2d8e0d46b7.png 576w","/cp4i-demohub/static/31d54a4a50d15206d415f6b488a0ed0c/d7406/tutorial_html_444fff2d8e0d46b7.png 594w"],sizes:"(max-width: 594px) 100vw, 594px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Notice that only the Inventory product is listed, even though you\njust published the Accessories product. Recall that you assigned the\nAccessories product to be visible only by developers who are logged\nin to the portal.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Enter Login page using Sign in option at the top right corner of the\npage."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"548px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABMklEQVQoz53OzUsCQRgG8L1ZVIfSFKIvC1fddcdtndnWjU1ZQkQTqmt/QxhR0Sno65h5tCzIoj+wtPKjeJpdFaxTOPDjmRkeXl4hIK/CH9XhizDXlJjAZEjr5gDn7Q1TTDudMMNOwoBJGJikwYhRaDLFLktCiJgZyFbWHbas21DtAlhmG0oqB5LKg6TziK3nEE9vYjGRQkA2MKOYsDQT0XQBysYWQmtZ+KkNa4UPHJmTMBGMw8nxIHE38Uu6u6UvQnsYvPx/bEGBZ1aCh3d1kfBtKeZVCz5Rw+iSimSYQChXn3Fz94R+lm5ruK48ulmq1H5l2ek5Hl5wf3qGy70DXBQPcbV/hHOuenwCAUOe1jfQ/gI6/eSanPDaaGIYb+8trt3LrjonND47+K/6R9s1eP/rB8mXezZWUmDxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html db604e248301f829",title:"tutorial html db604e248301f829",src:"/cp4i-demohub/static/4a4413879890e390f721d8ed8f8946c4/8bd1a/tutorial_html_db604e248301f829.png",srcSet:["/cp4i-demohub/static/4a4413879890e390f721d8ed8f8946c4/7fc1e/tutorial_html_db604e248301f829.png 288w","/cp4i-demohub/static/4a4413879890e390f721d8ed8f8946c4/8bd1a/tutorial_html_db604e248301f829.png 548w"],sizes:"(max-width: 548px) 100vw, 548px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Login using the username \\<portaluser",">"," and password\n\\<portaluser-password",">"),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZklEQVQoz42TWU/CQBSF+b++adQYkMQlRmP0r5ig0WiEWKnUKIb4boiUrlCWLkinM+1xOiiEReEmX287Mz09Z9pmKKXQTRt2y0EYEvxXSZJgWWWGYYh6ownTbkMzLSFuWC00dUN0lXedj8dxPBb9FV70gEwUUfT6Ljw/4PgCPxiMu+v5Ym4ikh4mwrMIQVUzYbc7S+MmSTzlcGHkdM7p+ej0AwyGFMEwmoNETLhVNYNvhYl2pyucMhbPCxISoWlYcLr90aI4mYL+3FR7t7G2XsLGjoTtXRnHZ1Ucnb5gKydjM1sWXdU8LkgZLKcHm+MGX4i4AKEzMAbT8lGSNDzKuqDybOBJMSCVNTxwJFmD5xEeGctr5HKVlTyyaQXIHyrI7SvI7lV4jFecnFfFef5A4XFkvNWskTB3m+4bY8lCxFt2XYKrmzour+socG7vP3FXbIjrdPyi8CH2ZvYb/NMhVqxV/pK0vgFrXUNOdj0gsAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 492593c5f2350159",title:"tutorial html 492593c5f2350159",src:"/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/3cbba/tutorial_html_492593c5f2350159.png",srcSet:["/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/7fc1e/tutorial_html_492593c5f2350159.png 288w","/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/a5df1/tutorial_html_492593c5f2350159.png 576w","/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/3cbba/tutorial_html_492593c5f2350159.png 1152w","/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/221bd/tutorial_html_492593c5f2350159.png 1398w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the [","[API\nProducts]","] link\nafter logging in.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the [","[ Accessories\n1.0.0]","] product. "),Object(c.b)("p",{parentName:"li"},Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOklEQVQoz11Ru27DMBDzh/cP8gudumYvOmTvVmTuELSGY8dO7EQP6y2xJ9kNghxAyD5RFE+sZu3hQ4B1HtoGGBeg3bpa6rkIySRYcwQbJ7D+DH7qIfqB0K8YSo+1J1QpRfQTHVIJKUZYEnUuXxDKdy7DOKyUiMOAKASsjzDaQa9QysLlHvGq/hrw8irw9qEhuEbTSoyTxjhqXEaFlEhQG/imATYbYLvFOCd0XeYZTFeD81lhVmREzqiUiXj/NPj69rDGQwiH5zJCwk0T4m6HuN+D0WHOdNkLMdCl4c6rIo38XIlsFcRU/i0RFWOoLxMObYfm2KKmNz381OiHM5mQiyAXqHyIZaz4L5LSo/Kd6BWNj5WX1xWPZWeVR17SLYk+I+/RY8sbx+23LklySjKnybsFjBwvOOFGrv8AsrQbDG32K0cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 6efccbf2582a30c0",title:"tutorial html 6efccbf2582a30c0",src:"/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/3cbba/tutorial_html_6efccbf2582a30c0.png",srcSet:["/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/7fc1e/tutorial_html_6efccbf2582a30c0.png 288w","/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/a5df1/tutorial_html_6efccbf2582a30c0.png 576w","/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/3cbba/tutorial_html_6efccbf2582a30c0.png 1152w","/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/32e21/tutorial_html_6efccbf2582a30c0.png 1394w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"You will be directed to the Product page which lists the available\nplans for subscription.\nClick [","[Subscribe]","] under\nthe [","[Silver]","] plan.  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.916666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuklEQVQY02VQywrCMBDM//+HnyCiN496UEoFoYjeClJL32myaTtu+ow2MMxs2J3JRmSlQlkbFJJ6HvTCRd2M9zTUcul19QSxNiNUzGRaENUwDDINTMO10cwW3RhA88wE4V66hoYUzocL9psjqryAPVcvxHYXoGnb1VbzC/9TrM4rjSQrEPhP+Kc73lGCT5rj8Yrg3ULErN25rNSwX2chXPefJjaVvLZqu17bIakNFK9vA93eOK04sOzxBXVwgR8iuqfpAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html fd5ece1fe8b66fa5",title:"tutorial html fd5ece1fe8b66fa5",src:"/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/3cbba/tutorial_html_fd5ece1fe8b66fa5.png",srcSet:["/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/7fc1e/tutorial_html_fd5ece1fe8b66fa5.png 288w","/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/a5df1/tutorial_html_fd5ece1fe8b66fa5.png 576w","/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/3cbba/tutorial_html_fd5ece1fe8b66fa5.png 1152w","/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/a35d6/tutorial_html_fd5ece1fe8b66fa5.png 1543w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Note:")," The Gold plan requires approval by the API provider for\nany subscription requests and allows unlimited requests for a given\ntime period. The Silver plan is limited to 100 requests per hour and\ndoes not require approval by the API provider for subscription\nrequests.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"A subscription wizard is initiated. All the applications available\nare displayed (in this case we only have the IBM Consumer\napplication). Click [","[Select\nApp]","] which\nis located below the application\ntile.  \n",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGUlEQVQoz62QyUvDQBjF5/+/a0A0LjQxrQtWRA89KNSjhyp4KVRExZg2aTrTmezJayZLrQuSggM/mPfx5n2PIf1bE+eX99hvH0NRDWzs6Ng6MLDdakPZ07C528r1YYFS3VX9CKrWKdE70E66MM4ucNq7AgFS/Och72OGN4vCcjgc6mOaY8882K4HZ1Yi7wXf9KSaWbbA3eADz68UxA8TpDEgghhzL1ob+W5KA/SuXzB8ckFEHKFrjhClCbwqlPtxY2p/nGXwowTEZQyPYxN0ziGWhuYN61AmSk2y+jfzDcJv3nDVt7qA9I0bjB6GmFAGyoMf5r/ClkFyLmcykDoUlHl55fCLcZ2GvAqVEB6m4EHyu7FJy0J/Bi4Atzf03Cz3XPEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html fe0fc338b5ae9fd3",title:"tutorial html fe0fc338b5ae9fd3",src:"/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/3cbba/tutorial_html_fe0fc338b5ae9fd3.png",srcSet:["/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/7fc1e/tutorial_html_fe0fc338b5ae9fd3.png 288w","/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/a5df1/tutorial_html_fe0fc338b5ae9fd3.png 576w","/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/3cbba/tutorial_html_fe0fc338b5ae9fd3.png 1152w","/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/821f3/tutorial_html_fe0fc338b5ae9fd3.png 1590w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"A window with the subscription details is displayed to confirm the\ninformation provided.\nClick [","[Next]","] once\nyou have reviewed the\ninformation.  \n",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"914px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.08333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAABp0lEQVQ4y41Uy07DMBDM//8BB65I3JD4BgSqOCC4cEFIiEJpReM4TvzOMmvHxQIiutVodx17POu12xDsc68ThDCktafgI3nAuUDrt56k1Mj9ASEEMsZQK7oU19b4EGkEiewtddKSsYFCBCHG2Q+jo145LJyQTwef10GAsSl2Pq9peixQIBxMBudyAGbP3xglr9Frnu9zPGY0SvtDwhhBalGqsZ4M+xm2wFeoxtVM3hQFhZg/xhhQvkSpitquQ9zTvm1RnknnNE3TjJg8W6nuNyHOwlhLL69rkIhEyIffCkECscBGvBnnPK6GIZEuEnJ5mEGb7Q4drxVlH+NUKfzGMqHN10B0ij52Le1Fj246lOvT+eoKnHN3sdU/CjFB9gqTA+5dSKqW8L9CNyuUAw06K9Y/lNUK/XEKiba7T2BPcVpWx2R8yY8i1FaTGnFdhIS3yH8oxT0tdlRTLi6f6OT0gd43KuX1ebE5F+ns/JFuVu8pV9r9Tahnwrv7HV1dr9FtcyAs5fOPu7u63dDTs5gJFxSWGG8gl56e1fd4AZfIMxz+QNS8jp/eF9tkkQRqvOGLAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html ea31c68f8a08a741",title:"tutorial html ea31c68f8a08a741",src:"/cp4i-demohub/static/f73b48b7fdc4fef23ab41a9542df934d/01161/tutorial_html_ea31c68f8a08a741.png",srcSet:["/cp4i-demohub/static/f73b48b7fdc4fef23ab41a9542df934d/7fc1e/tutorial_html_ea31c68f8a08a741.png 288w","/cp4i-demohub/static/f73b48b7fdc4fef23ab41a9542df934d/a5df1/tutorial_html_ea31c68f8a08a741.png 576w","/cp4i-demohub/static/f73b48b7fdc4fef23ab41a9542df934d/01161/tutorial_html_ea31c68f8a08a741.png 914w"],sizes:"(max-width: 914px) 100vw, 914px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The last step is displayed with the summary of the subscription.\nClick [","[Done]","] to\nfinalize the\nwizard.  \n",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"887px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvElEQVQ4y5VSv2sVQRB+/7CFlZAuhWCZwmBQQVAwiEZDCrFLikiqQBSLNImVCHnv3e3d/t6928+Zu73LybuHuPAxuzM73+zMt4tSWCyXGoKs0h4xtgihQdsmFKXF3VLB+yb7e3BsuTJYFwYpJUzXwrmIWjpUtYOxobvctH2S933M5wLsH2PkqyjmqFjTtIgZC2UjtOvB+1qHEdKEzsd29JtJzOWY6c+MhZwcOJkrurAJP+z9PWy+az0/ps/vXji8wlBFnomsJaRUEFUFpTSkUiiFINKAucVjGB40SyicxqosSJSSZig7e7daEWlFe4GSCrUTMbYS6kzY3KxhK0MzokuGxCLL/jaxID34PCi8nZBmkUgpvLuG+Vmg8oFmFRFiM9vqPwm5ZW7lVPzCb626b2MzhmT+MlN0HWVCuY3w6e0VbmuBQCpqG8aW6U3/JwrPEGk+afB/PLnB/sEVDl58x7Pn3/Dy1Q/4mEaOeVHywP8Cs8WAt09OsPvgA/Z2jvH44RH2Hh3B0w9QIW0ScsvzbWUfEV5+Osfn119x9v4CX96QPTxHLNZQvt0kZMukLIKZoBPG8b6ZLWfC/Qz/AE5GOTfzSopIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 359b7068e5f3a808",title:"tutorial html 359b7068e5f3a808",src:"/cp4i-demohub/static/04a24c6f4df52c208dbf47e6c8846a23/59d12/tutorial_html_359b7068e5f3a808.png",srcSet:["/cp4i-demohub/static/04a24c6f4df52c208dbf47e6c8846a23/7fc1e/tutorial_html_359b7068e5f3a808.png 288w","/cp4i-demohub/static/04a24c6f4df52c208dbf47e6c8846a23/a5df1/tutorial_html_359b7068e5f3a808.png 576w","/cp4i-demohub/static/04a24c6f4df52c208dbf47e6c8846a23/59d12/tutorial_html_359b7068e5f3a808.png 887w"],sizes:"(max-width: 887px) 100vw, 887px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(c.b)("h2",null,"Test APIs from the Developer Portal"),Object(c.b)("p",null,"In this section, you will use the Developer Portal to test one of the\nAccessories APIs. This is useful for application developers to try the\nAPIs before their application is fully developed or to simply see the\nexpected response based on inputs they provide the API."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the [","[logistics\n2.0.0]","] API\nlink on the Accessories product\npage.  \n",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbUlEQVQoz61S204CMRDt/3+LqIkgIBpMDPHFF2NiNCgEkwX31r21u9st5DjtclmIEB/c5OS0s+2Zzsxhg+4TRiMHg+ELzjs9XHT6xDXMutXu4eyqi9YRmH+X3QHaN0PcPj6AwVdALACs8B8f86MMjh8jTAsEibQI44wgEBDHWYFUlkjFCcgdmO9x+M4C3AvB3cByGEvwJLecSAVRaGR59ScwuXCQvD4jmswgZ1Pk0xmikMSEogN6K2ZYFNUa+igYp1Ij84pyhaxc1thm1A3RJqptkl2ytaAwgQOYS4XSKJXZC2IFvVyhKEvaS1S0tqK/tIIdBkxJhiutEYQprvtjfLuxneD4I8Dd/QSq2m+FpKoM6hceBDaH4izHN03/bezCcSN4PMHXnOP900NAzticS6ldPM0tEpo4M7aoLSJsoFmGuVDqFSWre5erpd03ExvBiDQiay8FZoTmZB2XZ/DIJrUfC/L6vl02rTg1EIMfRbdD5JsIGDMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 8ec6b1024d5a2f9a",title:"tutorial html 8ec6b1024d5a2f9a",src:"/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/3cbba/tutorial_html_8ec6b1024d5a2f9a.png",srcSet:["/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/7fc1e/tutorial_html_8ec6b1024d5a2f9a.png 288w","/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/a5df1/tutorial_html_8ec6b1024d5a2f9a.png 576w","/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/3cbba/tutorial_html_8ec6b1024d5a2f9a.png 1152w","/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/13676/tutorial_html_8ec6b1024d5a2f9a.png 1544w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the [","[GET\n/shipping]","] path\non the left navigation menu. ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the ","`","Try it","`"," link to access the test\narea.  \n",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAACHVAAAh1QEEnLSdAAABg0lEQVQoz5VTy27bQAz0/39Y0UPQW45NkCKI7djWrrTvlybDleQKBZogAgYUKGo43OEe2vERRl3hfMTcGuZ5xneerf7Hzzc8/DrhEG+v0HqENgGTDUi5oNSGLCiVKMjMSb6/M1fZuNYd2owQC6xPOBxVwp+zxbuOOA8enh9upxPU82/oy4VFbGQMxmnq0YdwVybiligqZ363OLwcFZ5eB1ynhMsYYWKFGxTa+xuyIYlzmCYSkTiEBZY5Y20n3xOPEwlHjilwgZLDMlJMqauQEQel0fqIzMfE0fNd1V91K6EotCuR8blDzm8rEqIQInMVhY1CjEhs1lYiia1tsS2EG5EN+a7QOb+oIqwTo2pHLotRaTVpD8n3kTeFm0pRuF+HQSm6nLlWNIz4ZIFoivs/YR+ZpDeuVODZxUQlaVkpGX+PvkrMh5i/IOT5OLopxTHlbkpZfy4rtnc5Imn65ci15B618f023Y34B1IvTT8l3F/Dq7a4aA9tEwYToXYYpsi1y13hB/tNquQx0cxIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 6326764a039cba2b",title:"tutorial html 6326764a039cba2b",src:"/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/3cbba/tutorial_html_6326764a039cba2b.png",srcSet:["/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/7fc1e/tutorial_html_6326764a039cba2b.png 288w","/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/a5df1/tutorial_html_6326764a039cba2b.png 576w","/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/3cbba/tutorial_html_6326764a039cba2b.png 1152w","/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/4147f/tutorial_html_6326764a039cba2b.png 1429w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Scroll down to the Parameters section, enter any ",Object(c.b)("strong",{parentName:"p"},"United State Zip\nCode")," (e.g., ","`","90210","`",") and\nclick [","[Send]","] to\ninvoke the API.  \n",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1128px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABI0lEQVQoz42SvVKEMBRGeXd7Cx9An8HKzs7Oxpkdd5U4sGsChARIQlhYm88bfmbWcUcpDqFITu53b6Jc1ShUg8Z1MO1x4vx/JXZeo7IykEQQWt9DagNRaPj+C67rZ4Z/mPZYT8LwCaJRSDeUtcN7miMRGry0ECsJe2XdIgqihVCyIuGW7ZHyEqrxdEG7Gm08oqVfi1DbDru0APtUENpDKLe6wiCNFtkopOi61DBSojcGXVXB+476eYI/Dn/Shh6GoSxTbcZJdSg2G7BXBpFwiDhBtovBqVIuzVjFJTJKcZCURLU/hYaENfvAYRsjI1n+xpCzdIp+KSqJuLTYZw049VzS65gin0udh7MO1syMr+A34Vx/GvD8InFz/YTbq3s83D3iG9hyp6k7MxkQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 74d26a44eab03d67",title:"tutorial html 74d26a44eab03d67",src:"/cp4i-demohub/static/76f6127d0b0891bd85211563c8aa3b91/5469f/tutorial_html_74d26a44eab03d67.png",srcSet:["/cp4i-demohub/static/76f6127d0b0891bd85211563c8aa3b91/7fc1e/tutorial_html_74d26a44eab03d67.png 288w","/cp4i-demohub/static/76f6127d0b0891bd85211563c8aa3b91/a5df1/tutorial_html_74d26a44eab03d67.png 576w","/cp4i-demohub/static/76f6127d0b0891bd85211563c8aa3b91/5469f/tutorial_html_74d26a44eab03d67.png 1128w"],sizes:"(max-width: 1128px) 100vw, 1128px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"You should see a [","[200\nOK ]","]and\na response body as shown\nbelow.  \n",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1136px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdklEQVQoz5WS23KCMBRF/f9v6kund2srXhBEJRhu4RaCoPVt9ySWOm2dafuw5pDAWdkhGcRZBVEqqPaAercHT0oEcWEqTyvDlsZBnBtYmME3CMS5QlrukBQnZLPHoFItqqZD3e7RdEcMLRfXj1MMJx4exg5ebWYYzTeYLEO4rIDjZ3BYBo9XWIUSK6r6uag7DCTJNH1CvWKY1QiFxFanpKqfeSoRUSJRtvTNiT7Zl4RxViLJpRFq/DDHKkipuUGimwghaaGqo6YWUdaYd5eotLDp3qDR6Zr9EU+0zaubEe5ebNwTt88zjGZrWG4Ae5NgE9VY0zbX0TdozmxZizRKQwldP8FosoK1YLAcdpItAiyDjJoq+HF9kQ1JS0VC1QtJJqluRQPXE5hPI4wZgxcVNNfCT86NZ5H8Kaw/DqM/lIAa7UVsmDKOJacrEvUi+b+EujISOl6KuR3BYrRVnn8Kf6M8/8PD+WKLGttUgdNpcqFRZvwXdMJ3DKDkOdVKKBoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html f9b90c1492df91e8",title:"tutorial html f9b90c1492df91e8",src:"/cp4i-demohub/static/b637500c7b4d7870006db9653200d0e7/0fd57/tutorial_html_f9b90c1492df91e8.png",srcSet:["/cp4i-demohub/static/b637500c7b4d7870006db9653200d0e7/7fc1e/tutorial_html_f9b90c1492df91e8.png 288w","/cp4i-demohub/static/b637500c7b4d7870006db9653200d0e7/a5df1/tutorial_html_f9b90c1492df91e8.png 576w","/cp4i-demohub/static/b637500c7b4d7870006db9653200d0e7/0fd57/tutorial_html_f9b90c1492df91e8.png 1136w"],sizes:"(max-width: 1136px) 100vw, 1136px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Go ahead and try out the [","[Logistics GET\n/stores]","] and\nthe [","[Financing GET\n/calculate ]","]APIs\nas well."))),Object(c.b)("h2",null,"Summary"),Object(c.b)("p",null,"Congratulations! You have created multiple plans, tested APIs in the\ndeveloper portal, and used the APIs in a consumer application. "))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-apic-dev-jam-lab-7-index-md-cbf410280f76fbc310ca.js.map