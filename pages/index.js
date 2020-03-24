import Head from 'next/head'
import Nav from '../components/nav'
import Button from '@material-ui/core/Button'

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className="title">
        Hyemin Next.js 2nd Library
      </h1>

      <p className="description">
        코드랩 Next.js 2기 강의를 통해 나온 산출물입니다.
      </p>

      <div className="text-center">
        <Button variant="contained" color="primary">바로 시작하기</Button>
      </div>
      
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
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

      .text-center {
        text-align: center;
      }
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
)

export default Home
