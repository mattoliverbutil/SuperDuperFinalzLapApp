"use strict"

class App{
    constructor(){
        this.laptop = [
            {   
                "Brand": " Acer Aspire E5-571G-750T ",
                "Price": " ₱ 33,949.00",
                "Image": "http://ph-live-02.slatic.net/p/2/acer-aspire-e5-571g-750t-15-6-intel-core-i7-4510u-4gb-gaming-laptop-windows-10-with-free-acer-backpack-3445-7078314-f7dcfe3f6d2f7ddb920fa7a68f5d5a0e-webp-zoom.jpgg",
            },
            {
                "Brand": " Dell XPS ",
                "Price": " ₱ 79,999.00",
                "Image": "http://www.notebookcheck.net/fileadmin/Notebooks/Dell/XPS_13-9343_Non-Touch/xps13.png "
            },
            {   
                "Brand": " MSI GP62 2QD LEOPARD ",
                "Price": " ₱ 38,208.00 ",
                "Image": "https://www.msi.com/asset/resize/image/global/product/five_pictures7_3467_2015052917200155682f41c0e01.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
            },
            {
                "Brand": " Asus ROG ",
                "Price": " ₱ 170,499.00 ",
                "Image": "http://ph-live-01.slatic.net/p/2/asus-rog-g501vw-fi054t-15-6-intel-core-i7-6700hq-8gb-4gb-black-0754-8962308-a38d0d97f165bbc3b9ebe6bd1b82a942-webp-zoom.jp"

            },
            {
                "Brand": " Alienware 17R3-1675SLV ",
                "Price": " ₱ 120,000.00 ",
                "Image": "http://ph-live-02.slatic.net/p/2/alienware-17r3-1675slv-17-3-intel-core-i7-6700hq-8-gb-ddr3-1-tb-hdd-nvidia-gtx970m-silver-windows-10-with-free-laptop-bag-7937-2196115-9d24a0607f9ef75aa7306f8d7b467eb2-webp-zoom.jpg"

            },
            {
                "Brand": " Lenovo IdeaPad ",
                "Price": " ₱ 38,499.00 ",
                "Image": "http://ph-live-01.slatic.net/p/2/lenovo-ideapad-u31-70-80m500g8ph-13-3-intel-core-i5-5200u-4gb-laptop-with-free-lenovo-backpack-9687-3946964-c2264a1021d9cfdbf6466bc82124bfe0-webp-zoom.jpgg"
            }
        ];
        this.cart = [];

    }

	render(html,component){
		component.innerHTML += html;
	}

  /* D E L E T E */
    deleteLappy(key){   
        let table = document.getElementById('shoplist');
        table.deleteRow(key);
        this.cart.splice(key,1);

        
        this.cartInventory();
  }

	reRender(html,component){
		component.innerHTML = html;
	}

  /* U P D A T E  */
    lappyUpdateInput(val){
    let idNameRow="row"+val;
    let html = `
      <tr>
         <td><input id="updateBrand" type="text" value="${this.cart[val].Brand}" /></td>
         <td><input id="updatePrice" type="text" value="${this.cart[val].Price}" /></td>
         <td><button class="btn btn-warning" onclick="component.updateBrand(${val})">Done</button><td>
      </tr>
      `;
      this.reRender(`${html}`,document.getElementById(`${idNameRow}`));
  }

    updateBrand(key){
        let var_brand = document.getElementById('updateBrand');
        let var_price = document.getElementById('updatePrice');
        let lappy = {"Brand":var_brand.value,"Price":var_price.value};
        this.cart[key] = lappy;
        this.cartInventory();
  }


