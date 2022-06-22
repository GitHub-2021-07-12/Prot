// 22.06.2022




let _promise_reject = null;
let _promise_resolve = null;


export let options = {
  enableHighAccuracy: true,
  timeout: 5000,
};




function _geolocation_error() {
  _promise_reject();
}


function _geolocation_success(position) {
  position = {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };
  _promise_resolve(position);
}


function _promise_main(resolve, reject) {
  _promise_reject = reject;
  _promise_resolve = resolve;
  navigator.geolocation.getCurrentPosition(_geolocation_success, _geolocation_error, options);
}




export async function getPosition() {
  return new Promise(_promise_main);
}
