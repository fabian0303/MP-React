import React from 'react';
import { useFormatMessage } from 'hooks';
import GridLayout from 'react-grid-layout';
import { toastr } from 'react-redux-toastr';
import ReactSpeedometer from "react-d3-speedometer";

// import Chart from "react-google-charts";

import {
  fetchCollection,
} from '../../state/api';


require('../../../node_modules/react-grid-layout/css/styles.css');
require('../../../node_modules/react-resizable/css/styles.css');

let valor;
let nave;

async function fetchNave(numeroNave) {

  try {
    nave = await fetchCollection(numeroNave);
    valor = nave[0].peso_promedio;
    return Promise.resolve(valor);
  } catch (error) {
    toastr.error('', error);
  }

}


valor = fetchNave("nave1");


valor.then(function(message) {
  console.log(message) ;
})

console.log(valor);



const layout = [
  { i: 'nave1', x: 0, y: 0, w: 8, h: 6, },
  { i: 'nave2', x: 8, y: 0, w: 8, h: 6 },
  { i: 'nave3', x: 16, y: 0, w: 8, h: 6 },
  { i: 'nave4', x: 24, y: 0, w: 8, h: 6 },
  { i: 'nave5', x: 32, y: 0, w: 8, h: 6 },
  { i: 'nave6', x: 0, y: 16, w: 8, h: 6, },
  { i: 'nave7', x: 8, y: 16, w: 8, h: 6, },
  { i: 'nave8', x: 16, y: 16, w: 8, h: 6, },
  { i: 'nave9', x: 24, y: 16, w: 8, h: 6, },
  { i: 'nave10', x: 32, y: 16, w: 8, h: 6, },
];



const Home = () => (

  
  <>
  

    <section className="hero is-hero-bar">
      <div className="hero-body">
        <h1 className="title">{useFormatMessage('Home.home')}</h1>
      </div>
    </section>


    <GridLayout
      className="layout"
      layout={layout}
      cols={40}
      rowHeight={25}
      width={1500}>

        

      <div key="nave1">
        <ReactSpeedometer
          value={325}
          currentValueText="Nave 1"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />

      </div>
      <div key="nave2">
        <ReactSpeedometer
          value={window.$valorn2}
          currentValueText="Nave 2"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />


      </div>
      <div key="nave3">
        <ReactSpeedometer
          value={window.$valorn3}
          currentValueText="Nave 3"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />

      </div>


      <div key="nave4">
        <ReactSpeedometer
          value={333}
          currentValueText="Nave 4"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />
      </div>

      <div key="nave5">
        <ReactSpeedometer
          value={333}
          currentValueText="Nave 5"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />

      </div>

      <div key="nave6">


        <ReactSpeedometer
          value={333}
          currentValueText="Nave 6"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />

      </div>


      <div key="nave7">
        <ReactSpeedometer
          value={333}
          currentValueText="Nave 7"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />

      </div>

      <div key="nave8">

        <ReactSpeedometer
          value={333}
          currentValueText="Nave 8"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />


      </div>

      <div key="nave9">

        <ReactSpeedometer
          value={333}
          currentValueText="Nave 9"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />


      </div>

      <div key="nave10">

        <ReactSpeedometer
          value={333}
          currentValueText="Nave 10"
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />


      </div>


      {/* 
    
    
   
   
    
    <div key="nave9">Nave 9</div>
    <div key="nave10">Nave 10</div>
    <div key="nave11">Nave 11</div>
    <div key="nave12">Nave 12</div>
    <div key="nave13">Nave 13</div>
    <div key="nave14">Nave 14</div>
    <div key="nave15">Nave 15</div>
    <div key="nave16">Nave 16</div>
    <div key="nave17">Nave 17</div>
    <div key="nave18">Nave 18</div>
    <div key="nave19">Nave 19</div>
    <div key="nave20">Nave 20</div>
    <div key="nave21">Nave 21</div>
    <div key="nave22">Nave 22</div>
    <div key="nave23">Nave 23</div>
    <div key="nave24">Nave 24</div>
    <div key="nave25">Nave 25</div>
    <div key="nave26">Nave 26</div>
    <div key="nave27">Nave 27</div>
    <div key="nave28">Nave 28</div>
    <div key="nave29">Nave 29</div>
    <div key="nave30">Nave 30</div>
    <div key="nave31">Nave 31</div>
    <div key="nave32">Nave 32</div>
    <div key="nave33">Nave 33</div>
    <div key="nave34">Nave 34</div>
    <div key="nave35">Nave 35</div>
    <div key="nave36">Nave 36</div>
    <div key="nave37">Nave 37</div>
    <div key="nave38">Nave 38</div>
    <div key="nave39">Nave 39</div>
    <div key="nave40">Nave 40</div>

    */ }

    </GridLayout>

  </>
);





export default Home;
