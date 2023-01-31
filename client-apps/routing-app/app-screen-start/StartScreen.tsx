import React from "react"
import { Button, Typography } from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./StartScreen.scss"
import { useNavigate } from "react-router-dom"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const StartScreen: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div id="home-screen">
      <Typography variant="h3" className="game-title">My Game Title</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/game")}>START</Button>
      <Typography variant="body2" style={{ marginTop: "auto" }}>Copyright Jason Day</Typography>
    </div>
  )
}

