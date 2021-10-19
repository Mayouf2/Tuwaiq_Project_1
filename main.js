// const loginUser = $("#login");
// const userInput = $("#userName");
// const passwordInput = $("#password");
// const mainForm = $("#loginForm")

// const users = [
//   { userName: "mayouf", Password: "4321" },
//   {userName:"hiji",Password:"1234"},
// ];

// function login(){
//   let username = document.getElementById("userName").value
//   let password = document.getElementById("password").value

//   for(i=0;i<users.length;i++){
//     if (username == users[i].userName && password == users[i].Password){
//       console.log(username + "user logged in ")
      
//     }
//     else{
//       console.log("wrong")
//     }
//   }
  
// }




// function newUsers(array) {
//   for (let i = 0; i < array.length; i++) {
//     const div = $(` <div class=("loginForm")>
//         <h1>${array[i].userName}</h1>
//         <h1>${array[i].Password}</h1>
//         </div>`);
//       loginForm.append(div);
//   }
// }
// newUsers(users);

// function addUser(){
//   const newUser = {
//     userName: userInput.val(),
//     Password: passwordInput.val(),
    
    
//   };
//   users.push(newUser);
//   newUsers([newUser]);
// }





















$(document).ready(function () {
  $("#btnRemove").click(function () {
    $("p").remove();
    $("#remove").remove();
    return false;
  });
});

$(document).ready(function () {
  $("#removeimg1").click(function () {
    $(".column1").remove();
    return false;
  });
});

$(document).ready(function () {
  $("#removeimg2").click(function () {
    $(".column2").remove();
    return false;
  });
});

$(document).ready(function () {
  $("#removeimg3").click(function () {
    $(".column3").remove();
    return false;
  });
});
$(document).ready(function () {
  $("#removeimg4").click(function () {
    $(".column4").remove();
    return false;
  });
});
$(document).ready(function () {
  $("#removeimg5").click(function () {
    $(".column5").remove();
    return false;
  });
});
$(document).ready(function () {
  $("#removeimg6").click(function () {
    $(".column6").remove();
    return false;
  });
});
$(document).ready(function () {
  $("#removeimg7").click(function () {
    $(".column7").remove();
    return false;
  });
});
$(document).ready(function () {
  $("#removeimg8").click(function () {
    $(".column8").remove();
    return false;
  });
});
$(document).ready(function () {
  $("#removeimg9").click(function () {
    $(".column9").remove();
    return false;
  });
});












const main = $("#myUl")
const gameName = $("#name")
const gameImgURL = $("#gameImg")
const gamePrice = $("#price")


const gameArr = [
  
  {name:"super mario bros 3",imgURL:"https://cdn.shopify.com/s/files/1/0630/8509/products/pst2045suprmro_large.jpg?v=1502466967",price:"$60.00"},
  {name:"skyrim",imgURL:"https://cdn.shopify.com/s/files/1/0630/8509/products/pst0193_Skyrim_Bethesda_Poster_large.jpg?v=1608695353",price:"$60.00"},
  {name:"zelda breath of the wild",imgURL:"https://cdn.shopify.com/s/files/1/0630/8509/products/pst1131_Zelda_Breath_of_the-_Wild_BOTW_Poster_large.jpg?v=1608456234",price:"$60.00"},
  {name:"assassin's creed 3",imgURL:"https://cdn.shopify.com/s/files/1/0630/8509/products/pst0708ac_large.jpeg?v=1484165622",price:"$60.00"},
  {name:"destiny 2",imgURL:"https://static.wikia.nocookie.net/destinypedia/images/8/87/D2_BoxArt.jpg/revision/latest/scale-to-width-down/700?cb=20170531045837",price:"$60.00"},
  {name:"the witcher 3 wild hunt",imgURL:"https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",price:"$60.00"},
  {name:"final fantasy xv",imgURL:"https://static.wikia.nocookie.net/yogscast/images/5/5a/FF_XV_cover_art.jpg/revision/latest/scale-to-width-down/610?cb=20161129205912",price:"$60.00"},
  {name:"metal gear solid v",imgURL:"https://s3.gaming-cdn.com/images/products/1643/271x377/metal-gear-solid-v-the-definitive-experience-definitive-edition-pc-game-steam-cover.jpg",price:"$60.00"},
  {name:"FIFA 21",imgURL:"https://cdn.arabhardware.net/wp-content/uploads/2020/07/EdifP-IWAAAVYbt.jpg",price:"$60.00"},

];


function gamesA(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`
    
    <div id="column">
    <button id="removeimg1"  onclick="remove(${i})">X</button><br>
        <li class="list-group-item">${array[i].name}</li>
        <img id="gameImg" style="width: 220px; height: 380px" src=${array[i].imgURL} >
        <h5>${array[i].price}</h5>
        <a href="./buy.html"><button type="button" id="btn">Buy</button></a>
        </div>

        `);

 
        localStorage.setItem("myGames", JSON.stringify(gameArr)); 
        let storedGames = JSON.parse(localStorage.getItem("myGames"));

        

    main.append(div);
   
  }
  
}
gamesA(gameArr);

function addGame(){
  const newGame = {
    imgURL: gameImgURL.val(),
    name: gameName.val(),
    price: gamePrice.val(),
  };
  console.log( gameImgURL.val() )
  gameArr.push(newGame);
  gamesA([newGame]);
  

}
function remove (i){
  gameArr.splice(i, 1);
  main.html("");
  gamesA(gameArr);

}









function hideHandler() {
  main.hide();
}

function showHandler() {
  main.show();
}
