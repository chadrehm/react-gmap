import _ from 'lodash';

export const types = {COORDINATES: '@google_map/COORDINATES',};

export const actions = {
  setCoordinates: (coordinates) => {
    let coordinatesList = coordinates.split(',');
    let coordinatesArr = []
    _.each(coordinatesList, (val,key) => {
      let obj = {};
      if(key % 2 === 0 || key === 0){
        obj = {
          lat: parseInt(coordinatesList[key].trim()),
          lng: parseInt(coordinatesList[key+1].trim())
        }
        coordinatesArr.push(obj);
      }
    })
    return {
      type: types.COORDINATES,
      payload: coordinatesArr,
    }
  }
}

export default function (state = [], action){
  switch (action.type) {
    case types.COORDINATES:
      return action.payload;
    default:
      return state
  }
}
