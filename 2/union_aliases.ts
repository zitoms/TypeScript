type Combinable = number | string;
type ConversionDescriptor = "to_num" | "to_string";
enum Calc {
  AS_NUMBER,
  AS_STRING,
}

function CombineAdd(
  a: Combinable,
  b: Combinable,
  calculator: ConversionDescriptor
) {
  if (
    (typeof a === "number" && typeof b === "number") ||
    calculator === "to_num"
  ) {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(CombineAdd(23, 23, "to_num"));
console.log(CombineAdd("23", "23", "to_string"));
console.log(CombineAdd("minsu", "hyojung", "to_string"));
