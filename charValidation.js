// MONDSTADT
const mondstadt_name = ["Jean", "Amber", "Lisa", "Kaeya", "Barbara"]
const mondstadt_desc = [
    "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.<br>She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
    "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius.<br>Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt.<br>As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
    "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.",
    "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems.",
    "The Deaconess of the Church of Favonius and a shining idol adored by all.<br>Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless.<br> I owe everything to the city's spirit of freedom. — Barbara, regarding her popularity."
]
const mondstadt_image = [
    "./resources/images/charpage/Jean1.png",
    "./resources/images/charpage/Amber1.png",
    "./resources/images/charpage/Lisa1.png",
    "./resources/images/charpage/Kaeya1.png",
    "./resources/images/charpage/Barbara1.png"
]

const mondstadt_char_name = document.querySelector("#mondstadt-name")
const mondstadt_char_desc = document.querySelector("#mondstadt-desc")
const mondstadt_char_image = document.querySelector("#mondstadt-image")
const mondstadt_char_mini_bg = document.querySelectorAll("#mini-1 .mini-bg")
const mondstadt_char_mini_bg_font = document.querySelectorAll("#mini-1 .mini-bg .mini-name")
const mondstadt_prev_button = document.querySelector("#mondstadt-prev-button")
const mondstadt_next_button = document.querySelector("#mondstadt-next-button")
let mondstadt_index = 0;

mondstadt_next_button.addEventListener("click", function(event) {
    const mondstadt_char_active = document.querySelector("#mini-1 .mini-bg.card-active")
    const mondstadt_char_font_active = document.querySelector("#mini-1 .mini-bg .mini-name.card-active")
    // console.log(mondstadt_char_active)
    mondstadt_index++;

    mondstadt_char_name.innerHTML = mondstadt_name[mondstadt_index]
    mondstadt_char_desc.innerHTML = mondstadt_desc[mondstadt_index]
    mondstadt_char_image.src =  mondstadt_image[mondstadt_index]
    mondstadt_char_mini_bg[mondstadt_index].classList.add("card-active")
    mondstadt_char_mini_bg_font[mondstadt_index].classList.add("card-active")

    mondstadt_char_active.classList.remove("card-active")
    mondstadt_char_font_active.classList.remove("card-active")
    
    if (mondstadt_index == mondstadt_name.length - 1) {
        mondstadt_index = -1
    }
})

mondstadt_prev_button.addEventListener("click", function(event) {
    const mondstadt_char_active = document.querySelector("#mini-1 .mini-bg.card-active")
    const mondstadt_char_font_active = document.querySelector("#mini-1 .mini-bg .mini-name.card-active")
    // console.log(mondstadt_char_active)
    mondstadt_index--
    
    if (mondstadt_index < 0) {
        mondstadt_index = mondstadt_char_mini_bg.length-1
    }

    mondstadt_char_name.innerHTML = mondstadt_name[mondstadt_index]
    mondstadt_char_desc.innerHTML = mondstadt_desc[mondstadt_index]
    mondstadt_char_image.src =  mondstadt_image[mondstadt_index]
    mondstadt_char_mini_bg[mondstadt_index].classList.add("card-active")
    mondstadt_char_mini_bg_font[mondstadt_index].classList.add("card-active")

    mondstadt_char_active.classList.remove("card-active")
    mondstadt_char_font_active.classList.remove("card-active")
    
    
})

mondstadt_char_mini_bg.forEach((single_mini_bg, indexElement) => {
    // console.log(single_mini_bg)
    single_mini_bg.addEventListener("click", function(event) {
        // console.log(index)
        mondstadt_char_name.innerHTML = mondstadt_name[indexElement]
        mondstadt_char_image.src =  mondstadt_image[indexElement]

    const mondstadt_char_active = document.querySelector("#mini-1 .mini-bg.card-active")
    const mondstadt_char_font_active = document.querySelector("#mini-1 .mini-bg .mini-name.card-active")
    
    mondstadt_char_mini_bg[indexElement].classList.add("card-active")
    mondstadt_char_mini_bg_font[indexElement].classList.add("card-active")

    mondstadt_char_active.classList.remove("card-active")
    mondstadt_char_font_active.classList.remove("card-active")

    })
})

