/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './next-nav.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './next-nav.service';
import * as import10 from './next-nav.component.scss.shim';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/router/src/directives/router_link';
import * as import16 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import17 from '@angular/router/src/router';
import * as import18 from '@angular/router/src/router_state';
import * as import19 from '@angular/common/src/location/location_strategy';
import * as import20 from '@angular/core/src/security';
export class Wrapper_NextNavComponent {
  /*private*/ _eventHandler:Function;
  context:import0.NextNavComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.NextNavComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_prefLink(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.prefLink = currValue;
      this._expr_0 = currValue;
    }
  }
  check_nextLink(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.nextLink = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
const nodeDebugInfos_NextNavComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.NextNavComponent],import0.NextNavComponent,{})];
var renderType_NextNavComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_NextNavComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.NextNavComponent>;
  _NextNavComponent_0_3:Wrapper_NextNavComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NextNavComponent_Host0,renderType_NextNavComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NextNavComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'next-nav',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_NextNavComponent0(this.viewUtils,this,0,this._el_0);
    this._NextNavComponent_0_3 = new Wrapper_NextNavComponent(this.injectorGet(import9.NextNavService,this.parentIndex));
    this.compView_0.create(this._NextNavComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._NextNavComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NextNavComponent) && (0 === requestNodeIndex))) { return this._NextNavComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._NextNavComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NextNavComponentNgFactory:import8.ComponentFactory<import0.NextNavComponent> = new import8.ComponentFactory<import0.NextNavComponent>('next-nav',View_NextNavComponent_Host0,import0.NextNavComponent);
const styles_NextNavComponent:any[] = [import10.styles];
  const nodeDebugInfos_NextNavComponent0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([
    import11.TemplateRef,
    import12.NgIf
  ]
,(null as any),{})];
var renderType_NextNavComponent:import5.RenderComponentType = import3.createRenderComponentType('C:/fuwari-angular/src/app/shared/next-nav/next-nav.component.html',0,import6.ViewEncapsulation.Emulated,styles_NextNavComponent,{});
export class View_NextNavComponent0 extends import2.DebugAppView<import0.NextNavComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import13.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import14.Wrapper_NgIf;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NextNavComponent0,renderType_NextNavComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NextNavComponent0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(0,0,0));
    this._vc_0 = new import13.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import11.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import14.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._anchor_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import12.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,5);
    const currVal_0_0_0:any = (this.context.prefLink || this.context.nextLink);
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 0)) { return new View_NextNavComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}
const nodeDebugInfos_NextNavComponent1:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.TemplateRef,
    import12.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import11.TemplateRef,
    import12.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_NextNavComponent1 extends import2.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import13.ViewContainer;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import14.Wrapper_NgIf;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _vc_11:import13.ViewContainer;
  _TemplateRef_11_5:any;
  _NgIf_11_6:import14.Wrapper_NgIf;
  _text_12:any;
  _text_13:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_NextNavComponent1,renderType_NextNavComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NextNavComponent1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',this.debug(1,0,34));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'br',import3.EMPTY_INLINE_ARRAY,this.debug(2,1,2));
    this._text_3 = this.renderer.createText(this._el_0,'\n  ',this.debug(3,1,6));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,'h3',import3.EMPTY_INLINE_ARRAY,this.debug(4,2,2));
    this._text_5 = this.renderer.createText(this._el_4,'続きは...',this.debug(5,2,6));
    this._text_6 = this.renderer.createText(this._el_0,'\n\n  ',this.debug(6,2,17));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_0,'nav',new import3.InlineArray2(2,'class','tile is-ancestor'),this.debug(7,4,2));
    this._text_8 = this.renderer.createText(this._el_7,'\n    ',this.debug(8,4,32));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_7,this.debug(9,5,4));
    this._vc_9 = new import13.ViewContainer(9,7,this,this._anchor_9);
    this._TemplateRef_9_5 = new import11.TemplateRef_(this,9,this._anchor_9);
    this._NgIf_9_6 = new import14.Wrapper_NgIf(this._vc_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(this._el_7,'\n    ',this.debug(10,10,10));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_7,this.debug(11,11,4));
    this._vc_11 = new import13.ViewContainer(11,7,this,this._anchor_11);
    this._TemplateRef_11_5 = new import11.TemplateRef_(this,11,this._anchor_11);
    this._NgIf_11_6 = new import14.Wrapper_NgIf(this._vc_11.vcRef,this._TemplateRef_11_5);
    this._text_12 = this.renderer.createText(this._el_7,'\n  ',this.debug(12,16,10));
    this._text_13 = this.renderer.createText(this._el_0,'\n',this.debug(13,17,8));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._text_13
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import12.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6.context; }
    if (((token === import11.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import12.NgIf) && (11 === requestNodeIndex))) { return this._NgIf_11_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(9,5,44);
    const currVal_9_0_0:any = this.parentView.context.prefLink;
    this._NgIf_9_6.check_ngIf(currVal_9_0_0,throwOnChange,false);
    this._NgIf_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this.debug(11,11,44);
    const currVal_11_0_0:any = this.parentView.context.nextLink;
    this._NgIf_11_6.check_ngIf(currVal_11_0_0,throwOnChange,false);
    this._NgIf_11_6.ngDoCheck(this,this._anchor_11,throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this._vc_11.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_9.destroyNestedViews();
    this._vc_11.destroyNestedViews();
    this.debug(9,5,4);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 9)) { return new View_NextNavComponent2(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    if ((nodeIndex == 11)) { return new View_NextNavComponent3(this.viewUtils,this,11,this._anchor_11,this._vc_11); }
    return (null as any);
  }
}
const nodeDebugInfos_NextNavComponent2:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import15.RouterLinkWithHref],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_NextNavComponent2 extends import2.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import16.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _el_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_NextNavComponent2,renderType_NextNavComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NextNavComponent2,declaredViewContainer);
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','tile is-parent is-vertical'),this.debug(0,5,4));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',this.debug(1,5,61));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray2(2,'class','button'),this.debug(2,6,6));
    this._RouterLinkWithHref_2_3 = new import16.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import17.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import18.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import19.LocationStrategy,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',this.debug(3,6,80));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'span',new import3.InlineArray2(2,'class','icon'),this.debug(4,7,8));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_4,'i',new import3.InlineArray2(2,'class','fa fa-angle-left'),this.debug(5,7,27));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',this.debug(6,7,66));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_2,'span',import3.EMPTY_INLINE_ARRAY,this.debug(7,8,8));
    this._text_8 = this.renderer.createText(this._el_7,'',this.debug(8,8,14));
    this._text_9 = this.renderer.createText(this._el_2,'\n      ',this.debug(9,8,38));
    this._text_10 = this.renderer.createText(this._el_0,'\n    ',this.debug(10,9,10));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(2,6,34);
    const currVal_2_0_0:any = import3.inlineInterpolate(1,'',this.parentView.parentView.context.prefLink.href,'');
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.debug(2,6,9);
    const currVal_12:any = import3.inlineInterpolate(1,'',this.parentView.parentView.context.prefLink.href,'');
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL,currVal_12));
      this._expr_12 = currVal_12;
    }
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
    this.debug(8,8,14);
    const currVal_13:any = import3.inlineInterpolate(1,'',this.parentView.parentView.context.prefLink.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_8,currVal_13);
      this._expr_13 = currVal_13;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.debug(2,6,6);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
