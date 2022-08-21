import React from 'react'
import './MainVanner.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useInterval from './useInterval'
import AnimatedLetters from './AnimatedLetters'
import Main_base from '../assets/images/main_base.png'
import Main_arm from '../assets/images/main_arm.png'
import Main_logo from '../assets/images/main_logo.svg'
import Main_frame from '../assets/images/main_frame.png'
import Logo from '../assets/images/logo.png'
const MainVanner = () => {
  const [count, setCount] = useState(0)
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  //prettier-ignore
  const mainText = [['저', '는', ' ', 'N', 'E', 'O', 'S', 'E', 'L', 'F', '입', '니', '다'],
                  ['저', '는', ' ', '프','론','트','엔','드',' ','개','발','자','입','니','다'],
                  ['저', '는', ' ', '웹',' ','개','발','자', '입', '니', '다'],
                  ['저', '는', ' ', '창', '업', '을', ' ', '꿈', '꾸', '는','사','람', '입', '니', '다'],
                  ['저', '는', ' ', 'U', 'X', '/', 'U', 'I',' ', '디', '자','이','너', '입', '니', '다'],
  ]
  const helloText = ['안', '녕', '하', '세', '요']
  useInterval(() => {
    setCount(count + 1)
  }, 4500)
  return (
    <div className="content">
      <div className="content-left">
        <span className="tags">&lt;div&gt;</span>
        <div className="text-zone">
          <AnimatedLetters
            letterClass="text-animate helloText"
            idx={19}
            strArray={helloText}
          />
          <br />
          <AnimatedLetters
            letterClass="text-animate mainText"
            strArray={mainText[count % mainText.length]}
            idx={count == 0 ? 22 : 1}
          />
          <h3>
            {size.width < 1200 ? (
              // prettier-ignore
              <>
                React <br/>
                Rhino3D <br/>
                Adobe AfterEffect <br/>
                Adobe Illustrator <br/>
                Wordpress
              </>
            ) : (
              'React / Rhino3D / Adobe AfterEffect / Adobe Illustrator / Wordpress'
            )}
          </h3>
          <Link to="/about" className="flat-button">
            {size.width < 1000 ? '더 알아보기' : '+'}
          </Link>
        </div>
        <span className="tags">&lt;/div&gt;</span>
      </div>
      <div className="midLine"></div>
      <div className="base_container">
        <img className="base" src={Main_base} alt="main_base" />
        <img className="logo" src={Main_logo} alt="main_arm" />
        <img className="arm" src={Main_arm} alt="main_arm" />
        {/* <img className="frame" src={Main_frame} alt="main_frame" /> */}
      </div>
      <div className="img">
        <div className="O"></div>
        <div className="o"></div>
      </div>
      <div className="content-right">
        <h3>
          There's nothing uglier <br /> than regret.
        </h3>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/NeoSelf1"
            >
              <img src={Logo} alt="github" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="www.naver.com">
              <img src={Logo} alt="github" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="www.naver.com">
              <img src={Logo} alt="github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainVanner
