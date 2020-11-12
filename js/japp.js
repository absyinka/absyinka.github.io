$("document").ready(function () {
  const operationMap = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
    "%": (x, y) => x % y,
  };

  $(".btn-wine").on("click", function () {
    const op = $(this).data("op");
    const x = parseFloat($("#num1").val());
    const y = parseFloat($("#num2").val());
    const result = operationMap[op](x, y);
    $("#result").val(result);
  });
});