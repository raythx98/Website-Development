/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Predicting Ripeness of Freshness of Fruits",
        authors : "Ho Ming Jun, Kyi Nuu Khin Khin, Ng Ngai Teng Colin, Rani Karthigeyan Rajendrakumar, Toh Hai Jie Joey, Toh Hong Xian (Ray)",
        conferences : "Association for the Advancement of Artificial Intelligence (AAAI) 2021",
        researchYr : 2021,
        citebox : "popup1",
        image : "assets/images/research-page/VGG16.png",
        citation: {
            vancouver: "Ho Ming Jun, Kyi Nuu Khin Khin, Ng Ngai Teng Colin, Rani Karthigeyan Rajendrakumar, Toh Hai Jie Joey, Toh Hong Xian (Ray). Predicting Ripeness of Freshness of Fruits. Association for the Advancement of Artificial Intelligence 2021."
        },
        abstract: "<p>Grocery shopping is an important aspect of our lives and has been ingrained in us since young. Many of us have creative ways of choosing fresh products, including a visual inspection, by looking at signs of oxidation or damage.</p><p>However, it is a problem for those who are unable to do so, such as visually impaired people or children and domestic helpers choosing fruits for the first time. Our group proposes to devise an application with two functions utilising the phone’s camera function. The first tells apart pictures of fresh fruits and rotten fruits, while the second tells the ripeness level of fruits. </p><p>This will help visually impaired people or inexperienced shoppers in choosing their fruits, and even aid experienced shoppers in confirming their choices. This application can also help users identify if fruits they have already purchased at home have gone bad, so that users can decide if the fruits are still edible or should be thrown away.</p>",
        absbox: "absPopup1"
    }
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div class="d-flex" style="margin-right:5%;">
            
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            &nbsp;CITATION&nbsp;
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

