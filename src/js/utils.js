import React from 'react';
import ReactDOM from 'react-dom';

export function findDOMNode(component){
    return ReactDOM.findDOMNode(component);
}

export function positiveOrZero(number){
    return number < 0 ? 0 : number;
}

export function modifyObjValues (obj, modifier = x => x){
    let modifiedObj = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)) modifiedObj[key] = modifier(obj[key]);
    }
    
    return modifiedObj;
}