import axios from 'axios'
import { useEffect, useState } from 'react'
import { Box } from 'src/components/layout/Box'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export default function MarketForm() {
  const [store, setStore] = useState({
    name: '',
    categ: '',
    desc: '',
    location: '',
    period: '',
    hour: '',
    website: '',
    mainpic: '',
    pic1: '',
    pic2: '',
    pic3: '',
  })

  const { name, categ, desc, location, period, hour, website, mainpic, pic1, pic2, pic3 } = store

  useEffect(() => {
    axios
      .get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/1`)
      .then((response) => {
        console.log(response)
        setStore(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setStore({
      ...store,
      [name]: value,
      [categ]: value,
      [desc]: value,
      [location]: value,
      [period]: value,
      [hour]: value,
      [website]: value,
      [mainpic]: value,
      [pic1]: value,
      [pic2]: value,
      [pic3]: value,
    })
    console.log(store)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(store)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box direction="column" align="center" styles={style.inputContainer}>
        <h2>Add My Market</h2>
        <Box direction="row" align="center"></Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>market name</span>
          <input name="name" type="text" value={name} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>category</span>
          <input name="categ" type="text" value={categ} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>description</span>
          <input name="desc" type="text" value={desc} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>loaction</span>
          <input name="location" type="text" value={location} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>open period</span>
          <input name="period" type="text" value={period} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>open hour</span>
          <input name="hour" type="text" value={hour} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>website</span>
          <input name="website" type="text" value={website} onChange={onChange} />
        </Box>
        <button type="submit">Submit</button>
      </Box>
    </form>

  )
}

const style: Stylesheet = {
  formContent: {
    [mq[480]]: {
      marginLeft: '-1.3em',
    },
  },
  inputContainer: {
    marginTop: '1.5em',
    textAlign: 'right',
  },
  inputLabel: {
    textAlign: 'left',
    width: '6em',
    paddingRight: '1em',
    [mq[480]]: {
      width: '8em',
    },
  },
}
