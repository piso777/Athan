const dateOfDay = document.querySelector(".dateOfDay");
const fajr = document.querySelector("#fajr-time");
const shrook = document.querySelector("#shrook-time");
const duhri = document.querySelector("#duhri-time");
const asr = document.querySelector("#asr-time");
const magreb = document.querySelector("#magreb-time");
const eshaa = document.querySelector("#eshaa-time");
const myCity = document.querySelector(".city");
const myCityName = document.querySelector(".myCityName");
const cities = ["ALX", "GZ", "BNS", "C", "ASN", "MN"];
const putDateOfDay = (cityName) => {
  const params = {
    country: "EG",
    city: cityName,
  };
  axios
    .get("https://api.aladhan.com/v1/timingsByCity", {
      params: params,
    })
    .then(function (response) {
      let myData = response.data.data;
      dateOfDay.innerHTML = `${myData.date.gregorian.weekday.en},${myData.date.readable}`;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const putTimeOfPrayers = (cityName) => {
  const params = {
    country: "EG",
    city: cityName,
  };
  axios
    .get("https://api.aladhan.com/v1/timingsByCity", {
      params: params,
    })
    .then(function (response) {
      let myData = response.data.data.timings;
      fajr.innerHTML = `${myData.Fajr} AM`;
      shrook.innerHTML = `${myData.Sunrise} AM`;
      duhri.innerHTML = `${myData.Dhuhr} PM`;
      asr.innerHTML = `${myData.Asr} PM`;
      magreb.innerHTML = `${myData.Maghrib} PM`;
      eshaa.innerHTML = `${myData.Isha} PM`;
    })
    .catch(function (error) {
      console.log(error);
    });
};
const selectCity = () => {
  cities.map((city) => {
    const content = `<option>${city}</option>`;
    myCity.innerHTML += content;
  });
  myCity.addEventListener("change", () => {
    if (myCity.value == "GZ") {
      putDateOfDay("GZ");
      putTimeOfPrayers("GZ");
      myCityName.innerHTML = "الجيزة";
    } else if (myCity.value == "BNS") {
      putDateOfDay("BNS");
      putTimeOfPrayers("BNS");
      myCityName.innerHTML = "بني سويف";
    } else if (myCity.value == "ALX") {
      putDateOfDay("ALX");
      putTimeOfPrayers("ALX");
      myCityName.innerHTML = "اسكندرية";
    } else if (myCity.value == "C") {
      putDateOfDay("C");
      putTimeOfPrayers("C");
      myCityName.innerHTML = "القاهرة";
    } else if (myCity.value == "ASN") {
      putDateOfDay("ASN");
      putTimeOfPrayers("ASN");
      myCityName.innerHTML = "أسوان";
    } else if (myCity.value == "MN") {
      putDateOfDay("MN");
      putTimeOfPrayers("MN");
      myCityName.innerHTML = "المنيا";
    }
  });
};
selectCity();
