const Button = () => {
  let finger_1 = [];
  let finger_2 = [];
  for (let i = 0; i < 10; i++) {
    let check_1 = document.getElementById(`o${i}`).checked;
    if (check_1) {
      finger_1.push(true);
    } else {
      finger_1.push(false);
    }
    let check_2 = document.getElementById(`t${i}`).checked;
    if (check_2) {
      finger_2.push(true);
    } else {
      finger_2.push(false);
    }
    document.getElementById(`o${i}`).checked = false;
    document.getElementById(`t${i}`).checked = false;
  }
  Display(Judge(finger_1, finger_2));
};

const Display = (result) => {
  console.log(result);
  setTimeout(() => {
    document.querySelector("main").style.display = "none";
    document.querySelector(".result").style.display = "flex";
    document.querySelector(".result p").innerHTML = result;
  }, 100);
  setTimeout(() => {
    document.querySelector("main").style.display = "flex";
    document.querySelector(".result").style.display = "none";
  }, 1000);
};
