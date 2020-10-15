function theLuckyOne() {
    let listCount = document.querySelectorAll(".empList");

    for (let i = 0; i < listCount.length; i++) {
        var text1 = document.querySelectorAll(".empList")[i].textContent;
        if (text1.toString().lastIndexOf("5") >= 0) {
            listCount[i].style.color = "royalblue";
            listCount[i].style.background = "pink";
        }
    }
}
document.getElementById("apply").innerHTML = theLuckyOne();
