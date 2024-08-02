import addNewBlock from "./addNewBlock";
export const MoveToLeft = (mapa: string) => {
  const map = JSON.parse(mapa)
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (j < map[i].length - 1) {
        for (let k = 0; k < map.length - 1; k++) {
          if (map[i][k].value === 0) {
            map[i][k].value = map[i][k + 1].value;
            map[i][k + 1].value = 0;
          }
        }
      } else if (map[i][j - 1].value === 0) {
        map[i][j - 1].value = map[i][j].value;
      }
    }
    for (let j = 0; j < map[i].length; j++) {
      if (j < map[i].length - 1) {
        if (map[i][j].value === map[i][j + 1].value) {
          map[i][j].value *= 2;
          map[i][j + 1].value = 0;
        }
      }
    }
    for (let j = 0; j < map[i].length; j++) {
      if (j < map[i].length - 1) {
        for (let k = 0; k < map.length - 1; k++) {
          if (map[i][k].value === 0) {
            map[i][k].value = map[i][k + 1].value;
            map[i][k + 1].value = 0;
          }
        }
      } else if (map[i][j - 1].value === 0) {
        map[i][j - 1].value = map[i][j].value;
      }
    }
  }
  return addNewBlock(map, mapa);
};

export const MoveToRight = (mapa: string)=>{
  const map = JSON.parse(mapa)
  for (let i = 0; i < map.length; i++) {
    for (let j = map[i].length - 1; j > 0; j--) {
      for (let k = map.length - 1; k > 0; k--) {
        if (map[i][k].value === 0) {
          map[i][k].value = map[i][k - 1].value;
          map[i][k - 1].value = 0;
        }
      }
    }
    for (let j = map[i].length - 1; j > 0; j--) {
      if (map[i][j].value === map[i][j - 1].value) {
        map[i][j].value *= 2;
        map[i][j - 1].value = 0;
      }
    }
    for (let j = map[i].length - 1; j > 0; j--) {
      for (let k = map.length - 1; k > 0; k--) {
        if (map[i][k].value === 0) {
          map[i][k].value = map[i][k - 1].value;
          map[i][k - 1].value = 0;
        }
      }
    }
  }
  return addNewBlock(map, mapa);
}
