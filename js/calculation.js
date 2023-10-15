const Judge = (array_1, array_2) => {
  let length = 2 ** array_1.length / 2;
  let binary_1 = "";
  for (let i = array_1.length - 1; i > -1; i--) {
    if (array_1[i]) {
      binary_1 += "1";
    } else {
      binary_1 += "0";
    }
  }
  let number_1 = parseInt(binary_1, 2);

  let binary_2 = "";
  for (let i = array_1.length - 1; i > -1; i--) {
    if (array_2[i]) {
      binary_2 += "1";
    } else {
      binary_2 += "0";
    }
  }
  let number_2 = parseInt(binary_2, 2);

  if (number_1 != 0 && number_2 != 0) {
    let diff = 1;
    while (number_1 != number_2) {
      if (number_1 == length * 2) {
        number_1 = 1;
      } else {
        number_1 += 1;
      }
      diff += 1;
    }
    let result;
    if (diff == 1) {
      result = "あいこ";
    } else if (diff > length) {
      result = "上の勝ち";
    } else {
      result = "下の勝ち";
    }
    return result;
  } else {
    return "その手は使えません";
  }
};