//MONDSTADT RESPONSIVE
const mondstadt_responsive_name = ["JEAN", "AMBER", "LISA", "KAEYA", "BARBARA"]
const mondstadt_responsive_image = [
    "./resources/images/charpage/Jean2.png",
    "./resources/images/charpage/Amber2.png",
    "./resources/images/charpage/Lisa2.png",
    "./resources/images/charpage/Kaeya2.png",
    "./resources/images/charpage/Barbara2.png"
]

const mondstadt_resp_char_name = document.querySelector("#mondstadt-name")
const mondstadt_resp_char_image = document.querySelector("#mondstadt-image")
const mondstadt_resp_prev_button = document.querySelector("#mondstadt-responsive-prev")
const mondstadt_resp_next_button = document.querySelector("#mondstadt-responsive-next");
const mondstadt_resp_mini_image = document.querySelector("#mondstadt-responsive-image")
const mondstadt_resp_mini_name = document.querySelector(".responsive-char #mondstadt-responsive-name")

mondstadt_resp_next_button.addEventListener("click", function(event) {
    mondstadt_index++;

    mondstadt_char_name.innerHTML = mondstadt_name[mondstadt_index]
    mondstadt_char_desc.innerHTML = mondstadt_desc[mondstadt_index]
    mondstadt_char_image.src =  mondstadt_image[mondstadt_index]
    mondstadt_resp_mini_image.src = mondstadt_responsive_image[mondstadt_index]
    mondstadt_resp_mini_name.innerHTML = mondstadt_responsive_name[mondstadt_index]
    
    if (mondstadt_index == mondstadt_name.length - 1) {
        mondstadt_index = -1
    }
})

mondstadt_resp_prev_button.addEventListener("click", function(event) {
    mondstadt_index--;
    if (mondstadt_index < 0) {
        mondstadt_index = mondstadt_char_mini_bg.length-1
    }

    mondstadt_char_name.innerHTML = mondstadt_name[mondstadt_index]
    mondstadt_char_desc.innerHTML = mondstadt_desc[mondstadt_index]
    mondstadt_char_image.src =  mondstadt_image[mondstadt_index]
    mondstadt_resp_mini_image.src = mondstadt_responsive_image[mondstadt_index]
    mondstadt_resp_mini_name.innerHTML = mondstadt_responsive_name[mondstadt_index]
    
})

//LIYUE
const liyue_name = ["Xiao", "Beidou", "Ningguang", "Xiangling", "Xingqiu"]
const liyue_desc = [
    "One of the mighty and illuminated adepti guarding Liyue, also heralded as the Vigilant Yaksha.<br>Despite his youthful appearance, tales of his exploits have been documented for millennia.<br>He is especially fond of Wangshu Inn's Almond Tofu.<br>>This is because it tastes just like the sweet dreams he used to devour.",
    "There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her.<br>For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say—No matter what sea beasts there may be, Beidou will be sure to split them all in two.",
    "Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile.<br>As the Tianquan of the Liyue Qixing, not only does she embody law and order, she also represents fortune and wit.",
    "The Head Chef at the Wanmin Restaurant and also a waitress there, Xiangling is extremely passionate about cooking and excels at her signature hot and spicy dishes.<br>Though still young, Xiangling is a true master of the culinary arts with all the skills of a kitchen veteran. She enjoys a good reputation among the hearty eaters at Chihu Rock.<br>There's absolutely no need to be nervous if she wants you to sample her latest creation. It will not disappoint. Promise.",
    "Second son of the Feiyun Commerce Guild, Xingqiu has had a reputation for being studious and polite ever since he was a young child.<br>But there is another side to the mild-mannered Xingqiu everyone knows. A daring, adventurous and much more mischievous side..."
]

