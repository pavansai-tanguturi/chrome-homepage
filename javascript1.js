    const txtvalue = document.getElementById("txtvalue");
    const popup = document.querySelector(".searching");
    const search_Btn = document.querySelector(".pi-search");
    const g_Btn = document.querySelector(".g-app");
    const button = document.querySelector(".pi-apps");
    const clear = document.querySelector(".clear");
    let flag=0;
    let temp=1;

    if (txtvalue) {
    txtvalue.addEventListener("keyup", (event) => {
            if (event.keyCode === 13 && event.target.value !== "") {
                googlesearch();
            }
        });
    }

    function googlesearch() {
        var searchTerm = txtvalue.value;
 
        if(searchTerm !==""){
            window.open("https://www.google.com/search?q=" + searchTerm);
        }
    }

    search_Btn.addEventListener("click", () =>{
        if(flag==0){
            popup.classList.toggle('show');
            flag=1;
        }
        else{
            popup.classList.toggle('show');
            flag=0;
        }
        if(temp==0){
            g_Btn.classList.toggle('shows');
            temp=1;
        }
    });
    
    button.addEventListener("click", () =>{
        if(temp==1){
            g_Btn.classList.toggle('shows');
            temp=0;
        }
        else{
            g_Btn.classList.toggle('shows');
            temp=1;
        }
        if(flag==1){
            popup.classList.toggle('show');
            flag=0;
        }
    });

    clear.addEventListener("click",() => {txtvalue.value=""});
