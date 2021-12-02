import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"
import Video from "../components/video"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/skb-banner-fake.png"
      // width={'100%'}
      className='skb-banner'
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }} 
      onClick={popupMessage}
    />
    <div className='message-box'>NEW MESSAGE</div>

    <section className='slogan'>
      <h1>新未來 你來</h1>
      <p>每日一新。New Future.New You.New Message!</p>
      <p>如Fortune Cookie般，每次拜訪網站都是個驚喜，都會得到一句靈感。</p>
      <p>透過網站收集各種靈感，集結開創未來的能量。</p>
    </section>

    <section class='feature'>
      <h2 className='section-title'>形象影片</h2>
      <div className='video-container'>
        <Video
          videoSrcURL="https://www.youtube.com/embed/P3192Sz2gws"
          videoTitle="Official Music Video on YouTube"
        />
        <div className='video-describe'>
          <h3>新未來有你在其中</h3>
          <p>搶先詮釋「新」對大眾是什麼意義，最後帶到對新光銀來說，新=未來=有你的參與</p>

          <h3>新未銀與時俱進</h3>
          <p>不但新光銀是新事物其中一員，更圍繞著你，去組成未來的新服務</p>

          <h3>和你一起面對新挑戰</h3>
          <p>新帶有未知，未知帶來挑戰，新光銀就是在挑戰裡幫你找到那個光、那個出路</p>
        </div>
      </div>
    </section>

    <section className='placeholder'>
      <h2>新未來 你來</h2>
      <p>新未來有你在其中 ｜ 新光銀與時俱進 ｜ 和你一起面對新挑戰</p>
    </section>

    <section className='events'>
      <h2 className='section-title'>最新活動</h2>
      <div className='card-container'>
        <Card
          cardSrcURL='' 
          cardTitle='最新活動一' 
          cardExcrept='活動一的描述活動一的描述活動一的描述'
        />
        <Card
          cardSrcURL='' 
          cardTitle='最新活動二' 
          cardExcrept='活動二的描述活動二的描述活動二的描述'
        />
        <Card
          cardSrcURL='' 
          cardTitle='最新活動三' 
          cardExcrept='活動三的描述活動三的描述活動三的描述'
        />
      </div>
    </section>

  </Layout>
)
function popupMessage(){
  let msgBox = document.querySelector('.message-box');
  const messages = [
    'New message1 a little long',
    'New message2 short',
    'New message3 a long message',
    'New message4',
    'New message5 is a very long message'
  ]
  let randomMsg = messages[Math.floor(Math.random() * messages.length)];
  const w  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let offsetX = w > 400 ? 30 : 0;
  let offsetY = w > 400 ? 20 : 10;
  let randomX = offsetX + Math.floor(Math.random() * 40);
  let randomY = offsetY + Math.floor(Math.random() * 30);
  msgBox.style.top = `${randomY}vh`;
  msgBox.style.left = `${randomX}vw`;
  msgBox.style.opacity = `1`;
  msgBox.textContent = randomMsg;
}

export default IndexPage
