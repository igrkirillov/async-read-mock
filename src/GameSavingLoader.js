import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
  static async load() {
    const arrayBuffer = await read();
    console.log(arrayBuffer);
    const jsonText = await json(arrayBuffer);
    const { id, created, userInfo } = JSON.parse(jsonText);
    return new GameSaving(id, created, userInfo.id, userInfo.name, userInfo.level, userInfo.points);
  }
}