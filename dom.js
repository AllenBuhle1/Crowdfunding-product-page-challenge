var btnBackThisProject = document.getElementById("backThisProjectBtn");
var btnCloseModals = document.getElementById("closeModals");
var ModalsArray = document.getElementById("mods").children;

//Buttons from open modals page
var btnBoomStand = document.getElementById("modalboomStand");
var btnpledgeWithNoReward = document.getElementById("pledgeWithNoReward");
var btnBlackEditionStand = document.getElementById("blackEditionStand");
var btnmahoganySpecialEdition = document.getElementById("pledgemahoganySpecialEdition");

//Buttons from open modals page submit pledge
var btnBoomStandSubmit = document.getElementById("modalboomStandSubmit");
var btnpledgeWithNoRewardSubmit = document.getElementById("pledgeWithNoRewardSubmit");
var btnBlackEditionStandSubmit = document.getElementById("blackEditionStandSubmit");
var btnmahoganySpecialEditionSubmit = document.getElementById("pledgemahoganySpecialEditionSubmit");

//Buttons before modals page is open
var btnBoomStand0 = document.getElementById("abtboomStand");
var btnBlackEditionStand0 = document.getElementById("blackEdition");
var btnmahoganySpecialEdition0 = document.getElementById("mahoganySpecialEdition");

var btnBoomStandAction = document.getElementById("abtboomStandAction");
var btnBlackEditionStandAction = document.getElementById("blackEditionAction");
var btnmahoganySpecialEditionAction = document.getElementById("mahoganySpecialEditionAction");

//Success modal
var successGotIt = document.getElementById("successModalAlertId");
var btnsuccessGotIt = document.getElementById("successGotItId");

//Open Modal Window
var secSelectModals = document.getElementById("selectModalStartId");

var colorOverLay = document.getElementById("theIsAPopUp");

//Variables with data sets
const progressBar = document.getElementById("progressValueId");
const Backers = document.getElementById("numberOfBackersId");
const BackedAmount = document.getElementById("backedId");
const NeededAmount = document.getElementById("totalAmountNeeded");

const boomStandDataOpen = document.getElementById("boomStandDataOpen");
const boomStandData = document.getElementById("boomStandData");


const mahoganySpecialEditionDataOpen = document.getElementById("mahoganySpecialEditionDataOpen");
const mahoganySpecialEditionData = document.getElementById("mahoganySpecialEditionData");

const blackEditionStandDataOpen = document.getElementById("blackEditionStandDataOpen");
const blackEditionStandData = document.getElementById("blackEditionStandData");

/********************************************************************************Functions******************************************************************/
function expandModals(){
    secSelectModals.style.transform = 'scale(1)'
    colorOverLay.classList.remove("hiddeMenu");
};

function closeModals(){
    colorOverLay.classList.add("hiddeMenu");
    secSelectModals.style.transform = 'scale(0)';
};

function closeSuccessModals(){
    colorOverLay.classList.add("hiddeMenu");
    successGotIt.style.transform = 'scale(0)';
};


function makeAllModalsInActive()
{
    for(var i=0;i<ModalsArray.length;i++)
    {
        ModalsArray[i].classList.remove("activePledgeCard");
    }
};

function formattedNumber(numberArg)
{
    var numberString = numberArg.toString();
    if(numberArg < 1000)
    {
        return numberString;
    }else
    {
        numberLength = numberString.length;
        ///counting number of commas
        var numberOfCommas;
        if(Number.isInteger(numberLength/3))
        {
            numberOfCommas = (numberLength/3) - 1;
        }else
        {
            numberOfCommas = Math.floor(numberLength/3);
        }

        for(var i=1;i<=numberOfCommas;i++)
        {
            numberString = numberString.slice(0,numberLength-(3*i)) + "," + numberString.slice(numberLength-(3*i));
        }
        return numberString;
    }
};


function activeModals(){
    makeAllModalsInActive();
    this.classList.add("activePledgeCard");
};

function upDateProgressBar()
{
    //Calculating and setting Progress Bar
    if(parseInt(BackedAmount.dataset.backed) < parseInt(NeededAmount.dataset.moneyNeeded))
    {
        progressBar.dataset.progress = (parseInt(BackedAmount.dataset.backed)/parseInt(NeededAmount.dataset.moneyNeeded))*100;
    }else
    {
        progressBar.dataset.progress = 100;
    }
    progressBar.style.width = progressBar.dataset.progress + "%";
    console.log(progressBar.dataset.progress);
};


/**********************************************************************On Load Event******************************************************* */
window.addEventListener("load",()=>{
    
    upDateProgressBar();

    //setting the number of backers
    Backers.textContent = formattedNumber(parseInt(Backers.dataset.backers));

    //setting amount that have been raised so far
    BackedAmount.textContent = "$"+formattedNumber(parseInt(BackedAmount.dataset.backed));

    //setting Amount needed
    NeededAmount.textContent = "of $" + formattedNumber(parseInt(NeededAmount.dataset.moneyNeeded)) + " backed";

    //BoomStandData
    boomStandDataOpen.innerHTML = boomStandDataOpen.dataset.absItemsLeft + "<span>left</span>";
    boomStandData.innerHTML = boomStandData.dataset.absItemsLeft + "<span>left</span>";

    //blackEditionStandData
    blackEditionStandDataOpen.innerHTML = blackEditionStandDataOpen.dataset.besItemsLeft + "<span>left</span>";
    blackEditionStandData.innerHTML = blackEditionStandData.dataset.besItemsLeft + "<span>left</span>";

    //BoomStandData
    mahoganySpecialEditionDataOpen.innerHTML = mahoganySpecialEditionDataOpen.dataset.mseItemsLeft + "<span>left</span>";
    mahoganySpecialEditionData.innerHTML = mahoganySpecialEditionData.dataset.mseItemsLeft + "<span>left</span>";
});



