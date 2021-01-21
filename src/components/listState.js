import React, {UseContext, UseState} from 'react';
import listContex from './listContext';


export const listContexProvider = () => UseContext(listContex);

export const listState = props => {
    console.log(props.children.props);
    const [list, setList] = UseState([]);

    const addList = itemNew => {
        const l = [...list, itemNew];
        setList(l);
    };
     return (
         <listContex.Provider value={{list, addList}}>
         (props.children)
         </listContex.Provider>
          
         
     );
};

