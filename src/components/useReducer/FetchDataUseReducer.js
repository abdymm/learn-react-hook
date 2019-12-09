import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  quran: { name: "", asma: "", ayat: 0, arti: "", keterangan: "" }
};

const TYPE_FETCH_ATTEMP = "FETCH_ATTEMP";
const TYPE_FETCH_SUCCESS = "FETCH_SUCCESS";
const TYPE_FETCH_ERROR = "FETCH_ERROR";
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_FETCH_ATTEMP:
      return initialState;

    case TYPE_FETCH_SUCCESS:
      return {
        loading: false,
        error: "",
        quran: action.payload
      };

    case TYPE_FETCH_ERROR:
      return {
        loading: false,
        error: action.message,
        quran: initialState.quran
      };

    default:
      return state;
  }
};

function FetchDataUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  const getRandomSurah = () => {
    dispatch({ type: TYPE_FETCH_ATTEMP });
    axios
      .get("https://api.banghasan.com/quran/format/JSON/acak")
      .then(response => {
        console.log("STATEEEE", TYPE_FETCH_SUCCESS);
        console.log("STATEEEE", response.data.surat);
        dispatch({ type: TYPE_FETCH_SUCCESS, payload: response.data.surat });
      })
      .catch(error => {
        dispatch({ type: TYPE_FETCH_ERROR, message: error });
      });
  };

  useEffect(() => {
    getRandomSurah();
  }, []);

  return (
    <div className="center">
      {state.loading ? (
        "Loading..."
      ) : (
        <div>
          <h5>
            {state.quran.name} | {state.quran.arti}
          </h5>
          <h6>
            ({state.quran.ayat}) {state.quran.asma}
          </h6>
          <small>
            <i>{state.quran.keterangan}</i>
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

export default FetchDataUseReducer;
