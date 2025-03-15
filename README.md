## protoファイルの読み込み
➀ リポジトリから、.proto ファイルを拝借  
   git submodule add https://github.com/yumachin/proto.git proto  
➀' もし、このサブモジュール（ある Git リポジトリの中の、別の Git リポジトリを含める仕組み）の中に、  
   また別のサブモジュールが含まれている場合 => git submodule update --init --recursive  
➁ .proto ファイルを JS や TS のコードに変換するためのツールをインストール  
   npm i protobufjs-cli  
➂ src ディレクトリに、generated ディレクトリを作成  
➃ --no-verify: バリデーション機能無効  
 　--no-delimited: データを連続して送るために「区切り」を無効  
 　-t static-module: 静的モジュールとして出力  
   -w es6: import / export として出力  
 　-o ./src/generated/protocol.js: 変換した JS ファイルの出力先  
 　./proto/Proto/*.proto: proto/Proto ディレクトリ内のすべての .proto ファイルを探索  
 　-o ./src/generated/protocol.d.ts ./src/generated/protocol.js: protocol.js から protocol.d.ts を作成  
 　npx pbjs --no-verify --no-delimited -t static-module -w es6 -o ./src/generated/protocol.js ./proto/Proto/*.proto && npx pbts -o ./src/generated/protocol.d.ts ./src/generated/protocol.js  
➄ 生成された TS ファイルの require を import に変更  
➅ api を作成して呼び出す  

## モックデータの作成
➀ ./src/mock/mock.tsx 作成
