import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import cake from './cake2.png'

class App extends Component {

componentDidMount(){
  $(".start").click(function() {
    $(".stage1").fadeOut();
    fire_modal(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png",
        "Let’s make a cake!",
        "Since it’s your birthday, I find it only fitting that you get to make your own digital birthday cake. Start by making your cake mixture, then bake it in a digital oven and finally decorate. Have fun and happy birthday my baby! -Kiyana"
    );
});

var progress = 1;

$(".modal_content button").click(function() {
    progress++;
    close_modal(progress);
});

function close_modal(callback) {
  var modal = $(".birthday_inner__modal");

    modal.css("transform", "translateY(-50%) scale(0)");
    setTimeout(function() {
        $(".stage" + callback).fadeIn();
    }, 600);
}

function fire_modal(imgurl, title, content) {
    var modal = $(".birthday_inner__modal");
    modal.find("h1").html(title);
    modal.find("img").attr("src", imgurl);
    modal.find("p").html(content);
    setTimeout(function() {
        modal.css("transform", "translateY(-50%) scale(1)");
    }, 1000);
}

var mixing = false;
var mixtimes = 0;

$(".mixer").click(function() {
    if (mixing == false) {
        mixing = true;
        mixtimes++;
        $(".mix_spoon img").addClass("move");
        setTimeout(function() {
            $(".mix_spoon img").removeClass("move");
            mixing = false;
        }, 1000);
    }
    if (mixtimes == 6) {
        $(".stage2").fadeOut();
        fire_modal(
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png",
            "Mix successful!",
            "Congratulations, the mixture is perfect! After pouring the mixture into a baking tin, it’s now time to put it in our digital oven for about 3 seconds. That should be enough time for a nice spongy base."
        );
    }

});

// $(".tin").draggable({
//     revert: true
// });
// $(".oven").droppable({
//     drop: function(event, ui) {
//         $(".stage3").fadeOut();
//         fire_modal(
//             "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png",
//             "Bake successfull!",
//             "Yes! You are a master chef. The base is fully baked and looks super yummy. Now its time to combine this base with lots of other ingredients like jam, marmalade, chocolate and more."
//         );
//     }
// });


$(".oven").click(function(event, ui) {
        $(".stage3").fadeOut();
        fire_modal(
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png",
            "Bake successfull!",
            "Yes! You are a master chef. The base is fully baked and looks super yummy. Now its time to combine this base with lots of other ingredients like jam, marmalade, chocolate and more."
        );
    }
);

var bases = 0;
var fillings = 0;

$(".sponges .item_inner").click(function() {
    $(".sponges").addClass("inactive");
    $(".fillings").removeClass("inactive");
  var   t = $(this)
        .attr("class")
        .split(" ")
        .pop();
    bases++;
    if (bases < 6) {
        add_sponge(t);
    }
});

$(".fillings .item_inner").click(function() {
    $(".fillings").addClass("inactive");
    $(".sponges").removeClass("inactive");
  var  f = $(this)
        .attr("class")
        .split(" ")
        .pop();
    fillings++;
    if (fillings < 7) {
        add_filling(f);
    }
});

function add_sponge(t) {
    $(".cakemake").prepend(
        '<div style="width:' +
            (200 - bases * 20) +
            'px" class="sponge sponge-' +
            t +
            '"><div></div><div></div><div></div><div></div><div></div></div>'
    );
    $(".sponges h5 span").html(bases);
}

$(".startagain").click(function() {
    $(".cakemake").html('<div class="base"></div>');
    bases = 0;
    fillings = 0;
    $(".sponges h5 span").html(bases);
    $(".fillings h5 span").html(fillings);
    $(".fillings").removeClass("inactive");
    $(".sponges").addClass("inactive");
});
function add_filling(f) {
    $(".cakemake").prepend(
        '<div style="width:' +
            (200 - bases * 20) +
            'px" class="filling filling-' +
            f +
            '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>'
    );
    $(".fillings h5 span").html(fillings);
}

function fin() {
    $("h1,h2,.options,.startagain,.add").fadeOut();

    setTimeout(function() {
        $(".cakemake").fadeIn();
        $(".cakemake").animate({ "margin-top": "0px" });
    }, 1000);
    add_candle();
    $("tt").addClass("text");
}

function add_candle() {
    var stages = $(".cakemake > div").length;
    var h = stages / 2 * 41 + 22 + "px";
    console.log(stages);
    $(".cakemake").prepend(
        '<div class="candle" ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/candle.png" /></div>'
    );
    // $("tt").show();
    document.querySelector(".tt").classList.add("show");
    setTimeout(function() {
        $(".sa").fadeIn();
    }, 2200);


}

$(".add").click(function() {
    fin();
});

$(".sa").click(function() {
    window.location.reload();
});

}

allowDrop= (allowdropevent)=> {
// debugger
allowdropevent.preventDefault();

  }
  //////////////////////////////////////// ALLOWS DRAG EVENT TO OCCUR /////////////////////////////////////////////
  /////////////////////////////////// ONCLICK OF SMALL CARDS CANT DRAG INTO SIDE NAV /////////////////////////////////////////////

