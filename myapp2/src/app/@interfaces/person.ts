export interface Person {
  userName: string;
  lev: number;
  prop: Array<propData>;//確實沒想到可以這樣包
}
interface propData {
  propsName: string;
  amount: number;
}

export interface test {
  name: string;
  getName(): string;
}
