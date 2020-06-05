import * as S from "./styles";

import React, { useEffect, useState } from "react";

const Outline = ({ milestones, activeComponent, setActiveItem, activeItem }) => {

  const handleClick = (type, id, name) => {
    setActiveItem(`${type}${id}${name}`)
  }

  return (
    <S.Outline>
      <S.Header>
        <S.HeaderText>{activeComponent}</S.HeaderText>
      </S.Header>

      <S.Content>
        {milestones.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).map(milestone => (
          <S.MilestoneContainer>
            <S.Milestone 
              active={activeItem === ('milestone' + milestone.id + milestone.milestone_name)}
              onClick={() => handleClick('milestone', milestone.id, milestone.milestone_name)}
            >
              {`${milestone.milestone_name}${milestone.completed ? ' ✅' : ''}`}
            </S.Milestone>
              {milestone.tasks.map(task => (
                <S.Task
                  active={activeItem === ('task' + task.id + task.task_name)}
                  onClick={() => handleClick('task', task.id, task.task_name)}
                >
                  {`${task.task_name}${task.completed ? ' ✅' : ''}`}
                </S.Task>
              ))}
          </S.MilestoneContainer>
        ))}
      </S.Content>
    </S.Outline>
  );
};

export default Outline;
