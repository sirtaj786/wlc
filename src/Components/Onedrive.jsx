import React from 'react'
import { useState } from 'react';
import { ReactOneDriveFilePicker } from 'react-onedrive-filepicker';
const Onedrive = () => {
    const [data,setData]=useState({})
    // console.log("data",data)
    if(data.length>0){
       return  <a href={data}>{data}</a>
    }
    

    return (
        <>

            <ReactOneDriveFilePicker
                clientID="9800ef16-9e1e-43b5-ad44-b5ac1ec49ad9"
                action="share"
                multiSelect={true}
                onSuccess={(res) => {
                    console.log("onsucess", res)
                    setData(res.value[0].webUrl)
                }}
                onCancel={(res) => {
                    console.log("coming data", res)
                }}
                onError={(err) => {
                    console.log(err)
                }}
            >
                <button>Open Picker</button>
                {/* {
                    data.length>0&&data.map((el)=>(
                        <p>{el.webUrl}</p>
                    ))
                }
                <p>{data}</p> */}
                
                
               
               


            </ReactOneDriveFilePicker>
           

        </>
    )
}

export default Onedrive