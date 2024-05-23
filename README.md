<!--
 * @Author: yeyu98
 * @Date: 2024-05-23 20:30:40
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-05-23 22:08:53
 * @Description: 
-->
### react-router-v6-debug
react-router-debug 是一个用于react-router-v6源码本地调试学习使用的项目，项目使用的是vite + react + ts;

### 项目说明
- 源码使用的react-router-v6的版本是v6.23.1；
- 只引入了 react-router react-router-dom router三个package的源码；

### 注意！！
- 使用vite本项目启动调试源码的时候需要留意vscode launch启动的 chrome 版本必须大于 87 否则会出现语法的错误，比如我就碰到了vscode launch启动的chrome 版本是78无法识别可选链
- 此时可以在launch.json文件中配置 runtimeExecutable指定你所使用的chrome的路径以更新的chrome启动launch调试（win环境）；
- 具体配置可参考本项目.vscode > launch.json中的local chrome configuration 配置；
