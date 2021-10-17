const loginUser = $("login");
const userInput = $("userName");
const passwordInput = $("password");

const users = [{ userName: "", Password: "" }];

function user(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="secondD">
          <h1>${array[i].userName}</h1>
          <h1>${array[i].password}</h1>
      </div>`);
    loginUser.append(div);
  }
}
user(users);

function addUser() {
  const newUser = {
    userName: userInput.val(),
    Password: Password.val(),
  };
  users.push(newUser);

  user([newUser]);
}





$(document).ready(function () {
  $("#btnRemove").click(function () {
    $("p").remove();
    $("#remove").remove();
    return false;
  });
});













const main = $(".column")
const gameName = $("#name")
const imgURL = $("#img1")
const price = $("#price")


const gameArr = [
  {name:"",imgURL:"",price:""}
];

function gamesA(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="addCon">
        <h1>${array[i].name}</h1>
        <h1>${array[i].imgURL}</h1>
        <h1>${array[i].price}</h1>
    </div>`);
    main.append(div);
  }
}
gamesA(gameArr);

function addGame(){
  const newGame = {
    name: gameName.val(),
    imgURL: imgURL.val(),
    price: price.val(),
  }
  gamesArr.push(newGame);
  gamesA([newGame]);

}