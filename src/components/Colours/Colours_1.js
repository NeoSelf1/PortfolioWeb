import React from 'react'
import styled from 'styled-components'
import './Colours_1.scss'
const Colours_1 = () => {
  return (
    <div className="colours1">
      <div className="colours1__title">Color System</div>
      <h3>
        색상은 퍼스트씬의 시각적 이미지를 전달하는 기본적인 요소이며, 일관성
        있는 이미지 구축을 위하여 지정된 색상을 통일성 있게 지속적으로 사용하는
        것이 좋습니다. 색상의 사용은 지정된 메인와 서브 색상을 중심으로 포인트
        색상은 보조적인 요소로 사용됩니다.
        <br />
        <b>
          (쿨 블랙 60%, 소프트그레이 30%, 퍼스트레드 10% 혹은 소프트 그레이 60%,
          쿨 블랙 30%, 퍼스트레드 10%를 기준으로 상황에 맞추어 변형하여 사용)
        </b>
      </h3>
    </div>
  )
}
export default Colours_1
