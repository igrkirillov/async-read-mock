import GameSavingLoader from "../GameSavingLoader";
import read from "../reader";

jest.mock("../reader");

describe('GameSavingLoader module', () => {
  test ('successful case', (done) => {
    expect.assertions(1);
    const error = new Error("Ошибка чтения файла");
    read.mockRejectedValue(error);
    GameSavingLoader.load().catch(e => expect(e).toEqual(error));
    done();
  })
})