import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hello from './components/Hello';
import Name from './components/Name';
import ContainerSample from './components/ContainerSample';
import ContextSample from './components/ContextSample';
import Counter from './Counter';
import Counter2 from './Counter2';
import { Parent } from './Parent';
import { Parent2 } from './Parent2';
import { UseMemoSample } from './UseMemoSample';
import { Clock } from './Clock';
import Parent3 from './Parent3';
import ImageUploader from './ImageUploader';
import UseImperativeParent from './UseImperativeParent';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextSample />
    <Hello />
    <Name />
    <ContainerSample />
    <Counter initialValue={0}/>
    <Counter2 initialValue={0}/>
    <h3>メモ化コンポーネント</h3>
    <Parent />
    <h3>useCallback</h3>
    <Parent2 />
    <UseMemoSample />
    <Clock />
    <Parent3 />
    <ImageUploader />
    <UseImperativeParent />
  </React.StrictMode>
);


