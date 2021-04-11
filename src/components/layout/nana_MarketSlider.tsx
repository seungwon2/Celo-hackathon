import * as React from 'react'
import { Component } from 'react'
import Slider from 'react-slick'
import { Box } from 'src/components/layout/Box'
import { Stylesheet } from 'src/styles/types'

const dotLocation = [
  {
    x: '24',
    y: '204',
  },
  {
    x: '24',
    y: '204',
  },
  {
    x: '24',
    y: '204',
  },
  {
    x: '24',
    y: '204',
  },
]

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '50px',
      slidesToShow: 1,
      speed: 500,
      appendDots: (dots: any) => <div style={{ position: 'absolute' }}>{dots}</div>,
      customPaging: function (i: any) {
        return (
          <div
            id="out"
            style={{
              display: 'flex',
              width: '32pt',
              height: '32pt',
              backgroundColor: 'rgba(47,207,87,.5)',
              borderRadius: 50,
            }}
          >
            <div
              id="in"
              style={{
                margin: 'auto',
                width: '15pt',
                height: '15pt',
                backgroundColor: 'rgba(47,207,87)',
                borderRadius: 50,
              }}
            ></div>
          </div>
        )
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
    }
    return (
      <div>
        <Slider {...settings}>
          <Box align="center" styles={style.marketCard}>
            <img src="../static/market1.jpg" style={style.marketPicture} />
            <div className="textBox" style={style.marketProfile}>
              <h3 margin-bottom="0px">Venice High Flea Market</h3>
              <h4 margin-top="0px">Venice Boulevard 13000, CA US</h4>
            </div>
          </Box>
          <Box align="center" styles={style.marketCard}>
            <img src="../static/market1.jpg" style={style.marketPicture} />
            <div className="textBox" style={style.marketProfile}>
              <h3 margin-bottom="0px">Venice High Flea Market</h3>
              <h4 margin-top="0px">Venice Boulevard 13000, CA US</h4>
            </div>
          </Box>
          <Box align="center" styles={style.marketCard}>
            <img src="../static/market1.jpg" style={style.marketPicture} />
            <div className="textBox" style={style.marketProfile}>
              <h3 margin-bottom="0px">Venice High Flea Market</h3>
              <h4 margin-top="0px">Venice Boulevard 13000, CA US</h4>
            </div>
          </Box>
          <Box align="center" styles={style.marketCard}>
            <img src="../static/market1.jpg" style={style.marketPicture} />
            <div className="textBox" style={style.marketProfile}>
              <h3 margin-bottom="0px">Venice High Flea Market</h3>
              <h4 margin-top="0px">Venice Boulevard 13000, CA US</h4>
            </div>
          </Box>
        </Slider>
      </div>
    )
  }
}

const style: Stylesheet = {
  marketCard: {
    display: 'flex',
    padding: '1em',
    margin: '7em 0.75em',
    borderRadius: 10,
    boxShadow: '0px 0px 10px #ccc',
    height: '7em',
    backgroundColor: 'white',
  },
  marketPicture: {
    margin: 'auto 0',
    width: '5em',
    height: '5em',
    borderRadius: 5,
  },
  marketProfile: {
    display: 'block',
    margin: '1em',
  },
}
