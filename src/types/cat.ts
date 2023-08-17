export type Cat = {
  id: string;
  url: string;
  votes: number;
};

export interface PartialCat extends Cat {
  id: string;
  url: string;
}
