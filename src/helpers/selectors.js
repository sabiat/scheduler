export function getAppointmentsForDay(state, day) {
  const dayToFind = state.days.find(item => item.name === day);
  if (dayToFind) {
    const appointments = dayToFind.appointments.map(appointment => state.appointments[appointment]);
    return appointments;
  }
  return [];
}

export function getInterviewersForDay(state, day) {
  const dayToFind = state.days.find(item => item.name === day);
  if (dayToFind) {
    const interviewers = dayToFind.interviewers.map(interviewer=> state.interviewers[interviewer]);
    return interviewers;
  }
  return [];
}


export function getInterview(state, interview) {
  if (interview) {
    const interviewDataObject = {
    }
    const interviewerId = interview.interviewer;
    interviewDataObject['student'] = interview.student;
    interviewDataObject['interviewer'] = state.interviewers[interviewerId];
  
    return interviewDataObject;
  }
  return null;
}

