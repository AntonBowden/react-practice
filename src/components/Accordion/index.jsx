import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSeletion = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = (currentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(currentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multi selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="item"
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(item.id)
                  : () => handleSingleSeletion(item.id)
              }
            >
              <div className="title">
                <h3>{item.title}</h3>
                <span>
                  <h3>{item.id === selected ? `-` : `+`}</h3>
                </span>
              </div>
              {enableMultiSelection ? (
                multiple.indexOf(item.id) !== -1 && (
                  <div className="content">{item.content}</div>
                )
              ) : selected === item.id ? (
                <div className="content">{item.content}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
