(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(17),c=a.n(s),o=(a(46),a(19)),i=a(22),u=a(5),l=a(6),h=a(11),p=a(10),m=a(21),d=a.n(m),j=a(38),b=a(39),g=a.n(b),f=function(){function e(){Object(u.a)(this,e),this.api_key="5018958-ed49ccd90878e6614abdf24a6",this.api_url="https://pixabay.com/api/",this.api_type="image_type=photo",this.api_orientation="orientation=horizontal",this._searchQuery="",this._page=1}return Object(l.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"search",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.api_url,"?").concat(this.api_type,"&").concat(this.api_orientation,"&q=").concat(this.searchQuery,"&page=").concat(this._page,"&per_page=12&key=").concat(this.api_key,"\n"),e.prev=1,e.next=4,g.a.get(t);case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),y=a(0),O=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.webformatURL,r=t.largeImageURL,n=t.tags;return Object(y.jsx)("li",{className:"ImageGalleryItem",children:Object(y.jsx)("img",{src:a,alt:n,onClick:function(){return e.props.handleImageClick(r)},className:"ImageGalleryItem-image"})})}}]),a}(r.PureComponent),v=document.querySelector("#modal"),k=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleOverlayclick=function(t){t.target===t.currentTarget&&e.props.onModalClose()},e.handleEscKey=function(t){"Escape"===t.code&&e.props.onModalClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscKey)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscKey)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(s.createPortal)(Object(y.jsx)("div",{className:"Overlay",onClick:this.handleOverlayclick,children:Object(y.jsx)("div",{className:"Modal",children:Object(y.jsx)("img",{src:e,alt:""})})}),v)}}]),a}(r.Component),x=a(40),S=a.n(x);var w=function(){return Object(y.jsx)(S.a,{className:"SpinnerLoader",type:"Watch",color:"#303f9f",height:100,width:100,timeout:3e3})};var C=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},_=a(41),N=new f,M=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={searchResultArray:[],searchElements:null,status:"init",imageLargeURL:"",errorMessage:""},e.handleImageClick=function(t){e.setState({imageLargeURL:t,status:"showmodal"})},e.onModalClose=function(){e.setState({status:"success"})},e.handleMoreButtonClick=function(t){N.page=1,N.search().then((function(t){e.setState((function(e){return{searchResultArray:[].concat(Object(i.a)(e.searchResultArray),Object(i.a)(t.hits)),status:"success"}})),C()})).catch((function(t){e.setState({status:"error",errorMessage:t})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e!==this.props&&(this.setState({status:"pending"}),N.resetPage(),N.searchQuery=this.props.searchQuery,N.search().then((function(e){e.hits.length>0?a.setState({searchResultArray:e.hits,searchElements:e.total,status:"success"}):a.setState({status:"error",errorMessage:"No images found ..."})})))}},{key:"render",value:function(){var e=this,t=this.state,a=t.status,r=t.searchResultArray,n=t.searchElements,s=t.imageLargeURL,c=t.errorMessage;return"init"===a?Object(y.jsx)("h1",{className:"title"}):"pending"===a?Object(y.jsx)(w,{}):"success"===a?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ul",{className:"ImageGallery",children:r.map((function(t){return Object(y.jsx)(O,{item:t,handleImageClick:e.handleImageClick},t.id)}))}),n>12&&Object(y.jsx)("button",{className:"Button",type:"button",id:"more",onClick:this.handleMoreButtonClick,children:"load more"})]}):"showmodal"===a?Object(y.jsx)(k,{largeImageURL:s,onModalClose:this.onModalClose}):"error"===a?Object(y.jsx)(_.Notification,{type:"Error",title:"Error",text:c}):void 0}}]),a}(r.Component);function E(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(o.a)(a,2),s=n[0],c=n[1];return Object(y.jsx)("header",{className:"Searchbar",children:Object(y.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==s.trim()?(t(s),c("")):alert("Please, enter some for search image ... ")},children:[Object(y.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(y.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(y.jsx)("input",{className:"SearchForm-input",value:s,type:"search",placeholder:"Search images and photos",onChange:function(e){c(e.target.value)}})]})})}function I(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(E,{onSubmit:function(e){n(e)}}),Object(y.jsx)(M,{searchQuery:a})]})}c.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(I,{})}),document.getElementById("root"))},46:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.c3513b33.chunk.js.map