import React, { useState, useEffect } from "react";


const Accordian = ({ AccordianField }) => {

  const [isOpen, setOpen] = useState([]);

  useEffect(() => {
    if (AccordianField) {
      let arr = [];
      AccordianField.map(() => {
          arr.push(false);
        });
      setOpen(arr)
    }
  }, [AccordianField]);

  console.log(isOpen, 'isOPne')

  const trueIsOpen = (i) => {
    let changeOpen = [...isOpen];
    let tmp = changeOpen.findIndex(v => v === true);
    if (tmp !== i) {
      changeOpen[tmp] = false;
    }
    if (changeOpen[i] === false) {
      changeOpen[i] = true;
    } else {
      changeOpen[i] = false;
    }
    setOpen([...changeOpen]);
  }

  let AccordianBox =
    AccordianField.map((item, i) => (
      <li>
        <div className="Accordian-box">
          <h5 className={`accordion-title ${isOpen[i] ? "open" : ""}`}
            onClick={() => trueIsOpen(i)}
          >
            {item.title}
            <i class="fas fa-caret-down"></i>
          </h5>
          <div className={`accordian-hide ${!isOpen[i] ? " " : "collapsed"}`}>
            <div className="subc-cat custom-filter">
              <ul className="subc-cat">
                {
                  item.options.map((suboptions) =>
                    <li>
                      <input type="checkbox" value={suboptions.subtitle} id={suboptions.subtitle} />
                      <label for={suboptions.subtitle}>
                        {suboptions.subtitle}
                        <span>{suboptions.number}</span>
                      </label>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </li>
    ));

  return (
    <ul className="Accordian-card">
      {AccordianBox}
    </ul>
  )
};

export default Accordian;
