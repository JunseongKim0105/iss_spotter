const request = require('request-promise-native');

const fetchMyIP = function () {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = (ipObj) => {
  return request(`http://ipwho.is/${ipObj.ip}`);
};

const fetchISSFlyOverTimes = (geoObj) => {
  const { latitude, longitude } = geoObj;
  return request(
    `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  );
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
// const request = require('request-promise-native');

// const fetchMyIP = function () {
//   return request('https://api.ipify.org?format=json');
// };

// const fetchCoordsByIP = function (body) {
//   const ip = JSON.parse(body).ip;
//   return request(`http://ipvihiwho.is/` + ip);
// };

// const fetchISSFlyOverTimes = function (body) {
//   const { latitude, longitude } = JSON.parse(body).data;
//   return request(
//     `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
//   );
// };

// const nextISSTimesForMyLocation = function () {
//   return fetchMyIP()
//     .then(fetchCoordsByIP)
//     .then(fetchISSFlyOverTimes)
//     .then((data) => {
//       const { response } = JSON.parse(data);
//       return response;
//     });
// };

// module.exports = { nextISSTimesForMyLocation };
