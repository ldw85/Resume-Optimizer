import React from 'react';

const UsageInstructions = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">求人情報入力セクションの使い方</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">プロジェクト紹介</h2>
        <p className="text-lg text-gray-700">
          ResumeOptimizerツールは、求職者が特定の職種の要件に合わせて履歴書の内容を迅速かつ効果的に調整し、就職活動の成功率を高めるのに役立ちます。ユーザーは履歴書と対象職種の記述を入力でき、アプリケーションは両方を分析し、最適化の提案と改訂された履歴書バージョンを提供します。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">求人情報入力機能</h2>
        <p className="text-lg text-gray-700 mb-4">
          アプリケーションには、ユーザーが対象職種の記述を入力するための専用セクションがあります。このセクションでは、職種の詳細を提供する2つの主要な方法をサポートすることで柔軟性を提供します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">1. 求人情報の記述を貼り付け</h3>
            <p className="text-gray-700 mb-3">
              ユーザーは、求人情報のテキストコンテンツを専用のテキストエリアに直接貼り付けることができます。
            </p>
            <p className="text-gray-700 mb-3">
              <strong>使用方法:</strong> この方法は、求人情報がプレーンテキストとして利用可能な場合（メール、ドキュメント、またはウェブサイトから直接コピーした場合など）に適しています。
            </p>
            <p className="text-gray-700">
              <strong>特徴:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>潜在的に長い求人情報の記述を簡単に貼り付けられるように、大きなテキストエリアが提供されています。</li>
              <li>明確な指示とプレースホルダーがユーザーをガイドします。</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">2. 求人情報のリンクを提供</h3>
            <p className="text-gray-700 mb-3">
              ユーザーは、オンラインの求人掲載へのURLを提供できます。アプリケーションは、提供されたリンクから求人情報の記述を取得して処理しようとします。
            </p>
            <p className="text-gray-700 mb-3">
              <strong>使用方法:</strong> この方法は、求人情報が公開されているウェブページでホストされている場合に便利です。
            </p>
            <p className="text-gray-700">
              <strong>特徴:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>求人情報のURLを入力するための入力フィールドが利用可能です。</li>
              <li>アプリケーションは、リンクから求人情報の記述を積極的に取得しているとき（読み込み状態）を示します。</li>
              <li>リンクから求人情報の記述を取得できなかった場合は、エラーメッセージが表示されます。</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">入力方法の切り替え</h3>
        <p className="text-gray-700">
          ユーザーは、直感的なタブボタンを使用して、「求人情報の記述を貼り付け」と「求人情報のリンクを提供」の方法を簡単に切り替えることができます。アクティブな方法は明確にハイライトされます。
        </p>
      </section>

      <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">読み込みとエラー処理</h3>
        <p className="text-gray-700">
          求人情報入力セクションは、アプリケーションが求人情報のリンクを処理しているとき（読み込み状態）を視覚的に示します。求人情報の記述の取得または処理に問題がある場合は、関連するエラーメッセージがこのセクション内に直接表示され、ユーザーに即座にフィードバックを提供します。
        </p>
      </section>
    </div>
  );
};

export default UsageInstructions;
