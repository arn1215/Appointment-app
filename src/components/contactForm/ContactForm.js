import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type='text' 
          name='name' 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required 
          placeholder='Contact Name'  
        />
      </label>

      <label>
        <input 
          type='tel' 
          name='phone' 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" 
          placeholder='Contact Phone (###-###-####)'  
        />
      </label>

      <label>
        <input 
            type='email' 
            name='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Contact Email'  
          />
      </label>
      <input type='submit' value="Add Contact" />
    </form>
  );
};
