import React, { useState, useEffect, useRef } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { toast } from "react-toastify";

// import { scheduleData } from '../data/dummy';
import { Header } from '../components';
import axios from 'axios';
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');
// import { BsNutFill } from 'react-icons/bs';


const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const toastifyTiming ={
    autoClose: 1000
  }
  
  const [scheduleData, setScheduleData] = useState([{}]);
  const [shouldFetchData, setShouldFetchData] = useState(false);

  const [scheduleObj, setScheduleObj] = useState();
  const titleInputRef = useRef();
 
  const handleDelete = (args) => {
    if (args.type === 'DeleteAlert') {
      // Check if the event property is present and it's a delete or cancel button click
      if (args.event && args.event.target) {
        const buttonText = args.event.target.textContent.trim().toLowerCase();

        if (buttonText === 'delete') {
          console.log('Delete button clicked');

          const data = args.data;
          // console.log(data)
            axios.delete(`https://eshiksh-mitra-project.vercel.app/api/v1/events/deleteEvent/${data._id}`, 
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${authToken}`,
            }
          }
          )
            .then((response) => {
              
              console.log("Fees deleted successfully");
              const updatedData = scheduleData.filter(item => item._id !== data._id);
              setScheduleData(updatedData);
              setShouldFetchData(!shouldFetchData)
        
              // const updatedData = submittedData.filter((item) => item._id !== itemId);
              // setSubmittedData(updatedData);
              toast.success("Event deleted successfully",toastifyTiming);
            })
            .catch((error) => {
              setScheduleData(scheduleData);
              console.error("Error deleting Fees:", error);
              toast.error("An error occurred while deleting the Fees.",toastifyTiming);
            });
        } else if (buttonText === 'cancel') {
          console.log('Cancel button clicked');
          return
        }
      }
    }
  };

  useEffect(async () => {
    try {
      const response = await axios.get('https://eshiksh-mitra-project.vercel.app/api/v1/events/getAllEvents', {
        withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
      });
      
      console.log("P2", response.data.data)

      if (Array.isArray(response.data.data)) {
        setScheduleData(response.data.data);

        // console.log("yyyyyyyyyyyyP2", scheduleData)
      } else {
        console.error("API response is not an array:", response.data);
      }
    } catch (error) {
      console.log("Error message", error.message);
    }
  }, [shouldFetchData]);


  useEffect(() => {
    if (scheduleObj && Array.isArray(scheduleData)) {
      const currentDate = scheduleObj.selectedDate;
      const startOfWeek = new Date(currentDate);
      startOfWeek.setHours(0, 0, 0, 0);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

      const endOfWeek = new Date(currentDate);
      endOfWeek.setHours(23, 59, 59, 999);
      endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

      const filteredData = scheduleData.filter(event => {
        const startDate = new Date(event.StartTime);
        return startDate >= startOfWeek && startDate <= endOfWeek;
      });

      scheduleObj.eventSettings.dataSource = filteredData;
    }
  }, [scheduleObj, scheduleData]);
  

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  const handleSave = () => {
    const title = titleInputRef.current.value;
    console.log('Data saved:', title);
    console.log('Yes, done this');
  };

  const onPopupOpen = (args) => {
    if (args.type !== 'Editor') {
      console.log("hereIAM")
     
      // const deleteButton = args.element.querySelector('.delete-button-class');
      // if (deleteButton) {
      //   console.log("kyahuare")
      //   deleteButton.addEventListener('click', () => handleDelete(args));
      // }

      if(args.data.Subject == undefined){
        args.cancel = true; // Cancel the default action
      }
      // Additional logic if needed
    }
    else if(args.type === 'Editor') {
      titleInputRef.current = args.element.querySelector('.e-subject');
      const saveButton = args.element.querySelector('.save-button-class');
      if (saveButton) {
        saveButton.addEventListener('click', handleSave);
      }
    }
   
  };

  const onPopupClose = (args) => {

    console.log("args",args)
    if(!args.data){
     return
    }
    if (args.type === 'Editor') {
      const data = args.data;

      console.log("data",data)

      // Convert the selected date and time to the desired time zone

      // Update the data with the converted times
     
        const startTime = new Date(data.StartTime)
        // .toLocaleString('en-US', {
        //   timeZone: 'Asia/Kolkata', // Use the desired time zone
        // });

        const endTime = new Date(data.EndTime)
        // .toLocaleString('en-US', {
        //   timeZone: 'Asia/Kolkata', // Use the desired time zone
        // });

        const updatedData = {
          ...data,
          StartTime: startTime,
          EndTime: endTime,
        };
     
      axios.post('https://eshiksh-mitra-project.vercel.app/api/v1/events/createEvent', {
        updatedData
      }, {
        withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      })
        .then(response => {
          console.log('API Response:', response.data);
          toast.success("EventF Created successfully!");
          setShouldFetchData(!shouldFetchData)
        })
        .catch(error => {
          console.error('API Error:', error);
        });
    }
    else if(args.type == 'DeleteAlert'){
      console.log("kyahuare")
      // deleteButton.addEventListener('click', () => handleDelete(args));
      handleDelete(args)
    }
  };

  const handleNavigating = (args) => {
    if (args.action === 'date') {
      // Filter events for the new selected date
      const startOfWeek = new Date(args.currentDate);
      startOfWeek.setHours(0, 0, 0, 0);
      startOfWeek.setDate(args.currentDate.getDate() - args.currentDate.getDay());
  
      const endOfWeek = new Date(args.currentDate);
      endOfWeek.setHours(23, 59, 59, 999);
      endOfWeek.setDate(args.currentDate.getDate() + (6 - args.currentDate.getDay()));
  
      const filteredData = scheduleData.filter(event => {
        const startDate = new Date(event.StartTime);
        return startDate >= startOfWeek && startDate <= endOfWeek;
      });
  
      // Update the event dataSource
      scheduleObj.eventSettings.dataSource = filteredData;
    }
  };

return (
<div className="bg-white  dark:text-white dark:bg-secondary-dark-bg   rounded-2xl p-3">
          <h1 className="text-xl text-center font-semibold text-cyan-700 mb-4">Calendar</h1>
    <ScheduleComponent
      height="350px"
      navigating={handleNavigating}
      ref={(schedule) => setScheduleObj(schedule)}
      selectedDate={new Date()} // Initial date set to the current date
      eventSettings={{ dataSource: [] }}
      dragStart={onDragStart}
      popupOpen={onPopupOpen}
      popupClose={onPopupClose}
      startHour="07:00" // Set the starting hour to 7:00 AM
      // className='dark:text-white dark:bg-secondary-dark-bg'
    >
      <ViewsDirective>
        {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
    </ScheduleComponent>

    <PropertyPane>
      <table 
      // style={{ width: '100%', background: 'white' }}
      className='dark:text-white dark:bg-secondary-dark-bg w-full'
      >
        <tbody>
          <tr style={{ height: '50px' }}>
            <td style={{ width: '100%' }}>
              <DatePickerComponent
                value={new Date()}
                showClearButton={false}
                placeholder="Current Date"
                floatLabelType="Always"
                change={change}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </PropertyPane>
  </div>
);
};

export default Scheduler;

