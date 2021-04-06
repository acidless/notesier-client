export default interface IResponse<DATA> {
  error?: string | Array<string>;
  data: DATA;
  success: boolean;
}
