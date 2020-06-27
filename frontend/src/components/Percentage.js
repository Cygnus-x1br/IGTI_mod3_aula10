import React from 'react';
import CountUp from 'react-countup';

export default function Percentage({ value }) {
  return (
    <div>
      <CountUp
        start={value - 0.01}
        end={value}
        duration={0.6}
        separator="."
        decimals={2}
        decimal=","
        //prefix="EUR "
        suffix=" %"
        //onEnd={() => console.log('Ended! 👏')}
        //onStart={() => console.log('Started! 💨')}
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
}
