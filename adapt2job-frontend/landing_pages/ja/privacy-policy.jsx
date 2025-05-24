import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-3xl font-semibold mb-6">プライバシーポリシー</h1>
        <p className="mb-4">このプライバシーポリシーは、お客様が当社のウェブサイトをご利用になる際に、ResumeOptimizerがお客様に関する情報をどのように収集、使用、共有するかを説明するものです。</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">収集する情報</h2>
          <p className="mb-4">お客様が当社のウェブサイトを訪問される際、当社は自動的に特定の情報を収集します。これには以下が含まれます。</p>
          <ul className="list-disc pl-5 mb-4">
            <li>お客様のIPアドレス</li>
            <li>お客様のブラウザの種類とオペレーティングシステム</li>
            <li>お客様が当社のウェブサイトで訪問したページ</li>
            <li>お客様が当社のウェブサイトでクリックしたリンク</li>
            <li>お客様の訪問日時</li>
          </ul>
          <p className="mb-4">当社は、お客様が当社のウェブサイトをどのように利用しているかを理解し、顧客体験を向上させるためにこの情報を収集します。また、この情報はウェブサイトのトラフィック統計にも使用されます。</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">クッキー</h2>
          <p className="mb-4">当社は、お客様の設定に関する情報を保存し、当社のウェブサイトでの体験をパーソナライズするためにクッキーを使用します。ブラウザの設定でクッキーを無効にすることができますが、これにより当社のウェブサイトの特定の機能を使用できなくなる可能性があります。</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">お客様の情報の利用方法</h2>
          <p className="mb-4">当社は、お客様の情報を以下の目的で使用します。</p>
          <ul className="list-disc pl-5 mb-4">
            <li>お客様が要求するサービスを提供する</li>
            <li>当社のウェブサイトとサービスを改善する</li>
            <li>当社のウェブサイトでの体験をパーソナライズする</li>
            <li>当社の製品およびサービスについてお客様と連絡を取る</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">お客様の情報の共有方法</h2>
          <p className="mb-4">当社は、以下の場合を除き、お客様の個人情報を第三者と共有しません。</p>
          <ul className="list-disc pl-5 mb-4">
            <li>当社のウェブサイトの運営およびサービスの提供を支援するサービスプロバイダーと共有する場合</li>
            <li>法令により要求される場合</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">データセキュリティ</h2>
          <p className="mb-4">当社は、お客様の情報を不正アクセス、使用、開示から保護するために合理的な措置を講じます。ただし、インターネット上での送信方法や電子的な保存方法に100%のセキュリティはありません。したがって、お客様の情報の絶対的なセキュリティを保証することはできません。</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">本プライバシーポリシーの変更</h2>
          <p className="mb-4">当社は、本プライバシーポリシーを随時更新することがあります。変更があった場合は、当社のウェブサイトに掲載します。変更掲載後も当社のウェブサイトを引き続きご利用になる場合、お客様は新しいプライバシーポリシーに同意したものとみなされます。</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">お問い合わせ</h2>
          <p className="mb-4">本プライバシーポリシーに関するご質問がある場合は、お問い合わせください。</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
