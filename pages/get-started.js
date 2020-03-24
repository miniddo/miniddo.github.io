import Head from 'next/head'
import Nav from '../components/nav'

export default () => {
  return (
    <div>
      <Head>
        <title>get-started</title>
      </Head>

      <Nav />

      <div className="wrapper">
        <h1 className="title">시작하기</h1>
        <p className="description">
          npm을 통해 CLI를 설치합니다.
        </p>
        <code>
          npm i -g codelab-2nd-cli
        </code>
      </div>

      <style jsx>{`
        .wrapper {
          width: 100%;
          color: #333;
          text-align: center;
        }

        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
  
        .title,
        .description {
          text-align: center;
        }
  
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .
      `}</style>
      
      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    
    </div>
  );
}