import { useState, useEffect } from 'react';
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"), 
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
        setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
      });
  },[])

  const setDay = day => setState({ ...state, day });

  function updateSpotsRemaining(cancel = false, add = false) {
    const index = state.days.findIndex(item => item.name === day);
    let spots = 0;
    if (add) {
      spots = state.days[index].spots - 1
    } else if (cancel) {
      spots = state.days[index].spots + 1
    }
    const day = {
      ...state.days[index],
      spots
    }
    const days = Object.values({...state.days, [index]: day})

    return days;
  }

  function bookInterview(id, interview, mode) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview}
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpotsRemaining(false, true);
    return axios.put(`/api/appointments/${id}`, {interview})
      .then(() => {
        if (mode === "EDIT") {
          setState(prev => ({...prev, appointments}))
        } else {
          setState(prev => ({...prev, appointments, days}))
        }
      });
    
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpotsRemaining(true, false);
    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState({...state, appointments, days}))
  }
  
  return { state, setDay, bookInterview, cancelInterview }
}