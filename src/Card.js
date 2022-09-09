


function Card(props) {
 
  const showTeams = props.allTeams.map(eachMember=>{
    return <div 
    className={eachMember.team === props.selectedInput.toLowerCase()?'card onTeam':'card' } key={eachMember.id}
    onClick={()=>props.handleOnClick(eachMember.id)}
    >
      <div className="img-div">
        <img src={`${eachMember.img}`}alt="" />
      </div>
      <div className="details">
        <h3>{eachMember.name}</h3>
        <p>{eachMember.description}</p>
      </div>
   </div>
  } )
  return (
    <div className="card-div">
     {showTeams}
    </div>
  )
}

export default Card