const liyue_image = [
    "./resources/images/charpage/Xiao1.png",
    "./resources/images/charpage/Beidou1.png",
    "./resources/images/charpage/Ningguang1.png",
    "./resources/images/charpage/Xiangling1.png",
    "./resources/images/charpage/Xingqiu1.png"
]

const liyue_char_name = document.querySelector("#liyue-name")
const liyue_char_desc = document.querySelector("#liyue-desc")
const liyue_char_image = document.querySelector("#liyue-image")
const liyue_char_mini_bg = document.querySelectorAll("#mini-2 .mini-bg")
const liyue_char_mini_bg_font = document.querySelectorAll("#mini-2 .mini-bg .mini-name")
const liyue_prev_button = document.querySelector("#liyue-prev-button")
const liyue_next_button = document.querySelector("#liyue-next-button")
let liyue_index = 0;

liyue_next_button.addEventListener("click", function(event) {
    const liyue_char_active = document.querySelector("#mini-2 .mini-bg.card-active")
    const liyue_char_font_active = document.querySelector("#mini-2 .mini-bg .mini-name.card-active")
    // console.log(liyue_char_active)
    liyue_index++;

    liyue_char_name.innerHTML = liyue_name[liyue_index]
    liyue_char_desc.innerHTML = liyue_desc[liyue_index]
    liyue_char_image.src =  liyue_image[liyue_index]
    liyue_char_mini_bg[liyue_index].classList.add("card-active")
    liyue_char_mini_bg_font[liyue_index].classList.add("card-active")

    liyue_char_active.classList.remove("card-active")
    liyue_char_font_active.classList.remove("card-active")
    
    if (liyue_index == liyue_name.length - 1) {
        liyue_index = -1
    }
})

liyue_prev_button.addEventListener("click", function(event) {
    const liyue_char_active = document.querySelector("#mini-2 .mini-bg.card-active")
    const liyue_char_font_active = document.querySelector("#mini-2 .mini-bg .mini-name.card-active")
    // console.log(liyue_char_active)
    liyue_index--
    
    if (liyue_index < 0) {
        liyue_index = liyue_char_mini_bg.length-1
    }

    liyue_char_name.innerHTML = liyue_name[liyue_index]
    liyue_char_desc.innerHTML = liyue_desc[liyue_index]
    liyue_char_image.src =  liyue_image[liyue_index]
    liyue_char_mini_bg[liyue_index].classList.add("card-active")
    liyue_char_mini_bg_font[liyue_index].classList.add("card-active")

    liyue_char_active.classList.remove("card-active")
    liyue_char_font_active.classList.remove("card-active")
    
    
})

liyue_char_mini_bg.forEach((single_mini_bg, liyueIndexElement) => {
    // console.log(single_mini_bg)
    single_mini_bg.addEventListener("click", function(event) {
        // console.log(index)
        liyue_char_name.innerHTML = liyue_name[liyueIndexElement]
        liyue_char_image.src =  liyue_image[liyueIndexElement]

    const liyue_char_active = document.querySelector("#mini-2 .mini-bg.card-active")
    const liyue_char_font_active = document.querySelector("#mini-2 .mini-bg .mini-name.card-active")
    
    liyue_char_mini_bg[liyueIndexElement].classList.add("card-active")
    liyue_char_mini_bg_font[liyueIndexElement].classList.add("card-active")

    liyue_char_active.classList.remove("card-active")
    liyue_char_font_active.classList.remove("card-active")

    })
})

//LIYUE RESPONSIVE
const liyue_responsive_name = ["XIAO", "BEIDOU", "NING<br>GUANG", "XIANGLING", "XINGQIU"]
const liyue_responsive_image = [
    "./resources/images/charpage/Xiao2.png",
    "./resources/images/charpage/Beidou2.png",
    "./resources/images/charpage/Ningguang2.png",
    "./resources/images/charpage/Xiangling2.png",
    "./resources/images/charpage/Xingqiu2.png"
]

