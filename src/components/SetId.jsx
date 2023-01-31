import React from "react";

async function SetId () {
  const columns = await ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rows = await document.querySelectorAll(".row");
  let count = 1;
  for (let row of rows) {
    let index = 0;
    for (let box of row.children) {
        const id = await (columns[index] + count);
        box.setAttribute("id", id)
        index++
      }
      count++
    }
  }

  export default SetId;