(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{101:function(e,a,t){e.exports=t(164)},106:function(e,a,t){},107:function(e,a,t){},164:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),s=t.n(l),o=(t(106),t(17)),c=t(18),m=t(20),i=t(19),u=(t(107),t(24)),d=t(7),E=t(25),h=t(10),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,errMess:a.payload,dishes:[]});default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,errMess:a.payload,comments:[]});case"ADD_COMMENT":var t=a.payload;return Object(d.a)(Object(d.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,errMess:a.payload,promotions:[]});default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,errMess:a.payload,leaders:[]});default:return e}},N=t(97),v=t.n(N),O=t(98),w=t.n(O),y={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},M=t(165),L=t(166),k=t(167),j=t(168),S=t(169),C=t(170),D=t(8),F=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},x="http://localhost:3001/";function A(e){var a=e.dish;e.onClick;return r.a.createElement(M.a,null,r.a.createElement(D.b,{to:"/menu/".concat(a.id)},r.a.createElement(L.a,{width:"100%",src:x+a.image,alt:a.name}),r.a.createElement(k.a,null,r.a.createElement(j.a,null,a.name))))}var I=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(A,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(F,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(S.a,null,r.a.createElement(C.a,null,r.a.createElement(D.b,{to:"/home"},"Home")),r.a.createElement(C.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},T=t(30),R=t(171),_=t(172),q=t(173),P=t(192),H=t(174),G=t(175),W=t(176),B=t(177),U=t(178),Y=t(26);function K(e){var a=e.dish;return r.a.createElement(Y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(M.a,null,r.a.createElement(L.a,{width:"100%",src:x+a.image,alt:a.name}),r.a.createElement(R.a,null,r.a.createElement(j.a,null,a.name),r.a.createElement(_.a,null,a.description))))}function z(e){var a=e.comments,t=e.postComment,n=e.dishId,l=a.map((function(e){return r.a.createElement(Y.Fade,{in:!0},r.a.createElement("li",{key:e.id},e.comment,r.a.createElement("br",null),r.a.createElement("br",null),"-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))),r.a.createElement("br",null),r.a.createElement("br",null)))}));return r.a.createElement("div",null,r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(Y.Stagger,{in:!0},l)),r.a.createElement(Q,{dishId:n,postComment:t}))}var J=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(F,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(S.a,null,r.a.createElement(C.a,null,r.a.createElement(D.b,{to:"/menu"},"Menu")),r.a.createElement(C.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(K,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(z,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)},Z=function(e){return e&&e.length},$=function(e){return function(a){return!a||a.length<=e}},Q=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(T.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(T.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(q.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"}," Submit comment")),r.a.createElement("div",{className:"row row-content"},r.a.createElement(P.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(H.a,{toggle:this.toggleModal}," Submit comment"),r.a.createElement(G.a,null,r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(h.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(W.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:"rating"},"Rating"),r.a.createElement(U.a,{md:10},r.a.createElement(h.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(W.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:"author",md:2},"Your name"),r.a.createElement(U.a,{md:10},r.a.createElement(h.Control.text,{model:".author",id:"author",name:"author",placeholder:"Author",className:"form-control",validators:{required:Z,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:$(15)}}),r.a.createElement(h.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 3 characters",maxLength:"Must be 15 charaters or less"}}))),r.a.createElement(W.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:"feedback",md:2},"Your feedback"),r.a.createElement(U.a,{md:10},r.a.createElement(h.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control",validators:{required:Z}}),r.a.createElement(h.Errors,{className:"text-danger",model:".comment",show:"touched",messages:{required:"Required"}}))),r.a.createElement(q.a,{type:"submit",value:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component),V=t(179),X=t(180),ee=t(181),ae=t(182),te=t(183),ne=t(184),re=t(185),le=t(186),se=t(187),oe=t(188),ce=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).toggleModal=function(){n.setState({isModalOpen:!n.state.isModalOpen})},n.handleLogin=function(e){n.toggleModal(),alert("Username: "+n.username.value+" Password: "+n.password.value+" Remember: "+n.remember.checked),e.preventDefault()},n.toggleNav=function(){n.setState({isNavOpen:!n.state.isNavOpen})},n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(X.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(ee.a,{onClick:this.toggleNav}),r.a.createElement(ae.a,{isOpen:this.state.isNavOpen,onClick:this.toggleNav,navbar:!0},r.a.createElement(te.a,{navbar:!0},r.a.createElement(ne.a,null,r.a.createElement("li",{className:"nav-link"},r.a.createElement("a",{href:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"}),"Home"))),r.a.createElement(ne.a,null,r.a.createElement("li",{className:"nav-link"},r.a.createElement("a",{href:"/aboutus"},r.a.createElement("span",{className:"fa fa-home fa-lg"}),"About-Us"))),r.a.createElement(ne.a,null,r.a.createElement("li",{className:"nav-link"},r.a.createElement("a",{href:"/menu"},r.a.createElement("span",{className:"fa fa-home fa-lg"}),"Menu"))),r.a.createElement(ne.a,null,r.a.createElement("li",{className:"nav-link"},r.a.createElement("a",{href:"/contactus"},r.a.createElement("span",{className:"fa fa-home fa-lg"}),"Contact-Us")))),r.a.createElement(te.a,{className:"ml-auto",navbar:!0},r.a.createElement(ne.a,null,r.a.createElement(q.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(re.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(P.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(H.a,{toggle:this.toggleModal},"Login"),r.a.createElement(G.a,null,r.a.createElement(le.a,{onSubmit:this.handleLogin},r.a.createElement(se.a,null,r.a.createElement(B.a,{htmlFor:"username"},"Username"),r.a.createElement(oe.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(se.a,null,r.a.createElement(B.a,{htmlFor:"password"},"Password"),r.a.createElement(oe.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(se.a,{check:!0},r.a.createElement(B.a,{check:!0},r.a.createElement(oe.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(q.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var me=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(D.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(D.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(D.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(D.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},ie=t(189);function ue(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(F,null):n?r.a.createElement("h4",null,n):r.a.createElement(Y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(M.a,null,r.a.createElement(L.a,{src:x+a.image,alt:a.name}),r.a.createElement(R.a,null,r.a.createElement(j.a,null,a.name),a.designation?r.a.createElement(ie.a,null,a.designation):null,r.a.createElement(_.a,null,a.description))))}var de=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(ue,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(ue,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(ue,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},Ee=function(e){return e&&e.length},he=function(e){return function(a){return!a||a.length<=e}},fe=function(e){return function(a){return a&&a.length>=e}},pe=function(e){return!isNaN(Number(e))},ge=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},be=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(T.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(S.a,null,r.a.createElement(C.a,null,r.a.createElement(D.b,{to:"/home"},"Home")),r.a.createElement(C.a,null,"Contact us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us you feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(h.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(W.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:"firstname",md:2},"First name"),r.a.createElement(U.a,{md:10},r.a.createElement(h.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First name",className:"form-control",validators:{required:Ee,minLength:fe(3),maxLength:he(15)}}),r.a.createElement(h.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 charaters or less"}}))),r.a.createElement(W.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:"lastname",md:2},"Last name"),r.a.createElement(U.a,{md:10},r.a.createElement(h.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last name",className:"form-control",validators:{required:Ee,minLength:fe(3),maxLength:he(15)}}),r.a.createElement(h.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 charaters or less"}}))),r.a.createElement(W.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:"telnum",md:2},"Contact tel."),r.a.createElement(U.a,{md:10},r.a.createElement(h.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. number",className:"form-control",validators:{required:Ee,minLength:fe(3),maxLength:he(15),isNumber:pe}}),r.a.createElement(h.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 charaters or less",isNumber:"Must be a number"}}))),r.a.createElement(W.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(U.a,{md:10},r.a.createElement(h.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:Ee,validEmail:ge}}),r.a.createElement(h.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(W.a,{className:"form-group"},r.a.createElement(U.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(B.a,null,r.a.createElement(h.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(U.a,{md:{size:3,offset:1}},r.a.createElement(h.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(W.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:"feedback",md:2},"Your feedback"),r.a.createElement(U.a,{md:10},r.a.createElement(h.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(W.a,{className:"form-group"},r.a.createElement(U.a,{md:{size:10,offset:2}},r.a.createElement(q.a,{type:"submit",color:"primary"},"Send feedback")))))))}}]),t}(n.Component),Ne=t(190),ve=t(191);var Oe=function(e){var a=e.leaders.leaders.map((function(e){return r.a.createElement(t,{leader:e})}));function t(e){var a=e.leader;return r.a.createElement(Y.Fade,{in:!0},r.a.createElement(Ne.a,{tag:"li",key:a.id,className:"col-12 mt-5"},r.a.createElement(Ne.a,{left:!0,middle:!0},r.a.createElement(Ne.a,{object:!0,src:x+a.image,alt:a.name})),r.a.createElement(Ne.a,{body:!0,className:"ml-5"},r.a.createElement(Ne.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("p",null,a.description))))}function n(){return e.leaders.isLoading?r.a.createElement(F,null):e.leaders.errMess?r.a.createElement("h4",null,e.leaders.errMess):r.a.createElement(Ne.a,{list:!0},r.a.createElement(Y.Stagger,{in:!0},a))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(S.a,null,r.a.createElement(C.a,null,r.a.createElement(D.b,{to:"/home"},"Home")),r.a.createElement(C.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(M.a,null,r.a.createElement(ve.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(R.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(M.a,null,r.a.createElement(R.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(n,null))))},we=function(e){return{type:"ADD_COMMENT",payload:e}},ye=function(){return function(e){return{type:"DISHES_LOADING"}}},Me=function(e){return{type:"DISHES_FAILED",payload:e}},Le=function(e){return{type:"ADD_DISHES",payload:e}},ke=function(e){return{type:"COMMENTS_FAILED",payload:e}},je=function(e){return{type:"ADD_COMMENTS",payload:e}},Se=function(){return function(e){return{type:"PROMOS_LOADING"}}},Ce=function(e){return{type:"PROMOS_FAILED",payload:e}},De=function(e){return{type:"ADD_PROMOS",payload:e}},Fe=function(){return function(e){return{type:"LEADERS_LOADING"}}},xe=function(e){return{type:"LEADERS_FAILED",payload:e}},Ae=function(e){return{type:"ADD_LEADERS",payload:e}},Ie=t(56),Te=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(Ie.TransitionGroup,null,r.a.createElement(Ie.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(D.e,null,r.a.createElement(D.d,{path:"/home",component:function(){return r.a.createElement(de,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(D.d,{exact:!0,path:"/menu",component:function(){return r.a.createElement(I,{dishes:e.props.dishes})}}),r.a.createElement(D.d,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(J,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(D.d,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(be,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(D.d,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(Oe,{leaders:e.props.leaders})}}),r.a.createElement(D.c,{to:"/home"})))),r.a.createElement(me,null))}}]),t}(n.Component),Re=Object(D.f)(Object(u.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(x+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(e){return r(we(e))})).catch((function(e){console.log("Post comments: "+e.message),alert("Comments could not be posted:\n"+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(ye(!0)),fetch(x+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(a){return e(Le(a))})).catch((function(a){return e(Me(a.message))}))}))},resetFeedbackForm:function(){e(h.actions.reset("feedback"))},fetchPromos:function(){e((function(e){return e(Se(!0)),fetch(x+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(a){return e(De(a))})).catch((function(a){return e(Ce(a.message))}))}))},fetchComments:function(){e((function(e){return fetch(x+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(a){return e(je(a))})).catch((function(a){return e(ke(a.message))}))}))},fetchLeaders:function(){e((function(e){return e(Fe(!0)),fetch(x+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(a){return e(Ae(a))})).catch((function(a){return e(xe(a.message))}))}))},postFeedback:function(a){return e(function(e){return function(a){var t=Object.assign({date:(new Date).toISOString()},e);return fetch(x+"feedback",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(e){return a(we(e))})).catch((function(e){console.log("Post feedback: "+e.message),alert("Feedback could not be posted:\n"+e.message)}))}}(a))}}}))(Te)),_e=Object(E.createStore)(Object(E.combineReducers)(Object(d.a)({dishes:f,comments:p,promotions:g,leaders:b},Object(h.createForms)({feedback:y}))),Object(E.applyMiddleware)(v.a,w.a)),qe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(u.Provider,{store:_e},r.a.createElement(D.a,null,r.a.createElement("div",null,r.a.createElement(Re,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(162),t(163);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D.a,null,r.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.658b7d1f.chunk.js.map