import React, {UseContext, useState} from 'react';
import ListContex from './ListContext';


export const listContexProvider = () => UseContext(ListContex);

export const ListState = props => {
    console.log(props.children.props);
    const [list, setList] = useState([]);

    const addList = itemNew => {
        const l = [...list, itemNew];
        setList(l);
    };
     return (
         <listContexProvider value={{list, addList}}>
         (props.children)
         </listContexProvider>
          
         
     );
};

