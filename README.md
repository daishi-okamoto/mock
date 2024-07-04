# 使い方
## 事前準備
* Node.jsインストール
下記URLよりインストールする。（齋藤さんの立てたEC2にはインストール済みなので、ローカルPCで実施すればOK）
```
https://nodejs.org/en/
```

* VSCodeなどのエディターを使っている場合は再起動

* zen-mockフォルダ上にいることを確認し下記コマンドでパッケージをインストール  
```
npm install
```

* インストール成功後下記コマンドでプログラム起動
```
npm start
```

## ソースコード説明
### プログラム構成
* 本プログラムはReact.jsをベースにしている。  
プログラム構成は下記のとおり。（重要なファイルのみ記載）
```
.
├─── src
  └─ App.js           : npm start実行後最初に呼ばれるファイル。ルーティング設定を記述している。パスを追加したい際には、既に書いてある内容を参考に追加する。
  └─ routes           : App.jsのルーティングにより呼ばれる画面ごとのモジュール
    └─ consultant.js
    └─ client_list.js
    └─ contract.js
├─── public
  └─ 01_consltant     : src/routes/consultant.jsにより下記のhtmlが呼ばれる
    └─ index.html
    └─ script.js
  └─ 02_client_list   : src/routes/client_list.jsにより下記のhtmlが呼ばれる
    └─ index.html
    └─ script.js
  └─ 03_contract      : src/routes/contract.jsにより下記のhtmlが呼ばれる
    └─ index.html
    └─ script.js
```

### 画面遷移の仕組み
* App.jsに下記のように必要なパスをすべて記述している。  
```
<BrowserRouter>
<Routes>
    <Route exact path='/' element={<Navigate to="/conslutant" />} />
    <Route path='/conslutant' element={<Consultant />} />
    <Route path='/clientlist' element={<ClientList />} />
    <Route path='/contract' element={<Contract />} />
</Routes>
</BrowserRouter>


例えば、http://localhost:3000/ にアクセスしたら、http://localhost:3000/consultant にルーティングされる。  
http://localhost:3000/consultant にアクセスしたら、public/01_consultant/index.htmlが呼ばれるようになっている
```

* 画面遷移のやり方  
各HTML内で画面遷移をしたい場合は、対象のボタン等にonClickでscript.jsのnavigateToClientList()の関数を呼び出すように仕込むか、script.js内の関数内でnavigateToClientList()の関数を呼び出す。  
今回の場合で言うと、対象の従業者の名前やIDをクリックしたら、呼び出すようにしてあげればよい。
  * 一旦、01_consultantと02_client_listと03_contractのscript.jsにnavigateTo***()の関数を作っておきました。navigateTo***()を呼び出せば画面遷移します。
  ```
  function navigateToClientList() {
    window.parent.postMessage('navigateToClientList', '*');
  }
  ```
  * 画面遷移時にパラメータを渡したい場合は、まだ実装できていないのでconsultant.jsと01_consultant/script.jsの内容をChatGPTに貼り付けて、navigate時にパラメータを含めてルーティングしたい、といったように聞けば答え書いてくれると思います。（多分jsファイルのuseEffectの処理とかが変わります）
