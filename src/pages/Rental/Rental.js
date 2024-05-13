import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../datas/data.json";
import Carousel from "../../components/Carousel/Carousel";
import RentInfo from "../../components/RentInfo/RentInfo";

const Lodging = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [activeLogement, setActiveLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const index = data.findIndex((item) => item.id === id);
    if (index < 0) {
      navigation("/404");
    } else {
      setActiveLogement(data[index]);
      setLoading(false);
    }
  }, [id, navigation]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Carousel data={activeLogement} />
      <RentInfo data={activeLogement} />
    </div>
  );
};

export default Lodging;
