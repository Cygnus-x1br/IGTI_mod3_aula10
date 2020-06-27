import React from 'react';
import CountUp from 'react-countup';

export default function Votes({ value }) {
  return (
    <div>
      <CountUp
        start={value - 1000}
        end={value}
        duration={0.6}
        separator="."
        //decimals={4}
        //decimal=","
        //prefix="EUR "
        //suffix=" left"
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
