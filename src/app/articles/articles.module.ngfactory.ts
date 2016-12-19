/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './articles.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from 'ng2-adsense/ng2-adsense';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '../shared/next-nav/next-nav.service';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from './articles.component.ngfactory';
import * as import9 from './what-is-angular/what-is-angular.component.ngfactory';
import * as import10 from './eco-system/eco-system.component.ngfactory';
import * as import11 from './install/install.component.ngfactory';
import * as import12 from './new-project/new-project.component.ngfactory';
import * as import13 from './todos/todos.component.ngfactory';
import * as import14 from '@angular/core/src/i18n/tokens';
import * as import15 from './articles.component';
import * as import16 from './what-is-angular/what-is-angular.component';
import * as import17 from './eco-system/eco-system.component';
import * as import18 from './install/install.component';
import * as import19 from './new-project/new-project.component';
import * as import20 from './todos/todos.component';
import * as import21 from '@angular/http/src/http';
import * as import22 from '@angular/router/src/router_config_loader';
class ArticlesModuleInjector extends import0.NgModuleInjector<import1.ArticlesModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _AdsenseModule_2:import4.AdsenseModule;
  _ArticlesModule_3:import1.ArticlesModule;
  __NgLocalization_4:import5.NgLocaleLocalization;
  __ROUTES_5:any[];
  __NextNavService_6:import6.NextNavService;
  constructor(parent:import7.Injector) {
    super(parent,[
      import8.ArticlesComponentNgFactory,
      import9.WhatIsAngularComponentNgFactory,
      import10.EcoSystemComponentNgFactory,
      import11.InstallComponentNgFactory,
      import12.NewProjectComponentNgFactory,
      import13.TodosComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_4():import5.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == null)) { (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import14.LOCALE_ID))); }
    return this.__NgLocalization_4;
  }
  get _ROUTES_5():any[] {
        if ((this.__ROUTES_5 == null)) { (this.__ROUTES_5 = [[{
          path: '',
          component: import15.ArticlesComponent,
          children: [
            {
              path: 'what-is-angular.html',
              component: import16.WhatIsAngularComponent
            }
            ,
            {
              path: 'eco-system.html',
              component: import17.EcoSystemComponent
            }
            ,
            {
              path: 'install.html',
              component: import18.InstallComponent
            }
            ,
            {
              path: 'new-project.html',
              component: import19.NewProjectComponent
            }
            ,
            {
              path: 'todos.html',
              component: import20.TodosComponent
            }

          ]

        }
    ]]); }
    return this.__ROUTES_5;
  }
  get _NextNavService_6():import6.NextNavService {
    if ((this.__NextNavService_6 == null)) { (this.__NextNavService_6 = new import6.NextNavService(this.parent.get(import21.Http))); }
    return this.__NextNavService_6;
  }
  createInternal():import1.ArticlesModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD,(null as any)));
    this._AdsenseModule_2 = new import4.AdsenseModule();
    this._ArticlesModule_3 = new import1.ArticlesModule();
    return this._ArticlesModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import4.AdsenseModule)) { return this._AdsenseModule_2; }
    if ((token === import1.ArticlesModule)) { return this._ArticlesModule_3; }
    if ((token === import5.NgLocalization)) { return this._NgLocalization_4; }
    if ((token === import22.ROUTES)) { return this._ROUTES_5; }
    if ((token === import6.NextNavService)) { return this._NextNavService_6; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ArticlesModuleNgFactory:import0.NgModuleFactory<import1.ArticlesModule> = new import0.NgModuleFactory(ArticlesModuleInjector,import1.ArticlesModule);