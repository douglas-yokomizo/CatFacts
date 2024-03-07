import { useCatFactStore } from "../stores/CatFactStore";

describe("catFactStore", () => {
  test("fetchCatFacts sets data", async () => {
    const store = useCatFactStore();
    await store.fetchCatFacts();
    expect(Array.isArray(store.data)).toBeGreaterThan(0);
  });
});