const liyue_resp_char_name = document.querySelector("#liyue-name")
const liyue_resp_char_image = document.querySelector("#liyue-image")
const liyue_resp_prev_button = document.querySelector("#liyue-responsive-prev")
const liyue_resp_next_button = document.querySelector("#liyue-responsive-next");
const liyue_resp_mini_image = document.querySelector("#liyue-responsive-image")
const liyue_resp_mini_name = document.querySelector(".responsive-char #liyue-responsive-name")

liyue_resp_next_button.addEventListener("click", function(event) {
    liyue_index++;

    liyue_char_name.innerHTML = liyue_name[liyue_index]
    liyue_char_desc.innerHTML = liyue_desc[liyue_index]
    liyue_char_image.src =  liyue_image[liyue_index]
    liyue_resp_mini_image.src = liyue_responsive_image[liyue_index]
    liyue_resp_mini_name.innerHTML = liyue_responsive_name[liyue_index]
    
    if (liyue_index == liyue_name.length - 1) {
        liyue_index = -1
    }
})

liyue_resp_prev_button.addEventListener("click", function(event) {
    liyue_index--;
    if (liyue_index < 0) {
        liyue_index = liyue_char_mini_bg.length-1
    }

    liyue_char_name.innerHTML = liyue_name[liyue_index]
    liyue_char_desc.innerHTML = liyue_desc[liyue_index]
    liyue_char_image.src =  liyue_image[liyue_index]
    liyue_resp_mini_image.src = liyue_responsive_image[liyue_index]
    liyue_resp_mini_name.innerHTML = liyue_responsive_name[liyue_index]
    
})

//INAZUMA
const inazuma_name = ["Kamisato Ayaka", "Kaedehara Kazuha", "Yoimiya", "Sayu", "Raiden Shogun"]
const inazuma_desc = [
    "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.<br>Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.",
    "A wandering samurai from Inazuma with a modest and gentle personality.<br>Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct.",
    "A talented pyrotechnician. The current owner of Naganohara Fireworks known as the Queen of the Summer Festival.<br>A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze.",
    "Sayu, Shuumatsuban's resident ninja, is obsessed with sleeping and growing taller.<br>She has mastered all kinds of ninjutsu to run away and hide in pursuit of opportunities to laze around and sleep.<br>Such an extraordinary skillset may have very unexpected uses.",
    "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.<br>With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity."
]

const inazuma_image = [
    "./resources/images/charpage/Kamisato Ayaka1.png",
    "./resources/images/charpage/Kaedehara Kazuha1.png",
    "./resources/images/charpage/Yoimiya1.png",
    "./resources/images/charpage/Sayu1.png",
    "./resources/images/charpage/Raiden Shogun1.png"
]

const inazuma_char_name = document.querySelector("#inazuma-name")
const inazuma_char_desc = document.querySelector("#inazuma-desc")
const inazuma_char_image = document.querySelector("#inazuma-image")
const inazuma_char_mini_bg = document.querySelectorAll("#mini-3 .mini-bg")
const inazuma_char_mini_bg_font = document.querySelectorAll("#mini-3 .mini-bg .mini-name")
const inazuma_prev_button = document.querySelector("#inazuma-prev-button")
const inazuma_next_button = document.querySelector("#inazuma-next-button")
let inazuma_index = 0;

