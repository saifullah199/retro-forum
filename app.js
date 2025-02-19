const loadCategory = async() =>{
  const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    const data = await response.json();
    const allPost = document.getElementById("let-discuss")
    data.posts.forEach((item) => {
        const div =document.createElement("div");
        
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl p-3">

                          <div class="relative">
                            <img class="w-[60px] lg:w-[50px] rounded-full relative" src="${item.image}" alt=""> 
                            <span class="absolute top-0 right-0 indicator-item badge ${ item.isActive ? "bg-green-500" : "bg-red-500" }"></span> 
                          </div>
                            
                            <div class="card-body">
                                <div class="author-active"></div>
                                <div class="space-y-3">
                                    <div class="flex gap-5">
                                        <span> # ${item.category}</span>
                                        <span>Author : ${item.author.name}</span>
                                    </div>
                                  <h2 class="card-title">${item.title}</h2>
                                  <p> ${item.description}</p>
                                    <hr>
                                    
                                    <div class="flex justify-between">
                                        <div class="flex gap-3"><img src="./images/icons/comment.png" alt=""> <span>${item.comment_count}</span></div>
                                        <div id="view" class="flex gap-3"> <img src="./images/icons/view.png" alt=""> <span> ${item.view_count}</span></div>
                                        <div class="flex gap-3"><img src="./images/icons/clock.png" alt=""> <span>${item.posted_time}</span></div>
                                    </div>

                                  <div class="card-actions justify-end">
                                    
                                    
                                        <button class="btn bg-green-300"><img onclick="check('${item.title}, ${item.view_count}')" src="./images/mail.png" alt=""></button>
                                    
                                    
                                  </div>
                                </div>
                            </div>
                        </div>
        `
        allPost.appendChild(div);
        // console.log(data.posts);

        loadingSpinner(false);
    });
}

let totalCount =0;
const check = (text,) => {
  
  

      const titleContainer = document.getElementById("title-container");
      const div = document.createElement("div")
      
      const p = document.createElement("p")
      p.innerText = text;
      div.appendChild(p);
      
      div.classList.add("mark-title");
      titleContainer.appendChild(div)


       
      
      
      const viewDiv = document.createElement("div");
      viewDiv.classList.add("flex", "gap-3");
      
      const viewImg = document.createElement("img");
      viewImg.src = "./images/icons/view.png";
      div.appendChild(viewImg);
      // viewDiv.appendChild(viewImg);
      
      
      
      
      
      div.appendChild(viewDiv);
      
      
      
      
    
      totalCount = totalCount +1 ;
      document.getElementById("mark-read").innerText = totalCount;
    
    
    
  
}



loadCategory();



const latestPost = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    const data = await response.json()
   const latest = document.getElementById("latest-post")
   data.forEach((item)=>{
    const div = document.createElement("div")
    div.classList.add("flex")
    div.innerHTML= `
    <div class="card bg-base-100 shadow-xl">
              <div class="px-10 pt-10 shadow-xl">
                <img src="${item.cover_image}">
              </div>
              <div class="card-body items-center text-center">
                <div class="flex gap-3">
                <img src="./images/calendar.png" alt="">
                <p> ${item.author.posted_date ? item.author.posted_date : "No Publish Date"}</p>
                </div>
                <h2 class="card-title font-semibold">${item.title}</h2>
                <p class="text-[14px]">${item.description}</p>
                <div class="flex gap-8 ">
                  <div> <img class="w-[75px] rounded-full" src="${item.profile_image}" alt=""></div>
                  <div>
                    <p>${item.author.name}</p>
                    <p>${item.author.designation ? item.author.designation  : "Unknown"}</p>
                  </div>
                </div>
              </div>
            </div>
    `
    
    
    
    latest.appendChild(div);
    // console.log(item)
   })
    
}


const handleSearch =() =>{
  loadingSpinner(true);
  const searchField = document.getElementById("search-box")
  const searchText = searchField.value;
  loadCategory(searchText);
  
  
}



  const loadingSpinner = (isLoading) =>{
    const loadingSpinnerBox =document.getElementById('loading-spinner');
    if(isLoading){
      loadingSpinnerBox.classList.remove('hidden')
    }else{
      loadingSpinnerBox.classList.add('hidden')
    }
  }
  


// 
  
        
// 

latestPost();