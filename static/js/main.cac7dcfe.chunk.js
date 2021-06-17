(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),s=n.n(r),i=(n(19),n(4)),o=n(25),l=n(2),u=n(3),m=n(10),d=n(0);var b=function(e){var t=e.email,n=e.onSignOut,c=e.onMobileMenuClick,r=Object(u.h)(),s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],b=i[1];return Object(a.useEffect)((function(){b(!1)}),[r]),Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("figure",{className:"header__logo"}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(m.b,{to:"/sign-up",className:"header__element",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(m.b,{to:"/sign-in",className:"header__element",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(u.b,{path:"*",children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("nav",{className:"header__menu",children:[Object(d.jsx)("p",{className:"header__menu-element",children:t}),Object(d.jsx)("button",{onClick:n,className:"header__menu-element header__menu-element_button",children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(d.jsx)("nav",{className:"burger",children:Object(d.jsx)("figure",{onClick:function(){b(!o),c()},className:"burger__button burger__button_type_cross ".concat(o&&"burger__button_active"),children:Object(d.jsx)("span",{className:"burger__contain"})})})]})})]})]})},j=n.p+"static/media/filler.6c929a1e.jpg";var f=function(e){var t=e.src,n=e.alt,c=e.onClick,r=e.className,s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],u=i[1];return Object(a.useEffect)((function(){return u(!1)}),[t]),Object(d.jsx)("img",{onClick:c,src:o?j:t,alt:"\u0424\u043e\u0442\u043e: ".concat(n||""),className:r,onError:function(){u(!0)}})},_=c.a.createContext();var p=function(e){var t=e.getCard,n=e.card,c=e.onCardLike,r=e.onCardDelete,s=Object(a.useContext)(_),i=n.owner._id===s._id,o=n.likes.some((function(e){return e._id===s._id})),l="element__like\n    ".concat(o&&"element__like_active"),u="element__trash-button\n    ".concat(i&&"element__trash-button_visible");return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("button",{onClick:function(){r(n)},type:"button",className:u}),Object(d.jsx)(f,{src:n.link,alt:n.name,className:"element__image",onClick:function(){t(n)}}),Object(d.jsxs)("div",{className:"element__container",children:[Object(d.jsxs)("h2",{className:"element__title",children:[" ",n.name," "]}),Object(d.jsxs)("div",{className:"element__like-group",children:[Object(d.jsx)("button",{onClick:function(){c(n)},type:"button",className:l}),Object(d.jsxs)("h3",{className:"element__like-counter",children:[" ",n.likes.length," "]})]})]})]})};var h=function(e){var t=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,r=e.onCardClick,s=e.cards,i=e.onCardLike,o=e.onCardDelete,l=Object(a.useContext)(_);return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__container",children:[Object(d.jsx)("a",{onClick:c,target:"_self",href:"#",className:"profile__cover",children:Object(d.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(l.name),src:l.avatar,className:"profile__avatar"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:l.name}),Object(d.jsx)("button",{onClick:t,type:"button",className:"profile__button-edit"}),Object(d.jsx)("p",{className:"profile__status",children:l.about})]})]}),Object(d.jsx)("button",{onClick:n,type:"button",className:"profile__button-add"})]}),Object(d.jsx)("section",{children:Object(d.jsx)("ul",{className:"elements",children:s.map((function(e){return Object(d.jsx)(p,{onCardDelete:o,onCardLike:i,getCard:r,card:e},e._id)}))})})]})};var O=function(){var e=(new Date).getFullYear();return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",e,". React-Mesto-Auth, Russia"]})})};var g=function(e){var t=e.name,n=e.title,a=e.submitButtonText,c=e.isOpen,r=e.onClose,s=e.onSubmit,i=e.children,o=e.isValidity,l=e.isSubmitting,u=e.isDisabledDefault||o||l;return Object(d.jsx)("section",{className:"popup ".concat(c&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{onClick:r,type:"button",className:"popup__button-close"}),Object(d.jsx)("h2",{className:"popup__title",children:n}),Object(d.jsxs)("form",{onSubmit:s,noValidate:!0,name:"form-".concat(t),className:"form",children:[i,Object(d.jsx)("button",{disabled:u,type:"submit",className:"form__button ".concat(u&&"form__button_disabled"),children:a})]})]})})};var x=function(e){var t=e.isOpen,n=e.onClose,a=e.onDeleteCard,c=e.card,r=e.isSubmitting;return Object(d.jsx)(g,{name:"delete-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitButtonText:r?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a(c)},isSubmitting:r})};var v=function(e){var t=e.card,n=e.onClose;return Object(d.jsx)("section",{className:"popup ".concat(t&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__zoom-image",children:[Object(d.jsx)("button",{onClick:n,type:"button",className:"popup__button-close"}),Object(d.jsx)(f,{src:t&&t.link,alt:t&&t.name,className:"popup__image"}),Object(d.jsxs)("h2",{className:"popup__title-zoom-image",children:[" ",t&&t.name," "]})]})})},N=n(8),k=function(e,t){return Object.keys(e).map((function(n){var a=e[n](t);return Object(N.a)({},n,a)})).reduce((function(e,t){return Object(i.a)(Object(i.a)({},e),t)}),{})},C={userName:{required:function(e){return""===e},minLength:function(e){return e.length<2},maxLength:function(e){return e.length>40}},description:{required:function(e){return""===e},minLength:function(e){return e.length<2},maxLength:function(e){return e.length>200}}};var S=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,r=e.isSubmitting,s=Object(a.useState)(!0),o=Object(l.a)(s,2),u=o[0],m=o[1],b=Object(a.useContext)(_),j=Object(a.useState)({userName:"",description:""}),f=Object(l.a)(j,2),p=f[0],h=f[1],O=Object(a.useState)({userName:{required:!0,minLength:!0,maxLength:!0},description:{required:!0,minLength:!0,maxLength:!0}}),x=Object(l.a)(O,2),v=x[0],S=x[1];Object(a.useEffect)((function(){void 0!==b.name&&void 0!==b.about&&h({userName:b.name,description:b.about}),m(!0)}),[t,b]);var y=Object(a.useCallback)((function(e){m(!1);var t=e.target,n=t.name,a=t.value;h((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(N.a)({},n,a))}))}),[h]);Object(a.useEffect)((function(){var e=p.userName,t=p.description,n=k(C.userName,e),a=k(C.description,t);S({userName:n,description:a})}),[p,S]);var L=p.userName,q=p.description,w=Object.values(v.userName).some(Boolean),E=Object.values(v.description).some(Boolean),P=w||E,D=v.userName.required||v.userName.minLength,I=v.description.required||v.description.minLength;return Object(d.jsx)(g,{name:"profile-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButtonText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:L,about:q})},isValidity:P,isSubmitting:r,isDisabledDefault:u,children:Object(d.jsxs)("fieldset",{className:"form__fields",children:[Object(d.jsxs)("label",{className:"label",children:[Object(d.jsx)("input",{type:"text",className:"form__input ".concat(w&&"form__input_type_error"),name:"userName",required:!0,minLength:2,maxLength:40,id:"profile-name-input",value:L,onChange:y}),Object(d.jsxs)("span",{className:"form__error ".concat(w&&"form__error_visible"),children:[D?v.userName.required?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 ".concat(2," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):"",v.userName.maxLength&&"\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043b \u043b\u0438\u043c\u0438\u0442 \u0432 ".concat(40," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")]})]}),Object(d.jsxs)("label",{className:"label",children:[Object(d.jsx)("input",{type:"text",className:"form__input ".concat(E&&"form__input_type_error"),name:"description",required:!0,minLength:2,maxLength:200,id:"profile-status-input",value:q,onChange:y}),Object(d.jsxs)("span",{className:"form__error ".concat(E&&"form__error_visible"),children:[I?v.description.required?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 ".concat(2," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):"",v.description.maxLength&&"\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043b \u043b\u0438\u043c\u0438\u0442 \u0432 ".concat(200," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")]})]})]})})};var y=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,r=e.isSubmitting,s=Object(a.useRef)();return Object(a.useEffect)((function(){s.current.value=""}),[t]),Object(d.jsx)(g,{name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButtonText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:s.current.value})},isSubmitting:r,children:Object(d.jsx)("fieldset",{className:"form__fields",children:Object(d.jsxs)("label",{className:"label",children:[Object(d.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",className:"form__input form__input_field_avatar-link",name:"avatarLink",required:!0,id:"avatar-link-input",ref:s}),Object(d.jsx)("span",{className:"form__error avatar-link-input-error"})]})})})},L={cardName:{required:function(e){return""===e},minLength:function(e){return e.length<2},maxLength:function(e){return e.length>30}},cardLink:{required:function(e){return""===e},url:function(e){return!/^(ftp|http|https):\/\/[^ "]+$/.test(e)}}};var q=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,r=e.isSubmitting,s=Object(a.useState)(!0),o=Object(l.a)(s,2),u=o[0],m=o[1],b=Object(a.useState)({cardName:"",cardLink:""}),j=Object(l.a)(b,2),f=j[0],_=j[1],p=Object(a.useState)({cardName:{required:!0,minLength:!0,maxLength:!0},cardLink:{required:!0,url:!0}}),h=Object(l.a)(p,2),O=h[0],x=h[1];Object(a.useEffect)((function(){_({cardName:"",cardLink:""}),m(!0)}),[t]);var v=Object(a.useCallback)((function(e){m(!1);var t=e.target,n=t.name,a=t.value;_((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(N.a)({},n,a))}))}),[_]);Object(a.useEffect)((function(){var e=f.cardName,t=f.cardLink,n=k(L.cardName,e),a=k(L.cardLink,t);x({cardName:n,cardLink:a})}),[f,x]);var C=f.cardName,S=f.cardLink,y=Object.values(O.cardName).some(Boolean),q=Object.values(O.cardLink).some(Boolean),w=y||q,E=O.cardName.required||O.cardName.minLength,P=O.cardLink.required||O.cardLink.url;return Object(d.jsx)(g,{name:"card-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButtonText:r?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:C,link:S})},isValidity:w,isSubmitting:r,isDisabledDefault:u,children:Object(d.jsxs)("fieldset",{className:"form__fields",children:[Object(d.jsxs)("label",{className:"label",children:[Object(d.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"form__input ".concat(u?"":y&&"form__input_type_error"),name:"cardName",required:!0,minLength:2,maxLength:30,id:"card-name-input",value:C,onChange:v}),Object(d.jsxs)("span",{className:"form__error ".concat(u?"":y&&"form__error_visible"),children:[E?O.cardName.required?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 ".concat(2," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):"",O.cardName.maxLength&&"\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043b \u043b\u0438\u043c\u0438\u0442 \u0432 ".concat(30," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")]})]}),Object(d.jsxs)("label",{className:"label",children:[Object(d.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"form__input ".concat(u?"":q&&"form__input_type_error"),name:"cardLink",required:!0,id:"card-link-input",value:S,onChange:v}),Object(d.jsx)("span",{className:"form__error ".concat(u?"":q&&"form__error_visible"),children:P?O.cardLink.required?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL":""})]})]})})},w=n(23),E=n(24),P=new(function(){function e(t){Object(w.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(E.a)(e,[{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialData",value:function(){return Promise.all([this.getCards(),this.getUserInfo()])}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"createCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"toggleCardLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"a3ab0050-d01a-4f5a-9bb4-4a039b0aa641","Content-Type":"application/json"}});var D=function(){return Object(d.jsx)("div",{className:"loader-ring",children:Object(d.jsxs)("div",{className:"loader-ring__main",children:[Object(d.jsx)("div",{className:"loader-ring__child"}),Object(d.jsx)("div",{className:"loader-ring__child"}),Object(d.jsx)("div",{className:"loader-ring__child"}),Object(d.jsx)("div",{className:"loader-ring__child"})]})})},I=n(26),T=function(e){var t=e.component,n=Object(I.a)(e,["component"]);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(i.a)({},n)):Object(d.jsx)(u.a,{to:"/sign-in"})}})},U="https://auth.nomoreparties.co",A={password:{required:function(e){return""===e},minLength:function(e){return e.length<2}},email:{required:function(e){return""===e},email:function(e){return!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}}};var B=function(e){var t=e.handleLogin,n=Object(u.g)(),c=Object(a.useState)(!0),r=Object(l.a)(c,2),s=r[0],o=r[1],m=Object(a.useState)(!1),b=Object(l.a)(m,2),j=b[0],f=b[1],_=Object(a.useState)({password:"",email:""}),p=Object(l.a)(_,2),h=p[0],O=p[1];Object(a.useEffect)((function(){return o(!0),function(){O({password:"",email:""})}}),[]);var g=Object(a.useState)({password:{required:!0,minLength:!0},email:{required:!0,email:!0}}),x=Object(l.a)(g,2),v=x[0],C=x[1],S=Object(a.useCallback)((function(e){o(!1);var t=e.target,n=t.name,a=t.value;O((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(N.a)({},n,a))}))}),[O]);Object(a.useEffect)((function(){var e=h.password,t=h.email,n=k(A.password,e),a=k(A.email,t);C({password:n,email:a})}),[h,C]);var y=h.password,L=h.email,q=Object.values(v.password).some(Boolean),w=Object.values(v.email).some(Boolean),E=q||w,P=v.password.required||v.password.minLength,D=v.email.required||v.email.email,I=s||E||j;return Object(d.jsxs)("section",{className:"login",children:[Object(d.jsxs)("div",{className:"login__container",children:[Object(d.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!0),function(e,t){return fetch("".concat(U,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).then((function(e){if(e)return localStorage.setItem("token",e.token),e}))}(h.password,h.email).then((function(e){e.token&&(localStorage.setItem("token",e.token),t(),n.push("/"))})).catch((function(e){return console.log(e)})).finally((function(){o(!0),f(!1)}))},noValidate:!0,name:"login",className:"form",children:[Object(d.jsxs)("fieldset",{className:"form__fields",children:[Object(d.jsxs)("label",{className:"label",children:[Object(d.jsx)("input",{type:"email",placeholder:"Email",className:"form__input form__input_location_sign ".concat(s?"":w&&"form__input_type_error"),name:"email",required:!0,id:"email-input",value:L,onChange:S}),Object(d.jsx)("span",{className:"form__error ".concat(s?"":w&&"form__error_visible"),children:D?v.email.required?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email-\u0430\u0434\u0440\u0435\u0441":""})]}),Object(d.jsxs)("label",{className:"label",children:[Object(d.jsx)("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"form__input form__input_location_sign ".concat(s?"":q&&"form__input_type_error"),name:"password",required:!0,minLength:2,id:"password-input",value:y,onChange:S}),Object(d.jsx)("span",{className:"form__error ".concat(s?"":q&&"form__error_visible"),children:P?v.password.required?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 ".concat(2," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):""})]})]}),Object(d.jsx)("button",{disabled:I,type:"submit",className:"form__button form__button_location_sign ".concat(I&&"form__button_disabled"),children:j?"\u0412\u0445\u043e\u0434...":"\u0412\u043e\u0439\u0442\u0438"})]})]}),Object(d.jsx)("div",{className:"login__footer"})]})},R={password:{required:function(e){return""===e},minLength:function(e){return e.length<2}},email:{required:function(e){return""===e},email:function(e){return!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}}};var z=function(e){var t=e.onShowPopup,n=e.onRegistrationResolve,c=Object(a.useState)(!0),r=Object(l.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(!1),b=Object(l.a)(u,2),j=b[0],f=b[1],_=Object(a.useState)({password:"",email:""}),p=Object(l.a)(_,2),h=p[0],O=p[1],g=Object(a.useState)({password:{required:!0,minLength:!0},email:{required:!0,email:!0}}),x=Object(l.a)(g,2),v=x[0],C=x[1];Object(a.useEffect)((function(){return o(!0),function(){O({password:"",email:""})}}),[]);var S=Object(a.useCallback)((function(e){o(!1);var t=e.target,n=t.name,a=t.value;O((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(N.a)({},n,a))}))}),[O]);Object(a.useEffect)((function(){var e=h.password,t=h.email,n=k(R.password,e),a=k(R.email,t);C({password:n,email:a})}),[h,C]);var y=h.password,L=h.email,q=Object.values(v.password).some(Boolean),w=Object.values(v.email).some(Boolean),E=q||w,P=v.password.required||v.password.minLength,D=v.email.required||v.email.email,I=s||E||j;return Object(d.jsxs)("section",{className:"login",children:[Object(d.jsxs)("div",{className:"login__container",children:[Object(d.jsx)("h2",{className:"login__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!0),function(e,t){return fetch("".concat(U,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()}))}(h.password,h.email).then((function(e){e.error||n(!0),t(!0)})).catch((function(e){console.log(e)})).finally((function(){o(!0),f(!1)}))},noValidate:!0,name:"login",className:"form",children:[Object(d.jsxs)("fieldset",{className:"form__fields",children:[Object(d.jsxs)("label",{className:"label",children:[Object(d.jsx)("input",{type:"email",placeholder:"Email",className:"form__input form__input_location_sign ".concat(s?"":w&&"form__input_type_error"),name:"email",required:!0,id:"email-input",value:L,onChange:S}),Object(d.jsx)("span",{className:"form__error ".concat(s?"":w&&"form__error_visible"),children:D?v.email.required?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email-\u0430\u0434\u0440\u0435\u0441":""})]}),Object(d.jsxs)("label",{className:"label",children:[Object(d.jsx)("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"form__input form__input_location_sign ".concat(s?"":q&&"form__input_type_error"),name:"password",required:!0,minLength:2,id:"password-input",value:y,onChange:S}),Object(d.jsx)("span",{className:"form__error ".concat(s?"":q&&"form__error_visible"),children:P?v.password.required?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 ".concat(2," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):""})]})]}),Object(d.jsx)("button",{disabled:I,type:"submit",className:"form__button form__button_location_sign ".concat(I&&"form__button_disabled"),children:j?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f...":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]}),Object(d.jsx)("div",{className:"login__footer",children:Object(d.jsxs)("p",{className:"login__sign-text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(d.jsx)(m.b,{to:"/sign-in",className:"login__auth",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})};var J=function(e){var t=e.email,n=e.onSignOut;return Object(d.jsx)("div",{className:"burger-menu",children:Object(d.jsxs)("ul",{className:"burger-menu__content",children:[Object(d.jsx)("li",{className:"burger-menu__item",children:Object(d.jsx)("p",{className:"burger__element",children:t})}),Object(d.jsx)("li",{className:"burger-menu__item",children:Object(d.jsx)("button",{onClick:n,className:"burger__element burger__element_button",children:"\u0412\u044b\u0439\u0442\u0438"})})]})})},F=n.p+"static/media/successful-registration.a9eb6caf.svg",M=n.p+"static/media/registration-error.d0f413bf.svg";var V=function(e){var t=e.isOpen,n=e.onClose,a=e.isSuccessfulRegistration,c=e.onRegistrationResolve,r=Object(u.g)();return Object(d.jsx)("section",{className:"popup ".concat(t&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container popup__container_section_registration",children:[Object(d.jsx)("button",{onClick:function(){n(),a&&r.push("/sign-in"),c(!1)},type:"button",className:"popup__button-close popup__button-close_section_registration"}),Object(d.jsx)("img",{className:"popup__registration-image",src:a?F:M,alt:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b!"}),Object(d.jsx)("h2",{className:"popup__title popup__title_section_registration",children:a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})};var Z=function(){var e=Object(u.g)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),m=Object(l.a)(s,2),j=m[0],f=m[1],p=Object(a.useState)(!1),g=Object(l.a)(p,2),N=g[0],k=g[1],C=Object(a.useState)(!1),L=Object(l.a)(C,2),w=L[0],E=L[1],I=Object(a.useState)(!1),A=Object(l.a)(I,2),R=A[0],F=A[1],M=Object(a.useState)(!1),Z=Object(l.a)(M,2),G=Z[0],$=Z[1],H=Object(a.useState)(null),Y=Object(l.a)(H,2),K=Y[0],Q=Y[1],W=Object(a.useState)({}),X=Object(l.a)(W,2),ee=X[0],te=X[1],ne=Object(a.useState)([]),ae=Object(l.a)(ne,2),ce=ae[0],re=ae[1],se=Object(a.useState)(!1),ie=Object(l.a)(se,2),oe=ie[0],le=ie[1],ue=Object(a.useState)(null),me=Object(l.a)(ue,2),de=me[0],be=me[1],je=Object(a.useState)(!1),fe=Object(l.a)(je,2),_e=fe[0],pe=fe[1],he=Object(a.useState)(!1),Oe=Object(l.a)(he,2),ge=Oe[0],xe=Oe[1],ve=Object(a.useState)(!1),Ne=Object(l.a)(ve,2),ke=Ne[0],Ce=Ne[1],Se=Object(a.useState)(!1),ye=Object(l.a)(Se,2),Le=ye[0],qe=ye[1],we=Object(a.useState)({loggedIn:!1,email:null}),Ee=Object(l.a)(we,2),Pe=Ee[0],De=Ee[1],Ie=Object(a.useState)(!1),Te=Object(l.a)(Ie,2),Ue=Te[0],Ae=Te[1];function Be(){F(!1),k(!1),E(!1),$(!1),f(!1),Q(null)}Object(a.useEffect)((function(){Re(),le(!0),P.getInitialData().then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];re(n),te(a)})).catch((function(e){console.log(e)})).finally((function(){le(!1)}))}),[]);var Re=function(){var t=localStorage.getItem("token");t&&function(e){return fetch("".concat(U,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e}))}(t).then((function(t){t&&(De({loggedIn:!0,email:t.data.email}),e.push("/"))})).catch((function(e){return console.log(e)}))},ze=function(){De({loggedIn:!1,email:null}),localStorage.removeItem("token"),e.push("/sign-in"),Ae(!1)};return Object(d.jsx)("div",{className:"page ".concat(Ue&&"page_mobile-menu_opened"," ").concat(!Pe.loggedIn&&"page_mobile-menu_disabled"),children:oe?Object(d.jsx)(D,{}):Object(d.jsxs)(_.Provider,{value:ee,children:[Object(d.jsx)(J,{onSignOut:ze,email:Pe.email}),Object(d.jsx)(b,{onMobileMenuClick:function(){Ae(!Ue)},onSignOut:ze,email:Pe.email}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(T,{exact:!0,path:"/",loggedIn:Pe.loggedIn,component:h,cards:ce,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ee._id}));P.toggleCardLike(e._id,t).then((function(t){re((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){be(e),$(!0)},onEditProfile:function(){k(!0)},onAddPlace:function(){E(!0)},onEditAvatar:function(){F(!0)},onCardClick:function(e){Q(e)}}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(B,{handleLogin:function(){Re(),De((function(e){return Object(i.a)(Object(i.a)({},e),{},{loggedIn:!0})}))}})}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(z,{onRegistrationResolve:r,onShowPopup:f})}),Object(d.jsx)(u.b,{path:"/",children:Pe.loggedIn?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/sign-in"})})]}),Pe.loggedIn&&Object(d.jsx)(O,{}),Object(d.jsx)(S,{onUpdateUser:function(e){pe(!0),P.setUserInfo(e.name,e.about).then((function(e){te(e),Be()})).catch((function(e){console.log(e)})).finally((function(){pe(!1)}))},isOpen:N,onClose:Be,isSubmitting:_e}),Object(d.jsx)(q,{isOpen:w,onAddPlace:function(e){xe(!0),P.createCard(e.name,e.link).then((function(e){re([e].concat(Object(o.a)(ce))),Be()})).catch((function(e){console.log(e)})).finally((function(){xe(!1)}))},onClose:Be,isSubmitting:ge}),Object(d.jsx)(x,{isOpen:G,card:de,onDeleteCard:function(e){Ce(!0),P.deleteCard(e._id).then((function(){re((function(t){return t.filter((function(t){return t._id!==e._id}))})),Be()})).catch((function(e){console.log(e)})).finally((function(){Ce(!1)}))},onClose:Be,isSubmitting:ke}),Object(d.jsx)(v,{card:K,onClose:Be}),Object(d.jsx)(y,{isOpen:R,onUpdateAvatar:function(e){qe(!0),P.updateAvatar(e.avatar).then((function(e){te(e),Be()})).catch((function(e){console.log(e)})).finally((function(){qe(!1)}))},onClose:Be,isSubmitting:Le}),Object(d.jsx)(V,{onClose:Be,isOpen:j,isSuccessfulRegistration:c,onRegistrationResolve:r})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)(Z,{})})}),document.getElementById("root")),G()}},[[37,1,2]]]);
//# sourceMappingURL=main.cac7dcfe.chunk.js.map