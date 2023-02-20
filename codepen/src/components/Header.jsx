import React from 'react';
import {AppBar,Toolbar,styled} from '@mui/material';
const Conatainer=styled(AppBar)`
background:black;
height:10vh;



`
function Header() {

const logo="data:image/png;base64,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";

  return (
    <div>
      <Conatainer position='static'>
        <Toolbar>
<img src={logo} alt='logo' style={{width:40}}/>
        </Toolbar>
      </Conatainer>
    </div>
  )
}

export default Header