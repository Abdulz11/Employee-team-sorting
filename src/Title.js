

function Title(props) {

  return (
   <div className="title-div">
    <div className="title" >
      <h2>Team Member Allocation</h2>
     {props.selectedInput =="All"? 
     <h4>{props.allTeams.length} Team Members</h4>
     :<h4>Team {props.selectedInput.toUpperCase()} has {props.allTeams.filter((member)=> member.team == props.selectedInput).length} 
      {props.allTeams.filter((member)=> member.team == props.selectedInput).length === 1?" member":" members"}
     </h4>}

    </div>
    <div className="selectbar">
    <select name="Teams" id="" onChange={(e)=>props.handleSelectedInput(e.target.value)}>
      <option value="All">All</option>
      <option value="a">Team A</option>
      <option value="b">Team B</option>
      <option value="c">Team C</option>
    </select>
    </div>
    </div>
  )
}

export default Title