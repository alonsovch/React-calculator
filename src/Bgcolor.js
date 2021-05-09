import React, { useState } from 'react';
import Select from 'react-select';


function Bgcolor(){

    var colors = [
    {
        value:1,
        label:'Blanchedalmond'
    },
    {
        value:2,
        label:'Blueviolet'
    },
    {
        value:3,
        label:'Cadetblue'
    },
    {
        value:4,
        label:'Lightslategray'
    },
    {
        value:5,
        label:'White'
    }
    ];

    var [setbgcolor,ddlvalue] = useState(colors.label);
    var ddlhandle = e =>{
        ddlvalue(e.label);
    }

    return(
        <div>
            <style>{'body {background-color:'+setbgcolor+';}'} </style>
            <Select options ={colors} onChange={ddlhandle}> </Select>
                 
        </div>

    )

}
export default Bgcolor;