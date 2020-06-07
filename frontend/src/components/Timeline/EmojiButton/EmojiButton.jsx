import * as S from "./styles"

import Reward from 'react-rewards'

import React, { useRef, useState, useEffect } from "react"

const EmojiButton = ({ emoji, reactions, onClickFunction, count, complete }) => {

  const ref = useRef()

  useEffect(() => {
    if (complete && count !== 0) {
      if (ref.current) { ref.current.rewardMe() }
    }
  }, [complete])

  return (
    <S.EmojiButton>
      <Reward
        ref={ref}
        type='emoji'
        config={{
          type: "emoji",
          fakingRequest: false,
          angle: 90,
          decay: 0.91,
          spread: 100,
          startVelocity: count > 25 ? 75 : 10 + count * 3,
          elementCount: count,
          elementSize: 20,
          lifetime: 200,
          zIndex: 10,
          springAnimation: true,
          emoji: [emoji]
        }}
      >
        <S.Emoji onClick={(e) => { 
          onClickFunction()
          e.stopPropagation()
          if (ref.current) { setTimeout(() => ref.current.rewardMe(), 1) }
          
          
        }}>{emoji + reactions}</S.Emoji>
      </Reward>

    </S.EmojiButton>
  )
}

export default EmojiButton
