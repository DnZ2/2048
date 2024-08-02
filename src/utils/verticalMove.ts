import addNewBlock from "./addNewBlock";
export const MoveToUp = (mapa: string) => {
  const map = JSON.parse(mapa)
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (i < map.length - 1) {
        for (let k = 0; k < map.length - 1; k++) {
          if (map[k][j].value === 0) {
            map[k][j].value = map[k + 1][j].value;
            map[k + 1][j].value = 0;
          }
        }
      } else if (map[i - 1][j].value === 0) {
        map[i - 1][j].value = map[i][j].value;
      }
    }
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (i < map.length - 1) {
        if (map[i][j].value === map[i + 1][j].value) {
          map[i][j].value *= 2;
          map[i + 1][j].value = 0;
        }
      }
    }
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (i < map.length - 1) {
        for (let k = 0; k < map.length - 1; k++) {
          if (map[k][j].value === 0) {
            map[k][j].value = map[k + 1][j].value;
            map[k + 1][j].value = 0;
          }
        }
      } else if (map[i - 1][j].value === 0) {
        map[i - 1][j].value = map[i][j].value;
      }
    }
  }


  return addNewBlock(map, mapa);
};

export const MoveToDown=(mapa: string)=>{
  const map = JSON.parse(mapa)
  for (let i = map.length - 1; i > 0; i--) {
    for (let j = 0; j < map[i].length; j++) {
      for (let k = map.length - 1; k > 0; k--) {
        if (map[k][j].value === 0) {
          map[k][j].value = map[k - 1][j].value;
          map[k - 1][j].value = 0;
        }
      }
    }
  }
  for (let i = map.length - 1; i > 0; i--) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j].value === map[i - 1][j].value) {
        map[i][j].value *= 2;
        map[i - 1][j].value = 0;
      }
    }
  }
  for (let i = map.length - 1; i > 0; i--) {
    for (let j = 0; j < map[i].length; j++) {
      for (let k = map.length - 1; k > 0; k--) {
        if (map[k][j].value === 0) {
          map[k][j].value = map[k - 1][j].value;
          map[k - 1][j].value = 0;
        }
      }
    }
  }
  return addNewBlock(map, mapa);
};
