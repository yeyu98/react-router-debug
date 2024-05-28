/*
 * @Author: yeyu98
 * @Date: 2024-05-23 20:31:38
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-05-28 11:06:34
 * @Description: 
 */
import { BrowserRouter } from 'react-router-dom';
import Demo1 from "./components/Demo1";
import Demo2 from "./components/Demo2";
import Demo3 from "./components/Demo3";


export default function App() {
  return <BrowserRouter >
    <Demo3 />
  </BrowserRouter>;
}

