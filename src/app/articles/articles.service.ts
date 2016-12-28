import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {

  public articleLinks: any[] = [
    {
      'id': 1,
      'href': '/what-is-angular.html',
      'title': 'Angularって何？',
      'discriptions': [
        '<p>W3C Web Components って何？</p><p>SPA（Single-Page Application）って何？</p>'
      ],
      'date': '2016/11/9'
    },
    {
      'id': 2,
      'href': '/eco-system.html',
      'title': 'Angularエコシステム',
      'discriptions': [
        '<p>同封のものたち</p>',
        '<ul>',
        '<li>Angular CLI</li>',
        '<li>NativeScript ... etc</li>',
        '</ul>'
      ],
      'date': '2016/11/10'
    },
    {
      'id': 3,
      'href': '/install.html',
      'title': '必要なツールをインストールしよう',
      'discriptions': [
        '<p>※for Windows10</p>',
        '<ul>',
        '<li>Git bash</li>',
        '<li>Python2.7</li>',
        '<li>Ruby</li>',
        '<li>Visual Studio 2015 Community</li>',
        '<li>Windows 10 SDK</li>',
        '<li>nodist, Node.js</li>',
        '<li>angular-cli</li>',
        '<li>Visual Studio Code</li>',
        '</ul>'
      ],
      'date': '2016/11/20'
    },
    {
      'id': 4,
      'href': '/new-project.html',
      'title': 'プロジェクトを作ってみよう',
      'discriptions': [
        '<p><code>ng new</code> してプロジェクトを作る。</p>',
        '<p><code>ng build</code> してビルドする。</p>',
        '<p><code>ng serve</code> してブラウザで確認する。</p>'
      ],
      'date': '2016/11/22'
    },
    {
      'id': 5,
      'href': '/todos.html',
      'title': 'TODOリストを作ってみよう',
      'discriptions': [
        '<p>簡単なアプリケーションを作ってみる。</p>',
        '<p>app.component を修正する。</p>'
      ],
      'date': '2016/12/01'
    },
    {
      'id': 6,
      'href': '/service.html',
      'title': 'サービスを使おう',
      'discriptions': [
        '<p><code>ng generate service</code> してサービスクラスを作成する。</p>',
        '<p><code>ng generate class</code> してクラスを作成する。</p>'
      ],
      'date': '2016/12/28'
    },
    {
      'id': 7,
      'href': '/',
      'title': 'コンポーネント分割してみよう ※未作成',
      'discriptions': [
        '<p><code>ng generate</code> して部品を自動生成する。</p>',
        '<p><code>@Input()</code>,<code>@Output()</code> でデータやイベントを送受信する。</p>'
      ],
      'date': ''
    },
    {
      'id': 8,
      'href': '/',
      'title': 'テストしてみよう ※未作成',
      'discriptions': [
        '<p><code>ng test</code> でユニットテストをする。</p>'
      ],
      'date': ''
    }
  ];

  constructor() { }

  public get links(): any[] {
    return this.articleLinks;
  }

  public navLinks(nowHref: string): Object {
    let nowArticle = this.articleLinks.filter(item => item.href === nowHref)[0];
    return {
      'prefLink': this.articleLinks.filter(item => item.id === nowArticle.id - 1)[0],
      'nextLink': this.articleLinks.filter(item => item.id === nowArticle.id + 1)[0]
    };
  }

}