inazuma_next_button.addEventListener("click", function(event) {
    const inazuma_char_active = document.querySelector("#mini-3 .mini-bg.card-active")
    const inazuma_char_font_active = document.querySelector("#mini-3 .mini-bg .mini-name.card-active")
    // console.log(inazuma_char_active)
    inazuma_index++;

    inazuma_char_name.innerHTML = inazuma_name[inazuma_index]
    inazuma_char_desc.innerHTML = inazuma_desc[inazuma_index]
    inazuma_char_image.src =  inazuma_image[inazuma_index]
    inazuma_char_mini_bg[inazuma_index].classList.add("card-active")
    inazuma_char_mini_bg_font[inazuma_index].classList.add("card-active")

    inazuma_char_active.classList.remove("card-active")
    inazuma_char_font_active.classList.remove("card-active")
    
    if (inazuma_index == inazuma_name.length - 1) {
        inazuma_index = -1
    }
})

inazuma_prev_button.addEventListener("click", function(event) {
    const inazuma_char_active = document.querySelector("#mini-3 .mini-bg.card-active")
    const inazuma_char_font_active = document.querySelector("#mini-3 .mini-bg .mini-name.card-active")
    // console.log(inazuma_char_active)
    inazuma_index--
    
    if (inazuma_index < 0) {
        inazuma_index = inazuma_char_mini_bg.length-1
    }

    inazuma_char_name.innerHTML = inazuma_name[inazuma_index]
    inazuma_char_desc.innerHTML = inazuma_desc[inazuma_index]
    inazuma_char_image.src =  inazuma_image[inazuma_index]
    inazuma_char_mini_bg[inazuma_index].classList.add("card-active")
    inazuma_char_mini_bg_font[inazuma_index].classList.add("card-active")

    inazuma_char_active.classList.remove("card-active")
    inazuma_char_font_active.classList.remove("card-active")
    
    
})

inazuma_char_mini_bg.forEach((single_mini_bg, inazumaIndexElement) => {
    // console.log(single_mini_bg)
    single_mini_bg.addEventListener("click", function(event) {
        // console.log(index)
        inazuma_char_name.innerHTML = inazuma_name[inazumaIndexElement]
        inazuma_char_image.src =  inazuma_image[inazumaIndexElement]

    const inazuma_char_active = document.querySelector("#mini-3 .mini-bg.card-active")
    const inazuma_char_font_active = document.querySelector("#mini-3 .mini-bg .mini-name.card-active")
    
    inazuma_char_mini_bg[inazumaIndexElement].classList.add("card-active")
    inazuma_char_mini_bg_font[inazumaIndexElement].classList.add("card-active")

    inazuma_char_active.classList.remove("card-active")
    inazuma_char_font_active.classList.remove("card-active")

    })
})

//INAZUMA RESPONSIVE
const inazuma_responsive_name = ["KAMISATO<br>AYAKA", "KAEDEHARA<br>KAZUHA", "YOIMIYA", "SAYU", "RAIDEN<br>SHOGUN"]
const inazuma_responsive_image = [
    "./resources/images/charpage/Kamisato Ayaka2.png",
    "./resources/images/charpage/Kaedehara Kazuha2.png",
    "./resources/images/charpage/Yoimiya2.png",
    "./resources/images/charpage/Sayu2.png",
    "./resources/images/charpage/Raiden Shogun2.png"
]

const inazuma_resp_char_name = document.querySelector("#inazuma-name")
const inazuma_resp_char_image = document.querySelector("#inazuma-image")
const inazuma_resp_prev_button = document.querySelector("#inazuma-responsive-prev")
const inazuma_resp_next_button = document.querySelector("#inazuma-responsive-next");
const inazuma_resp_mini_image = document.querySelector("#inazuma-responsive-image")
const inazuma_resp_mini_name = document.querySelector(".responsive-char #inazuma-responsive-name")

inazuma_resp_next_button.addEventListener("click", function(event) {
    inazuma_index++;

    inazuma_char_name.innerHTML = inazuma_name[inazuma_index]
    inazuma_char_desc.innerHTML = inazuma_desc[inazuma_index]
    inazuma_char_image.src =  inazuma_image[inazuma_index]
    inazuma_resp_mini_image.src = inazuma_responsive_image[inazuma_index]
    inazuma_resp_mini_name.innerHTML = inazuma_responsive_name[inazuma_index]
    
    if (inazuma_index == inazuma_name.length - 1) {
        inazuma_index = -1
    }
})

