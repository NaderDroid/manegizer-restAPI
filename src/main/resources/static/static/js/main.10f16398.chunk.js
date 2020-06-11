(this["webpackJsonpreact-end"]=this["webpackJsonpreact-end"]||[]).push([[0],{42:function(e,t,a){e.exports=a(73)},47:function(e,t,a){},49:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(24),o=a.n(c),s=(a(47),a(48),a(2)),l=a(3),i=a(5),m=a(4),p=(a(49),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-lg-auto"},n.a.createElement("a",{className:"navbar-brand",style:{fontSize:"28px"},href:"/db"},"Manegizer"),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/db"},"Project List"))))}}]),a}(r.Component)),u=a(21),d=a(16),h=a(9),f=a(8),E=a(7),v=a.n(E),b=a(19),j=a(20),N=a.n(j),g=a(17),y=a.n(g),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var r;Object(s.a)(this,a);var n=(r=t.call(this,e)).props.match.params.id;return r.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:n,errors:{}},r.onChange=r.onChange.bind(Object(d.a)(r)),r.onSubmit=r.onSubmit.bind(Object(d.a)(r)),r}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e,t){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container m-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(h.b,{to:"/pb/".concat(e),className:"btn btn-light"},"Back to Project"),n.a.createElement("h4",{className:"display-4 text-center"},"New Task"),n.a.createElement("h6",{className:"text-info text-center"},"To project: (",e,")"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",{className:"lbl"},"Task Summary"),n.a.createElement("input",{type:"text",className:y()("form-control form-control-md",{"is-invalid":t.summary}),name:"summary",placeholder:"Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",{className:"lbl"},"Definition of Done - DoD"),n.a.createElement("textarea",{className:"form-control form-control-md",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h5",{className:"lbl"},"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-md",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",{className:"lbl"},"Select Priority"),n.a.createElement("select",{className:"form-control form-control-md",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low")),n.a.createElement("div",{className:"text-info small"},"If not selected, will default to Low")),n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",{className:"lbl"},"Current Status"),n.a.createElement("select",{className:"form-control form-control-md",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE")),n.a.createElement("div",{className:"text-info small"},"If not selected, will default to To Do")),n.a.createElement("input",{type:"submit",className:"btn btn-dark btn-block mt-4",value:"Add Task"}))))))}}]),a}(r.Component),O=Object(f.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(b.a)(v.a.mark((function r(n){return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,N.a.post("/api/backlog/".concat(e),t);case 3:a.push("/pb/".concat(e)),n({type:"GET_ERRORS",payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(k),C=a(6),_=function(e,t){return function(){var a=Object(b.a)(v.a.mark((function a(r){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N.a.post("/api/project",e);case 3:t.push("/db"),r({type:"GET_ERRORS",payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.handleChange=function(t){e.setState(Object(u.a)({},t.target.name,t.target.value))},e.submitForm=function(t){t.preventDefault();var a={projectName:e.state.projectName,projectIdentifier:e.state.projectIdentifier,description:e.state.description,start_date:e.state.start_date,end_date:e.state.end_date};e.props.createProject(a,e.props.history)},e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e,t){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center p-3"},"Create Project"),n.a.createElement("hr",null),n.a.createElement("form",{className:"form-control-lg",onSubmit:this.submitForm},n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",null,"Project Name"),n.a.createElement("input",{type:"text",className:y()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.handleChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",null,"Project ID"),n.a.createElement("input",{type:"text",className:y()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.handleChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",null,"Project Description"),n.a.createElement("textarea",{className:y()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.handleChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h5",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.handleChange})),n.a.createElement("h5",null,"Estimated Completion Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.handleChange})),n.a.createElement("input",{type:"submit",className:"btn btn-dark btn-block",value:"Create Project"}))))))}}]),a}(r.Component),D=Object(f.b)((function(e){return{errors:e.errors}}),{createProject:_})(x),P=a(18),S=a(41),T={},w=a(11),I={projects:[],project:{}},R={project_tasks:[],project_task:{}},G=Object(P.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(w.a)(Object(w.a)({},e),{},{projects:t.payload});case"GET_PROJECT":return Object(w.a)(Object(w.a)({},e),{},{project:t.payload});case"DELETE_PROJECT":return Object(w.a)(Object(w.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(w.a)(Object(w.a)({},e),{},{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(w.a)(Object(w.a)({},e),{},{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(w.a)(Object(w.a)({},e),{},{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}}}),A={},L=[S.a],q=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),J=(window.navigator.userAgent.includes("Firefox")||window.navigator.userAgent.includes("Chrome"))&&q?Object(P.e)(G,A,Object(P.d)(P.a.apply(void 0,L),q)):Object(P.e)(G,A,Object(P.d)(P.a.apply(void 0,L))),B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(d.a)(e)),e.onSubmit=e.onSubmit.bind(Object(d.a)(e)),e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e,t){e.errors&&this.setState({errors:e.errors});var a=e.project,r=a.id,n=a.projectName,c=a.projectIdentifier,o=a.description,s=a.start_date,l=a.end_date;this.setState({id:r,projectName:n,projectIdentifier:c,description:o,start_date:s,end_date:l})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 mx-auto"},n.a.createElement("h5",{className:"display-4 text-center p-3"},"Update Project",n.a.createElement("h6",null,"(PID: ",this.state.projectIdentifier,")")),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},"Project Name",n.a.createElement("input",{type:"text",className:y()("form-control form-control-md",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:""},e.projectName)),n.a.createElement("div",{className:"form-group"},"Project ID",n.a.createElement("input",{type:"text",className:"form-control form-control-md",placeholder:"Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,disabled:!0}),n.a.createElement("div",{className:"text-info small"},"project ID cant be changed")),n.a.createElement("div",{className:"form-group"},"Project Description",n.a.createElement("textarea",{className:y()("form-control form-control-md",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-md",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-md",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-dark btn-block",value:"Update Project"}))))))}}]),a}(r.Component),M=Object(f.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(b.a)(v.a.mark((function a(r){var n;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N.a.get("/api/project/".concat(e));case 3:n=a.sent,r({type:"GET_PROJECT",payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/db");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:_})(B),U=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onDeleteClick=function(t){e.props.deleteProject(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.project,t=null!=this.props.project.end_date?this.props.project.end_date:"Not Provided",a=null!=this.props.project.updated_At?this.props.project.end_date:"Never updated";return n.a.createElement("div",{className:"container",style:{width:"1030px"}},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Project ID: ",e.projectIdentifier,n.a.createElement("h6",{className:"float-right text-light bg-dark m-1 "},"Deadline: ",t)),n.a.createElement("div",{className:" card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"card-title"},n.a.createElement("h5",null,n.a.createElement("h4",{className:"d-inline",style:{color:"#3c72cb"}},"Project Name:")," ",e.projectName)),n.a.createElement("p",null,n.a.createElement("p",{className:"d-inline",style:{color:"#3c72cb"}},"Description:")," ",e.description)),n.a.createElement("div",{className:"col-md-3 d-inline d-lg-block ml-auto"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(h.b,{to:"/pb/".concat(e.projectIdentifier),style:{textDecoration:"none"}},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered"}," View Project Tasks "))),n.a.createElement(h.b,{to:"/updateProject/".concat(e.projectIdentifier),style:{textDecoration:"none"}},n.a.createElement("li",{className:"list-group-item btn btn-block"},n.a.createElement("i",{className:"fa fa-edit"},"Update Project"))),n.a.createElement("li",{className:"list-group-item btn btn-block delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project"))))),n.a.createElement("div",{className:"card-footer"},n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},"Last update: ",a))))))}}]),a}(r.Component),W=Object(f.b)(null,{deleteProject:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure? This will delete the project and all related tasks. Click 'OK' to delete")){t.next=4;break}return t.next=3,N.a.delete("/api/project/".concat(e));case 3:a({type:"DELETE_PROJECT",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(U),K=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.b,{to:"/addProject",className:"btn btn-lg btn-dark"},"New Project"))},F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"text-lg-center text-center"},"Projects List"),n.a.createElement("br",null),n.a.createElement(K,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e){return n.a.createElement("div",null,n.a.createElement(W,{key:e.id,project:e}),n.a.createElement("br",null))}))))))}}]),a}(r.Component),H=Object(f.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(b.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/project/all");case 2:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(F),V=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;1===a.priority&&(t="bg-light text-danger",e="HIGH"),2===a.priority&&(t="bg-light text-warning",e="MEDIUM"),3===a.priority&&(t="bg-light text-info",e="LOW");var r=null!=a.dueDate?a.dueDate:"Not Provided";return n.a.createElement("div",{className:"card mb-3"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},n.a.createElement("h6",{className:"font-weight-bold"},"TID: ",a.projectSequence,n.a.createElement("h6",{className:"d-inline float-right font-weight-bold"},"Priority: ",e))),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(h.b,{to:"/updateTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-secondary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence)},"Delete")),n.a.createElement("div",{className:"card-footer bg-light text-black-50"},n.a.createElement("h6",{style:{fontSize:"14px"}},"Due on: ",r," ")))}}]),a}(r.Component),X=Object(f.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(b.a)(v.a.mark((function a(r){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure you want to delete task [".concat(t,"], this action is permanent"))){a.next=4;break}return a.next=3,N.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(V),z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return n.a.createElement(X,{key:e.id,project_task:e})})),t=[],a=[],r=[],c=0;c<e.length;c++)console.log(e[c]),"TO_DO"===e[c].props.project_task.status&&t.push(e[c]),"IN_PROGRESS"===e[c].props.project_task.status&&a.push(e[c]),"DONE"===e[c].props.project_task.status&&r.push(e[c]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-warning text-white"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-info text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Completed"))),r)))}}]),a}(r.Component),Y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={errors:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e,t){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,a){return a.length<1?e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"You haven't created any task on this project",n.a.createElement("br",null)),n.a.createElement(h.b,{to:"/addTask/".concat(t),className:"btn text-lg-center btn-block bg-light"},"Add Task")):n.a.createElement(z,{project_tasks_prop:a})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(h.b,{to:"/addTask/".concat(t),className:"btn btn-primary",style:{marginTop:"12px"}},n.a.createElement("i",{className:"fa fa-plus-circle"}," Add New Task ")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),a}(r.Component),$=Object(f.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(a){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:"GET_BACKLOG",payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(Y),Q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",create_At:"",errors:{}},r.onChange=r.onChange.bind(Object(d.a)(r)),r.onSubmit=r.onSubmit.bind(Object(d.a)(r)),r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e,t){e.errors&&this.setState({errors:e.errors});var a=e.project_task,r=a.id,n=a.projectSequence,c=a.summary,o=a.acceptanceCriteria,s=a.status,l=a.priority,i=a.dueDate,m=a.projectIdentifier,p=a.create_At;this.setState({id:r,projectSequence:n,summary:c,acceptanceCriteria:o,status:s,priority:l,dueDate:i,projectIdentifier:m,create_At:p})}},{key:"onChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,create_At:this.state.create_At};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container m-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(h.b,{to:"/pb/".concat(this.state.projectIdentifier),className:"btn btn-light"},"Back to Projects"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Task"),n.a.createElement("p",{className:"lead text-center"},"PID: ",this.state.projectIdentifier," | TID:"," ",this.state.projectSequence," "),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",{className:"lbl"},"Project Name"),n.a.createElement("input",{type:"text",className:y()("form-control form-control-md",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&n.a.createElement("div",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",{className:"lbl"},"DoD"),n.a.createElement("textarea",{className:"form-control form-control-md",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h5",{className:"lbl"},"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-md",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",{className:"lbl"},"Priority"),n.a.createElement("select",{className:"form-control form-control-md",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("h5",{className:"lbl"},"Status"),n.a.createElement("select",{className:"form-control form-control-md",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-dark btn-block mt-4",value:"Update Task"}))))))}}]),a}(r.Component),Z=Object(f.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(b.a)(v.a.mark((function r(n){var c;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,N.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:c=r.sent,n({type:"GET_PROJECT_TASK",payload:c.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/db");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(b.a)(v.a.mark((function n(c){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/pb/".concat(e)),c({type:"GET_ERRORS",payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:"GET_ERRORS",payload:n.t0.response.data});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}})(Q),ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(f.a,{store:J},n.a.createElement(h.a,null,n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement(C.a,{exact:!0,path:"/db",component:H}),n.a.createElement(C.a,{exact:!0,path:"/addProject",component:D}),n.a.createElement(C.a,{exact:!0,path:"/updateProject/:id",component:M}),n.a.createElement(C.a,{exact:!0,path:"/pb/:id",component:$}),n.a.createElement(C.a,{exact:!0,path:"/addTask/:id",component:O}),n.a.createElement(C.a,{exact:!0,path:"/updateTask/:backlog_id/:pt_id",component:Z}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.10f16398.chunk.js.map