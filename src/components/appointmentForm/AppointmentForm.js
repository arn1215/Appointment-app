import React from "react";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onsubmit={handleSubmit}>
            <label>
        <input 
          type='text' 
          name='title' 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          required 
          placeholder='Appointment Title'  
        />
      </label>

      <label>
        <input 
          type='date' 
          name='date' 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          required 
          placeholder='Appointment Date'  
        />
      </label>

      <label>
        <input 
            type='time' 
            name='time' 
            value={time} 
            onChange={(e) => setTime(e.target.value)}
            required
            placeholder='Appointment Time'  
          />
      </label>
      <input type='submit' value='Add Appointment'/>

    </form>
  );
};
