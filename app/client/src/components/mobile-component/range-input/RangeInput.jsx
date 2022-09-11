//in this component we create a range input and save the value
import React, { useState } from "react";
//style
import './rangeInput.css';
//icon
import more from '../../../assets/icon/more.svg';
import checkmark from '../../../assets/icon/checkmark.svg';
import star from '../../../assets/icon/light-star.svg';
import info from '../../../assets/icon/info.svg';
import { MoreInfo } from "../more-info/MoreInfo";

export function RangeInput({ label, name, max }) {
  const [data, setData] = useState({
    1: 5,
    2: 5,
    3: 5,
    4: 5,
    5: 5,
  }

  );
  const [components, setComponents] = useState(['']);
  //this hook is for whether checkbox is activated or not
  //const [isChecked, setIsChecked] = useState(false);
  //this hook is for whether more icon is activated or not
  const [morePressed, setMorePressed] = useState(false);
  //calculate the filled area
  const getBackgroundSize = (i) => {
    return { backgroundSize: `${(data * 100) / max}% 100%` };

  };
  const handleChange = (e, i) => {

    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

  }
  const handleClick = (e) => {
    e.preventDefault();
    setMorePressed(!morePressed);
  }
  function addComponent() {
    console.log("zero")
    setComponents([...components, "Sample Component"])
  }
  return (
    <div>
      {components.map((item, i) => (<div key={i} className="mb-analyzePge-row">

        <p onClick={() => {
          //console.log(data)
        }}>{i}</p>
        <div className="mb-analyzePge-box-row">
          <img className='mb-info-icon-analyzePge'
            aria-label="info"
            src={info} />
          <label htmlFor={name}>{label}{i + 1}</label>
          <div className="mb-analyzePge-box-with-more">
            <div className="mb-analyzePge-boxRange">
              <input className="mb-analyzePge-rangeinput"
                type='range'
                min="0"
                max={max}
                onChange={handleChange}
                name={i}
                style={getBackgroundSize(i)}
                value={data.i}
              />
              <div className='wrapper'>
                <input type={'checkbox'} className="mb-autoPage-checkbox"
                />

              </div>
              <img className='mb-more-icon-analyzePge'
                aria-label="more"
                onClick={handleClick}
                src={more} />
              <img className='mb-star-icon-analyzePge'
                aria-label="star"
                src={star} />
            </div>
            {morePressed && <MoreInfo addComponent={addComponent} />}
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}