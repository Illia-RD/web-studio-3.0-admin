import React, { useEffect, useState } from 'react';

import { getDocs, collection } from 'firebase/firestore';
import { firestore } from 'components/firebase';

const FeedbackTable = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'feedback'));
        const feedbackData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedback(feedbackData);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchData();
  }, []);

  // Функція, яка генерує стовбці таблиці
  const renderTableHeader = () => {
    if (feedback.length === 0) {
      return null;
    }

    const headers = Object.keys(feedback[0]); // Отримати ключі першого об'єкта (першого feedback)

    // Вибрати тільки певні поля для виведення в таблиці
    const selectedHeaders = ['name', 'email', 'phone', 'coment', 'sendDate'];

    return selectedHeaders.map(header => (
      <th key={header}>{header.toUpperCase()}</th>
    ));
  };

  // Функція, яка генерує рядки таблиці
  const renderTableRows = () => {
    return feedback.map(entry => (
      <tr key={entry.id}>
        <td>{entry.name}</td>
        <td>{entry.email}</td>
        <td>{entry.phone}</td>
        <td>{entry.coment}</td>
        <td>{entry.sendDate.toDate().toLocaleString()}</td>
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>{renderTableHeader()}</tr>
      </thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default FeedbackTable;