  drag= (dragevent) => {
    // debugger

  }
  //////////// FINDS THE CORRECT CARD FOR DROP EVENT
  //////////// CHECKS IF CARD HAS ALREADY BEEN CHOOSEN
  //////////// CHECKS IF CARD IS ALREADY IN CONTAINER
  //////////// ADDS CARD TO COLLECTION
  drop = (dropevent) => {
    //PREVENTS RELOAD
    dropevent.preventDefault();
    // GET CARD ID
    function fire_modal(imgurl, title, content) {
        var modal = $(".birthday_inner__modal");
        modal.find("h1").html(title);
        modal.find("img").attr("src", imgurl);
        modal.find("p").html(content);
        setTimeout(function() {
            modal.css("transform", "translateY(-50%) scale(1)");
        }, 1000);
    }

    $(".stage3").fadeOut();
    fire_modal(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png",
        "Bake successfull!",
        "Yes! You are a master chef I knew it! The base is fully baked and looks supeeeeer yummy. Now its time to decorate and make it pretty like my baby!"
    );
}
    // debugger


  render() {
    return (
      <div className="App">
      <div class='birthday'>
        <div class='birthday_inner'>
          <div class='birthday_inner__modal'>
            <div class='modal_image'>
              <img src='/' />
            </div>
            <div class='modal_content'>
              <h1>Title</h1>
              <p>Content</p>
              <button>OK, Let's go</button>
            </div>
          </div>
          <div class='birthday_inner__stage stage1'>
            <div class='intro_cake'>
              <img class='intro' src={cake}/>
            </div>
            <button class='start'>Let’s make a cake</button>
          </div>
          <div class='birthday_inner__stage stage2'>
            <h1>Let’s get mixing</h1>
            <h2>OK, so let's start by mixing all of our ingredients together in a big mixing bowl. Click the mix button below until the mixture is nice and smooth.</h2>
            <div class='mix'>
              <div class='mix_bowl'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/bowl.png' />
              </div>
              <div class='mix_spoon'>
                <img className= "spoon" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/spoon.png' />
              </div>
            </div>
            <button class='mixer'>Click here to mix</button>
          </div>
          <div class='birthday_inner__stage stage3'>
            <h1>Let’s bake our base</h1>
            <h2>Alright, let’s get this mixture in the oven. Go ahead and drag the cake mix into the digital oven (click the oven if you are using a phone). Then put your feet up while it bakes.</h2>
            <div class='oven' onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}>
              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven.png' />
            </div>
            <div class='tin'  draggable="true" onDragStart={(event) => {this.drag(event)}}>
              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tin.png' />
            </div>
          </div>
          <div class='birthday_inner__stage stage4'>
            <h1>Let’s make the cake</h1>
            <h2>Build your cake in any order you want. Click an ingredient to add it to your cake. Add as much as you like my baby! Hit the button at the bottom to finish your cake and add your candles. Make sure you leave some icing for the top of your cake or its going to be dryyy!</h2>
            <div class='tt'>
            Happy 24th Birthday My Baby!
            < br/>
            I Love You With All my Heart -Dunzzo
            </div>
            <div class='options'>
              <div class='sponges inactive'>
                <h3>Sponges</h3>
                <h5>
                  <span>0</span>
                  / 5
                </h5>
                <div class='item'>
                  <div class='item_inner vanilla'></div>
                  <h4>Vanilla</h4>
                </div>
                <div class='item'>
                  <div class='item_inner strawberry'></div>
                  <h4>Pink</h4>
                </div>
                <div class='item'>
                  <div class='item_inner fruit'></div>
                  <h4>Fruit</h4>
                </div>
              </div>
              <div class='fillings'>
                <h3>Fillings/icing</h3>
                <h5>
                  <span>0</span>
                  / 6
                </h5>
                <div class='item'>
                  <div class='item_inner jam'></div>
                  <h4>Jam</h4>
                </div>
                <div class='item'>
                  <div class='item_inner cream'></div>
                  <h4>Cream</h4>
                </div>
                <div class='item'>
                  <div class='item_inner choc'></div>
                  <h4>Choc</h4>
                </div>
                <div class='item'>
                  <div class='item_inner lemon'></div>
                  <h4>Lemon</h4>
                </div>
              </div>
            </div>
            <div class='cakemake'>
              <div class='base'></div>
            </div>
            <div class='startagain'>Start again</div>
            <button class='add'>Add the candle</button>
            <button class='sa'>Start again</button>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
