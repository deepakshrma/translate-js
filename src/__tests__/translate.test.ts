import { addLocale, setLocale } from '../translate'
describe("translate.js", () => {
  beforeAll(() => {
    addLocale({
      en: {
        id: "messageEn"
      },
      zh: {
        id: "messageZh"
      }
    });
    setLocale("en");
  });
  it("should have toLocale method", () => {
    expect(typeof "".toLocale !== "undefined").toBe(true);
  });
  it("should able to tranlate", () => {
    expect("id".toLocale()).toBe("messageEn");
  });
  it("should able to tranlate in zh", () => {
    setLocale('zh')
    expect("id".toLocale()).toBe("messageZh");
  });
});
