(function(e){function t(t){for(var i,l,n=t[0],c=t[1],o=t[2],d=0,_=[];d<n.length;d++)l=n[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&_.push(s[l][0]),s[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(_.length)_.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},s={app:0},r=[];function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/quiz/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"124d":function(e,t,a){"use strict";var i=a("595c"),s=a.n(i);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("quiz",{attrs:{quizdata:e.quiz,scriptid:e.scriptid}})],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return!0===e.mainPage?a("div",{staticClass:"main"},[a("div",{staticClass:"main__bg",style:e.bgMainImage}),a("div",{staticClass:"main__wrapper"},[a("div",{staticClass:"main__header clearfix"},[a("div",{staticClass:"main__logo float-left mr-2"},[a("img",{attrs:{width:"32",src:e.quizdata.company_logo}})]),a("div",{staticClass:"main__name"},[e._v(e._s(e.quizdata.company_name))])]),a("div",{staticClass:"main__body"},[a("h1",{staticClass:"main__title my-2"},[e._v(e._s(e.quizdata.title))]),a("div",{staticClass:"main__desc my-2"},[e._v(e._s(e.quizdata.desc))]),a("div",{staticClass:"main__actions my-2"},[a("a",{staticClass:"main__button btn btn-error",attrs:{href:"#"},on:{click:function(t){e.mainPage=!1}}},[e._v(e._s(e.quizdata.button_text))])])]),a("div",{staticClass:"main__footer"},[a("div",{staticClass:"main__phone"},[a("a",{attrs:{href:e.quizdata.company_phone_link,target:"_blank"}},[e._v(e._s(e.quizdata.company_phone))])]),a("div",{staticClass:"main__phone-desc"},[e._v(e._s(e.quizdata.company_phone_desc))])])])]):!1===e.mainPage?a("div",{staticClass:"quiz container grid-lg"},[a("div",{staticClass:"quiz__header clearfix"},[a("div",{staticClass:"quiz__logo float-left mr-2"},[a("img",{attrs:{width:"32",src:e.quizdata.company_logo}})]),a("div",{staticClass:"quiz__title"},[e._v(e._s(e.quizdata.subtitle))])]),e._l(e.quizdata.steps,(function(t,i){return e.checkStep(i)?a("div",{staticClass:"quiz__steps"},[e.checkOperator(t.desc)?a("div",{staticClass:"quiz__operator"},[a("div",{staticClass:"tile"},[a("div",{staticClass:"tile-icon"},[a("img",{staticClass:"avatar avatar-lg badge",attrs:{src:e.quizdata.operator_image}})]),a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title"},[e._v(e._s(e.quizdata.operator_name))]),a("small",{staticClass:"tile-subtitle"},[e._v(e._s(e.quizdata.operator_post))]),a("small",{staticClass:"tile-subtitle"},[e._v("Бесплатная консультация")]),a("small",{staticClass:"tile-subtitle"},[a("a",{attrs:{href:e.quizdata.operator_phone_link,target:"_blank"}},[e._v(e._s(e.quizdata.operator_phone))])])])]),a("blockquote",{staticClass:"quiz__operator-quote text-small"},[e._v(e._s(t.desc))])]):e._e(),a("div",{staticClass:"quiz__step"},[a("h2",{staticClass:"quiz__step-title"},[e._v(e._s(t.title))]),e._l(t.questions,(function(t){return a("div",{staticClass:"quiz__question"},[e.checkType(t.type,"radio-horizontal")?a("div",{staticClass:"quiz__label",class:{required:t.required}},[e._v(e._s(t.label))]):e._e(),e.checkType(t.type,"radio-horizontal")?a("div",{staticClass:"quiz__radio columns"},[e._l(t.answers,(function(i){return a("div",{staticClass:"column col-4 col-sm-6 col-xs-12 my-2"},[a("label",{staticClass:"quiz__variant quiz__variant--images card",class:{active:e.answers[t.label]===i.title}},[a("div",{staticClass:"card-image"},[i.image?a("img",{staticClass:"quiz__variant-image img-responsive",attrs:{src:i.image}}):e._e()]),a("div",{staticClass:"card-header"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[t.label],expression:"answers[item.label]"}],attrs:{type:"radio",name:t.name},domProps:{value:i.title,checked:e._q(e.answers[t.label],i.title)},on:{change:function(a){return e.$set(e.answers,t.label,i.title)}}}),a("span",{staticClass:"quiz__variant-title"},[e._v(" "+e._s(i.title))])])])])})),t.desc?a("p",{staticClass:"quiz__question-desc text-small"},[e._v(e._s(t.desc))]):e._e()],2):e._e(),e.checkType(t.type,"radio-vertical")?a("div",{staticClass:"quiz__label",class:{required:t.required}},[e._v(e._s(t.label))]):e._e(),e.checkType(t.type,"radio-vertical")?a("div",{staticClass:"quiz__radio"},[e._l(t.answers,(function(i){return a("label",{staticClass:"quiz__variant"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[t.label],expression:"answers[item.label]"}],attrs:{type:"radio",name:t.name},domProps:{value:i.title,checked:e._q(e.answers[t.label],i.title)},on:{change:function(a){return e.$set(e.answers,t.label,i.title)}}}),a("span",{staticClass:"quiz__variant-title"},[e._v(" "+e._s(i.title))])])})),t.desc?a("p",{staticClass:"quiz__question-desc text-small"},[e._v(e._s(t.desc))]):e._e()],2):e._e(),e.checkType(t.type,"checkbox-horizontal")?a("div",{staticClass:"quiz__label",class:{required:t.required}},[e._v(e._s(t.label))]):e._e(),e.checkType(t.type,"checkbox-horizontal")?a("div",{staticClass:"quiz__checkbox columns"},[e._l(t.answers,(function(i,s){return a("div",{staticClass:"column col-4 col-sm-6 col-xs-12 my-2"},[a("label",{staticClass:"quiz__variant quiz__variant--images card",class:{active:"да"===e.answers[i.title]}},[a("div",{staticClass:"card-image"},[i.image?a("img",{staticClass:"quiz__variant-image img-responsive",attrs:{src:i.image}}):e._e()]),a("div",{staticClass:"card-header"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[i.title],expression:"answers[variant.title]"}],attrs:{type:"checkbox","true-value":"да","false-value":"нет",id:t.name+s},domProps:{value:i.title,checked:Array.isArray(e.answers[i.title])?e._i(e.answers[i.title],i.title)>-1:e._q(e.answers[i.title],"да")},on:{change:function(t){var a=e.answers[i.title],s=t.target,r=s.checked?"да":"нет";if(Array.isArray(a)){var l=i.title,n=e._i(a,l);s.checked?n<0&&e.$set(e.answers,i.title,a.concat([l])):n>-1&&e.$set(e.answers,i.title,a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.answers,i.title,r)}}}),a("span",{staticClass:"quiz__variant-title"},[e._v(" "+e._s(i.title))])])])])})),t.desc?a("p",{staticClass:"quiz__question-desc text-small"},[e._v(e._s(t.desc))]):e._e()],2):e._e(),e.checkType(t.type,"checkbox-vertical")?a("div",{staticClass:"quiz__label",class:{required:t.required}},[e._v(e._s(t.label))]):e._e(),e.checkType(t.type,"checkbox-vertical")?a("div",{staticClass:"quiz__checkbox"},e._l(t.answers,(function(i,s){return a("div",{staticClass:"quiz__variant"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[i.title],expression:"answers[variant.title]"}],attrs:{type:"checkbox","true-value":"да","false-value":"нет"},domProps:{value:i.title,checked:Array.isArray(e.answers[i.title])?e._i(e.answers[i.title],i.title)>-1:e._q(e.answers[i.title],"да")},on:{change:function(t){var a=e.answers[i.title],s=t.target,r=s.checked?"да":"нет";if(Array.isArray(a)){var l=i.title,n=e._i(a,l);s.checked?n<0&&e.$set(e.answers,i.title,a.concat([l])):n>-1&&e.$set(e.answers,i.title,a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.answers,i.title,r)}}}),a("span",{staticClass:"quiz__variant-title"},[e._v(" "+e._s(i.title))])]),t.desc?a("p",{staticClass:"quiz__question-desc text-small"},[e._v(e._s(t.desc))]):e._e()])})),0):e._e(),e.checkType(t.type,"number")?a("div",{staticClass:"quiz__number"},[a("label",[a("div",{staticClass:"quiz__label",class:{required:t.required}},[e._v(e._s(t.label))]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.answers[t.label],expression:"answers[item.label]",modifiers:{number:!0}}],attrs:{type:"number",min:t.min,placeholder:t.placeholder,name:t.name},domProps:{value:e.answers[t.label]},on:{input:function(a){a.target.composing||e.$set(e.answers,t.label,e._n(a.target.value))},blur:function(t){return e.$forceUpdate()}}}),t.desc?a("p",{staticClass:"quiz__question-desc text-small"},[e._v(e._s(t.desc))]):e._e()])]):e._e(),e.checkType(t.type,"text")?a("div",{staticClass:"quiz__text"},[a("label",[a("div",{staticClass:"quiz__label",class:{required:t.required}},[e._v(e._s(t.label))]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.answers[t.label],expression:"answers[item.label]",modifiers:{trim:!0}}],attrs:{type:"text",name:t.name,placeholder:t.placeholder},domProps:{value:e.answers[t.label]},on:{input:function(a){a.target.composing||e.$set(e.answers,t.label,a.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),t.desc?a("p",{staticClass:"quiz__question-desc text-small"},[e._v(e._s(t.desc))]):e._e()])]):e._e(),e.checkType(t.type,"contacts")?a("div",{staticClass:"quiz__contacts"},[a("label",[a("div",{staticClass:"quiz__label",class:{required:t.required}},[e._v(e._s(t.label))]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.answers[t.label],expression:"answers[item.label]",modifiers:{trim:!0}}],attrs:{type:"text",name:t.name,placeholder:t.placeholder},domProps:{value:e.answers[t.label]},on:{input:function(a){a.target.composing||e.$set(e.answers,t.label,a.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),t.desc?a("p",{staticClass:"quiz__question-desc text-small"},[e._v(e._s(t.desc))]):e._e()])]):e._e(),e.checkType(t.type,"phone")?a("div",{staticClass:"quiz__phone"},[a("label",[a("div",{staticClass:"quiz__label",class:{required:t.required}},[e._v(e._s(t.label))]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.answers[t.label],expression:"answers[item.label]",modifiers:{trim:!0}}],attrs:{type:"text",name:t.name,placeholder:t.placeholder},domProps:{value:e.answers[t.label]},on:{input:[function(a){a.target.composing||e.$set(e.answers,t.label,a.target.value.trim())},function(a){return e.phoneNumber(t.label)}],blur:function(t){return e.$forceUpdate()}}}),t.desc?a("p",{staticClass:"quiz__question-desc text-small"},[e._v(e._s(t.desc))]):e._e()])]):e._e()])}))],2)]):e._e()})),a("div",{staticClass:"quiz__actions my-2"},[e.errorsList.length?a("div",{staticClass:"toast toast-error my-2"},e._l(e.errorsList,(function(t){return a("div",{staticClass:"quiz__error"},[e._v(e._s(t))])})),0):e._e(),e.showPrev()?a("button",{staticClass:"btn quiz__prev-button mr-2",on:{click:e.prev}},[e._v("Назад")]):e._e(),e.showNext()?a("button",{staticClass:"btn quiz__next-button mr-2",on:{click:e.next}},[e._v("Далее")]):e._e(),e.showSubmit()?a("button",{staticClass:"btn quiz__submit-button btn-error mr-2",attrs:{disabled:!1===e.agree},on:{click:e.sendData}},[e._v("Отправить запрос")]):e._e(),e.showSubmit()?a("div",{staticClass:"quiz__agree d-inline-block"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],staticClass:"quiz__agree mr-2",attrs:{type:"checkbox",required:""},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(t){var a=e.agree,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=null,l=e._i(a,r);i.checked?l<0&&(e.agree=a.concat([r])):l>-1&&(e.agree=a.slice(0,l).concat(a.slice(l+1)))}else e.agree=s}}}),e._v(" С "),a("a",{attrs:{target:"_blank",href:e.quizdata.confidencial_url}},[e._v("политикой")]),e._v(" конфиденциальности ознакомлен(а) ")]):e._e()])],2):e._e()},n=[],c=(a("99af"),a("4160"),a("ac1f"),a("466d"),a("5319"),a("159b"),{name:"Quiz",props:["quizdata","scriptid"],data:function(){return{mainPage:!0,errorsList:[],currentStep:0,agree:!0,bgMainImage:{backgroundImage:"url("+this.quizdata.background_image+")"},postUrl:"https://script.google.com/macros/s/"+this.scriptid+"/exec",answers:{}}},methods:{sendData:function(){if(this.errorsList=[],this.saveData(),!this.errorsList.length){var e=new FormData,t=this.quizdata.redirect;e.append("JSONdata",JSON.stringify(this.answers)),this.axios.post(this.postUrl,e).then((function(e){console.log(e),window.location.href=t})).catch((function(e){console.log(e)}))}},phoneNumber:function(e){var t=this.answers[e].replace(/\D/g,"").match(/([7-8]{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);this.answers[e]=t[2]?"+"+t[1]+" "+t[2]+" "+t[3]+" "+t[4]:"+"+t[1]},clean_answers:function(){for(var e in this.answers)"нет"===this.answers[e]&&delete this.answers[e]},validate:function(){var e=this.quizdata.steps[this.currentStep].questions,t=this.answers,a=[];e.forEach((function(i,s){var r=e[s].label,l=t[r];i.required&&(console.log(l),("radio-horizontal"!==i.type||l)&&("radio-vertical"!==i.type||l)?l||a.push('Поле "'+i.label+'" не может быть пустым'):a.push('Нужно выбрать "'+i.label+'"')),"number"!==i.type||i.min<parseFloat(l)&&parseFloat(l)<i.max||a.push('Поле "'+i.label+'" должно быть в диапазоне от '+i.min+" до "+i.max),"phone"!==i.type||l&&15===l.length||a.push("Правильно укажите мобильный телефон")})),this.errorsList=this.errorsList.concat(a)},saveData:function(){this.validate(),this.clean_answers(),localStorage.answers=JSON.stringify(this.answers)},progressActive:function(e){if(this.currentStep===e)return"active"},checkStep:function(e){return e===this.currentStep},checkType:function(e,t){return e===t},checkOperator:function(e){return e&&e.length>0},showPrev:function(){return this.currentStep>0},showNext:function(){return this.currentStep<this.quizdata.steps.length-1},showSubmit:function(){return this.currentStep===this.quizdata.steps.length-1},prev:function(){this.saveData(),this.errorsList=[],this.showPrev()&&this.currentStep--,window.scrollTo(0,0)},next:function(){this.errorsList=[],this.saveData(),this.showNext()&&!this.errorsList.length&&this.currentStep++,window.scrollTo(0,0)},setStep:function(e){this.currentStep=e},requiredValidate:function(){}},mounted:function(){console.log(this.quizdata),localStorage.answers&&(this.answers=JSON.parse(localStorage.answers))}}),o=c,u=(a("124d"),a("2877")),d=Object(u["a"])(o,l,n,!1,null,"61493f37",null),_=d.exports,p="AKfycbyn9cAT01eX7Hi3pripfTk_WrrNDZhfvaXkJfIXbbgyv1a7XUk",m={redirect:"/quiz",title:"Натяжные потолки в Лисках",subtitle:"Выберите натяжной потолок вашей мечты",desc:"Выберите натяжной потолок на свой вкус и мы бесплатно рассчитаем его стоимость в Лисках, а также предложим несколько вариантов дизайна + персональный подарок!",button_text:"Подобрать потолок",background_image:"/quiz/img/background.jpg",company_logo:"/quiz/img/logo.jpg",company_name:"Натяжные потолки Style+",company_phone:"+7 (908) 142-18-28",company_phone_link:"tel:+79081421828",company_phone_desc:"Лиски и Лискинский район",operator_name:"Алексей",operator_image:"/quiz/img/alexey-128.jpg",operator_post:"Монтажник потолков",operator_phone:"+7(908)142-18-28",operator_phone_link:"tel:+79081421828",confidencial_url:"http://liskipol.ru/sites/liskipol.liskigid.ru/files/user_agreement_liskipol_ru.pdf",steps:[{title:"Какой потолок вам нужен?",desc:"Натяжные потолки имеют множество вариаций в плане дизайна и расцветок. Мы, в компании Style+, готовы выполнить почти любой вариант - дело за вами! Выбирайте!",questions:[{desc:"",type:"radio-horizontal",name:"ceilType",label:"Варианты потолка",required:!0,answers:[{title:"Белый",image:"/quiz/img/ceils/white.jpg"},{title:"Цветной",image:"/quiz/img/ceils/colored.jpg"},{title:"Фотопечать",image:"/quiz/img/ceils/photoprint.jpg"},{title:"Двухуровневый",image:"/quiz/img/ceils/twolevels.jpg"},{title:"Перфорированный",image:"/quiz/img/ceils/perforated.jpg"},{title:"Парящий",image:"/quiz/img/ceils/soaring.jpg"},{title:"Звёздное небо",image:"/quiz/img/ceils/stars.jpg"},{title:"Другой тип",image:"/quiz/img/ceils/more.jpg"}]}]},{title:"Выберите материал потолка",desc:"Натяжные потолки изготавливают из поливинилхлоридной плёнки (ПВХ) или ткани. Плёнки ПВХ дешевле ткани и различается по фактуре и степени глянца. Тканевые потолки более дороги, но и более качественные!",questions:[{desc:"",type:"radio-vertical",name:"ceilMaterial",label:"Тип материала",required:!0,answers:[{title:"Глянцевый ПВХ"},{title:"Матовый ПВХ"},{title:"Сатиновый ПВХ"},{title:"Ткань"}]}]},{title:"Какое нужно освещение?",desc:"Подберите освещение какое вам нравится - вариантов множество, их можно комбинировать, создавая собственное решение",questions:[{desc:"",type:"checkbox-horizontal",name:"ceilLight",label:"Освещение потолка",answers:[{title:"Люстра",image:"/quiz/img/ceils/lustra.jpg"},{title:"Светильники",image:"/quiz/img/ceils/svetilniki.jpg"},{title:"Споты",image:"/quiz/img/ceils/spots.jpg"},{title:"LED светильники",image:"/quiz/img/ceils/led-svetilnik.jpg"},{title:"Светодиодная лента",image:"/quiz/img/ceils/led-lenta.jpg"},{title:"Светящийся потолок",image:"/quiz/img/ceils/led-lenta-full.jpg"},{title:"Световые линии",image:"/quiz/img/ceils/light-lines.jpg"}]}]},{title:"В каком помещении нужен потолок?",desc:"Выберите один или несколько вариантов помещений, в которых вам нужен натяжной потолок",questions:[{desc:"",type:"checkbox-vertical",name:"ceilRooms",label:"Помещения",answers:[{title:"Вся квартира / дом"},{title:"Гостиная / комната"},{title:"Кухня / столовая"},{title:"Коридор / холл"},{title:"Ванная / туалет"},{title:"Другой вариант"}]}]},{title:"Укажите параметры потолка",desc:"Оцените площадь всех комнат, в которых нужно установить натяжные потолки. Чем точнее вы это сделаете, тем точнее будет расчёт",questions:[{desc:"",type:"number",min:5,max:99999,placeholder:"Укажите площадь",name:"ceilArea",label:"Площадь потолка",required:!0}]},{title:"Когда нужен натяжной потолок и его ценовой сегмент?",desc:"Цены на материалы и комплектующие варьируются в широких пределах, для точного расчёта стоимости натяжного потолка нужно знать потребности и пожелания заказчика",questions:[{desc:"",type:"radio-vertical",name:"ceilPeriod",label:"Срок изготовления потолка",required:!0,answers:[{title:"Сегодня / завтра"},{title:"В течение недели"},{title:"В течение месяца"},{title:"Сейчас не нужен"}]},{desc:"",type:"radio-vertical",name:"ceilPriceSegment",label:"Ценовой сегмент",required:!0,answers:[{title:"Дешевый вариант (самый недорогой вариант)"},{title:"Оптимальный (лучшее качество и разумная цена)"},{title:"VIP потолок (максимальное качество за соответствующую цену)"}]}]},{title:"Контактная информация",desc:"Остался последний шаг - номер телефона (WhatsApp, Viber), чтобы мы смогли связаться с вами и представить результаты расчёта потолка, специальное предложение и наш подарок!",questions:[{desc:"",type:"contacts",name:"name",label:"Ваше имя"},{desc:"",type:"phone",name:"phone",label:"Номер моб. телефона",required:!0}]}]},v={name:"App",data:function(){return{quiz:m,scriptid:p}},components:{Quiz:_}},h=v,g=(a("5c0b"),Object(u["a"])(h,s,r,!1,null,null,null)),b=g.exports,q=a("bc3a"),f=a.n(q),w=a("a7fe"),z=a.n(w);i["a"].use(z.a,f.a),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(b)}}).$mount("#app")},"595c":function(e,t,a){},"5c0b":function(e,t,a){"use strict";var i=a("9c0c"),s=a.n(i);s.a},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.0ca490cb.js.map