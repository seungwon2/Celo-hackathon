import axios from 'axios';
import { useState } from 'react';
import { Box } from 'src/components/layout/Box';
import Uploading from "src/features/sellerprofile/utils/Uploading";
import { mq } from 'src/styles/mediaQueries';
import { Stylesheet } from 'src/styles/types';
type MarketFormProps = {
  onSubmit: (form: {
    name: string
    categ: string
    desc: string
    location: string
    period: string
    hour: string
    website: string
    mainpic: string,
    pic1: string,
    pic2: string,
    pic3: string,
  }) => void
}

export default function MarketForm({ onSubmit }: MarketFormProps) {
  type Istore = {
    name: string
    categ: string
    desc: string
    location: string
    period: string
    hour: string
    website: string
    mainpic: string,
    pic1: string,
    pic2: string,
    pic3: string,
  }
  const [form, setForm] = useState<Istore>({
    name: '',
    categ: '',
    desc: '',
    location: '',
    period: '',
    hour: '',
    website: '',
    mainpic:'',
    pic1: '',
    pic2: '',
    pic3: '',
  })
  const handleFormChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const { name, categ, desc, location, period, hour, website,mainpic,pic1,pic2,pic3 } = form
  const handleSubmit = () => {

    axios
      .post(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/login/`,form )
      .then(function (response) {
        console.log(response.data.message);
        if (response.data.message == "1"){
          alert("login success!");}
      })
      .catch(function (error) {
        alert("response error");
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box direction="column" align="center" styles={style.inputContainer}>
      <h2>Add My Market</h2>
      <Box direction="row" align="center" >
        <Uploading opt="mainpic" {...{ setForm }}/>
        <span></span>
        <Uploading opt="pic1"{...{ setForm }}/>
        <span></span>
        <Uploading opt="pic2"{...{ setForm }}/>
        <span></span>
        <Uploading opt="pic3"{...{ setForm }}/>
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>market name</span>
      <input name="name" type="text" value={name} />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>category</span>
      <input name="categ" type="text" value={categ}  />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>description</span>
      <input name="desc" type="text" value={desc} onClick={handleFormChange}/>
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>loaction</span>
      <input name="location" type="text" value={location} onClick={handleFormChange}/>
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>open period</span>
      <input name="period" type="text" value={period} onClick={handleFormChange}/>
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>open </span>
      <input name="hour" type="text" value={hour} onClick={handleFormChange}/>
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>market name</span>
      <input name="website" type="text" value={website} onClick={handleFormChange} />
      </Box>
      <button type="submit" onClick={handleSubmit}>Submit</button>
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
