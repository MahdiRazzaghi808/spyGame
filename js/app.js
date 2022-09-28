const words = ["کشتی مسافرتی", "لوله بخاری", "یخچال ساید بای ساید", "پروفایل", "کارت ملی", "انبر نسارا", "پلیس فتا", "زندان", "ساپورت", "دفتر خاطرات", "پوشک بچه", "خانه سالمندان", "آتلیه عکاسی", "گالری اتومبیل", "سفارت", "جکوزی", "قهوه خانه", "استرالیا", "بورس", "کله پاچه", "عطر فروشی", "پاساژ", "کلوپ شبانه", "باشگاه بدنسازی", "قزل آلا"];
const vip = ["vip1", "vip2", "vip3", "vip4", "vip5", "vip6", "vip7",];
const vipWords = [...words, ...vip];

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
function random(length) {
    let randomArray = [];
    while (randomArray.length < length) {
        let randomNumber = Math.floor(Math.random() * length);
        !randomArray.includes(randomNumber) ? randomArray.push(randomNumber) : null;
    }
    return randomArray
}
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

function previousSiblingAction(event) {
    let activeNow = event.target.parentNode;
    activeNow.classList.remove("active")
    activeNow.previousElementSibling.classList.add("active")
}


function nextSiblingAction(event) {
    let activeNow = event.target.parentNode;
    activeNow.classList.remove("active")
    activeNow.nextElementSibling.classList.add("active")
}



////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
function randomWordsList(randomNumberArray, wordType) {
    let randomWordsList = [];
    randomNumberArray.forEach(value => {
        randomWordsList.push(wordType[value]);
    })
    return randomWordsList
}



////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
function mainWords(classType) {

    if (classType === "start") {

        return randomWordsList(random(words.length), words)

    } else if (classType === "vip") {

        return randomWordsList(random(vipWords.length), vipWords)
    }
}
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
let wordsList = null;



function chooseWords(event) {
    wordsList = null;
    let classType = event.target.className;

    if (classType === "start") {
        nextSiblingAction(event);
        wordsList = mainWords(classType);
    } else if (classType === "vip") {

        Swal.fire({
            title: 'رمز عبور را وارد کنید',
            input: 'password',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off',
            },
            background: '#4F5D75',
            confirmButtonText: "باشه",
            confirmButtonColor: "#DD6B55",
            showCancelButton: true,
            cancelButtonText: "انصراف",
            width: "20rem"
        }).then(res => {
            if (res.isConfirmed) {
                if (+res.value !== 123) {
                    Swal.fire({
                        text: 'رمز عبور نامعتبر',
                        color: "#fff",
                        background: '#4F5D75',
                        confirmButtonText: "باشه",
                        confirmButtonColor: "#DD6B55",
                        width: "20rem"
                    });

                } else {
                    nextSiblingAction(event);
                    wordsList = mainWords(classType);
                }
            }


        })





    } else {
        Swal.fire({
            title: "راهنمای بازی",
            html: `<span style="font-size:1.2rem;color:#EF8354;line-height:2.5rem; ">هدف بازی :</span>
            <p style="text-align: justify;line-height:1.5rem;color: #fff;font-size: 0.95rem;margin-bottom:2rem; ">
                یک کلمه به طور رندوم مشخص میشود و به همه به غیر از فرد جاسوس نشان داده میشود وتنها فرد جاسوس
                از هویت خودش آگاه است (در تعداد بالاتر از 5 نفر میتوان تعداد جاسوس هار را بیشتر کرد در آن صورت جاسوس
                ها
                از هویت جاسوس های دیگر نیز بی خبرند.) هدف همه بازیکنان جز جاسوس این است که جاسوس را پیدا کنند.هدف
                جاسوس
                هم این است شناخته نشود و بتواند کلمه را حدس بزند. در انتهای زمان بازی جاسوس می تواند خود را معرفی
                کند و
                کلمه را اعلام کند. در صورتی که جاسوس خود را مشخص نکند رای گیری میشود هرکس که رای بیشتری را آورد از
                نظر
                جمع جاسوس شناخته میشود در صورتی که جاسوس را به درستی تشخیص دهند جاسوس دو حدس خود را می تواند بگوید
                اگر
                اشتباه بود جمع برنده میشود در صورتی که جمع اشتباه تشخیص دهند جاسوس بازی را برنده میشود.
            </p>

            <span style="font-size:1.2rem;color:#EF8354;line-height:2.5rem ">روش بازی :</span>
            <p style="text-align: justify;line-height:1.5rem;color: #fff;font-size: 0.95rem; ">
                ابتدا تعداد بازیکنان و زمان را مشخص کنید. سپس بازی را شروع کنید بعد از اینکه نفر اول کلمه را
                دید دستگاه را به نفر بعدی میدهد. این کار را به همین نحو انجام دهید تا همه نوبت خود را ببیند. سپس از
                همان
                فردی که اول کلمه را دید بازی شروع میشود و از فرد کناری خود سوال می‌پرسد شخص دوم از شخص سوم و الی آخر
                بعد
                از اینکه نفر آخر از نفر اول سوال پرسید سپس افراد آزاد اند که به طور دلخواه از هم سوال بپرسند.
                سوالات باید به صورت دو جوابی پرسیده شوند مثلا اگر کلمه کشتی است میتوانید بپرسید «آب یا خاک ؟»
                این روند تا جایی ادامه پیدا میکند که یا زمان به اتمام برسد یا فرد جاسوس با جواب های بی ربط هویتش
                معلوم
                شود که در این صورت با اکثریت آرا بازی تمام می‌شود.
                بهتر است از فردی که مظنون است بیشتر سوال پرسیده شود تا هویتش آشکار شود.
                می‌توانید سوالات بی ربط بپرسید( هیچکدام هم میتواند جز جواب های فرد پاسخ دهنده باشد)
                بهتر است از پرسیدن سوالات واضحی که باعث لو رفتن کلمه میشود خودداری کنید. سوالات میتوانند درباره صفات
                آن
                کلمه یا بخش هایی از آن کلمه هم باشند.
            </p>`,
            color: "#fff",
            showConfirmButton: false,
            showCloseButton: true,
            background: '#4F5D75',
            confirmButtonText: "باشه",
            confirmButtonColor: "#DD6B55",
        })
    }


    index = 0;
    selectGamer.value = 4;
    selectSpy.value = 1;
    selectTime.value = 5;
    selectSpy.disabled = true;

}

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

