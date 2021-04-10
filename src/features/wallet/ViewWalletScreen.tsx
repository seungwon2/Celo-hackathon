import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getContract } from 'src/blockchain/contracts'
import { Button } from 'src/components/buttons/Button'
import ArrowBackIcon from 'src/components/icons/arrow_back.svg'
import { Box } from 'src/components/layout/Box'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { CeloContract } from 'src/config'
import { useWalletAddress } from 'src/features/wallet/utils'
import { WalletDetails } from 'src/features/wallet/WalletDetails'
import { Color } from 'src/styles/Color'
import { Font } from 'src/styles/fonts'
import { Stylesheet } from 'src/styles/types'
export function ViewWalletScreen() {
  const navigate = useNavigate()
  const address = useWalletAddress()
  const [testImage, setTestImage] = useState('')
  useEffect(() => {
    getData().then(function (data: any) {
      console.log(data) // response 값 출력
      setTestImage(data)
    })
  }, [])
  const onClickBack = () => {
    navigate(-1)
  }
  const handleOnClick = () => {
    // console.log(
    //   test.testMint(
    //     'test1',
    //     address,
    //     'https://ipfs.io/ipfs/QmQxtsnSTtWhFN8cP3hg2jZaTcCBxNFK3gNg7zcFUWtrK7'
    //   )
    // )
    // console.log(Metadata[0])
    // console.log('totalSupply: ', test.totalSupply())
    // console.log('tokenOfOwnerByIndex: ', test.tokenOfOwnerByIndex(address, 1))
    // console.log('balanceOf: ', test.balanceOf(address))
    // console.log('tokenByIndex: ', test.tokenByIndex(1))
    // console.log(json.image)
    // console.log('tokenURI: ', test.tokenURI(3))
  }

  const test = getContract(CeloContract.MarkAtToken)

  function getData() {
    return test.tokenURI(test.totalSupply())
  }

  return (
    <ScreenContentFrame onClose={onClickBack}>
      <Box direction="column" align="center">
        <h2 css={style.header}>Your Celo Account</h2>
        <WalletDetails />

        <img src={testImage} />
        <Button
          color={Color.altGrey}
          icon={ArrowBackIcon}
          onClick={handleOnClick}
          margin="3em 0 1em 0"
          width="9em"
        >
          GetResponse
        </Button>
      </Box>
    </ScreenContentFrame>
  )
}

const style: Stylesheet = {
  header: {
    ...Font.h2Green,
    margin: '0 0 1.4em 0',
    textAlign: 'center',
  },
}
