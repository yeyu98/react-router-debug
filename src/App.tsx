/*
 * @Author: yeyu98
 * @Date: 2024-05-23 20:31:38
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-05-27 17:42:34
 * @Description: 
 */
import { BrowserRouter } from 'react-router-dom';
import Demo1 from "./components/Demo1";
import Demo2 from "./components/Demo2";


export default function App() {
  return <BrowserRouter >
    <Demo2 />
  </BrowserRouter>;
}

