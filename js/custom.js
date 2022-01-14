const changeCatData = (catID) => {
  // Tab CSS change
  document.getElementById(`vegetables`).classList.remove("active");
  document.getElementById(`fishMeat`).classList.remove("active");
  document.getElementById(`driFood`).classList.remove("active");
  document.getElementById(`drink`).classList.remove("active");
  document.getElementById(`${catID}`).classList.add("active");

  // change data
  //   feature data
  document.getElementById(
    `featureImg`
  ).src = `assests/images/feature-product/${catID}/${catID}.png`;
  //   category data
  document.getElementById(
    `catImg1`
  ).src = `assests/images/feature-product/${catID}/1.png`;
  document.getElementById(
    `catImg2`
  ).src = `assests/images/feature-product/${catID}/2.png`;
  document.getElementById(
    `catImg3`
  ).src = `assests/images/feature-product/${catID}/3.png`;
  document.getElementById(
    `catImg4`
  ).src = `assests/images/feature-product/${catID}/4.png`;
};
