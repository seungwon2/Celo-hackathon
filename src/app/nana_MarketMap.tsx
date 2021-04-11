import * as React from 'react'
import { useNavigate } from 'react-router'
import { Button } from 'src/components/buttons/Button'
import SearchIcon from 'src/components/icons/search.svg'
import { Box } from 'src/components/layout/Box'
import SimpleSlider from 'src/components/layout/nana_MarketSlider'
import { mq, useIsMobile } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function MarketMap() {
  const isMobile = useIsMobile()
  const navigate = useNavigate()

  const onClickViewList = () => {
    navigate('/MarketList')
  }

  const nfts = [
    {
      tokenId: 1,
      imageUrl: '../static/nft/bigdog.png',
    },
    {
      tokenId: 2,
      imageUrl: '../static/nft/puppy.png',
    },
    {
      tokenId: 3,
      imageUrl: '../static/nft/cat.png',
    },
  ]

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  }

  return (
    <Box direction="column" styles={style.frame}>
      <Box styles={style.search}>
        <img width="16.5pt" src={SearchIcon} style={{ padding: '0 0.2em' }} />
        <input
          name="search"
          value="Pick your market"
          style={{ padding: '0 0.3em', border: 'none' }}
        />
      </Box>
      <SimpleSlider />
      <Button onClick={onClickViewList} styles={style.button}>
        View the list of this markets
      </Button>
    </Box>
  )
}

const style: Stylesheet = {
  frame: {
    minHeight: '100vh',
    backgroundImage: `url("static/maps.jpg")`,
  },
  search: {
    position: 'absolute',
    top: '6em',
    left: '50%',
    marginLeft: '-44vw',
    padding: '1em 1em',
    width: '88vw',
    height: '3.5em',
    background: 'white',
    borderRadius: 10,
    boxShadow: '0px 0px 10px #ccc',
  },
  button: {
    position: 'absolute',
    bottom: '3.75em',
    left: '50%',
    marginLeft: '-8em',
    width: '18em',
    minWidth: '15em',
    height: '2.8em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    borderRadius: 50,
    fontSize: '1.1em',
    [mq[768]]: {
      marginTop: '1.5em',
    },
  },
}
