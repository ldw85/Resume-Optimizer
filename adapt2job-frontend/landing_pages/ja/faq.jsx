import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function FAQ() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }} className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">よくある質問</h1>
        <ol className="mt-6 space-y-4">
          <li>
            <b>ResumeOptimizerとは何ですか？</b>
            <p className="mt-2">ResumeOptimizerは、求職者が特定の求人要件に合わせて履歴書の内容を迅速かつ効果的に調整できるように設計されたツールであり、それによって求人応募の成功率を高めます。</p>
          </li>
          <li>
            <b>ResumeOptimizerではどのような技術が使用されていますか？</b>
            <p className="mt-2">ResumeOptimizerは、React（v19.0.0）、TypeScript（〜5.7.2）、Tailwind CSS（4.1.3）、i18next（25.0.0）およびその他のライブラリを使用して、使いやすい履歴書最適化エクスペリエンスを提供します。</p>
          </li>
          <li>
            <b>ResumeOptimizerをローカルで実行するにはどうすればよいですか？</b>
            <p className="mt-2">ResumeOptimizerをローカルで実行するには、次の手順に従います。</p>
            <ol type="a" className="ml-4 mt-2 space-y-2">
              <li>依存関係をインストールします：<code>npm install</code></li>
              <li>開発サーバーを起動します：<code>npm run dev</code></li>
              <li>アプリケーションはローカルで起動し、通常は<code>http://localhost:5173</code>でアクセスできます。</li>
            </ol>
          </li>
          <li>
            <b>ResumeOptimizerは複数の言語をサポートしていますか？</b>
            <p className="mt-2">はい、ResumeOptimizerは複数の言語をサポートしています。ナビゲーションバーの言語セレクターを使用して言語を切り替えることができます。国際化はi18nextを使用して管理されます。</p>
          </li>
          <li>
            <b>履歴書ファイルをアップロードできますか？</b>
            <p className="mt-2">現在、ResumeOptimizerはテキストベースの履歴書入力に焦点を当てています。将来のバージョンでは、PDFまたはWord形式での履歴書ファイルのアップロードのサポートが含まれる可能性があります。</p>
          </li>
          <li>
            <b>求人情報のURLを入力できますか？</b>
            <p className="mt-2">現在、ResumeOptimizerはテキストベースの求人情報入力に焦点を当てています。将来のバージョンでは、URLから求人情報を取得するサポートが含まれる可能性があります。</p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;
