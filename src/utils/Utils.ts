export default class Utils {
  sortByTimestamp = (obj: any) => {
    return obj.sort(
      (a: any, b: any) => parseFloat(b.timestamp) - parseFloat(a.timestamp)
    );
  };
}