function gamerCheck() {
    if (selectGamer.value >= 6) {

        selectSpy.disabled = false;
        if (selectGamer.value - selectSpy.value < 4) {
            selectSpy.value = selectGamer.value - 4;
            Swal.fire({
                position: 'center',
                text: 'تعداد بازیکن ها باید 4 نفر بیشتر از جاسوس ها باشد',
                confirmButtonText: "باشه",
                confirmButtonColor: "#DD6B55",
                timer: 3000,
                color: "#fff",
                background: '#4F5D75',
                width: "20rem"
            })
        }

    } else {

        selectSpy.disabled = true;
        selectSpy.value = 1
    }
}


////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

function getInformationGame(event) {
    nextSiblingAction(event);


    mergeCard(+selectGamer.value, +selectSpy.value)
}
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
let mergeCard1 = null;
let index = 0
function mergeCard(gamer, spy) {

    mergeCard1 = [];

    for (let i = 0; i < gamer - spy; i++) {
        mergeCard1.push(wordsList[index])
    }

    for (let i = 0; i < spy; i++) {
        mergeCard1.push("شما جاسوس هستید")
    }
    mergeCardRandom(mergeCard1.length, mergeCard1)
    index++
}

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

function mergeCardRandom(length, mergeList) {

    addCards(randomWordsList(random(length), mergeList))
}

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
function addCards(array) {

    Array.from(spyCardsWrapper.children).forEach(value => {
        value.remove()
    })

    array.forEach(value => {
        spyCardsWrapper.insertAdjacentHTML('beforeend',
            `<div class="card" data-card-text="${value}">
               </div>`)
    })

    let cards = $.querySelectorAll(".card");
    cards.forEach(value => {
        value.addEventListener("click", showCard);
    })

}

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
function showCard(event) {
    let remainingCard = event.target.parentNode.childElementCount;

    Swal.fire({
        text: event.target.dataset.cardText,
        color: "#fff",
        background: '#4F5D75',
        confirmButtonText: "باشه",
        confirmButtonColor: "#DD6B55",
        allowOutsideClick: false,
        width: "20rem"
    }).then(result => {

        if (remainingCard === 1 && result.isConfirmed) {
            spyCards.classList.remove("active");
            spyTime.classList.add("active");
            timer(+selectTime.value);
        }
    })



    event.target.remove();
}

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
function timer(time) {
    let minutes = time;
    let seconds = 0;

    if (minutes > 9) {
        remainingTime.innerText = `${minutes} : 00`
    } else {
        remainingTime.innerText = `0${minutes} : 00`
    }


    let timerInterval = setInterval(() => {
        seconds -= 1


        if (timerFlag) {
            clearInterval(timerInterval);
        }
        if (minutes === 0 && seconds === 0) {
            clearInterval(timerInterval);
            remainingTime.classList.remove("animation")
            spyWinner()
        }

        if (minutes === 0 && seconds === 10) {
            remainingTime.classList.add("animation")
        }




        if (minutes > 9) {
            if (seconds === -1) {
                seconds = 59;
                minutes -= 1
                minutes === 9 ? remainingTime.innerText = `0${minutes} : ${seconds}` : remainingTime.innerText = `${minutes} : ${seconds}`
            } else {
                seconds > 9 ? remainingTime.innerText = `${minutes} : ${seconds}` : remainingTime.innerText = `${minutes} : 0${seconds}`
            }
        } else {
            if (seconds === -1) {
                seconds = 59;
                minutes -= 1
                remainingTime.innerText = `0${minutes} : ${seconds}`
            } else {
                seconds > 9 ? remainingTime.innerText = `0${minutes} : ${seconds}` : remainingTime.innerText = `0${minutes} : 0${seconds}`
            }
        }
    }, 1000)
}
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
function endShow(result) {
    timerFlag = false;
    remainingTime.innerText = ""
    if (result.isConfirmed) {
        mergeCard(+selectGamer.value, +selectSpy.value)
        spyCards.classList.add("active")
    } else if (result.isDenied) {
        spyStart.classList.add("active")

    }
}
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
function spyWinner() {
    Swal.fire({
        title: "جاسوس برد",
        showDenyButton: true,
        confirmButtonText: `ادامه باهمین نفرات`,
        denyButtonText: 'بازی جدید',
        background: '#4F5D75',
        confirmButtonColor: "#DD6B55",
        denyButtonColor: "#757575",
        allowOutsideClick: false,
        width: "20rem"

    }).then((result) => {
        spyTime.classList.remove("active")
        endShow(result)
    })
}
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
function endFunctions() {
    timerFlag = true;
    Swal.fire({
        title: "پایان بازی",
        showDenyButton: true,
        confirmButtonText: `ادامه باهمین نفرات`,
        denyButtonText: 'بازی جدید',
        background: '#4F5D75',
        confirmButtonColor: "#DD6B55",
        denyButtonColor: "#757575",
        allowOutsideClick: false,
        width: "20rem"
    }).then((result) => {
        spyTime.classList.remove("active")

        endShow(result)

    })


}
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
let $ = document;
let startBtn = $.querySelectorAll(".spy__start>button");
let spyStart = $.querySelector(".spy__start");
let selectGamer = $.querySelector(".gamer");
let selectSpy = $.querySelector(".spyMen");
let selectTime = $.querySelector(".select-time");
let startBtnGame = $.querySelector(".start-game");
let spyCardsWrapper = $.querySelector(".spy__cards-wrapper");
let cards = $.querySelectorAll(".card");
let spyCards = $.querySelector(".spy__cards");
let spyTime = $.querySelector(".spy__time");
let remainingTime = $.querySelector(".time");
let endBtn = $.querySelector(".end");
let backBtn = $.querySelectorAll(".spy-center>img");

let timerFlag = false;

startBtn.forEach(value => {
    value.addEventListener("click", chooseWords);
})
selectGamer.addEventListener("change", gamerCheck);
selectSpy.addEventListener("change", gamerCheck);
startBtnGame.addEventListener("click", getInformationGame);
endBtn.addEventListener("click", endFunctions);

backBtn.forEach(value => {
    value.addEventListener("click", previousSiblingAction)
})
