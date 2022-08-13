import React from 'react'
import {
  ScrollContainer,
  Animator,
  ScrollPage,
  batch,
  Fade,
  ZoomIn,
  MoveIn,
  MoveOut,
  Sticky,
} from 'react-scroll-motion'
import './History.scss'
import HistoryPage from './HistoryPage'
import photo from '../assets/images/5.png'
import frame from '../assets/images/frame.jpg'
import edu from '../assets/images/edu.png'
import career from '../assets/images/career.png'
import trophie from '../assets/images/trophie.png'
import lang from '../assets/images/lang.png'
import logo from '../assets/images/logo.png'
const History = () => {
  const ZoomInScrollOut = batch(Fade(), ZoomIn())
  // const []
  const ZoomInScrollOut_err = batch(
    Sticky(),
    Fade(),
    // ZoomIn(),
    MoveIn(0, 500),
    MoveOut(0, -800)
  )
  function toggleMode() {}
  // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2009-2013" month=" " categ='edu' title="중국 유학" detail="초등학교 4학년부터 중학교 2학년까지 중국 남경에서, NIS(남경국제학교)에 재학" side="r" img={photo}/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2013" month="April" categ={lang} title="HSK 5급 취득" side="l" img="logo"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2014" categ={lang} month="Sep" categ={lang} title="TEPS 응시" detail="807점 취득" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2015-2018" month=" " categ={edu} title="동두천 외국어 고등학교 재학" side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2018" month="March" categ={edu} title="홍익대학교 디자인컨버전스학부 입학" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="Sep" categ={trophie} title="홍익대학교 창업아이템경진대회 최우수상 수상" side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={6}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="Nov" categ={trophie} title="세종시 청년창업아이템경진대회 대상 수상" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={7}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2019" month="Feb" categ={trophie} title="2018 국제 캡스톤 디자인 동상 " side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={8}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="March-Nov" categ={edu} title="뚝딱뚝딱 학술동아리 회장직 수행" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={9}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="June" categ={trophie} title="세종시 지역문제해결형 메이커톤 Creative상 수상" side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={10}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="July-Sep" categ={career} title="스마투스 인턴직 수행" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={11}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2020" month="Feb-April" categ={career} title="스마투스 디자이너 사원 근무" side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={12}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2021" month="Nov-Dec" categ={career} title="스마투스 디자이너 사원 근무" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={13}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2022" month="Jan-Feb" categ={career} title="스마투스 개발자 사원 근무" side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={14}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2022" month="March" categ={edu} title="홍익대학교 컴퓨터공학(서울) 복수전공 시작" side="r"/>
        </Animator>
      </ScrollPage>
      <div className="layout">
        <a href="#">
          <img className="test" src={logo} alt="test" />
        </a>
        <h1 className="title">Timeline</h1>
        <div className="midLine"></div>
        <img className="frame" src={frame} alt="frame" />
      </div>
    </ScrollContainer>
  )
}

export default History
