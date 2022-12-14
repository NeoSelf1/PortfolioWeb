import React from 'react'
import './Team.scss'
const Team = () => {
  return (
    <div className="team">
      <div className="teammate">
        <img src={`https://file.rendit.io/n/HnmDb3LkcdewMjGZDnp9.png`} />
        <div className="teammate__text">
          <h3>김명순 이사</h3>
          <h2>웹디자인 경력 5년, GF화학 웹관리</h2>
        </div>
      </div>
      <div className="teammate">
        <img src={`https://file.rendit.io/n/Og7KbA4mtzGJwXkImtrS.png`} />
        <div className="teammate__text">
          <h3>주효석 이사</h3>
          <h2>
            스노우 보드, 웨이크보드, 서핑, 암벽 등반 등 레포츠 전문 영상감독
          </h2>
        </div>
      </div>
      <div className="teammate">
        <img src={`https://file.rendit.io/n/4KucMN4puWapQgM5Xnh6.png`} />
        <div className="teammate__text">
          <h3>김정우 이사</h3>
          <h2>기업 및 관공서 홍보영상 촬영 및 제작, 기획, 연출</h2>
        </div>
      </div>
      <div className="teammate">
        <img src={`https://file.rendit.io/n/1cXITXmpKQQmDZXqvQVx.png`} />
        <div className="teammate__text">
          <h3>이치훈 이사</h3>
          <h2>전문 사진기사 자격, 스냅 및 메이킹 촬영 등</h2>
        </div>
      </div>
    </div>
  )
}

export default Team
