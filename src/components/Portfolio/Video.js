import React, { useState } from 'react'
import './Video.scss'
import ReactPlayer from 'react-player'

const Video = ({ link, title }) => {
  const [count, setCount] = useState(0)
  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="wrapper">
      <ReactPlayer width="63vw" height="30vw" url={link} />
      <h3>{title}</h3>
      <button type="button" className="wrapper__button" onClick={onIncrease}>
        {count % 2 == 0
          ? '> 클라이언트와의 의견교류과정'
          : '^ 클라이언트와의 의견교류과정'}
      </button>
      <div
        style={{ display: count % 2 == 0 ? 'none' : 'flex' }}
        className="content"
      >
        <img src={`https://file.rendit.io/n/gnfB6knfqph05JVTllym.png`} />
        <h4>
          미팅을 통해 촬영장소를 확정하여 촬영단계에 진입하였을 때,
          제작을의뢰하신 클라이언트 분께서 촬영장소 변경을 다시 요청하셨습니다.
          전체적인 촬영과정을 생각해보았을때, 촬영장소를 변경하는 것은 많은
          예산과 시간이 필요한 작업이지만, 심사숙고 끝에 촬영 일정을 미루고
          클라이언트가 희망했던 장소를 섭외하고자 여러 후보 장소들을
          클라이언트와 방문하며, 클라이언트의 니즈에 맞추고자 노력하였습니다. 그
          결과, 클라이언트가 원하던 분위기의 드라마를 성공적으로 제작할 수
          있었습니다.
        </h4>
      </div>
      <div className="wrapper__line"></div>
    </div>
  )
}

export default Video
