/** @format */
import styled from 'styled-components';
import React from "react";
import { NavBar } from "../Compnonte/SideBar";

export const HomePage = () => {
  return (
    <Div id='home'>
      
      <div className='homeBox' >
      <div>
      <h1>Hello, my name is</h1>
      <h1 id="user-detail-name" style={{ fontFamily: "cursive", color: "red" }}>Ranjan Yadav</h1>
      <h1>I'm a full stack web developer</h1>
      <p id="user-detail-intro">
        Passionate Full Stack Web Developer with a specialization in MERN stack.
        Skilled, collaborative and attentive developer with a drive to develop
        the most relevant products. Always looking forward to learning something
        new to strengthen skills learned.
      </p>
      <a href="https://github.com/Ranjan095" target='_blank'><img width='40px' src='data:image/png;base64,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'/></a>
      <a href="https://www.linkedin.com/in/ranjan-yadav-65800122b/" target={'_blank'}><img width='32px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAaVBMVEUBAQH///8AAADy8vI/Pz/m5ua8vLzp6enV1dVKSkpQUFD29vbBwcE2Njbi4uJDQ0N9fX0iIiJWVlYwMDC1tbVycnKYmJiSkpIqKiqgoKAWFhaMjIyrq6uEhIReXl7b29vMzMxpaWkNDQ1iDUDaAAAE40lEQVR4nO2c6ZKqMBCFSQBBQJZRFHFB5/0f8hIEWdLNonTgVk2Xf2ai8atzTNLZ0JgUmXd+BhHXZg+uRdv4vPHlr2RM6/xtHoOUi8g/NfurqJhH26M1wOGHLwbSEN8QdkVpclhPcoYa5WZhHJuIE3iBerT3YI5YkRa1JmeAw3UUYwiSu9vlcO8kDWSo+ThdDke5GIUgPG5zxItgCJJLk2PDVbaUtjVezWFRdOJjBeE1x3M5jBwkrDj8pUwpXpz7JUe4pBw5SfziMNV3YG2OyC84jgv0YO0mcy04gmXlyFF2giNLl+bQeD7MaB5N6jWpyeR9mXbukYM+N3t9zSnnwDqxVy6ZKsgTi65MC7DuxQgfppWHF++JOzqRh2jw2JJ7Vuco+pFWEu7kHDBG2EpimbmnBOGBzmChbqwTbkrpiyE4AL59F4Mxm9AahINzW+ZgN2oOSSj+A2CI7ECxL8W4I8edTBCYg3MT5DgRc0gqafJsXMRVsS88gjk2yn2BOQ6qfeHggk3++1DdXg4gB92cD+PYQhiE6TTWj/EHwHGjS9vQ8WUnY2Tqx5e84NnFsCgzEMQX0WRit4VhJ5QpGapHXrRrrqLdiPMxlEOQaEcvM03/cSBfzUR9qdxJkySiWlse5UuliZoJzBCHqhjwRdlrXXpQVNyI0RwEOvMkcEQEu3RMdo2OL3D0F9eF2+ujynB12wuHRUHnL9B4y3ZlbfwOldr89dHo4kpF8QAJOu57wBfpu0phkONRlPIQzCn9uNcdVA+EY0gPjmRyrFg5/8CXDzgyscMEJ9hFuHecZE5f8jwp1XEMJuaD2Dj1oR7g9Dfjv1kvBmM/mCDzckAfaoeBgHzoC8hhh9B/24FtKMyphyl1G0AgU3WUYzOdY1S4sDOoLwhHny/j4gAON8r1YDq47oiOc2QcDFxFR8d9Ml9e87HR4/43evjewYMXLoqAlq8/5HCA0jKyuMxG4HGXwcZ86AvOcfyt3sNTpHuFtnvm1qN5cgNeDM77u0QWZGaOS2tkrzaqu7HFOObyxe70Uchy8A+1L92jG81TJo0Adq1n5fC6+RayLg00mFl9ecrjFNhkNt/6YvTrIaefYhtSjse3vrw5wGVNBlSPTDC+9MWofAE5gIEDFs6ezReEQ64G46D0BeIA34hy0PmCcaj2ZZoea+H48+UzX4KV+BKsxBdqPdbCMdkXsLtewJeARo/JHAYNx2RfEA5FvrhbYj3WwjHSl5xjHb5U8xNol1mlL9QcY31xKuURjj9f5uWY7Atw2m4RXxAO5b4Qcfz58t/4Am33Ufsi46EcZWlCpscaOKLJviAcX/gizmtD66qq9RDn14Fjg8o5wvJ+Q/d1tUwpstoXXS61bMgXoBrLA3wR9xuA463IuQveXzy1msYbxX0PH9iZGfj8uNoHq6nfx8R9oO3i918MVt6PWjbK+1GkRynHYCQWK+/PLerL625JcZ9wUTne9wkpr1CM4DiyisPaL9hkGvdNmbeYIK37t2KzaiGS0pX3/Wz8EBGtKe9TNNV9dfQQEaka9Y7V+zkCqh8j0FKj+TyDi2pr3r+NNofYgVUnCe+chmo9d2PEGc3ZKJpidDmYH0cq3OFJ7/M/CpLrDsujZgvjOvQ8lCJc7xTencAgCOcenuADKgBHweLqFOGip+4QDuXxD9hUTfYph4/AAAAAAElFTkSuQmCC'/></a>
      <br /><br />
      <button className='rbutton'>Resume </button>
      </div>
      <div style={{width:'800px'}}>
        <img style={{width:'100%',marginTop:'100px',borderRadius:'200px'}} src='https://avatars.githubusercontent.com/u/113471389?v=4' alt="" />
        
      </div>
     
    </div>
    
    </Div>
  );
};
const Div=styled.div`
  .homeBox{
    margin: 20px;
    display: flex;
    height: 650px;
  }
  .rbutton{
padding: 10px;
width: 100px;
color: white;
background-color: green;
border-radius: 20px;
border: none;
  }
  .rbutton:hover{
    background-color: red;
    font-size: 20px;
  }
`
