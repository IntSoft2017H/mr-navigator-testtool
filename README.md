# Test tool for testing MR Navigator

## Contents

* Path editor
* Path fetch API
* Path update API

## How to use

```
node index.js # localhost:10101 で listen
```

| path | 説明 |
| ---- | ---- |
| `/` | パスの JSON を取得 (Unity App はここを見に来る) |
| `/path-editor` | テスト用パス生成ツール |
| `/upload-path` | ここに POST するとパスが更新される (`/path-editor` 用 API) |
