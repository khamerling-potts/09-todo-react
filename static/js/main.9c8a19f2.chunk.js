(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(9),c=n.n(s),i=n(10),r=n(2),d=n(3),l=n(5),u=n(4),p=n(6),h=n(1),f=(n(7),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).retrieve=n.retrieve.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.id},console.log(this.props.id),o.a.createElement("li",null,o.a.createElement("button",{id:this.props.id,style:{marginRight:"10px",backgroundColor:"#ceffc9"}},"Done"),this.props.text,o.a.createElement("button",{id:this.props.id,style:{cssFloat:"right",backgroundColor:"#ffbdaf"}},"Delete")))}},{key:"deleteClicked",value:function(e){this.retrieve(e),this.update(e),this.remove(e)}},{key:"retrieve",value:function(e){var t=this;fetch("https://cse204.work/todos/"+e.id,{method:"GET",headers:{"x-api-key":"f32d02-3f32cc-c59414-4b288d-c7f6a6","Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({todos:e})})}},{key:"update",value:function(e){var t=this;e.completed=!0,fetch("https://cse204.work/todos/"+e.id,{method:"PUT",headers:{"x-api-key":"f32d02-3f32cc-c59414-4b288d-c7f6a6","Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({todos:e})})}},{key:"remove",value:function(e){var t=this;fetch("https://cse204.work/todos/"+e.id,{method:"DELETE",headers:{"x-api-key":"f32d02-3f32cc-c59414-4b288d-c7f6a6","Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({todos:e})})}}]),t}(a.Component)),m=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 addbar"},o.a.createElement("form",{className:"addform",id:"addform",onSubmit:this.props.addTodo},o.a.createElement("label",{htmlFor:"add",className:"formlabel"},"To Do List"),o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{value:this.props.input||"",onChange:this.props.onChange,type:"text",className:"form-control",id:"add",placeholder:"New item"}),o.a.createElement("div",{className:"input-group-addon"},o.a.createElement("input",{type:"submit",value:"Add Item",className:"addbutton"})))))))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){Object(h.a)(Object(h.a)(n)).setState({input:e.target.value})},n.addTodo=n.addTodo.bind(Object(h.a)(Object(h.a)(n))),n.state={todos:[]},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Kyra Hamerling-Potts' ToDo App")),o.a.createElement("section",{id:"todos"},o.a.createElement(m,{addTodo:this.addTodo,newTodo:this.newTodo,onChange:this.onChange,input:this.state.input}),o.a.createElement("ul",{id:"todoList"},console.log(this.state.todos),this.state.todos.map(function(e){return o.a.createElement(f,{key:e.id,id:e.id,text:e.text})}))))}},{key:"addTodo",value:function(e){e.preventDefault();var t=this,n={text:t.state.input};console.log(n);var a=new XMLHttpRequest;a.onreadystatechange=function(){4===this.readyState&&200===this.status&&(t.setState({todos:Object(i.a)(t.state.todos).concat([JSON.parse(this.responseText)])}),t.setState({input:""}))},a.open("POST","https://cse204.work/todos",!0),a.setRequestHeader("Content-type","application/json"),a.setRequestHeader("x-api-key","f32d02-3f32cc-c59414-4b288d-c7f6a6"),a.send(JSON.stringify(n))}},{key:"componentDidMount",value:function(){var e=this;console.log("componentdidmount activated");fetch("https://cse204.work/todos",{method:"GET",headers:{"x-api-key":"f32d02-3f32cc-c59414-4b288d-c7f6a6"}}).then(function(e){return e.json()}).then(function(t){e.setState({todos:t})})}}]),t}(a.Component);c.a.render(o.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.9c8a19f2.chunk.js.map