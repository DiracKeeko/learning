import React from 'react';
import { Button } from 'antd';

interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}

/* 
interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string;
}
*/

// const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>

// React.FC 是React定义的函数组件的类型
const Hello: React.FC<Greeting> = (props) => <Button>Hello {props.name}</Button>

// const Hello: React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName,
//     children
// }) => <Button>Hello {name}</Button>

// 使用React.FC + 默认属性defaultProps 
// 默认属性必须是可选属性 ?:
// 建议使用常规定义方式,不使用React.FC
Hello.defaultProps = {
    firstName: '',
    lastName: ''
}

export default Hello;