/***************************************************************************Onclick Events*************************************************************/
btnCloseModals.onclick = closeModals;
btnBackThisProject.onclick = expandModals;

//Events for open modal window
btnBlackEditionStand.onclick = activeModals;
btnpledgeWithNoReward.onclick = activeModals;
btnBoomStand.onclick = activeModals;
btnmahoganySpecialEdition.onclick = activeModals;

//Events to open modal window
btnBoomStandAction.onclick = function()
{
    expandModals();
    makeAllModalsInActive();
    btnBoomStand.classList.add("activePledgeCard");
};

btnBlackEditionStandAction.onclick = function()
{
    expandModals();
    makeAllModalsInActive();
    btnBlackEditionStand.classList.add("activePledgeCard");
};

btnmahoganySpecialEditionAction.onclick = function()
{
    expandModals();
    makeAllModalsInActive();
    btnmahoganySpecialEdition.classList.add("activePledgeCard");
};

//Event handling for pledge submit
btnBoomStandSubmit.onclick = function ()
{
    //$25
    BackedAmount.dataset.backed = parseInt(BackedAmount.dataset.backed) + 25;
    BackedAmount.textContent = "$"+formattedNumber(parseInt(BackedAmount.dataset.backed));
    upDateProgressBar();

    //Decreamenting Left options
    boomStandDataOpen.dataset.absItemsLeft = parseInt(boomStandDataOpen.dataset.absItemsLeft) - 1;
    boomStandDataOpen.innerHTML = boomStandDataOpen.dataset.absItemsLeft + "<span>left</span>";
    
    boomStandData.dataset.absItemsLeft = parseInt(boomStandData.dataset.absItemsLeft) - 1;
    boomStandData.innerHTML = boomStandData.dataset.absItemsLeft + "<span>left</span>";

    Backers.dataset.backers = parseInt(Backers.dataset.backers) + 1;
    Backers.textContent = formattedNumber(parseInt(Backers.dataset.backers));
    secSelectModals.style.transform = 'scale(0)';
    successGotIt.style.transform = 'scale(1)';

    if(parseInt(boomStandData.dataset.absItemsLeft) === 0)
    {
        btnBoomStand.classList.add("outOfStock");
        btnBoomStand0.classList.add("outOfStock");
    }
};


btnpledgeWithNoRewardSubmit.onclick = function ()
{
    Backers.dataset.backers = parseInt(Backers.dataset.backers) + 1;
    Backers.textContent = formattedNumber(parseInt(Backers.dataset.backers));
    secSelectModals.style.transform = 'scale(0)';
    successGotIt.style.transform = 'scale(1)';
};

btnBlackEditionStandSubmit.onclick = function ()
{
    //$75
    BackedAmount.dataset.backed = parseInt(BackedAmount.dataset.backed) + 75;
    BackedAmount.textContent = "$"+formattedNumber(parseInt(BackedAmount.dataset.backed));
    upDateProgressBar();

    //Decreamenting Left options
    blackEditionStandDataOpen.dataset.besItemsLeft = parseInt(blackEditionStandDataOpen.dataset.besItemsLeft) - 1;
    blackEditionStandDataOpen.innerHTML = blackEditionStandDataOpen.dataset.besItemsLeft + "<span>left</span>";
    
    blackEditionStandData.dataset.besItemsLeft = parseInt(blackEditionStandData.dataset.besItemsLeft) - 1;
    blackEditionStandData.innerHTML = blackEditionStandData.dataset.besItemsLeft + "<span>left</span>";

    Backers.dataset.backers = parseInt(Backers.dataset.backers) + 1;
    Backers.textContent = formattedNumber(parseInt(Backers.dataset.backers));
    secSelectModals.style.transform = 'scale(0)';
    successGotIt.style.transform = 'scale(1)';

    if(parseInt(blackEditionStandData.dataset.besItemsLeft) === 0)
    {
        btnBlackEditionStand.classList.add("outOfStock");
        btnBlackEditionStand0.classList.add("outOfStock");
    }
};

btnmahoganySpecialEditionSubmit.onclick = function ()
{
    //$200
    BackedAmount.dataset.backed = parseInt(BackedAmount.dataset.backed) + 200;
    BackedAmount.textContent = "$"+formattedNumber(parseInt(BackedAmount.dataset.backed));
    upDateProgressBar();

    //Decreamenting Left options
    mahoganySpecialEditionDataOpen.dataset.mseItemsLeft = parseInt(mahoganySpecialEditionDataOpen.dataset.mseItemsLeft) - 1;
    mahoganySpecialEditionDataOpen.innerHTML = mahoganySpecialEditionDataOpen.dataset.mseItemsLeft + "<span>left</span>";
    
    mahoganySpecialEditionData.dataset.mseItemsLeft = parseInt(mahoganySpecialEditionData.dataset.mseItemsLeft) - 1;
    mahoganySpecialEditionData.innerHTML = mahoganySpecialEditionData.dataset.mseItemsLeft + "<span>left</span>";

    Backers.dataset.backers = parseInt(Backers.dataset.backers) + 1;
    Backers.textContent = formattedNumber(parseInt(Backers.dataset.backers));
    secSelectModals.style.transform = 'scale(0)';
    successGotIt.style.transform = 'scale(1)';
    
    if(parseInt(mahoganySpecialEditionData.dataset.mseItemsLeft) === 0)
    {
        btnmahoganySpecialEdition.classList.add("outOfStock");
        btnmahoganySpecialEdition0.classList.add("outOfStock");
    }
};


//Close success alert
btnsuccessGotIt.onclick = closeSuccessModals;