function $_global_callout(){if("undefined"==typeof g_all_modules)g_all_modules={};g_all_modules["callout.js"]={version:{rmj:16,rmm:0,rup:24016,rpr:12006}};typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkBegin_callout.js");CalloutActionMenuEntry=function(){};CalloutActionMenuEntry.prototype={text:"",onClickCallback:function(){},wzISrc:"",wzIAlt:"",wzISeq:"",wzDesc:""};(function(){a:;var c="launchPointObject-{D4B8D3C2-7958-44B7-8409-40EE80E877E1}",d="js-callout-mainElement",e="."+d,b=function(d,c){a:;for(var a in d){var b=a in c;if(!b)throw"Invalid option '"+a+"' specified";}},a=function(c,d,o,r){var n=Boolean(d.watchOffset),l=Boolean(d.watchOffsetParent),p=Boolean(d.watchSize),q=m$.isNumber(d.interval)?d.interval:100,a=m$(c),j=null,k=null,i=null,h=null,g=null,e=null,b=this,f=function(){a:;var b=false;if(l){b=b||g!==c.offsetParent;g=c.offsetParent}if(n){var d=a.offset();b=b||j!==d.left||k!==d.top;j=d.left;k=d.top}if(p){b=b||i!==c.offsetWidth||h!==c.offsetHeight;i=c.offsetWidth;h=c.offsetHeight}return b},m=function(){a:;if(!m$(document.body).contains(c))b.stop();else f()&&o.apply(arguments)};this.checkForChangesAndActImmediately=function(){a:;f()&&r.apply(arguments)};this.start=function(){a:;if(e===null){f();e=setInterval(m,q)}if(m$.support.domSubtreeModified){a.bind("DOMSubtreeModified",b.checkForChangesAndActImmediately);a.bind("DOMNodeInserted",b.checkForChangesAndActImmediately);a.bind("DOMNodeRemoved",b.checkForChangesAndActImmediately);a.bind("DOMNodeInserted",b.checkForChangesAndActImmediately);a.bind("DOMCharacterDataModified",b.checkForChangesAndActImmediately)}};this.stop=function(){a:;clearInterval(e);e=null;if(m$.support.domSubtreeModified){a.unbind("DOMSubtreeModified",b.checkForChangesAndActImmediately);a.unbind("DOMNodeInserted",b.checkForChangesAndActImmediately);a.unbind("DOMNodeRemoved",b.checkForChangesAndActImmediately);a.unbind("DOMNodeInserted",b.checkForChangesAndActImmediately);a.unbind("DOMCharacterDataModified",b.checkForChangesAndActImmediately)}}};a.prototype.start=undefined;a.prototype.stop=undefined;a.prototype.checkForChangesAndActImmediately=undefined;(function(){a:;CalloutOpenOptions=function(){};CalloutOpenOptions.prototype={event:"click",closeCalloutOnBlur:true,showCloseButton:true};CalloutOptions=function(){};CalloutOptions.prototype={launchPoint:null,ID:null,title:"",content:"",contentElement:null,boundingBox:null,contentWidth:350,openOptions:new CalloutOpenOptions,onOpeningCallback:null,onOpenedCallback:null,onClosingCallback:null,onClosedCallback:null,beakOrientation:"topBottom",positionAlgorithm:n,allowScroll:false};var p=browseris.ie&&!browseris.ie9standardUp,i=!p,h=9,m=6,j=5,k=15,f=1,o=50,g=2.63601;CalloutOptions.CALLOUT_MINIMUM_WIDTH=240;CalloutOptions.CALLOUT_MAXIMUM_WIDTH=610;var e={opening:"opening",opened:"opened",closing:"closing",closed:"closed"},l={onOpeningCallback:e.opening,onOpenedCallback:e.opened,onClosingCallback:e.closing,onClosedCallback:e.closed};Callout=function(gb){var n=this,q=new CalloutOptions,F=false,y=e.closed,z=false,G=null,r,p=null,u,U=false,v=null,s=null,N=null,D,C,B,J=m$(),S={up:false,left:false};if(Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169))var H=null,I=null,x=false,A=true;this.getOrientation=function(){a:;return m$.extend({},S)};this.set=function(c){if(m$.isUndefinedOrNull(c))throw"Callout: Input parameter must be defined";b(c,CalloutOptions.prototype);var a=m$.extend(true,{},q,c);if(m$.isUndefinedOrNull(a.ID))throw"Callout: Required property must be defined: ID";if(m$.isUndefinedOrNull(a.launchPoint))throw"Callout: Required property must be defined: launchPoint";if(!m$.isElement(a.launchPoint))throw"Callout: launchPoint must be an HTML Element";if(!m$.isString(a.content))throw"Callout: Content must be a string";if(m$.isElement(a.contentElement)&&a.content!=="")throw"Callout: Content must be specified as either an HTML element (contentElement) or a string (content) but not both.";if(a.boundingBox!==null&&!m$.isElement(a.boundingBox))throw"Callout: boundingBox must be an HTML Element.";if(!m$.isNumber(a.contentWidth))throw"Callout: contentWidth must be a number representing the content element's width in pixels";else if(a.contentWidth<CalloutOptions.CALLOUT_MINIMUM_WIDTH||a.contentWidth>CalloutOptions.CALLOUT_MAXIMUM_WIDTH)throw"Callout: contentWidth must be a number between "+CalloutOptions.CALLOUT_MINIMUM_WIDTH.toString()+" and "+CalloutOptions.CALLOUT_MAXIMUM_WIDTH.toString()+".";if(a.beakOrientation!=="topBottom"&&a.beakOrientation!=="leftRight")throw'Callout: Beak must be specified as either "topBottom" or "leftRight".';if(m$.isDefined(a.positionAlgorithm)&&!m$.isFunction(a.positionAlgorithm))throw"Callout: positionAlgorithm must be a function.";if(m$.isUndefinedOrNull(a.openOptions)||m$.isUndefinedOrNull(a.openOptions.event))throw"Callout: Property must be defined: openOptions";if(m$.isDefinedAndNotNull(a.openOptions.event)&&a.openOptions.event!=="click"&&a.openOptions.event!=="hover"&&a.openOptions.event!=="none")throw'Callout: Only "click", "hover", and "none" are supported events';if(a.openOptions.event==="click"&&a.openOptions.showCloseButton===false)throw"Callout: When activated by click, callout must have close button";if(a.openOptions.event==="hover"&&a.openOptions.closeCalloutOnBlur===false)throw"Callout: When activated by hover, closeCalloutOnBlur cannot be overriden";if(F)if(m$.isFunction(c.onOpeningCallback)||m$.isFunction(c.onOpenedCallback)||m$.isFunction(c.onClosingCallback)||m$.isFunction(c.onClosedCallback))throw"Callout:  Event callbacks may not be registered using the .set() method once the Callout has been initialized. Use Callout.addEventCallback(...) instead";q=a;u=STSScriptEncode(q.ID);bb(q.launchPoint);!F&&m$.forEach(Object.keys(l),function(a){a:;V(a)});P()};this.addEventCallback=function(a,b){if(!Z(a))throw"Callout: Invalid callback event name specified";m$(n).bind(a,b)};this.getLaunchPoint=function(){a:;return r};this.getID=function(){a:;return q.ID};this.getTitle=function(){a:;return q.title};this.getContent=function(){a:;return q.content};this.getContentElement=function(){a:;return document.getElementById(w("content"))};this.getBoundingBox=function(){a:;return q.boundingBox};this.getContentWidth=function(){a:;return q.contentWidth};this.getOpenOptions=function(){a:;return q.openOptions};this.getBeakOrientation=function(){a:;return q.beakOrientation};this.getPositionAlgorithm=function(){a:;return q.positionAlgorithm};this.isOpen=function(){a:;return y===e.opened};this.isOpening=function(){a:;return y===e.opening};this.isOpenOrOpening=function(){a:;return n.isOpen()||n.isOpening()};this.isClosing=function(){a:;return y===e.closing};this.isClosed=function(){a:;return y===e.closed};this.getActionMenu=function(){a:;if(m$.isUndefinedOrNull(G))G=new CalloutActionMenu("co"+u+"_callout-actions");return G};this.addAction=function(a){return n.getActionMenu().addAction(a)};this.refreshActions=function(){a:;n.getActionMenu().refreshActions()};this.open=function(a){a=m$.isBoolean(a)?a:i;A=true;if(!X())return false;IsFullNameDefined("CUI.PMetrics.perfMark")&&CUI.PMetrics.perfMark(CUI.PMarker.perfSPCalloutOpenStart);if(Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169)){H=w("firstTabStop");I=w("lastTabStop");r!=null&&r.setAttribute("aria-expanded","true")}q.openOptions.event==="hover"&&CalloutManager.closeAll();p===null&&Y();hb();p.style.display="block";E(e.opening);t();v!==null&&v.start();s!==null&&s.start();m$(p).resize(t);m$(p).offsetParent().scroll(t);m$(window).resize(t);n.getOpenOptions().closeCalloutOnBlur&&m$(document.body).click(T);m$(document).bind("keydown",R);eb(a);IsFullNameDefined("CUI.PMetrics.perfMark")&&CUI.PMetrics.perfMark(CUI.PMarker.perfSPCalloutOpenEnd);Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169)&&p.focus();return true};this.close=function(a){a=m$.isBoolean(a)?a:false;if(!W(a))return false;IsFullNameDefined("CUI.PMetrics.perfMark")&&CUI.PMetrics.perfMark(CUI.PMarker.perfSPCalloutCloseStart);E(e.closing);n.getOpenOptions().closeCalloutOnBlur&&m$(document.body).unbind("click",T);m$(document).unbind("keydown",R);m$(window).unbind("resize",t);m$(p).offsetParent().unbind("scroll",t);m$(p).unbind("resize",t);s!==null&&s.stop();v!==null&&v.stop();cb(a);IsFullNameDefined("CUI.PMetrics.perfMark")&&CUI.PMetrics.perfMark(CUI.PMarker.perfSPCalloutCloseEnd);if(!fIsNullOrUndefined(A)&&!fIsNullOrUndefined(r)){r.setAttribute("aria-expanded","false");r.focus()}return true};this.toggle=function(){a:;if(n.isOpenOrOpening())n.close();else n.open();return false};this.destroy=function(){a:;if(n.isOpenOrOpening()){var a=i;try{i=false;n.close()}finally{i=a}}if(p!==null){p.parentNode!=null&&p.parentNode.removeChild(p);if(q.openOptions.event==="click")m$(r).unbind("click",n.toggle);else if(q.openOptions.event==="hover"){q.openOptions.event="none";O(r,p)}}s.stop();s=null};this.Callout_Onfocus=function(a){var b=null;if(!fIsNullOrUndefined(a)){if(a.id==H&&x)b=I;else if(a.id==I&&!x)b=H;fb(b,a);x=false}};this.Callout_OnKeyDown=function(a){if(a==null)a=window.event;if(a.keyCode==16||a.keyCode==9)x=a.shiftKey;return false};var Z=function(a){a:;return m$.some(l,function(c,b){a:;return b===a})},V=function(a){a:;if(m$.isFunction(q[a])){var b=l[a];if(m$.isUndefined(b))throw"Unexpected error";n.addEventCallback(b,q[a]);delete q[a]}},bb=function(b){if(r!==b){if(m$.isDefinedAndNotNull(r))throw"Callout: launchPoint must be set at construction and can never be changed.";r=b;m$(r).EventuallyDetect_DOMNodeRemovedFromDocument(function(){a:;p!==null&&m$(p).remove()});K();v!==null&&v.stop();v=new a(r,{watchSize:true,watchOffset:true},t,M);U=IsElementRtl(r)}},E=function(a){a:;y=a;m$(n).trigger(a,n)},P=function(){a:;J.length===1&&J.css("width",numToPx(q.contentWidth))},L=function(b,c,a){a:;var d=b&&i;if(!d)a();else{z=true;c(p,function(){a:;z=false;a()})}},eb=function(b){var c=function(){a:;if(n.isOpening()){E(e.opened);s!==null&&s.checkForChangesAndActImmediately()}},a=b&&!CalloutManager.isAtLeastOneCalloutOpen();L(a,SPAnimationUtility.BasicAnimator.FadeIn,c)},cb=function(a){var b=function(){a:;if(n.isClosing()){p.style.display="none";E(e.closed)}};L(a,SPAnimationUtility.BasicAnimator.FadeOut,b)},X=function(){a:;return n.isClosed()&&!z},W=function(a){return a&&z?false:a&&!n.isOpen()?false:!a&&!n.isOpenOrOpening()?false:true},Y=function(){a:;if(p!==null||s!==null)throw"Callout: callout element or listener already exists.";var b=document.createElement("div");b.id="co"+u+"_callout";b.className=d+" ms-core-defaultFont  ms-alignLeft ms-shadow";b.style.display="none";b["data-sp-cancelWPSelect"]=true;b.oncontextmenu=function(a){a.stopPropagation()};b.setAttribute("tabIndex","-1");b.setAttribute("role","dialog");Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169)&&r.setAttribute("aria-controls",b.id);m$(b).data(c,r);p=b;r.parentNode.appendChild(p);s=new a(p,{watchSize:true,watchOffsetParent:true},t,M);K()},K=function(){a:;if(q.openOptions.event==="click"){m$(r).unbind("click",n.toggle);m$(r).click(n.toggle)}else q.openOptions.event==="hover"&&O(r,p)},R=function(a){a.keyCode===27&&n.close()},T=function(c){var a=c.target,b=n.getLaunchPoint();m$.isDefinedAndNotNull(p)&&a!==b&&a!==p&&!m$(b).contains(a)&&!m$(p).contains(a)&&m$(":root").contains(a)&&m$(a).parents(".mediaPlayerFullScreen").length===0&&n.close()},O=function(){a:;var r=250,s=400,c=false,d=false,i=[],j=[],a=null,b=null,k=function(a){a:;m$.forEach(a,function(a){a:;clearTimeout(a)});a.length=0},l=function(){a:;k(j);o()},m=function(){a:;k(i);p()},o=function(){a:;var a=setTimeout(function(){a:;(c||d)&&n.open()},r);i.push(a)},p=function(){a:;var a=setTimeout(function(){a:;!c&&!d&&n.close(true)},s);j.push(a)},e=function(){a:;c=true;l()},f=function(){a:;d=true;l()},g=function(){a:;c=false;m()},h=function(){a:;d=false;m()};return function(c,d){a:;m$(a).unbind("mouseover",e);m$(a).unbind("mouseout",g);m$(b).unbind("mouseover",f);m$(b).unbind("mouseout",h);if(q.openOptions.event==="hover"){a=c;b=d;m$(a).bind("mouseover",e);m$(a).bind("mouseout",g);m$(b).bind("mouseover",f);m$(b).bind("mouseout",h)}}}(),w=function(a){a:;return"co"+u+"_callout-"+a},db=function(a){var b=a.getAttribute("style");if(!fIsNullOrUndefined(b)&&(b.indexOf("hidden")!=-1||b.indexOf("disabled")!=-1))return false;var c=a.parentNode;while(!fIsNullOrUndefined(c)&&c.id!=p.id)if(c.tagName.toLowerCase()=="iframe")return false;else c=c.parentNode;b=a.getAttribute("tabIndex");var d=fIsNullOrUndefined(b)?-1:Number(b);return a.tagName.toLowerCase()=="a"&&a.hasAttribute("href")||a.tagName.toLowerCase()=="area"&&a.hasAttribute("href")||a.tagName.toLowerCase()=="input"||d>-1},fb=function(e){var a=e!=null?document.getElementById(e):null;if(a==null){var f=w("content");if(a==null)for(var b=document.getElementById(f).querySelectorAll("*"),c=0;c<b.length;c++){var d=x?b.length-1-c:c;if(!db(b[d]))continue;if(A&&!fIsNullOrUndefined(b[d].className)&&b[d].className.indexOf("js-callout-closeButton")!=-1){A=false;continue}a=b[d];if(!fIsNullOrUndefined(a)&&a.tagName.toLowerCase()=="iframe")continue;break}}a!=null&&a.focus()},hb=function(){a:;var c=w("content"),a=n.getActionMenu().getActions().length>0,b=Callout.GenerateDefaultContents(u,q.title,null,q.content,n.getOpenOptions().showCloseButton,a,q.allowScroll);a&&n.addEventCallback("opening",function(){a:;n.getActionMenu().render()});var d=[ab()?'<span class="ms-shadow js-callout-beakLeftRight js-callout-beakLeft js-callout-beak"></span>':"",Q()?'<span class="ms-shadow js-callout-beakTop js-callout-beak"></span>':"",Q()?'<span class="ms-shadow js-callout-beakBottom js-callout-beak" id="'+u+'_callout-bottombeak"></span>':"",Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169)?Callout.GenerateAnchorForTabControl(u,"-firstTabStop"):"","<div id=",StAttrQuote(c),' class="js-callout-content"',Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169)?' onkeydown="CalloutManager.getFromCalloutDescendant(this).Callout_OnKeyDown(event);">':">",b,"</div>",Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169)?Callout.GenerateAnchorForTabControl(u,"-lastTabStop"):""].join("");m$(q.contentElement).detach();m$(p).empty();p.innerHTML=d;var e=w("body");N=document.getElementById(e);m$.isElement(q.contentElement)&&N.appendChild(q.contentElement);D=m$(p).find(".js-callout-beakTop");C=m$(p).find(".js-callout-beakBottom");B=m$(p).find(".js-callout-beakLeftRight");J=m$(p).find(".js-callout-content");P()},ab=function(){a:;return q.beakOrientation==="leftRight"},Q=function(){a:;return q.beakOrientation==="topBottom"},t=function(){a:;var a=null,b=null,c=function(b){a:;var a=m$(b).css("overflow");return a!==""&&a!=="visible"},l=function(b){a:;var a=m$(b).css("overflow");return a==="auto"||a==="scroll"},d=function(){a:;if(n.isClosing())return;else if(!n.isOpenOrOpening())return;else if(m$(p).css("display")==="none"){n.close();return}var G=q.boundingBox!==null?q.boundingBox:p.offsetParent,w;if(c(G))w=G;else{m$(G).parents().some(function(a){a:;if(c(a)){w=a;return true}return false});if(m$.isUndefined(w))w=document.body}var F=n.getBeakOrientation()==="topBottom",Q=m$(r).offset(),z=Q.left,v=Q.top,x=m$(G).offset(),t=x.left,u=x.top,O=x.bottom,R=x.right,y=m$(w).offset(),E=r.offsetWidth,A=r.offsetHeight,I=v+A/2,H=z+E/2,ab=v+r.offsetHeight,d=null,e=null,i=true,l=true,L=p.offsetWidth,J=p.offsetHeight,s=function(){a:;if(F)if(l)e=v-J-(f+j+h+g);else e=v+A+(f+j+h+g);else if(l){e=I-J+(f+k+h+g+o);if(e<=u&&I-30>u)e=u+5}else e=I-(f+k+h+g);if(!F)if(i)d=z-L-(f+j+h+g);else d=z+E+(f+j+h+g);else if(i){d=H-L+(f+k+h+g);if(d<=t&&H-30>t)d=t+5}else d=H-(f+k+h+g)},X={isOpening:function(){a:;return n.isOpening()},isTopBottomBeak:function(){a:;return F},isRTL:U,moveUpAndLeft:function(){a:;i=true;l=true;s()},moveUpAndRight:function(){a:;i=false;l=true;s()},moveDownAndLeft:function(){a:;i=true;l=false;s()},moveDownAndRight:function(){a:;i=false;l=false;s()},flipHorizontal:function(){a:;i=!i;s()},flipVertical:function(){a:;l=!l;s()},getCalloutAbsLeft:function(){a:;return Math.floor(d)},getCalloutAbsRight:function(){a:;return Math.floor(d+L)},getCalloutAbsTop:function(){a:;return Math.floor(e)},getCalloutAbsBottom:function(){a:;return Math.floor(e+J)},isCalloutTooFarLeft:function(){a:;return this.getCalloutAbsLeft()<t},isCalloutTooFarRight:function(){a:;return this.getCalloutAbsRight()>R},isCalloutTooFarTop:function(){a:;return this.getCalloutAbsTop()<u},isCalloutTooFarBottom:function(){a:;return this.getCalloutAbsBottom()>O},isCalloutLeftOfHardBoundingBox:function(){a:;return this.getCalloutAbsLeft()<y.left},isCalloutRightOfHardBoundingBox:function(){a:;return this.getCalloutAbsRight()>y.right},isCalloutAboveHardBoundingBox:function(){a:;return this.getCalloutAbsTop()<y.top},isCalloutBelowHardBoundingBox:function(){a:;return this.getCalloutAbsBottom()>y.bottom},numberOfEdgesCollidingWithBoundingBox:function(){a:;var a=0;if(this.isCalloutTooFarRight())a++;if(this.isCalloutTooFarTop())a++;if(this.isCalloutTooFarLeft())a++;if(this.isCalloutTooFarBottom())a++;return a},moveTowardsOppositeQuadrant:function(){a:;var d=v+A/2,b=z+E/2,a=t+(R-t)/2,c=u+(O-u)/2;if(b<a&&d<c)this.moveDownAndRight();else if(b>a&&d<c)this.moveDownAndLeft();else if(b<a&&d>c)this.moveUpAndRight();else b>a&&d>c&&this.moveUpAndLeft()},isOrientedUp:function(){a:;return l},isOrientedDown:function(){a:;return!l},isOrientedLeft:function(){a:;return i},isOrientedRight:function(){a:;return!i}},P=m$(p).offset(),K=P.left,M=P.top;q.positionAlgorithm(X);if(e!==null&&d!==null){var Z=Math.abs(K-d)>3||Math.abs(M-e)>3;if(Z){m$(p).offset({left:d,top:e});K=d;M=e;S={up:l,left:i}}}var N=m$(r).offset();a=N.left;b=N.top;var W=b+A/2,V=a+E/2;if(F){var T=V-Math.floor(K)-m;D.css({left:numToPx(T)});C.css({left:numToPx(T)});if(n.getOrientation().up){D.css({visibility:"hidden"});C.css({visibility:"visible"})}else{D.css({visibility:"visible"});C.css({visibility:"hidden"})}}else{var Y=W-Math.floor(M)-m;B.css({top:Y.toString()+"px"});if(n.getOrientation().left)B.removeClass("js-callout-beakLeft").addClass("js-callout-beakRight");else B.removeClass("js-callout-beakRight").addClass("js-callout-beakLeft")}},e=function(){a:;var c=m$(r).offset();return Math.abs(c.left-a)>20||Math.abs(c.top-b)>20},i=m$.throttle(d,100);return function(a){a:;if(!m$(document.body).contains(p)||!m$(document.body).contains(r)){n.close();return}if(m$.isDefined(a)&&a===true||e())d.apply(n,arguments);else i()}}(),M=function(){a:;t(true)};this.set(gb);F=true};Callout.onClickCloseCallout=function(a){a:;CalloutManager.getFromCalloutDescendant(a).close(false);CancelEvent(window.event);return false};Callout.GenerateDefaultContents=function(k,i,g,j,f,e,h){var b="co"+k+"_callout",a=[],d=Callout.GenerateDefaultHeader(b,i,g,f);m$.isDefinedAndNotNull(d)&&a.push(d);a.push(Callout.GenerateDefaultBody(b,j,h));if(e){var c=Callout.GenerateDefaultFooter(b,null);m$.isDefinedAndNotNull(c)&&a.push(c)}return a.join("")};Callout.GenerateAnchorForTabControl=function(c,a){var b="co"+c+"_callout";return'<input class="ms-accessible" type="button" id="'+b+a+'" onfocus="CalloutManager.getFromCalloutDescendant(this).Callout_Onfocus(this);" value="wrap around the callout dialog"></input>'};Callout.GenerateDefaultHeader=function(b,d,c,e){var a=[];a.push('<div class="js-callout-headerArea" id='+StAttrQuote(b+"-Header")+" >");if(e){a.push('<a class="js-callout-closeButton" href="#" onclick="Callout.onClickCloseCallout(this);" id='+StAttrQuote(b+"-close")+" title="+StAttrQuote(Strings.STS.L_CalloutClose)+" aria-label="+StAttrQuote(Strings.STS.L_CalloutCloseAriaLabel)+">");a.push('<img class="js-callout-closeButtonImage" src='+GetThemedImageUrl("spcommon.png")+" aria-label="+StAttrQuote(Strings.STS.L_CalloutCloseAriaLabel)+" title="+StAttrQuote(Strings.STS.L_CalloutClose)+" />");a.push("</a>")}a.push('<div class="ms-metadata js-callout-usage" style="display:none;" id='+StAttrQuote(b+"-Usage")+">");a.push("</div>");a.push('<div class="js-callout-header-noWrap" id='+StAttrQuote(b+"-HeaderNoWrap")+">");a.push('<span class="js-callout-markArea" id='+StAttrQuote(b+"-MarkArea")+"></span>");if(m$.isDefinedAndNotNull(d)&&d!==""){a.push('<h2 class="js-callout-title ms-dlg-heading" id='+StAttrQuote(b+"-Title")+">");a.push(d);a.push("</h2>")}if(m$.isDefinedAndNotNull(c)&&c!==""){a.push('<div class="ms-metadata js-callout-subtitle" id='+StAttrQuote(b+"-Subtitle")+">");a.push(c);a.push("</div>")}a.push("</div>");a.push("</div>");return a.join("")};Callout.GenerateDefaultBody=function(d,b,c){var a=[];a.push('<div class="js-callout-body');!Boolean(c)&&a.push(" js-callout-noscroll");a.push('"  id="'+d+'-body">');m$.isDefinedAndNotNull(b)&&b!==""&&a.push(b);a.push("</div>");return a.join("")};Callout.GenerateDefaultFooter=function(b,c){var a=[];a.push('<div class="js-callout-footerArea" id='+StAttrQuote(b+"-Footer")+">");a.push("<span id="+StAttrQuote(b+"-actions")+' class="js-callout-actions js-callout-actionsMain"><span></span></span>');a.push(c);a.push("</div>");return a.join("")};Callout.GenerateDefaultSection=function(c,b){if(b==="")return b;var a=[];a.push('<div class="js-callout-bodySection">');c!==null&&a.push('<h3 class="js-callout-bodySectionHeader ms-soften">',STSHtmlEncode(c),"</h3>");a.push(b);a.push("</div>");return a.join("")};function n(a){if(a.isTopBottomBeak()||a.isOpening()){if(!a.isRTL){a.moveUpAndRight();if(a.isCalloutTooFarRight()){a.moveUpAndLeft();a.isCalloutTooFarTop()&&a.moveDownAndLeft()}a.isCalloutTooFarTop()&&a.moveDownAndRight()}else{a.moveUpAndLeft();if(a.isCalloutTooFarLeft()){a.moveUpAndRight();a.isCalloutTooFarTop()&&a.moveDownAndRight()}a.isCalloutTooFarTop()&&a.moveDownAndLeft()}a.numberOfEdgesCollidingWithBoundingBox()>=2&&a.moveTowardsOppositeQuadrant();(!a.isRTL&&a.isCalloutLeftOfHardBoundingBox()&&a.isOrientedLeft()||a.isRTL&&a.isCalloutRightOfHardBoundingBox()&&a.isOrientedRight())&&a.flipHorizontal();a.isCalloutAboveHardBoundingBox()&&a.isOrientedUp()&&a.flipVertical()}}Callout.prototype.isOpen=undefined;Callout.prototype.isOpening=undefined;Callout.prototype.close=undefined;Callout.prototype.getActionMenu=undefined;Callout.prototype.getBeakOrientation=undefined;Callout.prototype.Callout_OnKeyDown=undefined;Callout.prototype.Callout_Onfocus=undefined})();(function(){a:;CalloutActionOptions=function(){};CalloutActionOptions.prototype={text:null,tooltip:"",disabledTooltip:"",onClickCallback:null,isEnabledCallback:null,isVisibleCallback:null,menuEntries:null};onCalloutActionMenuEntryClick=function(b){a:;var a=document.getElementById(b);m$.isDefinedAndNotNull(a)&&a.calloutActionMenuEntryCallback&&a.calloutActionMenuEntryCallback(a.calloutAction,a.calloutActionMenuEntryIndex)};CalloutActionMenuEntry=function(f,a,e,c,d,b){this.text=f;this.onClickCallback=a;this.wzISrc=e;this.wzIAlt=c;this.wzISeq=d;this.wzDesc=b};CalloutAction=function(g){var e=this,c=new CalloutActionOptions,d=null,h=null;this.getText=function(){a:;return c.text};this.getToolTip=function(){a:;return c.tooltip};this.getDisabledToolTip=function(){a:;return c.disabledTooltip};this.getOnClickCallback=function(){a:;return c.onClickCallback};this.getIsEnabledCallback=function(){a:;return c.isEnabledCallback};this.getIsVisibleCallback=function(){a:;return c.isVisibleCallback};this.getIsMenu=function(){a:;return f(c)};this.getMenuEntries=function(){a:;return c.menuEntries};this.render=function(){a:;d=null;var f=document.createElement("span");f.className="js-callout-action";var b=document.createElement("a");b.setAttribute("href","#");b.onclick=function(){a:;return false};b.className="ms-calloutLink";var j=m$.isUndefinedOrNull(c.text),h=e.getIsMenu(),i=this.isEnabled()===true;if(j){b.title=Strings.STS.L_OpenMenuECB;b.innerHTML='<img class="js-ellipsis25-icon" src="'+GetThemedImageUrl("spcommon.png")+'" role="presentation" alt="'+STSHtmlEncode(Strings.STS.L_OpenMenuECB)+'" />';b.className+=" js-ellipsis25-a"}else{b.appendChild(document.createTextNode(c.text));b.setAttribute("title",c.text);if(h){var g=document.createElement("img");g.src=GetThemedImageUrl("ecbarw.png");g.alt=Strings.STS.L_OpenMenuECB;g.className="js-callout-ecbActionDownArrow";b.appendChild(g)}}if(i){b.className+=" ms-calloutLinkEnabled";m$.isDefinedAndNotNull(c.tooltip)&&c.tooltip!==""&&b.setAttribute("title",c.tooltip)}else{b.className+=" ms-calloutLinkDisabled";m$.isDefinedAndNotNull(c.disabledTooltip)&&c.disabledTooltip!==""&&b.setAttribute("title",c.disabledTooltip)}if(i)if(!h)m$(b).click(function(a){a:;c.onClickCallback(a,e)});else{!m$.isNull(c.menuEntries)&&m$(b).click(function(){a:;EnsureScriptFunc("core.js","CMenu",function(){a:;if(m$.isNull(d)){var b=a(),g="calloutActionMenu_"+String(b);d=CMenu(g);d.setAttribute("hideicons","true");m$.forEach(c.menuEntries,function(a,f){var g="calloutActionMenuEntry_menuId["+b+"]_menuEntryIndex["+String(f)+"]",c=CAMOpt(d,a.text,"onCalloutActionMenuEntryClick('"+g+"')",a.wzISrc,a.wzIAlt,a.wzISeq,a.wzDesc);c.id=g;c.calloutActionMenuEntryIndex=f;c.calloutActionMenuEntryCallback=a.onClickCallback;c.calloutAction=e})}OMenu(d,f,undefined,false)})});m$(f).addClass("js-callout-menuAction")}f.appendChild(b);return f};this.isEnabled=function(){a:;return!m$.isFunction(c.isEnabledCallback)?true:c.isEnabledCallback(e)===true};this.isVisible=function(){a:;return!m$.isFunction(c.isVisibleCallback)?true:c.isVisibleCallback(e)===true};this.set=function(d){if(m$.isUndefinedOrNull(d))throw"CalloutAction: Input parameter must be defined";b(d,CalloutActionOptions.prototype);var a=m$.extend(true,{},c,d);if(!f(a)){if(!m$.isString(a.text))throw"CalloutAction: Required property must be defined on non-menu callout actions: text";if(!m$.isFunction(a.onClickCallback))throw"CalloutAction: Must define onClickCallback on non-menu callout actions";}else{if(m$.isFunction(a.onClickCallback))throw"CalloutAction: Must NOT define onClickCallback on menu callout actions";var e=m$.every(a.menuEntries,function(a){return m$.isDefinedAndNotNull(a)&&m$.isString(a.text)&&m$.isFunction(a.onClickCallback)});if(!e)throw"CalloutAction: Required property appears invalid: menuEntries";}c=a};var f=function(a){return m$.isDefinedAndNotNull(a.menuEntries)&&m$.isArray(a.menuEntries)&&a.menuEntries.length>0};this.set(g)};CalloutActionMenu=function(d){a:;var b=[],a=null,c=d;this.addAction=function(a){b.push(a);return a};this.getActions=function(){a:;return b};this.render=function(){a:;if(b.length>0){a=document.getElementById(c);for(var e=m$.filter(b,function(a){return a.isVisible()}),f=document.createElement("span"),d=0;d<e.length;d++)f.appendChild(e[d].render());m$(a).empty();a.appendChild(f)}};this.refreshActions=function(){a:;m$.isElement(a)&&m$(a).empty();this.render()};this.calculateActionWidth=function(){a:;for(var c=0,d=this.getActions(),b=[],a=0;a<d.length;a++)if(d[a].isVisible()){var h=d[a].render();document.body.appendChild(h);b.push(h)}for(a=0;a<b.length;a++){c+=b[a].offsetWidth+1;c+=parseInt(m$(b[a]).css("marginLeft"),10);c+=parseInt(m$(b[a]).css("marginRight"),10)}for(a=0;a<b.length;a++)document.body.removeChild(b[a]);var g=20,e=20,i=m$(".js-callout-footerArea");if(i.length>0){var f=m$(".js-callout-footerArea")[0];g=parseInt(m$(f).css("paddingLeft"),10);e=parseInt(m$(f).css("paddingRight"),10)}c+=g+e;return Math.min(Math.max(c,CalloutOptions.CALLOUT_MINIMUM_WIDTH),CalloutOptions.CALLOUT_MAXIMUM_WIDTH)}};var a=function(){a:;var a=0;return function(){a:;return a++}}()})();(function(){a:;var a="calloutObject-{7DA0B2C5-5A3A-46CD-9FDD-B7A71576AB29}",b="js-callout-launchPoint",d="."+b;calloutManager=CalloutManager={createNew:function(d){var c;if(m$.isUndefinedOrNull(d.ID))throw"CalloutManager: Required property must be defined: ID";if(m$.isUndefinedOrNull(d.launchPoint))throw"CalloutManager: Required property must be defined: launchPoint";var e=d.launchPoint;c=m$(e).data(a);if(m$.isDefinedAndNotNull(c))throw"calloutManager: launchPoint given is already associated with a callout";c=new Callout(d);m$(e).data(a,c);m$(e).addClass(b);return c},createNewIfNecessary:function(b){var c=b.launchPoint,a=CalloutManager.getFromLaunchPointIfExists(c);if(a===null)a=CalloutManager.createNew(b);return a},remove:function(d){var c=d.getLaunchPoint();m$(c).removeData(a);m$(c).removeClass(b);d.destroy()},getFromLaunchPoint:function(b){var a=CalloutManager.getFromLaunchPointIfExists(b);if(m$.isUndefinedOrNull(a))throw"Error: Argument has no callout associated with it.";return a},getFromLaunchPointIfExists:function(c){var b=m$(c).data(a);return m$.isUndefinedOrNull(b)?null:b},containsOneCalloutOpen:function(c){var b=m$(c).find(d);if(b.length!==1)return false;var a=CalloutManager.getFromLaunchPoint(b[0]);return a!=null&&(a.isOpen()||a.isOpening())},getFromCalloutDescendant:function(d){var a=m$(d).closest(e)[0];if(m$.isUndefinedOrNull(a))throw"Error: Argument is not a descendant of a callout element.";var b=m$(a).data(c);if(m$.isUndefinedOrNull(b))throw"Error: Cannot locate Callout's launchPoint";return CalloutManager.getFromLaunchPoint(b)},forEach:function(a){m$(d).forEach(function(b){a(CalloutManager.getFromLaunchPoint(b))})},closeAll:function(){a:;var a=false;CalloutManager.forEach(function(b){if(b.close())a=true});return a},isAtLeastOneCalloutOpen:function(){a:;var a=false;CalloutManager.forEach(function(b){if(b.isOpen())a=true});return a},isAtLeastOneCalloutOn:function(){a:;var a=false;CalloutManager.forEach(function(b){if(b.isOpen()||b.isOpening())a=true});return a}}})();notifyScriptsLoadedAndExecuteWaitingJobs("callout.js")})();typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkEnd_callout.js")}function ULSIU5(){var a={};a.ULSTeamName="Microsoft SharePoint Foundation";a.ULSFileName="callout.commentedjs";return a}var Callout,calloutManager,CalloutManager,CalloutOpenOptions,CalloutOptions,CalloutAction,CalloutActionOptions,CalloutActionMenu,CalloutActionMenuEntry,onCalloutActionMenuEntryClick;$_global_callout();