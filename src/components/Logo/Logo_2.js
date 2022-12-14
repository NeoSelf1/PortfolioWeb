import React from 'react'
import styled from 'styled-components'
import './Logo_2.scss'
const Logo_2 = () => {
  return (
    <div className="logo2">
      <div className="logo2__container">
        <div className="logo2__container__title">
          <h1>First</h1>
          <h2>선두하는</h2>
        </div>
        <div className="logo2__container__detail">
          <h2>
            15년 경력의 노하우 + 전문 영상 디자이너의 감각 + 역동적인 프레임
          </h2>
          <h3>
            도전적이고 독창적인 촬영 방식과 트랜디한 감성이 모여, 협력하고
            상생하여 만들어 내는 우리의 영상에는 새로움과 변화가 가득합니다.
          </h3>
        </div>
      </div>
      <div className="logo2__container">
        <div className="logo2__container__title">
          <h1 style={{ color: '#2c2d2d' }}>Friendly</h1>
          <h2>친근하고 든든한</h2>
        </div>
        <h3>
          진솔한 상호소통과 수준높은 결과물을 통해 고객이 다시 우리 기업을 찾을
          수 있도록 영상 컨텐츠 사업의 건전한 생태계 조성에 힘쓰고 관련 일자리
          창출을 실천하겠습니다.
        </h3>
      </div>
      <div className="logo2__container">
        <div className="logo2__container__title">
          <h1
            style={{
              color: '#e2e2e1',
              textShadow:
                '-1px 0 #2c2d2d, 0 1px #2c2d2d, 1px 0 #2c2d2d, 0 -1px #2c2d2d',
            }}
          >
            Forward
          </h1>
          <h2>앞으로 나아가는</h2>
        </div>
        <div className="logo2__container__detail">
          <h2>
            퍼스트씬은 더 나은 컨텐츠 제작을 위해 계속 앞으로 나아가고 있습니다.
          </h2>
          <h3>
            1인 미디어 생산이 넘쳐나는 시대 속에서 퍼스트씬은 협동과 상생을 통해
            차별적인 영상촬영 기법, 촬영 기술 관련 연구 및 개발, 서비스 보급에
            힘쓰고 있습니다. 머물러 있는 것이 아니라 신인 제작자 발굴 및 청소년
            미디어 교육을 지원하고 나아가 지역 컨텐츠 발전에 기여하고 있습니다.{' '}
          </h3>
        </div>
      </div>
    </div>
  )
}
export default Logo_2
