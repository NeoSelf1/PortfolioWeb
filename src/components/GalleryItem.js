import React from 'react'
import { datas } from '../components/data/data.js'
import './GalleryItem.scss'

export default function GalleryItem({ columns, src, index, columnOffset }) {
  const values = datas[index]
  if (!values) return null

  const [row, spanRow, spanColumn, title, text, detailed] = values
  const column = columns[index]
  const getScrollIndex = () => {
    if (index % 5 == 1 || index % 5 == 4) return 2
    if (index % 5 == 0 || index % 5 == 3) return 0
    return 1
  }

  return (
    <div
      className={`gallery-item ${detailed ? '' : 'shadow'}`}
      data-scroll
      data-scroll-speed={getScrollIndex()}
      style={{
        gridArea: `${row} / ${column + columnOffset} / 
        span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <div className="title">{title}</div>
      {src == 'minor' ? (
        <div className="point"></div>
      ) : (
        <div
          className={`image ${detailed ? 'contain' : 'cover'}`}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="text">{text} </div>
        </div>
      )}
    </div>
  )
}
