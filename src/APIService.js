import axios from 'axios';
const API_URL = 'http://server.mahatinnovations.com:9091';
export class APIService{
     auth = {
        headers: {Authorization:localStorage.getItem('token')} 
    }
constructor(){
   
}


getloggedinUser () {
    const auth = {
      headers: { Authorization: localStorage.getItem('token') }
    };
    const url = `${API_URL}/User`;
    return axios.get(url, auth).then(response => response.data);
}

getServiceList(){
  const auth={
    headers:{
      Authorization:localStorage.getItem('token')
    }
  }
  const url=`${API_URL}/getServices`;
  return axios.get(url,auth).then(response=> response.data);
}

getDoctorsListDashboard(){
  const auth={
    headers:{
      Authorization:localStorage.getItem('token')
    }
  }
  const url=`${API_URL}/getDoctors`;
  return axios.get(url,auth).then(response=> response.data);
}

getMyAppointments(){
  const auth={
    headers:{
      Authorization:localStorage.getItem('token')
    }
  }
  const url=`${API_URL}/getPatientwiseAppointment`;
  return axios.get(url,auth).then(response=> response.data);
}

getAppointmentDetails(id){
  const auth={
    headers:{
      Authorization:localStorage.getItem('token')
    }
  }
  const url=`${API_URL}/appointments/appointmentDetails/${id}`;
  return axios.get(url,auth).then(response=> response.data);
}

getBranches () {
  const auth = {
      headers: { Authorization: localStorage.getItem('token') }
  };
  const url = `${API_URL}/masters/getBranches`;
  return axios.get(url, auth).then(response => response.data);
}

getAvailableSlotFromBranch(date){
  const auth = {
      headers: { Authorization: localStorage.getItem('token') },
  };
  const url =`${API_URL}/availableSlots/getAllSlots/${date}`;
  
  // console.log(JSON.parse(data));
  
  return axios.get(url, auth).then(response => response.data);
}

getStates(){
  const auth={
  
      headers: {Authorization:localStorage.getItem('token')} 
      }
  const url = `${API_URL}/masters/getstates`;
  
  return axios.get(url,auth).then(response => response.data);
}

getCities(stateid){
  const url = `${API_URL}/states/city/${stateid}`;
 
  return axios.get(url).then(response => response.data);
  
}
getResponsesList(id){
  const auth ={
    headers:{Authorization:localStorage.getItem('token')}
  }
  const url=`${API_URL}/getQueryResponse/`+id;
  return axios.get(url,auth).then(response => response.data).catch(function(response){
    console.log(response);
  });
  
}
getQueriesList(){
  const auth ={
    headers:{Authorization:localStorage.getItem('token')}
  }
  const url=`${API_URL}/getQueries`;
  return axios.get(url,auth).then(response => response.data);
}

getPaymentDetail(payid){
  const auth ={
    headers:{Authorization:localStorage.getItem('token')}
  }
  const url =`${API_URL}/onlineAppointments/getPaymentDetail/${payid}`;
  return axios.get(url,auth).then(response => response.data);
}

}