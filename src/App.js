import Card from "./Card"
import Title from "./Title"
import Navbar from "./Navbar"
import Infopg from "./Infopg"
import Footer from "./footer"
import { useState, useEffect } from "react"
import data from "./Data"
import { Routes, Route} from "react-router-dom"


function App() {
    const [allTeams,setAllTeams] =useState((JSON.parse(localStorage.getItem('allTeams'))) || data)
    const [teamA,setTeamA] = useState([])
    const [teamB,setTeamB] = useState([])
    const [teamC,setTeamC] = useState([])
    const [selectedInput,setSelectedInput] = useState('All')

    useEffect(()=>{
        localStorage.setItem('allTeams',JSON.stringify(allTeams))
    },[allTeams])
    
    useEffect(()=>{
        sortTeams()
    },[allTeams])
    


function handleOnClick(id){
    if(selectedInput === 'All') return;
    let newMember = allTeams.map(member=>{
        if(member.id === id){
            return member.team === selectedInput.toLowerCase()? {...member,team:''}:{...member,team:selectedInput.toLowerCase()}
        }
        else{
            return member
        } 
    })
    setAllTeams(newMember)
 }

function handleSelectedInput(target){
    setSelectedInput(target)
}

function sortTeams(){
let teamA = [];
let teamB = [];
let teamC = [];
    allTeams.map(eachMember =>{
    if(eachMember.team === 'a'){
        teamA.push(eachMember)
    }
    else if(eachMember.team === 'b'){
        teamB.push(eachMember)
    }
    else if(eachMember.team === 'c'){
        teamC.push(eachMember)
    }
}
)
setTeamA(teamA)
setTeamB(teamB)
setTeamC(teamC)
}
   
   
  return (
    
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={
            <>
            <Title 
            handleSelectedInput={handleSelectedInput}
            selectedInput={selectedInput}
            allTeams={allTeams}
            />
            <Card 
            allTeams={allTeams}
            handleOnClick={handleOnClick}
            selectedInput={selectedInput}
            />
            </>} 
            />  
            <Route path="/infopg" element={<Infopg 
                teamA={teamA}
                teamB={teamB}
                teamC={teamC}
            />} 
            />
        </Routes>
        <Footer />
    </div>
    
  )
}

export default App