# ベースイメジにNode.js最新LTS（Node 20）を指定
FROM node:20-alpine

# 作業ディレクトリ作成
WORKDIR /app

# 依存関係を先にコピー（キャッシュ用）
COPY package.json package-lock.json* ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ビルド（必要なら）
RUN npm run build

# ポート開放
EXPOSE 3000

# 起動コマンド
CMD ["npm", "run", "preview"]