const nodeDebugInfos_NextNavComponent3:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import15.RouterLinkWithHref],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_NextNavComponent3 extends import2.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import16.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_NextNavComponent3,renderType_NextNavComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NextNavComponent3,declaredViewContainer);
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','tile is-parent is-vertical'),this.debug(0,11,4));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',this.debug(1,11,61));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray2(2,'class','button'),this.debug(2,12,6));
    this._RouterLinkWithHref_2_3 = new import16.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import17.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import18.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import19.LocationStrategy,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',this.debug(3,12,80));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'span',import3.EMPTY_INLINE_ARRAY,this.debug(4,13,8));
    this._text_5 = this.renderer.createText(this._el_4,'',this.debug(5,13,14));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',this.debug(6,13,38));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_2,'span',new import3.InlineArray2(2,'class','icon'),this.debug(7,14,8));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_7,'i',new import3.InlineArray2(2,'class','fa fa-angle-right'),this.debug(8,14,27));
    this._text_9 = this.renderer.createText(this._el_2,'\n      ',this.debug(9,14,67));
    this._text_10 = this.renderer.createText(this._el_0,'\n    ',this.debug(10,15,10));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._el_8,
      this._text_9,
      this._text_10
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(2,12,34);
    const currVal_2_0_0:any = import3.inlineInterpolate(1,'',this.parentView.parentView.context.nextLink.href,'');
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.debug(2,12,9);
    const currVal_12:any = import3.inlineInterpolate(1,'',this.parentView.parentView.context.nextLink.href,'');
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL,currVal_12));
      this._expr_12 = currVal_12;
    }
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
    this.debug(5,13,14);
    const currVal_13:any = import3.inlineInterpolate(1,'',this.parentView.parentView.context.nextLink.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_5,currVal_13);
      this._expr_13 = currVal_13;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.debug(2,12,6);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    return result;
  }
}