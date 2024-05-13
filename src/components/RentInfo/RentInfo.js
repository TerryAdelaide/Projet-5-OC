import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/DropDown";
import "./RentInfo.scss";

function RentInfo(props) {
  const { data } = props;
  const [activeRate, setActiveRate] = useState([]);
  useEffect(() => {
    let rateArray = [];
    for (let i = 0; i < 5; i++) {
      if (parseInt(data.rating) > i) {
        rateArray.push(true);
      } else {
        rateArray.push(false);
      }
    }
    setActiveRate(rateArray);
  }, [data]);

  return (
    <div>
      <div className="agencement">
        <div className="styling">
          <div className="appartement">
            <div className="appartement--title">{data.title}</div>
            <div className="appartement--location">{data.location}</div>
          </div>
          <div className="tags">
            {data.tags.map((tags, i) => (
              <div key={i} className="tag">
                {tags}
              </div>
            ))}
          </div>
        </div>
        <div className="styling-host">
          <div className="host">
            <div className="host--name">{data.host.name}</div>
            <img
              src={data.host.picture}
              alt="Hôte de la location"
              className="host--pic"
            />
          </div>
          <div>
            <div className="rating">
              {activeRate.map((rate, i) =>
                rate ? (
                  <i key={i} className="fa-solid fa-star active-rate"></i>
                ) : (
                  <i key={i} className="fa-solid fa-star rate"></i>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown title="Description" data={data} />

        <Dropdown title="Equipements" key={data.id} data={data.equipments} />
      </div>
    </div>
  );
}

export default RentInfo;
