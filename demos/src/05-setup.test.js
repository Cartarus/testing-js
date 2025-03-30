describe("Set", () => {

  beforeAll(()=>{
    console.log("before all")
  })

  afterAll(() => {
    console.log("After all")
  });

  beforeEach(()=>{
    console.log("before each")
  })

  afterEach(()=>{
    console.log("After each")
  })

  test("case 1", () => {
    console.log("case1")
    expect(1 + 1).toBe(2);
  });

  test("case 2", () => {
    console.log("case2")
    expect(1 + 1).toBe(2);
  });

  describe("other group", () => {
    beforeAll(()=>{
      console.log("before all 2")
    })

    test("case 3", () => {
    console.log("case3")
      expect(1 + 1).toBe(2);
    });

    test("case 4", () => {
      console.log("case4")
        expect(1 + 1).toBe(2);
      });
  });
});
