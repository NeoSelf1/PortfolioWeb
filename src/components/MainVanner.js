import React from 'react'
import './MainVanner.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useInterval from './useInterval'
import AnimatedLetters from './AnimatedLetters'
import Main from '../assets/images/main.png'
import logo from '../assets/images/logo.png'
const MainVanner = () => {
  const [count, setCount] = useState(0)
  //prettier-ignore
  const mainText = [['저', '는', ' ', 'N', 'E', 'O', 'S', 'E', 'L', 'F', '입', '니', '다', '.'],
                  ['저', '는', ' ', '프','론','트','엔','드',' ','개','발','자','입','니','다','.',],
                  ['저', '는', ' ', '웹',' ','개','발','자', '입', '니', '다', '.'],
                  ['저', '는', ' ', '창', '업', '을', ' ', '꿈', '꾸', '는','사','람', '입', '니', '다', '.'],
                  ['저', '는', ' ', 'U', 'X', '/', 'U', 'I',' ', '디', '자','이','너', '입', '니', '다', '.'],
  ]
  const helloText = ['안', '녕', '하', '세', '요', '.']
  useInterval(() => {
    setCount(count + 1)
  }, 4000)
  return (
    <>
      <div className="content-left">
        <span className="tags">&lt;h1&gt;</span>
        <div className="text-zone">
          <AnimatedLetters
            letterClass="text-animate helloText"
            idx={5}
            strArray={helloText}
          />
          <br />
          <AnimatedLetters
            letterClass="text-animate mainText"
            strArray={mainText[count % mainText.length]}
            idx={count == 0 ? 20 : 1}
          />
          <h3>새로운 것을 찾는 것을 두려워하지 않는 탐험가</h3>
          <Link to="/about" className="flat-button">
            +
          </Link>
        </div>
        <span className="tags">&lt;/h1&gt;</span>
      </div>
      <div className="midLine"></div>
      <div className="img">
        <img src={Main} alt="main" />
      </div>
      <div className="content-right">
        <h3>
          There's nothing uglier <br /> than regret
        </h3>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/NeoSelf1"
            >
              <img src={logo} alt="github" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="www.naver.com">
              <img src={logo} alt="github" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="www.naver.com">
              <img src={logo} alt="github" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MainVanner
