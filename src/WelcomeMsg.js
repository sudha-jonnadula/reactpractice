import React, { useEffect } from 'react';
function WelcomeGreetings({ name }) {
  useEffect(() => {
    document.title = `Welcome the number you have entered is ${name}`;
  }, [name]);

  return <div>Hi the number you have entered is {name}</div>;
}
export default WelcomeGreetings;
