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

import KoreaFinland from '../assets/images/korea-finland.jpeg'
import Nis from '../assets/images/nis.jpg'
import Dfl from '../assets/images/dfl.jpeg'
import Hongik from '../assets/images/hongik.jpg'
import HongikStartUp from '../assets/images/창업경진대회.jpeg'
import SejongStartUp from '../assets/images/세종시.gif'
import GCDP from '../assets/images/GCDP.jpeg'
import Dduck from '../assets/images/Dduck.jpeg'
import Makerton from '../assets/images/makerton.jpeg'

import edu from '../assets/images/edu.png'
import career from '../assets/images/career.png'
import trophie from '../assets/images/trophie.png'
import lang from '../assets/images/lang.png'
const History = () => {
  const ZoomInScrollOut = batch(Fade(), ZoomIn())
  const isShow = true
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
          <HistoryPage year="2009-2013" month=" " categ={edu} img={Nis} title="중국 유학"
          detail="초등학교 4학년부터 중학교 2학년까지 중국 남경 NIS(남경국제학교)에 재학하여 학교대표 수영 선수, 트라이애슬론, 배드민턴 선수 등 다양한 체육활동 참여" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2013" month="April" categ={lang} title="HSK 5급 취득" detail="187점 취득" side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2014" month="Sep" categ={lang} title="TEPS 응시" detail="807점 취득" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2015-2018" month=" " img= {Dfl} categ={edu} title="동두천 외국어 고등학교 재학" detail='영어 말하기대회 2등, 전국 시쓰기 대회 입상, 대만해외교류활동 등 다양한 대외활동 참여' side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2018" month="March" categ={edu} title="홍익대학교 디자인컨버전스학부 입학" img={Hongik} side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="Sep" categ={trophie} title="홍익대학교 창업아이템경진대회 최우수상 수상" 
          detail ="안내견 양성을 위한 막대한 비용, 식당 내 동물 출입금지 등의 이유로 인한 활동범위 축소, 안내견을 둘러싼 동물 권리 이슈 등의 이유들로 인하여 시각장애인이 원활한 경제활동을 하지 못하는 문제를 해결하기 위해 시각장애인의 길을 안내해주는 자율주행로봇 '이끄미'라는 아이디어 제안 및 제출" img={HongikStartUp} side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={6}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="Nov" categ={trophie} img={SejongStartUp} title="세종시 청년창업아이템경진대회 대상 수상" 
          detail="홍익대학교 창업아이템경진대회에서의 '이끄미'에 대한 피드백(ex.진행경로 사이에 계단과 장애물 유무 파악 필요)을 수용하고 보완하여, 세종시 청년창업아이템경진대회 참여하여 대상을 수상함. 이 과정은 제가 컴퓨터 이미지 인식 절차와 컴퓨터 언어에 대한 독학을 시작하는 계기가 되어 주었음." side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={7}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2019" month="Feb" categ={trophie} detail="냉장고의 사이즈에 비해 냉동보관해야하는 식품들이 많아, 원활한 보관이 힘들다는 자취생들의 공통적인 문제를 해결하고자 냉동실과 냉장실의 경계에 위치한 벽의 높이를 마치 책장처럼 유동적으로 바꾸어, 냉장고 공간을 효율적으로 활용할 수 있는 아이디어를 창출하고 프로토타입 제현에 성공함." img={GCDP} title="2018 국제 캡스톤 디자인 동상 " side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={8}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="March-Nov" img={Dduck} categ={edu} title="뚝딱뚝딱 학술동아리 회장직 수행" 
          detail=" 많은 수상실적에 힘입어, 120명 규모의 동아리 회장직을 1년간 수행" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={9}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="June" img={KoreaFinland} categ={trophie} title="한국-핀란드 해커톤 참여"
          detail="스마트시티의 주제로 진행된 해커톤 속에서, 쓰레기 투기로 인한 환경문제를 해결하고자, 스스로 움직여 유동적인 쓰레기 발생률을 수용하고, 환경미화원의 노동없이 스스로 내부의 쓰레기를 비워 인적자원 낭비를 막을 수 있는 해결책을 제안하고 발표하여 3등 수상" side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={10}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="July-Sept" categ={career} title="스마투스 인턴직 수행"
          detail="한국-핀란드 해커톤을 같이 참가하였던 스마투스 기업대표와 연락이 닿아 스마투스사에서 디자인 인턴 수행. 1개월 반동안 회사제품 프로토타입의 3D모델을 디자인하고, 3D프린터로 프로토타입 제작하였음. 그 후, 남은 인턴기간동안 제품사용 가이드 영상과 다양한 팜플렛을 디자인하였음." side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={11}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" month="Sept" categ={trophie} img={Makerton} title="세종시 지역문제해결형 메이커톤 특별상 수상" 
          detail="조치원 시장 내에 위치한 식당을 방문하는 손님의 수가 매년 감소하는 원인이 시장 내 식당의 위생에 대한 부정적인 선입견이라고 생각하였고, 이를 해결하고자 개인이 휴대할 수 있는 식기도구 거치대 아이디어를 창출하고, 3D프린터로 출력하여 프로토타입을 만들어 발표함." side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={12}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2020" month="Feb-April" categ={career} title="스마투스 디자이너 사원 근무" 
          detail="1). 사기업을 대상으로 출시 예정인, 치아진단기기 관리 모바일 APP UI를 디자인하였음.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          2). 유치원 원아들을 대상으로 치아건강과 충치의 위험성을 교육하는 교육책을 디자인하였음." side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={13}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2021" month="Nov-Dec" categ={career} 
          detail="1). 킥스타터에 회사제품를 홍보하는 상세페이지 제작 프로젝트를 총괄하였음.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          2). 치아진단기기 카탈로그의 영문판과 국문판을 디자인하였음." title="스마투스 디자이너 사원 근무" side="l"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={14}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2022" month="Jan-Feb" categ={career} title="스마투스 개발자 사원 근무"
          detail="기존에 제작했던 워드프레스 기반의 회사 홈페이지를 리액트 프레임 기반의 웹으로 리뉴얼하는 프로젝트를 혼자서 진행." link="http://www.smartooth.co" side="r"/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={15}>
        <Animator animation={ZoomInScrollOut_err}>
          {/* prettier-ignore */}
          <HistoryPage year="2022" month="March" categ={edu} title="홍익대학교 컴퓨터공학(서울) 복수전공 시작" side="r"/>
        </Animator>
      </ScrollPage>
      <div className="layout">
        {/* <a href="#">
          <img className="test" src={logo} alt="test" />
        </a> */}
        <h1 className="title">Timeline</h1>
        <div className="midLine"></div>
      </div>
    </ScrollContainer>
  )
}

export default History