inazuma_resp_prev_button.addEventListener("click", function(event) {
    inazuma_index--;
    if (inazuma_index < 0) {
        inazuma_index = inazuma_char_mini_bg.length-1
    }

    inazuma_char_name.innerHTML = inazuma_name[inazuma_index]
    inazuma_char_desc.innerHTML = inazuma_desc[inazuma_index]
    inazuma_char_image.src =  inazuma_image[inazuma_index]
    inazuma_resp_mini_image.src = inazuma_responsive_image[inazuma_index]
    inazuma_resp_mini_name.innerHTML = inazuma_responsive_name[inazuma_index]
    
})

// SUMERU
const sumeru_name = ["Tighnari", "Collei", "Dori", "Cyno", "Nahida"]
const sumeru_desc = [
    "An Avidya Forest Watcher and botanical scholar who graduated from Amurta. He leads a fruitful life of patrolling the rainforest, protecting the ecology, and lecturing fools every day.",
    "A Trainee Forest Ranger who is under the tutelage of Tighnari. She started her academic career a little later than her peers, so she is currently working hard to catch up.<br>She hides the other side of her personality deep under the surface of optimism and kindness.",
    "Dori is a merchant in Sumeru who has a fondness for glittering Mora.<br>With her persuasive eloquence, she is able to sell various strange and mysterious products for a very high price.",
    "The General Mahamatra of the Akademiya, leader of all the Matras. He has a unique sense of humor that never fails to leave a deep impression.",
    "Lesser Lord Kusanali dwells deep in the Sanctuary of Surasthana, and has never really been in the limelight, nor has she even been mentioned much.<br>Her burden is heavy, but though she may experience loneliness, and though darkness is all she sees before her, she will not stop moving forward."
]

const sumeru_image = [
    "./resources/images/charpage/Tighnari1.png",
    "./resources/images/charpage/Collei1.png",
    "./resources/images/charpage/Dori1.png",
    "./resources/images/charpage/Cyno1.png",
    "./resources/images/charpage/Nahida1.png"
]

const sumeru_char_name = document.querySelector("#sumeru-name")
const sumeru_char_desc = document.querySelector("#sumeru-desc")
const sumeru_char_image = document.querySelector("#sumeru-image")
const sumeru_char_mini_bg = document.querySelectorAll("#mini-4 .mini-bg")
const sumeru_char_mini_bg_font = document.querySelectorAll("#mini-4 .mini-bg .mini-name")
const sumeru_prev_button = document.querySelector("#sumeru-prev-button")
const sumeru_next_button = document.querySelector("#sumeru-next-button")
let sumeru_index = 0;

sumeru_next_button.addEventListener("click", function(event) {
    const sumeru_char_active = document.querySelector("#mini-4 .mini-bg.card-active")
    const sumeru_char_font_active = document.querySelector("#mini-4 .mini-bg .mini-name.card-active")
    // console.log(sumeru_char_active)
    sumeru_index++;

    sumeru_char_name.innerHTML = sumeru_name[sumeru_index]
    sumeru_char_desc.innerHTML = sumeru_desc[sumeru_index]
    sumeru_char_image.src =  sumeru_image[sumeru_index]
    sumeru_char_mini_bg[sumeru_index].classList.add("card-active")
    sumeru_char_mini_bg_font[sumeru_index].classList.add("card-active")

    sumeru_char_active.classList.remove("card-active")
    sumeru_char_font_active.classList.remove("card-active")
    
    if (sumeru_index == sumeru_name.length - 1) {
        sumeru_index = -1
    }
})

