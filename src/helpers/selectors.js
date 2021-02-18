export function getAppointmentsForDay(state, day) {
  const appointmentsInfoArray = [];
  const dayArray = state.days.filter(item => item.name === day);

  if (dayArray.length > 0) {
    const appointmentsArray = dayArray[0].appointments;
    for (const appointment of appointmentsArray) {
      appointmentsInfoArray.push(state.appointments[appointment]);
    }
  }

  return appointmentsInfoArray;
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

