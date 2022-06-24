import * as Geolocation from '../Units/Geolocation/Geolocation.js';




class Main {
  _display = document.querySelector('.Display');
  // _point_user = {
  //   lat: null,
  //   long: null,
  // };
  _point_user = null;
  _points = [
    {
      lat: 51.69488916862508,
      long: 39.02080432120272,
    },
    {
      lat: 51.69415576354188,
      long: 39.018544031049935,
    },
  ];
  
  
  
  
  _point_user__display() {
    let s = `<a href='https://www.google.ru/maps/place/${this._point_user.latitude},${this._point_user.longitude}'>Map</a><br>`;
    
    for (let p in this._point_user) {
      s += p + ': ' + this._point_user[p] + '<br>';
    }
    
    this._display.innerHTML = s;
  }
  
  
  
  
  init() {
    Geolocation.options.timeout = 5000;
    
    // this._display.addEventListener('pointerdown', () => this.refresh());
    
    Geolocation.position_watch((position) => {
      this._point_user = position.coords;
      this._point_user__display();
    });
  }
  
  
  async refresh() {
    this._display.setAttribute('refresh', true);
    
    try {
      this._point_user = await Geolocation.position_get();
    }
    catch (error) {
      alert(error);
    }
    
    // this._display.textContent = `${this._point_user.lat}, ${this._point_user.long}`;
    
    // this._display.innerHTML = `<a href='https://www.google.ru/maps/place/${this._point_user.lat},${this._point_user.long}'>${this._point_user.lat}, ${this._point_user.long}</a>`;
    
    this._point_user__display();
    
    this._display.removeAttribute('refresh');
  }
}





let main = new Main();
main.init();
// main.refresh();