sumeru_prev_button.addEventListener("click", function(event) {
    const sumeru_char_active = document.querySelector("#mini-4 .mini-bg.card-active")
    const sumeru_char_font_active = document.querySelector("#mini-4 .mini-bg .mini-name.card-active")
    // console.log(sumeru_char_active)
    sumeru_index--
    
    if (sumeru_index < 0) {
        sumeru_index = sumeru_char_mini_bg.length-1
    }

    sumeru_char_name.innerHTML = sumeru_name[sumeru_index]
    sumeru_char_desc.innerHTML = sumeru_desc[sumeru_index]
    sumeru_char_image.src =  sumeru_image[sumeru_index]
    sumeru_char_mini_bg[sumeru_index].classList.add("card-active")
    sumeru_char_mini_bg_font[sumeru_index].classList.add("card-active")

    sumeru_char_active.classList.remove("card-active")
    sumeru_char_font_active.classList.remove("card-active")
    
    
})

sumeru_char_mini_bg.forEach((single_mini_bg, sumeruIndexElement) => {
    // console.log(single_mini_bg)
    single_mini_bg.addEventListener("click", function(event) {
        // console.log(index)
        sumeru_char_name.innerHTML = sumeru_name[sumeruIndexElement]
        sumeru_char_image.src =  sumeru_image[sumeruIndexElement]

    const sumeru_char_active = document.querySelector("#mini-4 .mini-bg.card-active")
    const sumeru_char_font_active = document.querySelector("#mini-4 .mini-bg .mini-name.card-active")
    
    sumeru_char_mini_bg[sumeruIndexElement].classList.add("card-active")
    sumeru_char_mini_bg_font[sumeruIndexElement].classList.add("card-active")

    sumeru_char_active.classList.remove("card-active")
    sumeru_char_font_active.classList.remove("card-active")

    })
})

//SUMERU RESPONSIVE
const sumeru_responsive_name = ["TIGHNARI", "COLLEI", "DORI", "CYNO", "NAHIDA"]
const sumeru_responsive_image = [
    "./resources/images/charpage/Tighnari2.png",
    "./resources/images/charpage/Collei2.png",
    "./resources/images/charpage/Dori2.png",
    "./resources/images/charpage/Cyno2.png",
    "./resources/images/charpage/Nahida2.png"
]

const sumeru_resp_char_name = document.querySelector("#sumeru-name")
const sumeru_resp_char_image = document.querySelector("#sumeru-image")
const sumeru_resp_prev_button = document.querySelector("#sumeru-responsive-prev")
const sumeru_resp_next_button = document.querySelector("#sumeru-responsive-next");
const sumeru_resp_mini_image = document.querySelector("#sumeru-responsive-image")
const sumeru_resp_mini_name = document.querySelector(".responsive-char #sumeru-responsive-name")

sumeru_resp_next_button.addEventListener("click", function(event) {
    sumeru_index++;

    sumeru_char_name.innerHTML = sumeru_name[sumeru_index]
    sumeru_char_desc.innerHTML = sumeru_desc[sumeru_index]
    sumeru_char_image.src =  sumeru_image[sumeru_index]
    sumeru_resp_mini_image.src = sumeru_responsive_image[sumeru_index]
    sumeru_resp_mini_name.innerHTML = sumeru_responsive_name[sumeru_index]
    
    if (sumeru_index == sumeru_name.length - 1) {
        sumeru_index = -1
    }
})

sumeru_resp_prev_button.addEventListener("click", function(event) {
    sumeru_index--;
    if (sumeru_index < 0) {
        sumeru_index = sumeru_char_mini_bg.length-1
    }

    sumeru_char_name.innerHTML = sumeru_name[sumeru_index]
    sumeru_char_desc.innerHTML = sumeru_desc[sumeru_index]
    sumeru_char_image.src =  sumeru_image[sumeru_index]
    sumeru_resp_mini_image.src = sumeru_responsive_image[sumeru_index]
    sumeru_resp_mini_name.innerHTML = sumeru_responsive_name[sumeru_index]
    
})