import { Item, Null } from "../types";
const addNewBlock = (map: Item[][], mapa: string) => {
  const newMapa = JSON.stringify(map)
  if(newMapa!==mapa){
    const nulls = new Set<Null>();
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map.length; j++) {
        if (map[i][j].value === 0) {
          nulls.add({ rows: i, cols: j });
        }
      }
    }
    const random = Math.floor(Math.random() * nulls.size);
    map[[...nulls][random].rows][[...nulls][random].cols].value = 2;
  }
    return JSON.stringify(map)
}

export default addNewBlock
