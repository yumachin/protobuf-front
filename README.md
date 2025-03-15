## protoファイルの読み込み


#### 1. リポジトリから、.proto ファイルを拝借
```
git submodule add https://github.com/yumachin/proto.git proto
```
#### 1'. もし、このサブモジュール（ある Git リポジトリの中の、別の Git リポジトリを含める仕組み）の中に、また別のサブモジュールが含まれている場合
```
git submodule update --init --recursive
```
#### 2. proto ファイルを JS や TS のコードに変換するためのツールをインストール
```
npm i protobufjs-cli
```
#### 3. src ディレクトリに、generated ディレクトリを作成
#### 4. --no-verify: バリデーション機能無効
   1. --no-delimited:　データを連続して送るために「区切り」を無効
   2. -t static-module:　静的モジュールとして出力
   3. -w es6:　import / export として出力
   4. -o ./src/generated/protocol.js:　変換した JS ファイルの出力先
   5. /proto/Proto/*.proto:　proto/Proto ディレクトリ内のすべての .proto ファイルを探索
   6. -o ./src/generated/protocol.d.ts ./src/generated/protocol.js:　protocol.js からprotocol.d.ts を作成
```
npx pbjs --no-verify --no-delimited -t static-module -w es6 -o ./src/generated/protocol.js ./proto/Proto/*.proto && npx pbts -o ./src/generated/protocol.d.ts ./src/generated/protocol.js  ]
```
#### 5. 生成された TS ファイルの require を import に変更
#### 6. api を作成して呼び出す


## モックデータの作成
#### 1. /src/mock/mock.tsx 作成
