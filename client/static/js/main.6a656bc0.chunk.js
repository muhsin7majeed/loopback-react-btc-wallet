(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},34:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),s=a(3),o=a(4),m=a(6),i=a(5),u=a(7),p=(a(21),a(12)),d=a(1);function b(){return localStorage.setItem("isLogged",!1),localStorage.setItem("accessToken",""),l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement(d.b,{className:"navbar-brand",to:"/"},"BTC ",l.a.createElement("i",{className:"fab fa-bitcoin"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement(d.b,{className:"nav-link",to:"/about"},"About Us ",l.a.createElement("span",{className:"sr-only"},"(current)")),l.a.createElement("div",{className:"ml-auto"},l.a.createElement(d.b,{className:"btn btn-success btn-sm",to:"/signup"},"Sign up"),l.a.createElement(d.b,{className:"btn btn-primary btn-sm ml-3",to:"/login"},"Login")))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"landingPage jumbotron"},l.a.createElement("h3",null,"Create a new free account"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt eaque neque, eius dicta labore iure iste voluptatum? Odit dignissimos labore omnis dicta, maiores hic reiciendis dolorem accusamus saepe natus!"),l.a.createElement(d.b,{className:"btn btn-success ",to:"/signup"},"Sign up"),l.a.createElement(d.b,{className:"btn btn-primary ml-3",to:"/login"},"Login"))))}var h=a(16),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleLogin=function(e){e.preventDefault();var t={email:a.refs.email.value,password:a.refs.password.value};h.request({method:"post",url:"https://loopback-react-btc-wallet.herokuapp.com/api/Users/login",data:t}).then(function(e){a.setState({access_token:e}),console.log(e),localStorage.setItem("userEmail",t.email),localStorage.setItem("isLogged",!0),localStorage.setItem("accessToken",e.data.id),a.props.history.push("/dashboard?access_token=".concat(e.data.id))}).catch(function(e){console.log(e),a.setState({err:e.response.data.error.message})})},a.state={err:"",access_token:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(d.b,{className:"btn btn-secondary mb-3 mt-3 btn-sm",to:"/"},l.a.createElement("i",{className:"fa fa-arrow-left"}),l.a.createElement("i",{className:"fa fa-home ml-3"})),l.a.createElement("h3",null,"Login"),l.a.createElement("form",{onSubmit:this.handleLogin.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{ref:"email",type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Enter email"}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{ref:"password",type:"password",className:"form-control",placeholder:"Password"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")),l.a.createElement("div",{className:"mt-3"},l.a.createElement("p",{className:"text-warning"},this.state.err)," "))}}]),t}(n.Component),f=a(16),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleSignup=function(e){e.preventDefault();var t={name:a.refs.name.value,email:a.refs.email.value,password:a.refs.password.value};f.request({method:"post",url:"https://loopback-react-btc-wallet.herokuapp.com/api/Users",data:t}).then(function(e){a.props.history.push("/login")}).catch(function(e){console.log(e),a.setState({err:e.response.data.error.message})})},a.state={err:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(d.b,{className:"btn btn-secondary mb-3 mt-3 btn-sm",to:"/"},l.a.createElement("i",{className:"fa fa-arrow-left"}),l.a.createElement("i",{className:"fa fa-home ml-3"})),l.a.createElement("h3",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.handleSignup.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputName"},"Enter your Name"),l.a.createElement("input",{ref:"name",type:"text",className:"form-control",id:"exampleInputName",placeholder:"Enter your name"}),l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{ref:"email",type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{ref:"password",type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),l.a.createElement("div",{className:"mt-3"},l.a.createElement("p",{className:"text-warning"},this.state.err)," ")))}}]),t}(n.Component),v=(a(60),a(16)),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleNavbar=function(){a.setState({isNavOpen:!a.state.isNavOpen})},a.handleLogout=function(){v.request({method:"post",url:"https://loopback-react-btc-wallet.herokuapp.com/api/Users/logout?access_token=".concat(a.state.access_token)}).then(function(e){console.log("logged out"),a.setState({logout:!0})}).catch(function(e){console.log(e)})},a.renderLogout=function(){if(a.state.logout)return l.a.createElement(p.a,{to:"/"})},a.state={userEmail:localStorage.getItem("userEmail"),logout:!1,access_token:e.access_token,isNavOpen:!1,btcInINR:l.a.createElement("small",{className:"text-warning"},"failed to fetch"),btcBalance:"0.00"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.coindesk.com/v1/bpi/currentprice/INR.json").then(function(e){return e.json()}).then(function(t){return e.setState({btcInINR:t.bpi.INR.rate})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.isNavOpen?"0":"-100%";return l.a.createElement("div",null,l.a.createElement("div",null,this.renderLogout(),l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"bars"},l.a.createElement("i",{onClick:this.handleNavbar,className:"fa fa-bars"})),l.a.createElement("div",{className:"rightNav"},l.a.createElement("div",null,l.a.createElement("span",null,"Bitcoin balance ",l.a.createElement("br",null)," ",l.a.createElement("i",{className:"mr-1 fab fa-bitcoin"}),this.state.btcBalance)),l.a.createElement("div",null,l.a.createElement("span",null,"Current Price ",l.a.createElement("br",null)," ",l.a.createElement("i",{className:"mr-1 fas fa-rupee-sign"}),this.state.btcInINR)))),l.a.createElement("div",{className:"sideBar",style:{left:e}},l.a.createElement("ul",null,l.a.createElement("li",null,"Logged in as ",l.a.createElement("br",null)," ",this.state.userEmail),l.a.createElement("li",null,l.a.createElement("button",{onClick:this.handleLogout,className:"btn btn-block btn-danger"},"logout"))))))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h3",null,"Send Crypto"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputWallet"},"Wallet address"),l.a.createElement("input",{ref:"wallet",type:"text",className:"form-control",id:"exampleInputWallet",placeholder:"Enter wallet address"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputBTamount"},"Amout"),l.a.createElement("input",{ref:"BTamount",type:"number",className:"form-control",placeholder:"Enter amount"}),l.a.createElement("input",{ref:"cashAmount",type:"number",className:"form-control",placeholder:"Bitcoin in Doller"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Send"))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={btcBalance:"0.00"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.coindesk.com/v1/bpi/currentprice/INR.json").then(function(e){return e.json()}).then(function(t){return e.setState({btcInINR:t.bpi.INR.rate})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h3",null,"Inbox"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputWallet"},"your wallet address"),l.a.createElement("input",{readOnly:!0,ref:"wallet",type:"text",className:"form-control "})),l.a.createElement("hr",null),l.a.createElement("form",null,l.a.createElement("h3",null,"Your Wallet"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"BTC"),l.a.createElement("input",{readOnly:!0,ref:"BTbalance",type:"number",className:"form-control"}),l.a.createElement("small",{className:"form-text text-muted"},"It's worth in Doller"),l.a.createElement("input",{readOnly:!0,ref:"cashAmount",type:"number",className:"form-control "})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Refresh")))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleInbox=function(){a.setState({currentWindow:l.a.createElement(w,null),which:"send"})},a.handleSend=function(){a.setState({currentWindow:l.a.createElement(y,null),which:"inbox"})},a.state={access_token:"",currentWindow:l.a.createElement(y,null),which:"inbox",isLogged:!1,showData:"none",errMsg:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){"true"===localStorage.getItem("isLogged")?this.setState({isLogged:!0,showData:"block",showWarning:"none"}):this.setState({errMsg:"You Are Not Logged In",showWarning:"block"})}},{key:"componentWillUnmount",value:function(){localStorage.setItem("isLogged",!1)}},{key:"render",value:function(){var e=this.props.location.search.replace("?access_token=",""),t="inbox"===this.state.which?"borderBottom":"",a="send"===this.state.which?"borderBottom":"";return l.a.createElement("div",null,l.a.createElement("div",{style:{display:this.state.showWarning}},l.a.createElement("h2",{className:"text-danger"},this.state.errMsg),l.a.createElement(d.b,{to:"/signup",className:"btn btn-success m-1"},"Sign In"),l.a.createElement(d.b,{to:"/login",className:"btn btn-primary m-1"},"LogIn")),l.a.createElement("div",{style:{display:this.state.showData}},l.a.createElement(N,{access_token:e}),l.a.createElement("div",{className:"navControls"},l.a.createElement("div",{onClick:this.handleSend,className:t},l.a.createElement("i",{className:"fa fa-paper-plane"})),l.a.createElement("div",{onClick:this.handleInbox,className:a},l.a.createElement("i",{className:"fa fa-inbox"}))),l.a.createElement("div",null,this.state.currentWindow)))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/",exact:!0,component:b}),l.a.createElement(p.b,{path:"/login",exact:!0,component:E}),l.a.createElement(p.b,{path:"/signup",exact:!0,component:g}),l.a.createElement(p.b,{path:"/dashboard",component:k})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(d.a,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.6a656bc0.chunk.js.map