(()=>{"use strict";const e=(()=>{const e=document.querySelector("#task-title"),o=document.querySelector("#select-project"),a=document.querySelector("#priority"),r=document.querySelector("#due-date"),s=document.querySelector("#description");let l=[];return{allTasks:l,addTask:function(){if(""==e.value||""==o.value||""==a.value||""==r.value)alert("Please fill all inputs.");else{let c=((e,t,o,a,r)=>({title:e,project:t,priority:o,dueDate:a,description:r}))(e.value,o.value,a.value,r.value,s.value);l.push(c),console.log(l),t.projectList.forEach((e=>{document.querySelector("#select-project").value===e.title&&e.tasks.push(c)}))}},orderTasks:function(){t.projectList.forEach((e=>{e.tasks=e.tasks.filter((e=>l.includes(e)))}))}}})(),t=(()=>{let t=[];const o=document.querySelector("#project-title-input");return{projectList:t,addProject:function(){if(""==o.value)alert("Please fill the input.");else{let e={title:o.value,tasks:[]};t.push(e),console.log(t)}},removeTasksWithProj:function(t){e.allTasks.forEach((o=>{o.project==t.target.parentNode.textContent.trim()&&(o.project=""),""===o.project&&e.allTasks.splice(e.allTasks.indexOf(o),1)}))}}})(),o=(()=>{const o=document.querySelector("#task-modal-bg"),a=document.querySelector("#project-modal-bg"),r=document.querySelector("#select-project"),s=document.querySelector("#project-container"),l=document.querySelector("#task-container");return{body:document.querySelector("body"),deleteTask:function(o){e.allTasks.splice(o.target.dataset.taskNum,1),t.projectList.forEach((e=>{console.log(e)}))},deleteProject:function(e){t.projectList.splice(e.target.dataset.indexNumber,1)},openTaskModal:function(){o.style.display="block"},openProjectModal:function(){a.style.display="block"},hideProjectModal:function(){a.style.display="none"},hideTaskModal:function(){o.style.display="none"},clearProjForm:function(){document.querySelector("#project-title-input").value=""},clearTaskForm:function(){const e=document.querySelector("#task-title"),t=document.querySelector("#select-project"),o=document.querySelector("#due-date"),a=document.querySelector("#priority"),r=document.querySelector("#description");e.value="",t.value="None",o.value="",a.value="Low",r.value=""},renderProjOptions:function(){r.innerHTML='\n      <option value="">Choose Project</option>\n      <option value="none">None</option>\n    ',t.projectList.forEach((e=>{const t=document.createElement("option");t.id="project-dropdown",t.textContent=e.title,r.appendChild(t)}))},showProjects:function(){s.innerHTML='\n      <h3 id="project-display">Projects</h3>\n    ',t.projectList.forEach((e=>{const o=document.createElement("li");o.id="project-list-item",o.innerHTML=`\n      ${e.title}\n      <i class="fas fa-trash delete-project" data-index-number=${t.projectList.indexOf(e)}></i>\n      `,s.appendChild(o)}))},showTasks:function(){l.innerHTML='\n    \t<h3 id="all-tasks">All Tasks</h3>\n    ',e.allTasks.forEach((o=>{const a=document.createElement("div");a.id="task-list-item",a.innerHTML=`\n      <p>${o.title}</p> \n      <p class="task-display">Project: ${o.project}</p>   \n      <p class="task-display">${o.dueDate}</p>\n      <p class="task-display">${o.priority}</p>\n      <i class="fas fa-trash delete-task" data-task-num=${e.allTasks.indexOf(o)} data-project-num=${t.projectList}></i>\n      `,l.appendChild(a)}))}}})();o.body.addEventListener("click",(a=>{"task-btn"===a.target.id?o.openTaskModal():"project-btn"===a.target.id?o.openProjectModal():"close-button"===a.target.className?(o.hideProjectModal(),o.hideTaskModal()):"task-submit"===a.target.id?(e.addTask(),o.showTasks(),o.hideTaskModal(),o.clearTaskForm()):"project-submit"===a.target.id?(t.addProject(),o.showProjects(),o.renderProjOptions(),o.hideProjectModal(),o.clearProjForm()):"fas fa-trash delete-project"===a.target.className?(o.deleteProject(a),t.removeTasksWithProj(a),o.renderProjOptions(),o.showProjects(),o.showTasks()):"fas fa-trash delete-task"===a.target.className&&(o.deleteTask(a),e.orderTasks(),o.showProjects(),o.showTasks())}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBNkJBLEdBQzdCLHNCQUNBLGlCQUNBLGVBRThCLDZCQUF2QkEsRUFBRUMsT0FBT29DLFlBQ2hCLGFBQWVyQyxHQUNmLGVBQ0EsaUJBQ0EsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdGZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmFjdG9yeSB0byBtYWtlIHByb2plY3Qgb2JqZWN0c1xuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgdGl0bGUgPSB7XG4gICAgdGl0bGUgOiB0aXRsZSxcbiAgICB0YXNrcyA6IFtdXG4gIH07XG4gIHJldHVybiB0aXRsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGYWN0b3J5O1xuIiwiaW1wb3J0IHRvZG9GYWN0b3J5IGZyb20gJy4vdG9kb0ZhY3RvcnknO1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnO1xuXG5jb25zdCB0YXNrcyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJyk7XG4gIGNvbnN0IHByb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcblxuICBsZXQgYWxsVGFza3MgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGlmIChcbiAgICAgIHRhc2tUaXRsZS52YWx1ZSA9PSAnJyB8fFxuICAgICAgcHJvamVjdFNlbGVjdGlvbi52YWx1ZSA9PSAnJyB8fFxuICAgICAgcHJpb3JpdHkudmFsdWUgPT0gJycgfHxcbiAgICAgIGR1ZURhdGUudmFsdWUgPT0gJydcbiAgICApIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZmlsbCBhbGwgaW5wdXRzLicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBuZXdUYXNrID0gdG9kb0ZhY3RvcnkoXG4gICAgICAgIHRhc2tUaXRsZS52YWx1ZSxcbiAgICAgICAgcHJvamVjdFNlbGVjdGlvbi52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHkudmFsdWUsXG4gICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZVxuICAgICAgKTtcblxuICAgICAgYWxsVGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKTtcbiAgICAgIHByb2plY3RzLnByb2plY3RMaXN0LmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpO1xuICAgICAgICBpZiAocHJvamVjdFNlbGVjdC52YWx1ZSA9PT0gcHJvai50aXRsZSkge1xuICAgICAgICAgIHByb2oudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXJUYXNrcygpIHtcbiAgICBwcm9qZWN0cy5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICBwcm9qLnRhc2tzID0gcHJvai50YXNrcy5maWx0ZXIoKHRhc2spID0+IGFsbFRhc2tzLmluY2x1ZGVzKHRhc2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWxsVGFza3MsXG4gICAgYWRkVGFzayxcbiAgICBvcmRlclRhc2tzXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrcztcbiIsIi8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gbWFrZSB0b2Rvc1xuY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHByb2plY3QsXG4gICAgcHJpb3JpdHksXG4gICAgZHVlRGF0ZSxcbiAgICBkZXNjcmlwdGlvblxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0ZhY3Rvcnk7XG4iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSAnLi9wcm9qZWN0ZmFjdG9yeSc7XG5pbXBvcnQgdGFza3MgZnJvbSAnLi90YXNrcyc7XG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbiAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1pbnB1dCcpO1xuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgaWYgKHByb2pOYW1lLnZhbHVlID09ICcnKSB7XG4gICAgICBhbGVydCgnUGxlYXNlIGZpbGwgdGhlIGlucHV0LicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBuZXdQcm9qID0gcHJvamVjdEZhY3RvcnkocHJvak5hbWUudmFsdWUpO1xuICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUYXNrc1dpdGhQcm9qKGUpIHtcbiAgICB0YXNrcy5hbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5wcm9qZWN0ID09IGUudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQudHJpbSgpKSB7XG4gICAgICAgIHRhc2sucHJvamVjdCA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2sucHJvamVjdCA9PT0gJycpIHtcbiAgICAgICAgdGFza3MuYWxsVGFza3Muc3BsaWNlKHRhc2tzLmFsbFRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvamVjdExpc3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVUYXNrc1dpdGhQcm9qXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcbiIsImltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB0YXNrcyBmcm9tICcuL3Rhc2tzJztcblxuY29uc3QgZG9tID0gKCgpID0+IHtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbW9kYWwtYmcnKTtcbiAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwtYmcnKTtcbiAgY29uc3Qgc2VsZWN0UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpO1xuICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250YWluZXInKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBmdW5jdGlvbiBvcGVuVGFza01vZGFsKCkge1xuICAgIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVUYXNrTW9kYWwoKSB7XG4gICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuUHJvamVjdE1vZGFsKCkge1xuICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVQcm9qZWN0TW9kYWwoKSB7XG4gICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclByb2pGb3JtKCkge1xuICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLWlucHV0Jyk7XG4gICAgcHJvalRpdGxlLnZhbHVlID0gJyc7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuXG4gICAgdGFza1RpdGxlLnZhbHVlID0gJyc7XG4gICAgdGFza1Byb2plY3QudmFsdWUgPSAnTm9uZSc7XG4gICAgdGFza0R1ZURhdGUudmFsdWUgPSAnJztcbiAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSAnTG93JztcbiAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dUYXNrcygpIHtcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICBcdDxoMyBpZD1cImFsbC10YXNrc1wiPkFsbCBUYXNrczwvaDM+XG4gICAgYDtcbiAgICB0YXNrcy5hbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YXNrRGl2LmlkID0gJ3Rhc2stbGlzdC1pdGVtJztcbiAgICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgPHA+JHt0YXNrLnRpdGxlfTwvcD4gXG4gICAgICA8cCBjbGFzcz1cInRhc2stZGlzcGxheVwiPlByb2plY3Q6ICR7dGFzay5wcm9qZWN0fTwvcD4gICBcbiAgICAgIDxwIGNsYXNzPVwidGFzay1kaXNwbGF5XCI+JHt0YXNrLmR1ZURhdGV9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJ0YXNrLWRpc3BsYXlcIj4ke3Rhc2sucHJpb3JpdHl9PC9wPlxuICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2ggZGVsZXRlLXRhc2tcIiBkYXRhLXRhc2stbnVtPSR7dGFza3MuYWxsVGFza3MuaW5kZXhPZihcbiAgICAgICAgdGFza1xuICAgICAgKX0gZGF0YS1wcm9qZWN0LW51bT0ke3Byb2plY3RzLnByb2plY3RMaXN0fT48L2k+XG4gICAgICBgO1xuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclByb2pPcHRpb25zKCkge1xuICAgIHNlbGVjdFByb2ouaW5uZXJIVE1MID0gYFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNob29zZSBQcm9qZWN0PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibm9uZVwiPk5vbmU8L29wdGlvbj5cbiAgICBgO1xuICAgIHByb2plY3RzLnByb2plY3RMaXN0LmZvckVhY2goKHByb2opID0+IHtcbiAgICAgIGNvbnN0IG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcC5pZCA9ICdwcm9qZWN0LWRyb3Bkb3duJztcbiAgICAgIG9wLnRleHRDb250ZW50ID0gcHJvai50aXRsZTtcbiAgICAgIHNlbGVjdFByb2ouYXBwZW5kQ2hpbGQob3ApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG4gICAgcHJvamVjdHMucHJvamVjdExpc3Quc3BsaWNlKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXhOdW1iZXIsIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gICAgdGFza3MuYWxsVGFza3Muc3BsaWNlKGUudGFyZ2V0LmRhdGFzZXQudGFza051bSwgMSk7XG5cbiAgICBwcm9qZWN0cy5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgICBwcm9qQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgIDxoMyBpZD1cInByb2plY3QtZGlzcGxheVwiPlByb2plY3RzPC9oMz5cbiAgICBgO1xuICAgIHByb2plY3RzLnByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpLmlkID0gJ3Byb2plY3QtbGlzdC1pdGVtJztcbiAgICAgIGxpLmlubmVySFRNTCA9IGBcbiAgICAgICR7cHJvamVjdC50aXRsZX1cbiAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoIGRlbGV0ZS1wcm9qZWN0XCIgZGF0YS1pbmRleC1udW1iZXI9JHtwcm9qZWN0cy5wcm9qZWN0TGlzdC5pbmRleE9mKFxuICAgICAgICBwcm9qZWN0XG4gICAgICApfT48L2k+XG4gICAgICBgO1xuICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvZHksXG4gICAgZGVsZXRlVGFzayxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIG9wZW5UYXNrTW9kYWwsXG4gICAgb3BlblByb2plY3RNb2RhbCxcbiAgICBoaWRlUHJvamVjdE1vZGFsLFxuICAgIGhpZGVUYXNrTW9kYWwsXG4gICAgY2xlYXJQcm9qRm9ybSxcbiAgICBjbGVhclRhc2tGb3JtLFxuICAgIHJlbmRlclByb2pPcHRpb25zLFxuICAgIHNob3dQcm9qZWN0cyxcbiAgICBzaG93VGFza3NcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiIsImltcG9ydCBkb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHRhc2tzIGZyb20gJy4vdGFza3MnO1xuXG5jb25zdCBoYW5kbGVycyA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcnMoKSB7XG4gICAgZG9tLmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAndGFzay1idG4nKSB7XG4gICAgICAgIGRvbS5vcGVuVGFza01vZGFsKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ3Byb2plY3QtYnRuJykge1xuICAgICAgICBkb20ub3BlblByb2plY3RNb2RhbCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2xvc2UtYnV0dG9uJykge1xuICAgICAgICBkb20uaGlkZVByb2plY3RNb2RhbCgpO1xuICAgICAgICBkb20uaGlkZVRhc2tNb2RhbCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICd0YXNrLXN1Ym1pdCcpIHtcbiAgICAgICAgdGFza3MuYWRkVGFzaygpO1xuICAgICAgICBkb20uc2hvd1Rhc2tzKCk7XG4gICAgICAgIGRvbS5oaWRlVGFza01vZGFsKCk7XG4gICAgICAgIGRvbS5jbGVhclRhc2tGb3JtKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ3Byb2plY3Qtc3VibWl0Jykge1xuICAgICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KCk7XG4gICAgICAgIGRvbS5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgZG9tLnJlbmRlclByb2pPcHRpb25zKCk7XG4gICAgICAgIGRvbS5oaWRlUHJvamVjdE1vZGFsKCk7XG4gICAgICAgIGRvbS5jbGVhclByb2pGb3JtKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdmYXMgZmEtdHJhc2ggZGVsZXRlLXByb2plY3QnKSB7XG4gICAgICAgIGRvbS5kZWxldGVQcm9qZWN0KGUpO1xuICAgICAgICBwcm9qZWN0cy5yZW1vdmVUYXNrc1dpdGhQcm9qKGUpO1xuICAgICAgICBkb20ucmVuZGVyUHJvak9wdGlvbnMoKTtcbiAgICAgICAgZG9tLnNob3dQcm9qZWN0cygpO1xuICAgICAgICBkb20uc2hvd1Rhc2tzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdmYXMgZmEtdHJhc2ggZGVsZXRlLXRhc2snKSB7XG4gICAgICAgIGRvbS5kZWxldGVUYXNrKGUpO1xuICAgICAgICB0YXNrcy5vcmRlclRhc2tzKCk7XG4gICAgICAgIGRvbS5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgZG9tLnNob3dUYXNrcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgY2xpY2tIYW5kbGVycyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcnM7XG4iXSwibmFtZXMiOlsidGFza1RpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdFNlbGVjdGlvbiIsInByaW9yaXR5IiwiZHVlRGF0ZSIsInRhc2tEZXNjcmlwdGlvbiIsImFsbFRhc2tzIiwiYWRkVGFzayIsInZhbHVlIiwiYWxlcnQiLCJuZXdUYXNrIiwidGl0bGUiLCJwcm9qZWN0IiwiZGVzY3JpcHRpb24iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInByb2oiLCJ0YXNrcyIsIm9yZGVyVGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwiaW5jbHVkZXMiLCJwcm9qZWN0TGlzdCIsInByb2pOYW1lIiwiYWRkUHJvamVjdCIsIm5ld1Byb2oiLCJyZW1vdmVUYXNrc1dpdGhQcm9qIiwiZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJ0YXNrTW9kYWwiLCJwcm9qZWN0TW9kYWwiLCJzZWxlY3RQcm9qIiwicHJvakNvbnRhaW5lciIsInRhc2tDb250YWluZXIiLCJib2R5IiwiZGVsZXRlVGFzayIsImRhdGFzZXQiLCJ0YXNrTnVtIiwiZGVsZXRlUHJvamVjdCIsImluZGV4TnVtYmVyIiwib3BlblRhc2tNb2RhbCIsInN0eWxlIiwiZGlzcGxheSIsIm9wZW5Qcm9qZWN0TW9kYWwiLCJoaWRlUHJvamVjdE1vZGFsIiwiaGlkZVRhc2tNb2RhbCIsImNsZWFyUHJvakZvcm0iLCJjbGVhclRhc2tGb3JtIiwidGFza1Byb2plY3QiLCJ0YXNrRHVlRGF0ZSIsInRhc2tQcmlvcml0eSIsInJlbmRlclByb2pPcHRpb25zIiwiaW5uZXJIVE1MIiwib3AiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJhcHBlbmRDaGlsZCIsInNob3dQcm9qZWN0cyIsImxpIiwic2hvd1Rhc2tzIiwidGFza0RpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=