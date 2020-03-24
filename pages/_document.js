import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

// 기본 문서 형식 지정 : _document.js는 pages처럼 예약어로 사용
// server side에서 단 1회만 로드
// 아주 정적인 파일: SPA에서 변경할 수 없는 부분
// 클라이언트 단의 첫 진입점 _app.js
// title은 각 페이지에서 선언하는 것을 권장함
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <body>
          <div id="root">
            {/* 실제로 next js client가 동작을 할 파트 */}
            <Main />
            {/* next에서 자동으로 번들링된 파트 */}
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}