(window["webpackJsonpauto-complete"]=window["webpackJsonpauto-complete"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(4),i=n.n(r),c=(n(16),n(17),n(1)),o=n.n(c),u=n(2),l=n(8),h=n(5),d=n(6),f=n(9),m=n(7),p=n(10);n(19),n(20);var g=function(e){var t=e.user,n=e.onClose;return s.a.createElement("div",{className:"chip"},s.a.createElement("img",{className:"chip-icon",src:"http://placekitten.com/30/30",alt:""}),s.a.createElement("div",{className:"user-name"},t.name),s.a.createElement("div",{className:"close-icon",onClick:function(e){return n(e,t)}},"\u2716"))},v={getUsers:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};n(21);function L(e){var t=e.user,n=e.onClick;return s.a.createElement("div",{onClick:function(e){return n(e,t)},className:"suggestion"},s.a.createElement("img",{className:"user-icon",src:"https://github.com/identicons/Bret.png",alt:""}),s.a.createElement("div",{className:"user-name"},t.name),s.a.createElement("div",{className:"user-email"},t.email))}var w=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(m.a)(t).call(this))).updateUserList=function(t){e.setState({userList:t})},e.updateSearch=function(t){e.setState({search:t.target.value})},e._addChips=function(t,n){var a=e.state,s=a.userList,r=a.selectedUserList;e.setState({selectedUserList:[].concat(Object(l.a)(r),[s.find((function(e){return e.id===n.id}))]),hideSuggestionList:!0,search:""}),e.searchInputRef.current.blur()},e._deleteChip=function(t,n){t.stopPropagation();var a=e.state.selectedUserList;e.setState({selectedUserList:a.filter((function(e){return e.id!==n.id})),hideSuggestionList:!0,search:""}),e.searchInputRef.current.blur()},e.state={userList:[],search:"",selectedUserList:[],hideSuggestionList:!0},e.searchInputRef=s.a.createRef(),e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getUsers();case 2:t=e.sent,this.updateUserList(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toggleList",value:function(e){var t=this;return function(){e||t.searchInputRef.current.focus(),t.setState({hideSuggestionList:e})}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:["auto-complete-container",this.state.hideSuggestionList?"":"focus"].join(" ")},this.state.selectedUserList.map((function(t,n){return s.a.createElement(g,{key:n,onClose:e._deleteChip,user:t})})),s.a.createElement("div",{tabIndex:"0",onFocus:this.toggleList(!1),className:"input-container"},s.a.createElement("input",{placeholder:"Search...",ref:this.searchInputRef,type:"text",className:"search-input",onChange:this.updateSearch,value:this.state.search}),!this.state.hideSuggestionList&&s.a.createElement("div",{tabIndex:"0",onFocus:this.toggleList(!1),onBlur:this.toggleList(!0),className:"suggestion-list"},this.filteredList.map((function(t){return s.a.createElement(L,{key:t.id,onClick:e._addChips,user:t})})))))}},{key:"filteredList",get:function(){var e=this;return this.state.userList.filter((function(t){return-1===e.state.selectedUserList.findIndex((function(e){return e.id===t.id}))})).filter((function(t){return t.name.toLowerCase().match(e.state.search.toLowerCase())}))}}]),t}(a.Component);var k=function(){return s.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.61a0decc.chunk.js.map