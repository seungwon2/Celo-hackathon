import { useNavigate } from 'react-router'
import { Button } from 'src/components/buttons/Button'
import { Box } from 'src/components/layout/Box'
import { Font } from 'src/styles/fonts'
import { mq, useIsMobile } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function NFTpage() {
  const isMobile = useIsMobile()
  const navigate = useNavigate()

  const onClickMove = () => {
    navigate('/NFTpaint')
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

  return (
    <Box direction="column" justify="start">
      <Box direction="column" justify="start" align="center">
        <h1 css={style.h1}>{`My ${isMobile ? '' : 'simple '}NFT`}</h1>
        <Button onClick={onClickMove} styles={style.buttonContainer}>
          Go to My NFT Paint
        </Button>
      </Box>
      <Box direction="row" justify="center" align="center">
        {nfts.map((nft) => (
          <div key={nft.tokenId} css={style.nftContainer}>
            <img src={nft.imageUrl} css={style.nfts} />
          </div>
        ))}
      </Box>
    </Box>
  )
}

const style: Stylesheet = {
  h1: {
    ...Font.h1,
    ...Font.bold,
    fontSize: '1.5em',
    margin: '0.5em 0.5em 0.5em 0.5em',
    textAlign: 'center',
    maxWidth: '95%',
    [mq[768]]: {
      fontSize: '1.5em',
      marginTop: '0.5em',
    },
  },
  buttonContainer: {
    margin: '0.5em 0.5em 1em 0.5em',
    width: '7em',
    minWidth: '15em',
    height: '2.8em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    borderRadius: 50,
    fontSize: '1.1em',
    [mq[768]]: {
      marginTop: '1.5em',
    },
  },
  nftContainer: {
    margin: '0.5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '6em',
    height: '6em',
    borderWidth: '1em ',
    borderColor: 'linear-gradient(0.6turn,rgba(247,214,55),rgba(47,207,87))',
    borderRadius: 50,
    boxShadow: '0px 0px 10px #ccc',
    [mq[768]]: {
      marginTop: '2.5em',
      flexDirection: 'row',
    },
  },
  nfts: {
    margin: '0.5em 0.5em 0.5em 0.5em',
    width: '400',
  },
}
