import queryString from "query-string";
import { History } from "history";

export const query = {
  parse(value: any, toPrimitives = false) {
    if (toPrimitives) {
      const obj: any = queryString.parse(value);
      Object.keys(obj).forEach((item) => {
        /* eslint-disable-next-line */
        const value = obj[item];
        if (value === "false") obj[item] = false;
        if (value === "true") obj[item] = true;
        if (/^\d+$/.test(value)) obj[item] = +value;
      });
      return obj;
    }
    return queryString.parse(value);
  },
  stringify: queryString.stringify,
  set(history: History, obj: Object = {}, force = true) {
    const result = !force
      ? Object.assign(queryString.parse(history.location.search), obj)
      : obj;

    history.push({
      search: queryString.stringify(result),
    });
  },
  clean(history: History) {
    history.push({
      search: "",
    });
  },
};
