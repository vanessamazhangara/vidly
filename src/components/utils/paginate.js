import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
  // _.slice(items, startIndex) // takes our items array and slices it on startIndex
  // ._take() //Creates a slice of array with n elements taken from the beginning.
}
