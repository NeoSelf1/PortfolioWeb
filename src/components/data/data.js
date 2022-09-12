import HongikStartup from '../../assets/images/portfolio/창업경진대회.jpeg'
import SejongStartup from '../../assets/images/portfolio/세종시.gif'
import Dduck from '../../assets/images/portfolio/Dduck.jpeg'
import DFL from '../../assets/images/portfolio/DFL.jpeg'
import GCDP from '../../assets/images/portfolio/GCDP.jpeg'
import Hongik from '../../assets/images/portfolio/Hongik.jpg'
import Interaction from '../../assets/images/portfolio/Interaction.jpg'
import Kick_1 from '../../assets/images/portfolio/Kick_1.jpg'
import Kick_2 from '../../assets/images/portfolio/Kick_2.jpg'
import KorFin from '../../assets/images/portfolio/KorFin.jpeg'
import Makerton from '../../assets/images/portfolio/Makerton.jpeg'
import Manual_1 from '../../assets/images/portfolio/Manual_1.jpg'
import Manual_2 from '../../assets/images/portfolio/Manual_2.jpg'
import Manual_3 from '../../assets/images/portfolio/Manual_3.jpg'
import Manual_4 from '../../assets/images/portfolio/Manual_4.jpg'
import Manual from '../../assets/images/portfolio/Manual_Thumb.jpg'
import Nis from '../../assets/images/portfolio/Nis.jpg'
import UI_1 from '../../assets/images/portfolio/UI_1.jpg'
import UI_2 from '../../assets/images/portfolio/UI_2.jpg'
import UI from '../../assets/images/portfolio/UIThumb.jpg'
import WebDesign from '../../assets/images/portfolio/WebDesign_Thumb.jpg'
import WebDesign_Content from '../../assets/images/portfolio/WebDesign.jpg'

