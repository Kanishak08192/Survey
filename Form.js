class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Submit');
    this.button1 = createButton('Yes');
    this.button2 = createButton('No');
    this.button3 = createButton('Yes');
    this.button4 = createButton('No');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.title1 = createElement('h3');
    this.title2 = createElement('h3');
    this.title3 = createElement('h3');
    this.greeting = createElement('h1');
    this.greeting1 = createElement('h1');
    
  }
  

  display(){
    this.title.html("Survey");
    this.title.position(displayWidth/2 - 70,110);

    this.title1.html("Ques1- Goverment should do something to reduce pollution.");
    this.title1.position(displayWidth/2 - 260,200);

    this.title2.html("Ques2- Goverment should do something about the increase ");
    this.title2.position(displayWidth/2 - 260,330);

    this.title3.html("of drug use in India. ");
    this.title3.position(displayWidth/2 - 260,360);

    this.input.position(displayWidth/2 - 100 , displayHeight/2 - 200);
    this.button.position(displayWidth/2 - 70 , displayHeight/2 + 160);
    this.button1.position(displayWidth/2 - 260 , 250);
    this.button2.position(displayWidth/2 - 260 , 280);
    this.button3.position(displayWidth/2 - 260 , 410);
    this.button4.position(displayWidth/2 - 260 , 440);
   

    this.button.mousePressed(()=>{
      this.input.hide();
      this.title1.hide();
      this.title2.hide();
      this.title3.hide();
      this.button.hide();
      this.button1.hide();   
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      name = this.input.value();
      this.greeting.html("Thanks for Participating ")
      this.greeting.position(displayWidth/2 -170 , displayHeight/2 - 120);

      this.greeting1.html(name)
      this.greeting1.position(displayWidth/2 - 70, displayHeight/2 - 70 );

    });

    this.button1.mousePressed(()=>{
      var answer = database.ref('ans1');
  answer.set({
    'true':yes
    })
  })
   
  }

}
