import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface AbilityComponentProps {
  hp: number
  attack: number
  specialAttack: number
  defense: number
  specialDefense: number
  speed: number
  total: number
}

const Ability = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .ability {
    width: 100%;
    height: 100%;
    text-align: center;
    border-right: 1px solid #333333;

    .ability_name {
      height: 1.5rem;
      line-height: 1.5rem;
      border-bottom: 1px solid #dddddd;
    }

    .ability_point {
      height: calc(100% - 1.5rem);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:last-child {
      border: 0;
    }
  }
  @media screen and (max-width: 475px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .ability {
      border-bottom: 1px solid #333333;

      &:nth-child(4) {
        border-right: 0;
      }

      &:nth-child(5),
      &:nth-child(6) {
        border-bottom: 0;
      }

      &:last-child {
        grid-column: 3 / 5;
      }
    }
  }
`

const AbilityComponent: React.FC<AbilityComponentProps> = (props) => {
  const { attack, defense, hp, specialAttack, speed, specialDefense, total } =
    props

  return (
    <Ability>
      <div className="ability">
        <p className="ability_name">체력</p>
        <p className="ability_point">{hp}</p>
      </div>
      <div className="ability">
        <p className="ability_name">공격</p>
        <p className="ability_point">{attack}</p>
      </div>
      <div className="ability">
        <p className="ability_name">특수공격</p>
        <p className="ability_point">{specialAttack}</p>
      </div>
      <div className="ability">
        <p className="ability_name">방어</p>
        <p className="ability_point">{defense}</p>
      </div>
      <div className="ability">
        <p className="ability_name">특수방어</p>
        <p className="ability_point">{specialDefense}</p>
      </div>
      <div className="ability">
        <p className="ability_name">스피드</p>
        <p className="ability_point">{speed}</p>
      </div>
      <div className="ability total">
        <p className="ability_name">총합</p>
        <p className="ability_point">{total}</p>
      </div>
    </Ability>
  )
}

export default React.memo(AbilityComponent, isEqual)
