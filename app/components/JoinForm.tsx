"use client"
import { useState } from "react"

export default function JoinForm() {
  const [gameCode, setGameCode] = useState("")
  const [playerName, setPlayerName] = useState("")
  const [mode, setMode] = useState("join")
  const isFormComplete =
    mode === "join"
      ? gameCode.trim() !== "" && playerName.trim() !== ""
      : playerName.trim() !== ""

  return (
    <div className="mx-auto max-w-sm px-4 mt-2 mb-8">
      {/* Mode selector pills */}
      <div className="bg-applegramBlue/30 backdrop-blur-sm p-1.5 rounded-full flex mb-3 max-w-xs mx-auto shadow-inner">
        <button
          className={`flex-1 py-1.5 px-4 text-center font-bold rounded-full transition-all duration-200 ${
            mode === "join"
              ? "bg-applegramYellow text-applegramBlue shadow-sm"
              : "bg-transparent text-white"
          }`}
          onClick={() => setMode("join")}
        >
          Join
        </button>
        <button
          className={`flex-1 py-1.5 px-4 text-center font-bold rounded-full transition-all duration-200 ${
            mode === "create"
              ? "bg-applegramYellow text-applegramBlue shadow-sm"
              : "bg-transparent text-white"
          }`}
          onClick={() => setMode("create")}
        >
          Create
        </button>
      </div>

      <div className="overflow-hidden rounded-xl shadow-[2px_2px_0_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)]">
        <div className="bg-applegramYellow py-3 px-4 text-center">
          <h2 className="text-2xl font-bold text-applegramBlue">
            {mode === "join" ? "JOIN A GAME" : "HOST A GAME"}
          </h2>
        </div>

        <div className="bg-[#fff7d6] p-4 flex flex-col gap-4">
          {mode === "join" && (
            <input
              type="text"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value)}
              placeholder="Enter game code"
              className="w-full p-3 text-center text-applegramBlue bg-[#fff7d6] placeholder:text-applegramBlue/70 outline-none border-b border-applegramYellow/30"
            />
          )}

          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter name"
            className="w-full p-3 text-center text-applegramBlue bg-[#fff7d6] placeholder:text-applegramBlue/70 outline-none border-b border-applegramYellow/30"
          />
        </div>

        <button
          disabled={!isFormComplete}
          className={`w-full py-4 text-2xl font-bold 
            ${
              !isFormComplete
                ? "bg-gray-400 text-gray-200"
                : "bg-applegramRed text-white"
            }`}
          onClick={() => {
            if (isFormComplete) {
              if (mode === "join") {
                console.log(
                  "Joining game with code:",
                  gameCode,
                  "and name:",
                  playerName
                )
              } else {
                console.log("Creating new game with host:", playerName)
              }
            }
          }}
        >
          {mode === "join" ? "JOIN GAME" : "CREATE GAME"}
        </button>
      </div>
    </div>
  )
}
