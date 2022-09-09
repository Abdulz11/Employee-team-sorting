import { useState } from "react"

function Infopg(props) {
   const [teamAAcc,setTeamAAcc] = useState(true)
   const [teamBAcc,setTeamBAcc] = useState(false)
   const [teamCAcc,setTeamCAcc] = useState(false)
  


  const teamA = props.teamA.map(member=>{
    return <><h2 >{member.name}</h2>
<p>{member.description}</p><br/></> })
  const teamB = props.teamB.map(member=>{
    return <><h2>{member.name}</h2>
<p>{member.description}</p><br/></>})
  const teamC = props.teamC.map(member=>{
    return <><h2>{member.name}</h2>
<p>{member.description}</p><br/></>})
  
  return (

    <>
    <div className="infodiv ">
        <div className={teamAAcc? 'teams':'teams closed'}>
            <div className="divbtn"  onClick={()=>{setTeamAAcc(prev=>!prev)
            }
            }
            >
                <h1>Team A</h1>
            </div>
            <div className="memberdets">
                    {teamA}
                </div>
        </div>
        <div className={teamBAcc? 'teams':'teams closed'}>
            <div className="divbtn" onClick={()=>setTeamBAcc(prev=>!prev)}>
                <h1>Team B</h1>
            </div>
            <div className="memberdets">
                    {teamB}
                </div>
        </div>
        <div className={teamCAcc? 'teams':'teams closed'}>
            <div className="divbtn" onClick={()=>setTeamCAcc(prev=>!prev)}>
                <h1>Team C</h1>
            </div>
            <div className="memberdets">
                    {teamC}
                </div>
        </div>
    </div>
    </>
  )
}

export default Infopg