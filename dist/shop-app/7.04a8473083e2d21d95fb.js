(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CXQP:function(t,e,i){"use strict";i.r(e),i.d(e,"ShoppingListModule",function(){return f});var n=i("3Pt+"),s=i("tyNb"),o=i("7F1V"),r=i("PCNd"),c=i("fXoL"),b=i("ozzT"),d=i("9rNa"),u=i("ofXK");const l=["f"];function a(t,e){if(1&t){const t=c.Mb();c.Lb(0,"button",13),c.Sb("click",function(){return c.cc(t),c.Ub().onDelete()}),c.gc(1," Delete "),c.Kb()}}let p=(()=>{class t{constructor(t){this.slService=t,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(t=>{this.editedItemIndex=t,this.editMode=!0,this.editedItem=this.slService.getIngredient(t),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(t){const e=t.value,i=new d.a(e.name,e.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,i):this.slService.addIngredient(i),this.editMode=!1,t.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.slService.deleteIngredient(this.editedItemIndex)}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(b.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){if(1&t&&c.jc(l,1),2&t){let t;c.Zb(t=c.Tb())&&(e.slForm=t.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){const t=c.Mb();c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"form",2,3),c.Sb("ngSubmit",function(){c.cc(t);const i=c.ac(3);return e.onSubmit(i)}),c.Lb(4,"div",0),c.Lb(5,"div",4),c.Lb(6,"label",5),c.gc(7,"Name"),c.Kb(),c.Jb(8,"input",6),c.Kb(),c.Lb(9,"div",7),c.Lb(10,"label",8),c.gc(11,"Amount"),c.Kb(),c.Jb(12,"input",9),c.Kb(),c.Kb(),c.Lb(13,"div",0),c.Lb(14,"div",1),c.Lb(15,"button",10),c.gc(16),c.Kb(),c.fc(17,a,2,0,"button",11),c.Lb(18,"button",12),c.Sb("click",function(){return e.onClear()}),c.gc(19," Clear "),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=c.ac(3);c.yb(15),c.Vb("disabled",!t.valid),c.yb(1),c.hc(" ",e.editMode?"Update":"Add"," "),c.yb(1),c.Vb("ngIf",e.editMode)}},directives:[n.u,n.m,n.n,n.a,n.l,n.o,n.s,n.p,n.q,u.i],styles:[""]}),t})();function m(t,e){if(1&t){const t=c.Mb();c.Lb(0,"a",4),c.Sb("click",function(){c.cc(t);const i=e.index;return c.Ub().onEditItem(i)}),c.gc(1),c.Kb()}if(2&t){const t=e.$implicit;c.yb(1),c.ic(" ",t.name," (",t.amount,") ")}}let g=(()=>{class t{constructor(t,e){this.slService=t,this.loggingService=e}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.subscription=this.slService.ingredientsChanged.subscribe(t=>{this.ingredients=t}),this.loggingService.printlog("Hello from ShoppingListComponent ngOnInit")}onEditItem(t){this.slService.startedEditing.next(t)}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(b.a),c.Ib(o.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Jb(2,"app-shopping-edit"),c.Jb(3,"hr"),c.Lb(4,"ul",2),c.fc(5,m,2,2,"a",3),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.yb(5),c.Vb("ngForOf",e.ingredients))},directives:[p,u.h],styles:[""]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({providers:[o.a],imports:[[n.j,s.e.forChild([{path:"",component:g}]),r.a]]}),t})()}}]);