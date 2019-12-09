import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchDataUseState() {
  const defaultQuran = {
    name: "",
    asma: "",
    ayat: 0,
    arti: "",
    keterangan: ""
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quran, setQuran] = useState(defaultQuran);

  useEffect(() => {
    getRandomSurah();
  }, []);

  const getRandomSurah = () => {
    setLoading(true);
    axios
      .get("https://api.banghasan.com/quran/format/JSON/acak")
      .then(response => {
        setLoading(false);
        setQuran(response.data.surat);
        setError("");
      })
      .catch(error => {
        setLoading(false);
        setQuran(defaultQuran);
        setError(error);
      });
  };

  return (
    <div className="center">
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <h5>
            {quran.name} | {quran.arti}
          </h5>
          <h6>
            ({quran.ayat}) {quran.asma}
          </h6>
          <small>
            <i>{quran.keterangan}</i>
          </small>
        </div>
      )}
      <button
        className="waves-effect waves-light btn btn-block"
        onClick={getRandomSurah}
      >
        Get Random Surah
      </button>
    </div>
  );
}

export default FetchDataUseState;