  /* S E A R C H */
    searchCart(){
    let txtSearchCart = document.getElementById("txtSearchCart");
    let listCart = document.getElementById("shoplist");
  
    let html = ``;
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].Brand.includes(txtSearchCart.value)){
        html += `
          <tr>
              <td>${this.cart[i].Brand}</td>
              <td><button class="btn btn-warning" id="action" onclick="component.deleteLappy(${i})">Delete</button></td>
          </tr>`; 
      }
    }
    if(txtSearchCart.value){
      component.cartInventory();
    }
    else{
      listCart.innerHTML = html;
    }
  }




  /* R E A D  */

    cartInventory(){
    let idName="row";
    let listShop = document.getElementById("shoplist");
    let html =``;
    for(let index=0; index<this.cart.length; index++){
     html +=`
      <tr id="${idName+index}">
        <td>${this.cart[index].Brand}</td>
        <td>${this.cart[index].Price}</td>
        <td><button class="btn btn-success" id="action" onclick="component.lappyUpdateInput(${index})">Update</button>
        &nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-danger" id="action" onclick="component.deleteLappy(${index})">Delete</button></td>
      </tr>
    `;
    }
    this.reRender(`${html}`,listShop);

    


  }

   shoppingListAdd(key){

    let brand = this.laptop[(key)].Brand;
    let price = this.laptop[(key)].Price;

    let all = {
      "Brand":brand,
      "Price":price
              };


    this.cart.push(all);
    
    component.cartInventory(key);
    //component.cartAlert();
  }


    /* S E A R C H */
    searchLaptop(){
        let txtSearchLaptop = document.getElementById("txtSearchLaptop");
        let listlaptop = document.getElementById("laptoplist");
      
        let html = ``;
        for(let i=0;i<this.laptop.length;i++){
          if(this.laptop[i].Brand.includes(txtSearchLaptop.value)||this.laptop[i].Brand.toUpperCase().includes(txtSearchLaptop.value)||this.laptop[i].Brand.toLowerCase().includes(txtSearchLaptop.value)){
            html += `<tr>
              <td>${this.laptop[i].Brand}</td>
              <td>${this.laptop[i].Price}</td>
              <td><button type="button" class="btn btn-warning" onclick="component.laptopDetails(${i})">More Info</button></td> 
            </tr>`; 
          }
        }
        listlaptop.innerHTML = html;
      }

    /* R E A D */
    readLaptop(){
    let listlaptop = document.getElementById("laptoplist");
    let html = ``;
    for(let i=0;i<this.laptop.length;i++){
      html += `<tr>
          <td>${this.laptop[i].Brand}</td>
          <td>${this.laptop[i].Price}</td>
          <td><button type="button" class="btn btn-warning" onclick="component.laptopDetails(${i})">More Info</button></td> 
        </tr>`;       
    }
    listlaptop.innerHTML = html;
  }

  /* C R E A T E */
  createItem(){
    let var_brand = document.getElementById('txtAddBrand');
    let var_price = document.getElementById('txtAddPrice');

    let all = {"Brand":var_brand.value,"Price":var_price.value};

    this.cart.push(all);

    var_brand.value = '';
    var_price.value = '';
    this.cartInventory();

    console.log(this.cart);

    

  }
 

  laptopBrandDetails(key){
    let details = document.getElementById("productdetails");
    let html = ``;
    for(let index=0;index<this.laptop.length;index++){
      if(index==key){
        html += `
          
                  <div class="container">
                    <br><br>
                    <div class="row span6">
                      <h1>${this.laptop[index].Brand}</h1>
                      <br><br>
                    </div>
                  </div>


            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-md-12 col-lg-6">
                  <img class="media-object img-thumbnail"  width="500"  src="${this.laptop[index].Image} ">

                </div>
                    <div class="section" >
                      <div class="col-xs-12 col-md-12 col-lg-6" id="textBox">
                            <h2> Price : </h2>
                            <p>${this.laptop[index].Price}<br>
                            </p>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="component.shoppingListAdd('${index}')">Add to Cart</button>
                            <button type="button" class="btn btn-primary" onclick="component.LaptopList()">Back</button>
                      </div>
                    </div>
              </div>
            </div>
        `;

      }
    }
    details.innerHTML = html;
  }


  
}


class Component extends App{
	constructor(){		
		super();
	}