const imageData = [
  Nis,
  'minor',
  'minor',
  DFL,
  Hongik,
  HongikStartup,
  SejongStartup,
  GCDP,
  Dduck,
  KorFin,
  'minor',
  Makerton,
  'minor',
  UI,
  WebDesign,
  Interaction,
  Manual,
  Kick_1,
  'minor',
  'minor',
]
const datas = [
  //세로위치,높이,너비,제목,내용,그림일부 가릴지 여부(true? contain: cover)
  //prettier-ignore
  [18, 7, 2, '중국 유학', '초등학교 4학년부터 중학교 2학년까지 중국 남경 NIS(남경국제학교)에 재학하여 학교대표 수영 선수, 트라이애슬론, 배드민턴 선수 등 다양한 체육활동 참여',false,],
  //prettier-ignore
  [32, 1, 1, 'HSK 5급 취득', '', true],
  //prettier-ignore
  [8, 1, 1, 'TEPS 응시 및 807점 획득', '', true],
  //prettier-ignore
  [36, 10, 3, '동두천 외국어 고등학교 재학', '영어 말하기대회 2등, 전국 시쓰기 대회 입상, 대만해외교류활동 등 다양한 대외활동 참여', false],
  //prettier-ignore
  [12, 12, 2, '홍익대학교 디자인컨버전스학부 입학', '', true],
  //prettier-ignore
  [32, 12, 2, '홍익대학교 창업아이템경진대회 최우수상 수상', '안내견 양성을 위한 막대한 비용, 식당 내 동물 출입금지 등의 이유로 인한 활동범위 축소, 안내견을 둘러싼 동물 권리 이슈 등의 이유들로 인하여 시각장애인이 원활한 경제활동을 하지 못하는 문제를 해결하기 위해 시각장애인의 길을 안내해주는 자율주행로봇 이끄미라는 아이디어 제안 및 제출', false],
  //prettier-ignore
  [4, 18, 5, '세종시 청년창업아이템경진대회 대상 수상', '홍익대학교 창업아이템경진대회에서의 이끄미에 대한 피드백(ex.진행경로 사이에 계단과 장애물 유무 파악 필요)을 수용하고 보완하여, 세종시 청년창업아이템경진대회 참여하여 대상을 수상함. 이 과정은 제가 컴퓨터 이미지 인식 절차와 컴퓨터 언어에 대한 독학을 시작하는 계기가 되었음', false],
  //prettier-ignore
  [20, 15, 3, '2018 국제 캡스톤 디자인 동상', '냉장고의 사이즈에 비해 냉동보관해야하는 식품들이 많아, 원활한 보관이 힘들다는 자취생들의 공통적인 문제를 해결하고자 냉동실과 냉장실의 경계에 위치한 벽의 높이를 마치 책장처럼 유동적으로 바꾸어, 냉장고 공간을 효율적으로 활용할 수 있는 아이디어를 창출하고 프로토타입 제현에 성공', false],
  //prettier-ignore
  [2, 9, 3, '뚝딱뚝딱 학술동아리 회장직 수행', '많은 수상실적에 힘입어, 120명 규모의 동아리 회장직을 1년간 수행', false],
  //prettier-ignore
  [27, 18, 5, '한국-핀란드 해커톤 참여', '스마트시티의 주제로 진행된 해커톤 속에서, 쓰레기 투기로 인한 환경문제를 해결하고자, 스스로 움직여 유동적인 쓰레기 발생률을 수용하고, 환경미화원의 노동없이 스스로 내부의 쓰레기를 비워 인적자원 낭비를 막을 수 있는 해결책을 제안하고 발표하여 3등 수상', false],
  //prettier-ignore
  [12, 1, 1, '스마투스 인턴직 수행', '', true],
  //prettier-ignore
  [17, 10, 2, '세종시 지역문제해결형 메이커톤 특별상 수상', '조치원 시장 내에 위치한 식당을 방문하는 손님의 수가 매년 감소하는 원인이 시장 내 식당의 위생에 대한 부정적인 선입견이라고 생각하였고, 이를 해결하고자 개인이 휴대할 수 있는 식기도구 거치대 아이디어를 창출하고, 3D프린터로 출력하여 프로토타입을 만들어 발표', false],
  //prettier-ignore
  [39, 1, 1, '스마투스 디자이너 사원 근무', '', true],
  //prettier-ignore
  [2, 15, 4, '모바일UI 디자인', '스마투스의 치아진단기기 관리 모바일 APP UI 디자인', true],
  //prettier-ignore
  [28, 18, 5, '웹페이지 디자인', '스마투스 홈페이지의 상점페이지 디자인', true],
  //prettier-ignore
  [12, 17, 3, 'typeWriter with Processing', '글자는 여러 결과를 이끌어낼 다양한 경우의 수를 지니고 있다. 우리는 이러한 무한한 잠재성을 지닌 글자들을 조합하여 단어를 만들고, 더 나아가 마침표를 찍는 행위를 통해 문장을 완성시킨다. 글자들이 가지고 있는 이러한 성질들을 Processing을 통하여 연출하였다. 키보드로 글자를 타입하면, 해당 글자가 화면에 나타난다. 이 글자들은 어떠한 특정한 의미가 부여되어 있지 않은 상태이기에, 색깔, 크기와 위치가 정해져있지 않아 화면을 떠돌아다닌다. 관찰자가 원하는 글자를 타입해, 이윽고, 원하는 의미를 표현하는 문장이 완성되어 마침표를 찍게 되면, 떠돌아다니던 글자들은 자신들의 특성과 역할을 부여받고, 화면에서 사라지게 된다.', true],
  //prettier-ignore
  [23, 21, 5, '메뉴얼 디자인', '스마투스 치아진단기기 카탈로그의 영문판과 국문판을 디자인', true],
  //prettier-ignore
  [5, 22, 3, '킥스타터 상세페이지 디자인', '킥스타터에 회사제품를 홍보하는 상세페이지 제작 프로젝트를 총괄하였음', true],
  [24, 1, 1, '스마투스 개발 사원 근무', '', true],
  [12, 1, 1, '홍익대학교 컴퓨터공학(서울) 복수전공 시작', '', true],
]
export { imageData, datas }
