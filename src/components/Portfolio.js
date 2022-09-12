import './Portfolio.scss'
import React, { useRef, useEffect, useState } from 'react'
import locomotiveScroll from 'locomotive-scroll'
import '../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import { imageData } from './data/data.js'
import GalleryItem from './GalleryItem'

export default function Portfolio() {
  const ref = useRef(null)
  var columns
  const [port, setPort] = useState(false)

  if (port == false) {
    columns = [
      1, 4, 4, 4 /*동외고입학*/, 6, 9, 10, 14 /*GCDP*/, 16, 19 /*한핀*/,
      21 /*인턴직수행*/, 23, 24, 27 /*UI*/, 29 /*웹페이지 */, 35, 38, 41, 44,
      44,
    ]
  } else {
    columns = [
      -2, -2, -3, -4 /*동외고입학*/, -5, -2 /*시작*/, 0, 4 /*GCDP*/, 7,
      9 /*한핀*/, 11 /*인턴직수행*/, 13, 16, 17 /*UI*/, 18 /*웹페이지 */, 22,
      24, 26, 29, 33,
    ]
  }

  useEffect(() => {
    if (ref) {
      new locomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: 'horizontal',
      })
    }
  }, [])

  const images = imageData.map((url, index) => (
    <GalleryItem
      columns={columns}
      src={url}
      index={index}
      columnOffset={index}
      key={index}
    />
  ))
  return (
    <div className="main-container">
      <div className="scroll-container" data-scroll-container ref={ref}>
        <div className="content">
          {/* <button onClick={setPort(!port)}></button> */}
          <div
            className="gallery"
            style={{ width: port == false ? '6800px' : '5600px' }}
          >
            {images}
            <div className="gallery-helper">Scroll to discover more > </div>
            <div className="behind-text fill" data-scroll data-scroll-speed>
              timeline of neoself
            </div>
            <div className="behind-text outline" data-scroll data-scroll-speed>
              timeline of neoself
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