	landingPage(){
		let html = `
        <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
          <div class="container topnav">
            <div class="navbar-header">

              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">

                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>

              </button>
              <a class="navbar-brand topnav" href="index.html" > [ LapApp ] </a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">

                <li>

                  <a href="#" onclick="component.landy()">Home</a>
                </li>
                <li>
                  <a href="#" onclick="component.LaptopList()">Products</a>
                </li>
                <li>
                  <a href="#" onclick="component.buysellcreate()"> Buy/Sell </a>
                </li>
                <li>
                  <a href="#" onclick="component.mycarty()"> My LapCart </a>
                </li>


              </ul>
            </div>           
          </div>      
        </nav>



        <div id = "landing">
          <a name="about"></a>
          <div class="intro-header">
            <div class="container">

              <div class="row">
                <div class="col-lg-12">
                  <div class="intro-message">

                    <hr class="intro-divider">
                    <hr class="intro-divider">

                    <h1> [ LapApp ] </h1>
                    <br>

                    <hr class="intro-divider">
                    <hr class="intro-divider">  

                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

            <a  name="services"></a>
            <div class="content-section-a">

              <div class="container">
                <div class="row">
                  <div class="col-lg-5 col-sm-6">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="section-heading"> Gaming Performance </h2>
                    <p class="lead">You can be totally immersed in full HD gaming, communicating with your teammates while live-streaming and capturing highlights for editing and posting later—all simultaneously. That&apos;s megatasking, and with the power of the latest Intel® Core™ i7 processors, nothing will compromise your gameplay.</p>
                  </div>
                  <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img class="img-responsive" src="img/glap5.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>


            <div class="content-section-b">

              <div class="container">

                <div class="row">
                  <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="section-heading"> Gaming Graphics </h2>
                    <p class="lead">A variety of computer graphic techniques have been used to display video game content throughout the history of video games. The predominance of individual techniques have evolved over time, primarily due to hardware advances and restrictions such as the processing power of central or graphics processing units.</p>
                  </div>
                  <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="img/graphics.jpg  " alt="">       
                  </div>
                </div>
              </div>
            </div>


            <div class="content-section-a">

              <div class="container">

                <div class="row">
                  <div class="col-lg-5 col-sm-6">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="section-heading"> Gaming Technology </h2>
                    <p class="lead"> Technological advances have brought about laptops that are smaller, faster, lighter, and easier to use. The only downside to these developments is that now you have a lot of options, and choosing the right laptop is increasingly difficult. </a></p>
                  </div>
                  <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img class="img-responsive" src="img/glap4.jpg " alt="">
                  </div>
                </div>
              </div>
            </div>


            <a  name="contact"></a>
            <div class="banner">

              <div class="container">

                <div class="row">
                  <div class="col-lg-6">
                    <h2> Contact Me, by Clicking this : </h2>
                  </div>

                  <div class="wrapper">
                    <ul class="social-icons icon-zoom list-unstyled list-inline"> 
                      <li> <a href="https://www.facebook.com/mattoliverbutil28"><i class="fa fa-facebook"></i></a></li> 
                      <li> <a href="https://plus.google.com/u/0/113550276878113921520"><i class="fa fa-google-plus"></i></a></li> 
                      <li> <a href="https://www.instagram.com/mattoliverbutil28/"><i class="fa fa-instagram"></i></a></li> 
                      <li> <a href="https://twitter.com/MathAhLihVer25"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


   


        <div id="product">
          <br><br><br><br><br><br>

          <div class="row">
            <div class="text-center col-sm-8 col-sm-offset-2">

              <hr><hr>
              <h1> [ Products ] </h1>
              <hr><hr>

            </div>
          </div> 



        <div class="container">
          <input oninput="component.searchLaptop()" class="form-control" type="text" placeholder="Search laptop here..." id="txtSearchLaptop"/ >

        </div>
        <div class="container">

          <hr>
          <table class="table table-striped">
            <thead>
              <tr>
                <th data-field="brand">Brand</th>
                <th data-field="price">Price</th>
                <th data-field="action">Action</th>
              </tr>


            </thead>
            <tbody id="laptoplist">          
            </tbody>
          </table>
          <hr>
        </div>
      </div>


    <div id="productpage">
        <br><br><br>
       <h1> </h1>
    </div>




    <div id="buysell" class="container">
      <br><br><br>

      <hr>
      <h1 id="cart-text"> Just input your item here to buy/sell. </h1>
      <hr>
      <form>
        <h5> Brand </h5>
        <input id="txtAddBrand" type="text" placeholder="Enter brand here..." />
        <br><br>
        <h5> Price </h5>
        <input id="txtAddPrice" type="text" placeholder="Enter price here..." />
        <br><br>
        <a button class="btn btn-success" onclick="component.createItem()">Enter</a>
        <hr>
      </form>
    </div>
    

    <div id="productdetails"> </div>


    <div id="mycart">
      <div id="index-banner">
        <div class="section no-pad-bot">
          <div class="container">
            <br><br>
            <div class="row center" id="headLine">
              <h1 id="header"> [ My LapCart ] </h1>
            </div>
            <br><br>

          </div>
        </div>
      </div>

        <div class="container">
            <div class="section">
             
            </div>
        </div>

        <div class="container">

          <table class="table table-striped">
            <thead>
              <tr>
                <th data-field="name">Brand</th>
                <th data-field="price">Price</th>
                <th data-field="action">Action</th>
              </tr>
            </thead>
            <tbody id="shoplist">
            </tbody>
          </table>
        </div>
      </div>

    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">

        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"> [ Added to My LapCart ] </h4>
          </div>
          <div class="modal-body">
            <p>Thank you for purchasing this item.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal"> [ Close ] </button>
          </div>
        </div>

      </div>
    </div>
    




     <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="list-inline">
                            <li>
                                <a href="#" onclick="component.landy()">Home</a>
                            </li>
                            
                            <li>
                                <a href="#" onclick="component.LaptopList()">Products</a>
                            </li>
                            <li>
                                <a href="#" onclick="component.buysellcreate()"> Buy/Sell </a>
                            </li>
                            <li>
                                <a href="#" onclick="component.mycarty()"> My LapCart </a>
                            </li>
                            

                            <p class="copyright text-muted small"> &copy; LapApp 2016. <br><br> Property of Matt Oliver Butil. </p>
                        </div>
                    </div>
                </div>
            </footer>
    `;
		this.reRender(`${html}`,document.getElementById("app"));

	}

    landy(){
         $('#landing').show();
         $('#product').hide();
         $('#buysell').hide();
         $('#mycart').hide(); 
         $('#productdetails').hide();
    }

    LaptopList(){
        $('#landing').hide();
        $('#product').show();
        $('#buysell').hide();
        $('#mycart').hide();
        $('#productdetails').hide();
    }
    buysellcreate(){
        $('#landing').hide();
        $('#product').hide();
        $('#buysell').show();
        $('#mycart').hide();
        $('#productdetails').hide();
    }
    mycarty(){
        $('#landing').hide();
        $('#product').hide();
        $('#buysell').hide();
        $('#mycart').show();
        $('#productdetails').hide();
    }
    laptopDetails(key){
        $('#landing').hide();
        $('#product').hide();
        $('#buysell').hide();
        $('#mycart').hide();
        $('#productdetails').show();

        component.laptopBrandDetails(key);
    }

}

let component = new Component();
component.landingPage();
component.readLaptop();




