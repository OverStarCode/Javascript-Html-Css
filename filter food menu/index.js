var MenuArrays = [
    {
        id: 1,
        title : "first title",
        price : 10,
        cuisine : "Chinese",
        image : "./images/1.jpg",
        text : "description 1 - description ",
        type : "breakfast",
    },
    {
        id: 2,
        title : "food title",
        price : 10,
        cuisine : "American",
        image : "./images/2.jpg",
        text : "description 1 - description ",
        type : "breakfast",

    },
    {
        id: 3,
        title : "food title",
        price : 10,
        cuisine : "Chinese",
        image : "./images/3.jpg",
        text : "description 1 - description ",
        type : "breakfast",

    },
    {
        id: 4,
        title : "food title",
        price : 10,
        cuisine : "Chinese",
        image : "./images/4.jpg",
        text : "description 1 - description ",
        type : "dinner",

    },
    {
        id: 5,
        title : "food title",
        price : 10,
        cuisine : "Chinese",
        image : "./images/5.jpg",
        text : "description 1 - description ",
        type : "dinner",

    },
    {
        id: 6,
        title : "food title",
        price : 10,
        cuisine : "American",
        image : "./images/6.jpg",
        text : "description 1 - description ",
        type : "dinner",

    },
    {
        id: 7,
        title : "food title",
        price : 10,
        cuisine : "American",
        image : "./images/7.jpg",
        text : "description 1 - description ",
        type : "lunch",

    },
    {
        id: 8,
        title : "food title",
        price : 10,
        cuisine : "Mexican",
        image : "./images/8.jpg",
        text : "description 1 - description ",
        type : "lunch",

    },
    {
        id: 9,
        title : "food title",
        price : 10,
        cuisine : "Mexican",
        image : "./images/9.jpg",
        text : "description 1 - description ",
        type : "lunch",

    },
    {
        id: 10,
        title : "food title",
        price : 10,
        cuisine : "Mexican",
        image : "./images/10.jpg",
        text : "description 1 - description ",
        type : "dessert",

    },
    {
        id: 11,
        title : "food title",
        price : 10,
        cuisine : "Italian",
        image : "./images/11.jpg",
        text : "description 1 - description ",
        type : "dessert",

    },
    {
        id: 12,
        title : "food title",
        price : 10,
        cuisine : "Italian",
        image : "./images/12.jpg",
        text : "description 1 - description ",
        type : "dessert",

    },
]

var searchInput = document.getElementById("searchInput")
var cuisineSelect = document.getElementById("cuisineSelect")

var FilterButtons = document.querySelectorAll(".controls button")
var FoodList = document.getElementById("food-list")

FilterButtons.forEach((btn)=>{


    btn.addEventListener("click", function(ee) {
      
        FilterButtons.forEach((btn) => {
            btn.classList.remove("active");
        })
        var Button_type = ee.target.getAttribute("id");
        ee.target.classList.add("active");
        
        FoodList.innerHTML = "";

        if(Button_type == "all"){
            displayMenu();
        }else{
            var food = FilterFoodByType(Button_type);
           
            food.forEach(function(item){
            CreateFood(item);
            })
        }
    })

})

// display all menu food 

function displayMenu(){

    FoodList.innerHTML = "";

    MenuArrays.forEach((food) => {

         CreateFood(food);

    })
}

cuisineSelect.addEventListener("change", function(){
    var cuisine = cuisineSelect.value
    FoodList.innerHTML = "";

    console.log(cuisine)

    FilterButtons.forEach((btn) => {
        btn.classList.remove("active");
    })

    FilterButtons[0].classList.add("active");

    if(cuisine == "" ){
        displayMenu();
        return;
    }
    const food =  FilterFoodByCuisine(cuisine);

    if(food.length > 0){
        food.forEach(function(item){
            CreateFood(item);
        })
    }else{
        FoodList.innerHTML = "<h1 style='color: white; padding: 10px; margin: 10px auto;'>No food found matching the cuisine</h1>"
    }
})

displayMenu();

// search food by title

searchInput.addEventListener("input", function() {
    var searchValue = searchInput.value
    FoodList.innerHTML = "";

    FilterButtons.forEach((btn) => {
        btn.classList.remove("active");
    })

    FilterButtons[0].classList.add("active");

   const food =  FilterByTitleOrDescription(searchValue);
 
   
   if(food.length > 0){
    
    food.forEach(function(item){
        CreateFood(item);
    })

}else{
    FoodList.innerHTML = "<h1 class='not-found' style='color: white; padding: 10px; margin: 10px auto; color:red; font-size:20px; width:fit-content;text-aligne:center'>No food found matching the search term</h1>"
}
    




    })

// food.title.toLowerCase().includes(searchValue)
    function CreateFood(food){
        var foodItem = document.createElement("div")
        foodItem.classList.add("food-item")

        var foodImage = document.createElement("img")
        foodImage.src = food.image

        var foodTitle = document.createElement("h3")
        foodTitle.textContent = food.title
        foodTitle.classList.add("title")


        var foodPrice = document.createElement("p")
        foodPrice.textContent = "$" + food.price
        foodPrice.classList.add("price")

        var block = document.createElement("div")
        block.classList.add("block")
        block.append(foodTitle)
        block.append(foodPrice)

        var foodCuisine = document.createElement("p")
        foodCuisine.textContent = "Cuisine : " + food.cuisine
        foodCuisine.classList.add("cuisine")


        var foodText = document.createElement("p")
        foodText.classList.add("text")
        foodText.textContent = food.text

        foodItem.appendChild(foodImage)
        foodItem.appendChild(block)
        foodItem.appendChild(foodText)
        foodItem.appendChild(foodCuisine)

        FoodList.appendChild(foodItem);
    }

    function FilterFoodByType(type){

        const food = MenuArrays.filter((item) =>{
            return item.type === type;
        })
        return food;
    }

    function FilterByTitleOrDescription(title){
        const food = MenuArrays.filter((item) =>{
            return    item.title.toLowerCase().includes(title.toLowerCase()) ||item.text.toLowerCase().includes(title.toLowerCase());
        })
        return food;
    }

    function FilterFoodByCuisine(cuisine){
        const food = MenuArrays.filter((item) =>{
            return item.cuisine === cuisine;
        })
        return food;
    }