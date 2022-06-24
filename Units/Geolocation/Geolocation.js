// 22.06.2022




let _promise_reject = null;
let _promise_resolve = null;


export let options = {
  enableHighAccuracy: true,
  maximumAge: 1000,
  timeout: Infinity,
};




function _geolocation_error(error) {
  _promise_reject(error);
}


function _geolocation_success(position) {
  // position = {
  //   lat: position.coords.latitude,
  //   long: position.coords.longitude,
  // };
  // _promise_resolve(position);
  _promise_resolve(position.coords);
}


function _promise_main(resolve, reject) {
  _promise_reject = reject;
  _promise_resolve = resolve;
  navigator.geolocation.getCurrentPosition(_geolocation_success, _geolocation_error, options);
}




export async function position_get() {
  return new Promise(_promise_main);
}


export function position_watch(callback) {
  return navigator.geolocation.watchPosition(callback, null, options);
}


export function position_clearWatch(id) {
  navigator.geolocation.clearWatch(id);
}
