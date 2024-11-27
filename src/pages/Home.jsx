
import Header from "../components/Header/Header"
import Best from "../components/Best/Best"
import Upcoming from "../components/Upcoming/Upcoming"

import Download from "../components/Download/Download"
import Streaming from "../components/Streaming/Streaming"
import Membership from "../components/Membership/Membership"
const Home = (props) => {
  return (
  <>

<Header/>
<Upcoming moviesitem2={props.moviesitem}/>
<Download/>
<Streaming />
 <Best moviesitem3={props.moviesitem}/>
 <Membership />

 
  </>
  )
}

export default Home
