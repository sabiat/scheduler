export function getAppointmentsForDay(state, day) {
  const dayToFind = state.days.find(item => item.name === day);
  if (dayToFind) {
    const appointments = dayToFind.appointments.map(appointment => state.appointments[appointment]);
    return appointments
  }
  return [];
}

export function getInterviewersForDay(state, day) {
  const interviewersInfoArray = [];
  const dayArray = state.days.filter(item => item.name === day);

  if (dayArray.length > 0) {
    const interviewersArray = dayArray[0].interviewers;
    for (const interviewer of interviewersArray) {
      interviewersInfoArray.push(state.interviewers[interviewer]);
    }
  }
    return interviewersInfoArray;
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

