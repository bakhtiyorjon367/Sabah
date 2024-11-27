console.log("Products frontend javascript file");

$(function (){
    $(".product-collection").on("change", () => {
        const selectedValue = $(".product-collection").val();
    });

    $("#product-show").on("click", () => {
        $(".table").slideToggle(500);
    });

    $("#process-btn").on("click", () => {
        $(".product-container").slideToggle(500);
        $("#process-btn").css("display", "none");
    });

    $("#cancel-btn").on("click", () => {
        $(".product-container").slideToggle(500);
        $("#process-btn").css("display", "flex");
    });


    $(".new-product-status").on("change", async function(e){
        const id = e.target.id;
        const productStatus = $(`#${id}.new-product-status`).val();
        try{
            const response = await axios.post(`/admin/product/${id}`, {productStatus: productStatus});
            
            const result = response.data;
            if(result.data){
                $(".new-product-status").blur();
            }
            else alert("Product update failed");
            
        }catch(err){
            console.log(err)
            alert("Product update failed");
        }

    });

  
});
async function SalePrice (value, id) {
    console.log('log',value,id)
    try{
        const response = await axios.post(`/admin/product/${id}`, {salePrice: value});
        
        const result = response.data;
        console.log(result);
        if(result.data){
            $(".new-product-status").blur();
        }
        else alert("Product update failed");
        
    }catch(err){
        console.log(err)
        alert("Product update failed");
    }
}

function validateForm(){
    const productName =    $(".product-name").val();
    const producPrice =    $(".product-price").val();
    const productGender=   $(".product-gender").val();
    const productType=     $(".product-collection").val();
    const productDesc =    $(".product-desc").val();
    const producStatus =   $(".product-status").val();


    if( productName   === "" || 
        producPrice   === "" || 
        productGender === "" ||
        productType   === "" || 
        productDesc   === "" || 
        producStatus  === ""  
    ) {
        alert("Please insert all required details");
        return false;
    } else return true;
}

function previewFileHandler(input, order){
    console.log("input",input)
    const imgClassName = input.className;

    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file['type'];
    const validImageType = ["image/jpg","image/jpeg","image/png","image/webp"];
    if(!validImageType.includes(fileType)){
        alert ("Please insert only jpeg, jpg, webp and png!");
    }else{
        if(file){
            const reader = new FileReader();
            reader.onload = function (){
                $(`#image-section-${order}`).attr("src", reader.result);
                console.log("result", reader.result);
            };
            reader.readAsDataURL(file);
        }
    }






}