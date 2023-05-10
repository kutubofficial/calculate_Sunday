import React, { useState } from "react";
import { DatePicker, Modal } from "antd";

const DateComponent = ({ user }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numSundays, setNumSundays] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const days = Math.round((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const numSundays = [...Array(days)].reduce((acc, _, i) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      if (date.getDay() === 0) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setNumSundays(numSundays);
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Let's Check...</h2>
        <label>
          Start Date:
          <DatePicker onChange={(date, dateString) => setStartDate(dateString)} />
        </label>
        <label>
          End Date:
          <DatePicker onChange={(date, dateString) => setEndDate(dateString)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {visible && (
        <Modal visible={visible} onOk={handleOk} onCancel={handleCancel}>
          <p>User Details: {JSON.stringify(user)}</p>
          <p>Number of Sundays: {numSundays}</p>
        </Modal>
      )}
    </>
  );
};

export default DateComponent;
