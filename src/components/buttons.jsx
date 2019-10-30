import React from 'react';
import OrangeComponent from './orange';
import PineappleComponent from './pineapple';
import StrawberryComponent from './strawberry';

function Buttons(props) {
  const configList = [
    {
      name: 'orangeComponent',
      tag: <OrangeComponent />,
      props:[
        {name: 'firstDataIn', dataKey: 'count'},
        {name: 'secondDataIn', dataKey: 'msg'}
      ],
      dataFn: fetchOrangeData
    },
    {
      name: 'pineappleComponent',
      tag: <PineappleComponent />,
      props:[
        {name: 'iNeedThis', dataKey: 'name'},
        {name: 'alsoThis', dataKey: 'surname'}
      ],
      dataFn: fetchPineappleData
    },
    {
      name: 'strawberryComponent',
      tag: <StrawberryComponent />,
      props:[],
      dataFn: fetchStrawberryData
    }
  ];
  
  return <>
    <span>
      <button onClick={() => props.onSelect(configList[0])}>orange</button>
    </span>
    <span>
      <button onClick={() => props.onSelect(configList[1])}>pineapple</button>
    </span>
    <span>
      <button onClick={() => props.onSelect(configList[2])}>strawberry</button>
    </span>
  </>;
}

function fetchOrangeData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      count: 10,
      msg: 'ten'
    }), 1000);
  });

  return promise;
}

function fetchPineappleData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      name: 'my-name',
      surname: 'my-surname'
    }), 1000);
  });

  return promise;
}

function fetchStrawberryData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject({reason: 'failed'}), 1000);
  });

  return promise;
}

export default Buttons;
