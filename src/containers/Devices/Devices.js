import React, {useEffect, useRef, useState} from "react";
import {API, Auth} from 'aws-amplify';
import Device from "./Device/Device";
import EditDevice from "./Device/EditDevice/EditDdevice";
import Modal from "../../components/UI/Modal/Modal";

const Devices = (props) => {
    const [devices, setDevices] = useState([]);
    const firstUpdate = useRef(true);    
    const [editing, setEditing] = useState(false);
    

    const editDeviceHandler = () => {
      setEditing(true);
    };

    const submitDeviceHandler = () => {
      setEditing(false);
    };

    const getData = async () => { 
      if (firstUpdate.current) {
        firstUpdate.current = false;

        const apiName = 'GEApiGateway';
        const path = '/Prod/devices';
        const myInit = { 
          headers: { 
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
          },
          queryStringParameters: {  
            name: '',
          },
        };
        return await API.get(apiName, path, myInit)
        .then(response => {
            console.log(response);
            let dev = [];
            for (let i = 0; i < response.length; i++) {
              dev.push(JSON.parse(response[i]));
            }
            setDevices(dev);
        })
        .catch(error => {
            console.log(error);
        });
      } else {
        console.log("componentDidUpdateFunction");
      }
    } 

    useEffect(() => getData);

    if (firstUpdate.current) {
      getData()
      return <div>Loading...</div>
    }
    else {   
      return (
          <div>
            <Modal show={editing}>
              <EditDevice 
                device={devices[0]} 
                onSubmit={submitDeviceHandler}
              />      
            </Modal>

            {devices.map(device => {
              return <Device 
                key={device.name}
                name={device.name}
                status={device.status}
                recommendation={device.recommendation}
                temperature={device.temperature}
                humidity={device.humidity} 
                onEdit={editDeviceHandler}
                />
            })}
          </div>
      );
    }
}

export default Devices; 