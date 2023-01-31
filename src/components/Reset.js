function ResetClass(availableBoxList) {
  // const state = useContext(Game);

  for (let boxId of availableBoxList) {
    const box = document.getElementById(boxId);
    if (box.innerHTML) {
      if (box.innerHTML.className === "child") {
        box.innerHTML = "";
      }
    }
  }
}

const ResetBackground = (id) => {
  document.getElementById(id).style.backgroundColor = "";
};

export { ResetClass, ResetBackground };
