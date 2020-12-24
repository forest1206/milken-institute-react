import React, { useEffect, useState } from "react";
import Banner from "../../components/LiveStream/Banner/Banner";
import Sessions from "../../components/LiveStream/Sessions/Sessions";
import BackToTop from "../../components/LiveStream/BackToTop/BackToTop";
import { sessionAPI } from "../../api";

export default function LiveStream() {
  const [sessionDays, setSessionDays] = useState([]);

  useEffect(() => {
    getSessionsData();
  }, []);

  const getSessionsData = async () => {
    let res = await sessionAPI.fetchSessionDays();
    if (res.status === 200) {
      setSessionDays(res.data);
    } else {
      console.log("error", res);
    }
  };

  return (
    <div id="livestream-wrapper">
      <Banner title="Global Conference 2020" sessionDays={sessionDays} />
      <Sessions sessionDays={sessionDays} />
      <BackToTop />
    </div>
  );
}
