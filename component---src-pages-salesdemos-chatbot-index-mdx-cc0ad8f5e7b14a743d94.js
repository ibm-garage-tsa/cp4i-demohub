(window.webpackJsonp=window.webpackJsonp||[]).push([[50,41,42,69,70,72,73,74],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),o=a.n(i),c=a("NmYn"),n=a.n(c),s=a("Wbzz"),b=a("Xrax"),r=a("k4MR"),l=a("TSYQ"),d=a.n(l),p=a("QH2O"),m=a.n(p),g=a("qKvR"),u=function(e){var t,a=e.title,i=e.theme,o=e.tabs,c=void 0===o?[]:o;return Object(g.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===i,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,c=o.baseUrl,n=o.subDirectory,b=c+"/edit/"+o.branch+n+"/src/pages"+t;return c?Object(g.b)("div",{className:"bx--row "+h.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},w=a("FCXl"),f=a("dI71"),v=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),c=a===o,b=new RegExp(o+"/?(#.*)?$"),r=i.replace(b,a);return Object(g.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=c,t),v.listItem)},Object(g.b)(s.Link,{className:v.link,to:""+r},e))}));return Object(g.b)("div",{className:v.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:v.list},c))))))},t}(o.a.Component),x=a("MjG9"),O=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,c=t.frontmatter,l=void 0===c?{}:c,d=t.relativePagePath,p=t.titleType,m=l.tabs,h=l.title,f=l.theme,v=l.description,j=l.keywords,N=Object(O.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,T=k?i.pathname.replace(k,""):i.pathname,I=m?T.split("/").filter(Boolean).slice(-1)[0]||n()(m[0],{lower:!0}):"",C=f||N;return Object(g.b)(r.a,{tabs:m,homepage:!1,theme:C,pageTitle:h,pageDescription:v,pageKeywords:j,titleType:p},Object(g.b)(u,{title:o?Object(g.b)(o,null):h,label:"label",tabs:m,theme:C}),m&&Object(g.b)(y,{title:h,slug:T,tabs:m,currentTab:I}),Object(g.b)(x.a,{padded:!0},a,Object(g.b)(A,{relativePagePath:d})),Object(g.b)(w.a,{pageContext:t,location:i,slug:T,tabs:m,currentTab:I}),Object(g.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},LXZl:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var i=a("wx14"),o=a("zLVn"),c=(a("q1tI"),a("7ljp")),n=a("013z"),s=a("rl46"),b=(a("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},l=r("Row"),d=r("Column"),p=r("ResourceCard"),m={_frontmatter:b},g=n.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)(g,Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(s.a,{name:"Ulas Cubuk",lastUpdated:"December 2020",readTimeMinutes:"120",mdxType:"ArticleDetails"}),Object(c.b)("p",null,"This demo shows how Watson Assistant on IBM cloud can be used together with CP4i to create an\nengaging chatbot experience which allows users to make online insurance claims and also upload\nphotographs of the items for which they wish to claim."),Object(c.b)(l,{className:"resource-card-group",mdxType:"Row"},Object(c.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(c.b)(p,{subTitle:"Storyboard",title:"Avoid the chaos with integrated cognitive technology",aspectRatio:"2:1",actionIcon:"Blog",href:"https://community.ibm.com/community/user/middleware/blogs/ulas-cubuk1/2020/09/09/integrated-cognitive-technology",mdxType:"ResourceCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"232px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"93.9655172413793%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiklEQVQ4y3WTz0tiURzFn82YiBUlbXVhtJAwCNpEtDIQpH9A3LrJdYHRTvDvaArLxTAFLlxlY6s0pWJ0EaU2KZWihT9yytScj++ZadZZPO679577Ped7zxXq9Xoikdjc3PzRh42NjZ2dnWKxWK1Wy+Xyvz4IqVRKp9MJgjA4OPi9F8wwv7S0BPPl5aWfL3i9XnYcHR1ls9lkMvlXxNXVVTqd5lev17NqMpkeHh5qtdrj42MPeXd3lyLsbjabjUajKeL19ZUvpSYmJgQRCwsL+XweQqlUYr5SqbTIe3t7MpkM2+fn5263+6eI7e3tSCSC1NXV1cXFxfn5eSwEg8HOuTDht8gcjOa1tTUG30QwsNlsbHp+fuYbCASYOTs7KxQKZrPZbrdXRbTIAwMD8Xicky4vL5MiEJLL5XCISDbFYrHl5eWLi4u5ubmxsTGFQmG1Wjm3RaYUCx1JHfD79PQEn1ZRE9vUd7lcW1tbDA4ODtqeaRjVPB4P/fslAud+v5/eEARaNTU1pdFoVlZWRkZGhoeHZ2dncfrRs1wux4VkW6vVckP39/czMzOjo6Ocfn19jWYOur295dB3zyTp9PT0zxtoD5MYNhqNQ0NDNALm+Pi4wWDIZDIwEfWlZ+nOo9EoEg4PDyGo1WpqMmCJRrTvmcpStrDqfQPztIQms2qxWJRK5fT09N3dnVSznbCOZ4fDwQBL3fFGFLTJycn19fWbmxtqdie8XRnZtJQMRXoRDodRTgTQxbV9km06zDPoznYHiOQbCoVUKtXJyQlN6eYLPp8PtYSZh8XF/u7F/v4+xZ1OJ/qR8JGMWik6REX4DNI8USdn0mN6J/N0iF6kD+E3HB8fc+0kGc8fyP8Bn+boIjA6reEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Blog icon",title:"Blog icon",src:"/cp4i-demohub/static/c2d609ac5870cce57f74569ee6188331/d9af1/blog-icon.png",srcSet:["/cp4i-demohub/static/c2d609ac5870cce57f74569ee6188331/d9af1/blog-icon.png 232w"],sizes:"(max-width: 232px) 100vw, 232px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(c.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(c.b)(p,{subTitle:"Detailed steps",title:"Demo Instructions",aspectRatio:"2:1",actionIcon:"download",href:" /cp4i-demohub/pdf/chatbot-v0.1.pdf",mdxType:"ResourceCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"320px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAADRElEQVQ4y42T2Sv0YRTHnyzFlRuaC7lQatAwdlP2xBtjCU3JklAyGcUFRREludIUUhKGLNlTU9YL8Q9wQ8kSSfZ9X+b9/Dya1HvzPvX7dZ7znO95zvme7yO+vr4eHx+Pj4/z8vLUanVoaGhgYKBWqw0ODg4ICAgJCcHWaDRJSUlbW1s2m+3y8vLp6enj4+Pi4kKwwVVaWhoVFbW6ujo2Nma1WmdnZycnJ+fn50dGRnCWl5cLIYKCgvb39wm+u7u7v79/f38XpHl9fY2JiRkeHuaAlLZfiwj+HR0d4ntRy+HhIR7AAAXHLy8vsbGx/f39soWbmxt5dnV19fDwQGh7eztIFxcXid/d3f38/Ly+vlbKBpOQkNDX10fc+fk56UDe3t7il03t7e15e3uDdHJy4p+Tk/P29gZeEEEoZQ8MDGCDBIYHg5vxUAihR0dHPT09cFFSUgJ5kjlBBD3Hx8f39vbiOjs7o3Iooarn52ci7I1wFQFDQ0ME46RZIRlKTk6G538J+73kEeDU1FTJpVheXmYSKpUqIiKCUZeVlVVWVlJbfn4+vRUVFXFaVVXF32AwMFEG5unpaTKZ5ubmRHh4OBykp6c3Nzc3NDSgE7YIo6ampqWlJTs729XVFQ86qaurq62tNZvNXIAnOjpaICmstbW1nZ2diYkJ+vf19e3q6oKkzs7O09NThOXo6FhRUUGpKysr09PT9fX1QBQgZUhwY2MjBtzk5ua2tbUhL7ZeXl4QzlVZWVmA/fz87ANTSkbDWEtLS9ywsLBwcnLi7u7e3d29vr4uVbW9vd3a2irBBwcHZG9qasIfGRn5U/bi4uLm5mZ1dbUshJlTIQbcwCpE0jxsFxYW6nQ6Hx8fjsLCwn5u3tjY+K1Bi8VCt9BDOXDh4OBgNBq52d/f3162crOSQAioLigowHB2duafkZHBPJEUY3Nzc5Pcwh8TtYMVIBFpaWkeHh48YyaZkpKSmZmJZlB7YmIi6fV6PZ4/34uJ8sJJQRivVdE29cTFxY2Ojv6PwgYHB0mKoTwMBIyFpGBiamoK6ZNyfHx8ZmaGypGRfQsMXpkQapPvT/BxORNivLxVtEVhcC4NerFvmQv6KS4uhkveCai/UJKead4Keh0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cp4i-demohub/static/72b9c11886a51b44e05e552a0a39a3f3/46c5d/pdf-icon.png",srcSet:["/cp4i-demohub/static/72b9c11886a51b44e05e552a0a39a3f3/7fc1e/pdf-icon.png 288w","/cp4i-demohub/static/72b9c11886a51b44e05e552a0a39a3f3/46c5d/pdf-icon.png 320w"],sizes:"(max-width: 320px) 100vw, 320px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(c.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(c.b)(p,{subTitle:"Resources and code samples",title:"Demo Artifacts",actionIcon:"arrowRight",aspectRatio:"2:1",href:"https://github.com/IBM/cp4i-demos/tree/main/ace-weather-chatbot",mdxType:"ResourceCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cp4i-demohub/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/cp4i-demohub/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(c.b)("h2",null,"Overview and description"),Object(c.b)("p",null,"An insurance company that specializes in ‘Storm insurance’ wants to streamline its claims process.\nThey have a chatbot that verifies that there was a storm on the date and location provided by the\ncustomer and provides an initial estimate for property damage, by analysing images uploaded by the\ncustomer and raises a ticket for human followup."),Object(c.b)("p",null,"This demo shows how Watson Assistant on IBM cloud can be used together with CP4i to create an\nengaging chatbot experience which allows users to make online insurance claims and also upload\nphotographs of the items for which they wish to claim."),Object(c.b)("p",null,"It shows how we can securely link cloud applications to CP4i - whether running on the cloud or\non-premise by exposing APIs securely via the IBM DataPower Gateway. "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABu0lEQVQoz42SzW/aQBDFfUAICXGAAxIgmlIQHxL/PUHlwplbpB5aqQkGkpjadYwNXX+s7V2/7q4NocqhrLSyPfv2N29mrH2+u8N4PEa324WmaSiXy9judoiiEC5J8WQQHE4UWZapzTkXT8C2GE4eB3COiaBYWr/fx2QywXQ6RbPZRLVaxXw+x2LxFX6UwiMx0kgoU3k1A2MMlMZ43YmETvIR+Ek4GwwGGA6HqNfrqFQqmM1mWC6XoFGkRI8/n7DdbBHHsbq82egwjGcRW8NxHKW5AL/0esqhhHY6HVWybdu5SBpLU9zP77FarQonXMVNl8Kn7KNDCZLA0WiERqOhgPv9Xh1KoVzS2fvicIXxxYMDh4QX3QXYarXQEy7b7bZyWKvV/gGeheeyOGd4MSx8ezTw/PoCQoiIZe9AOdnrXSqVYJrmlcPsMmEULbB/W/AcC5Zl4XQ8Fs3JE/4XmINyoL4n+BMk6uzHTjgrzH/fHvF2pLc5vC45EEPg4jtOGGyPqnPGuHqnMb+1ZAEKAhU7HN6QJElRtokwzIcSBgSe56p+3gT0fR/r9VoM65f6sSVU13W4rlskDBVMJvgL2Vi89DdOkI8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"chatbot overview",title:"chatbot overview",src:"/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/3cbba/chatbot-overview.png",srcSet:["/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/7fc1e/chatbot-overview.png 288w","/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/a5df1/chatbot-overview.png 576w","/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/3cbba/chatbot-overview.png 1152w","/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/0b124/chatbot-overview.png 1728w","/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/f0200/chatbot-overview.png 2146w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"The demo creates three separate API implementations which are independently deployable and scalable\nbut are brought together to support one application."),Object(c.b)("p",null,"This also leverages Watson AI for image recognition and also IBM’s Weather service using the CP4i\nbuilt-in TWC Connector."),Object(c.b)("p",null,"This demo includes a Node.js GUI for the chatbot."),Object(c.b)("h2",null,"Solution Architecture"),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACv0lEQVQ4y3VUzU8TQRzdP8Y/wav/hwfjiajBmBAPJh48e9DogUiDCDEGvIoGDwbRRAUDgWgtFmjpJ3S77e7s9/fXc2Z2t6WAk0y7mZnf+719780KYZTANC00Gk202m00mi20Wm30RBFBGMMLIqiaDkJU6IaJKE7ARpqmSJMkm+w5W4TAihzX50Xt7imO6k3+7DguXD+CYftotLq8YX8gw/FjDnBh5KACcMkmHVFcrCeIwwi0LyL6D8R8Ve/U4G4swFsvwTnYylbTBAJrluQdOwMHX8oKvlUIdNNDW42wsmtjs+nx/Z22i7d7DvYHgNk5An4uAd/nge5OTpIDprR7psvcWgdXpn7g6sw2uqKBxxs2hFsE10o6pRfg+rIBYUrDzHsT21WC6YUWHi53cXe+jtLHDscQCoHZGOo+Nn4r2KxqSKjYjOHqvo/dk5CdQrkX4NWWhSaJsb43xJ3Zv3j0pobpF1XMfsgBGVjhJivygpibQQgBkQfQpC7UoYh+X4JlGtSskBd+/qXg/ssDPFg8xL1SFYufTsaAjhtAlhUeC0n1oRgBDNPEaU/EYa1BXe5AkiSohoOu7PPCr2WCm08ruD1bxY0nFTx/1x6/ckw1ZPnygxCi4oIYPizahDmdmUYn/WGZHWjB5bHJpRPObxIzhGoGZ4+hiFZMQYd6kGUubzKafC0HLCYbqhXCdKMRVERZMY2jKIbthegpWYTYW7EG7EwBOuFyAcgY6nY44sdukdgfoC8NqIYuTimg5QRwKDjRDNTrx/SaSrzpCPBsdHSbMRnf15jGh2nHNOYa6mMNbccDUTVqoM0ZT+YwzZIuqtRpzf6v6FzDMwQumMJva5qhH8p/8Lr8DCv7cxA1hWYSsLyIMo75R0F3IqqhPwFw3oMJwGNygNXaEtbqyzimXxbNSqimAddVptlkk5lWFF/G8h9kjbpe3K9YqwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"chatbot architecture",title:"chatbot architecture",src:"/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/3cbba/chatbot-architecture.png",srcSet:["/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/7fc1e/chatbot-architecture.png 288w","/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/a5df1/chatbot-architecture.png 576w","/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/3cbba/chatbot-architecture.png 1152w","/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/29764/chatbot-architecture.png 1646w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("h3",null,"Other resources"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.ibm.com/PHIPPEN/demos-2020"},"Flows for Designer, API Connect, Watson Assistant")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.ibm.com/PHIPPEN/watson-assistant"},"Chatbot Node UI"))),Object(c.b)("p",null,"Get started with the demo by reviweing the storyboard/video instructions, detailed instructions and additional artifcats."))}u.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-salesdemos-chatbot-index-mdx-cc0ad8f5e7b14a743d94.js.map