////////////////////////////////////////////////////
//practice/colsole area

// console.log('in challenge');

// var person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// };

// person["time"]="four";
// elizabethSanger["congressionalDistrict"]="6";
///////////////////////////////////////////////////

let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "Pie for everyone! ", category: "Jobs: "},
      {statement: "No taxes on pie! ", category: "Taxes: "},
      {statement: "No working on friday! ", category: "Jobs: "}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"Eat all the pie at the party."},
      {date: '08/28/2018', title:"Arrays", description:"All the looping."},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important."},
      {date: '09/4/2018', title:"Running", description:"From the police."},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: ' Callan ',
        address: ' 500 interstate blvd S ',
        email: ' callan@yomamma.com ',
        phone: ' 1234567890 ',
        availability: ' 9-5 ',
        activities: ' phone calls only '
      },
      {
        name: ' Lauren ',
        address: ' 1 main street ',
        email: ' lauren@comcast.net ',
        phone: ' 1134567890 ',
        availability: ' never ',
        activities: ' collecting money '
      },
      {
        name: ' Bernard ',
        address: ' 1 Bernard Way ',
        email: ' Bernard@thebear.net ',
        phone: ' 1134567890 ',
        availability: ' all day ',
        activities: ' everything '
      }
    ],
    biography: "I'm so cool!  please elect me.  I grew up in the West Virginia Hills and just cannot wait to go back.  There will be a moment when I think I just cannot do this but i will overcome all that the negitive world has to offer. ",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff and stuff things good! ",
    voterRegistrationUrl: 'www.google.com'
};

  //////////////////////////////////////////
 ////                DOM               ////
 /////////////////////////////////////////

 let change_district = (district) => {
   let change = elizabethSanger["congressionalDistrict"]=district;

};

change_district(6);



const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint; // take out the + so you only have one line
};

const printToDom2 = (stringToPrint, divClass) => {
    const selectedDiv = document.getElementsByClassName(divClass);
    selectedDiv.innerHTML += stringToPrint;
};

const districtStringBuilder = () => {
    const newString =`<h1>District : ${elizabethSanger.congressionalDistrict}</h1>`
    printToDom(newString, 'congressionalDistrict');
};

const donationFormStringBuilder = () => {
    const newString = `<h1><a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Click Here To Donate</a></h1>`;
    printToDom(newString,'donationForm');
};

const statementsStringBuilder = () => {
    let newString = ''; 
    for(let i=0; i<elizabethSanger.statements.length; i++) {
       // newString += elizabethSanger.statements[i].statement;// All of the newStrings below could have been one line
       newString += `<div class="statement">`// They were broken into multi lines for ease of reading and 
        newString += `<h3>${elizabethSanger.statements[i].category}</h3}`// To just make it look better
        newString += `<h6>${elizabethSanger.statements[i].statement}</h6}` // leaving the close sign and placing the bracket keeps everything on the one line
    }
    // printToDom(elizabethSanger.volunteers[])
    printToDom(newString,'statements');
};



const eventsStringBuilder = () => {
    let newString = '';
    for(i=0;i<elizabethSanger.events.length;i++){
        newString += `<div class="event">`
        newString += `<h3>${elizabethSanger.events[i].date}: </h3}`
        newString += `<h3>${elizabethSanger.events[i].title} - </h3}`
        newString += `<h3>${elizabethSanger.events[i].description}</h3}`
        printToDom(newString, 'events');
    };
};

const volunteersStringBuilder = () => {
    let newString = '';
    for(i=0;i<elizabethSanger.volunteers.length;i++){
        newString += `<div class="volunteers">`
        newString += `<h3>${elizabethSanger.volunteers[i].name}</h3}`
        newString += `<h3>${elizabethSanger.volunteers[i].phone}</h3}`
        newString += `<h3>${elizabethSanger.volunteers[i].availability}</h3}`
        newString += `<h3>${elizabethSanger.volunteers[i].activities}</h3}`
        printToDom(newString, 'volunteers');
    };
};

const bioFormStringBuilder = () => {
    const newString = `<h2 class="hBio">Biography</h2><p class="pBio">${elizabethSanger.biography}</p>`;
    printToDom(newString,'biography');
};

const imagesStringBuilder = () => {
    let newString = '';
    for(i=0;i<elizabethSanger.images.length;i++){
        newString += `<div class="images">`
        newString += `<img src="${elizabethSanger.images[i].imageUrl}">`
        printToDom(newString, 'images');
    };
};

const missionStatementSBuilder = () => {
    newUrl = `<h2 class="hMiss">Mission Statement</h2><p class="pMiss">${elizabethSanger.missionStatement}</p>`;
    printToDom(newUrl,'missionStatement');
};

const voterRegistrationStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">REGISTER TO VOTE HERE </a>`;
    printToDom(newString,'voterRegistration');
    };

// const updateVoterRegistration = (newUrl) => {
//     elizabethSanger.voterRegistrationUrl = newUrl;
//     voterRegistrationStringBuilder();
// };
 
districtStringBuilder();
donationFormStringBuilder();
voterRegistrationStringBuilder();
statementsStringBuilder();
eventsStringBuilder();
volunteersStringBuilder();
bioFormStringBuilder();
imagesStringBuilder();
missionStatementSBuilder();


let district_change = () => {
   
};

let donation_change = () => {
   
};

let statements_change = () => {
   
};

let events_change = () => {
   
};

let volunteers_change = () => {
   
};

let biography_change = () => {
   
};

let missionState_change = () => {
   
};
let voteReg_change = () => {
   
};

