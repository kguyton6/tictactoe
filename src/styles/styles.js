import styled from 'styled-components';


export const Toggle = styled.figure`
  width: 250px;
  display: flex;
  justify-content: space-evenly;
`;
export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: #A8A8AA;
  border-radius: 100px 90px;
  position: relative;
  transition: background-color 0.2s;
  span {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    padding-top: 9px;
    width: 45px;
    height: 33px;
    border-radius: 50px;
    transition: 0.2s;
    background: #fff;
    font: normal bold 11px/13px Arial;
    box-shadow: 0 0 5px 0 rgba(10, 10, 10, 0.29);
    text-align: center;
  }
  .isDark {
    left: calc(100% - 5px);
    transform: translateX(-100%);
    color: black;
  }
  &:active span {
    width: 45px;
  }
`;

export const Main = styled.main`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content:center;
  padding: 30px;
  .board {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 600px;
    height: 600px;
    position: relative;
  }
  section {
    width: 80%;
    display: flex;
    justify-content: space-around;
  }
  section > span {
    font: normal 28px Arial;
  }
  section > aside {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }
  div[role='alert'] {
    position: absolute;
    top: 25%;
    left: 25%;
    z-index: 1;
  }

`
// $face: #91d4ff;
// $flourish: #fff;
// $shadowdots: #040351;
// $shadow: #4d8bea;
// $shadow2: #cbc7e3;

export const Button = styled.button`
    border: unset;
  &:nth-child(2), &:nth-child(5) {
    border-right: 5px solid #80cee8;
    border-left: 5px solid #80cee8;
  }
  &:nth-child(6), &:nth-child(4) {
    border-top: 5px solid #80cee8;
    border-bottom: 5px solid #80cee8;
  }
  &:nth-child(5){
    border-top: 5px solid #80cee8;
    border-bottom: 5px solid #80cee8;
  }
  &:nth-child(8){
  border-right: 5px solid #80cee8;
    border-left: 5px solid #80cee8;
}
  width: 200px;
  height: 200px;
  color: #a4e7fc;
  background-color: inherit;
    -webkit-text-stroke: 1px #80cee8;
    font: bold 100px Helvetica,Arial,Sans-Serif;
    text-shadow: -2px 0px 0px #75c6e1, -2px 0px 1px #6ba5b7, -6px 0px 1px #5092a7, 0 0px 3px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.03), 0 0px 2px rgba(0,0,0,.02), -8px -1px 18px rgba(0,0,0,.3), 0px 0px 1px rgba(0,0,0,.09), 0px -1px 2px rgba(0,0,0,.05);
  &:focus {
    outline: none;
  }
  &:before {
 		color: #fff;
 		font-family: 'Arial', sans-serif;
	}

	&:after {
 		font-family: 'Arial', sans-serif;
 		color:#040351;
	}
`
