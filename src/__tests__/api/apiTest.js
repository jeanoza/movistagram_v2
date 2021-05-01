import { moviesApi, tvsApi } from "api/api";

describe("Movie Api test", () => {
  const titleList = ["Now Playing", "Upcoming", "Popular", "Search"];
  const { nowPlaying, upcoming, popular, detail, search } = moviesApi;
  const fnList = [nowPlaying, upcoming, popular, search];
  let currentFn;
  fnList.forEach((fn, index) => {
    describe(titleList[index], () => {
      beforeAll(async () => {
        if (titleList[index] == "Search") {
          currentFn = await moviesApi.search("big");
        } else {
          currentFn = await fn();
        }
      });
      it("Status 200?", async () => {
        expect(currentFn.status).toBe(200);
      });
      it("Results's length is bigger than 0", async () => {
        expect(currentFn.data.results.length).toBeGreaterThan(0);
      });
      it("First index of results is not false", async () => {
        expect(currentFn.data.results[0]).not.toBeFalsy;
      });
    });
  });
  describe("Detail", () => {
    beforeAll(async () => {
      currentFn = await detail(460465);
    });
    it("Status 200?", async () => {
      expect(currentFn.status).toBe(200);
    });
    it("Data object received is not false", async () => {
      expect(currentFn.data).not.toBeFalsy;
    });
  });
});
describe("Tvs Api test", () => {
  const titleList = ["Airing Today", "Top Rated", "Popular", "Search"];
  const { airingToday, topRated, popular, detail, search } = tvsApi;
  const fnList = [airingToday, topRated, popular, search];
  let currentFn;
  fnList.forEach((fn, index) => {
    describe(titleList[index], () => {
      beforeAll(async () => {
        if (titleList[index] == "Search") {
          currentFn = await moviesApi.search("big");
        } else {
          currentFn = await fn();
        }
      });
      it("Status 200?", async () => {
        expect(currentFn.status).toBe(200);
      });
      it("Results's length is bigger than 0", async () => {
        expect(currentFn.data.results.length).toBeGreaterThan(0);
      });
      it("First index of results is not false", async () => {
        expect(currentFn.data.results[0]).not.toBeFalsy;
      });
    });
  });
  describe("Detail", () => {
    beforeAll(async () => {
      currentFn = await detail(71712);
    });
    it("Status 200?", async () => {
      expect(currentFn.status).toBe(200);
    });
    it("Data object received is not false", async () => {
      expect(currentFn.data).not.toBeFalsy;
    });
  });
});
