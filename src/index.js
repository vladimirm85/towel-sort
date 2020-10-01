
// You should implement your task here.

module.exports = (matrix) =>
    matrix
        ? matrix.reduce(
        (acc, arr, index) => acc.concat(!(index % 2) ? arr : arr.reverse()),
        []
        )
        : [];
