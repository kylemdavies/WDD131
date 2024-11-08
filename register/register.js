let numOfParticipants = 1
let feeTotal = 0
let sum = 0
let aName = ""
let element = document.querySelector(".form")
let summary = document.querySelector("#summary")

document.querySelector("#add").addEventListener("click", addParticipant);

function addParticipant(){
    numOfParticipants += 1;
    const htmlParticipant = participantTemplate(numOfParticipants);
    document.querySelector(".participants").insertAdjacentHTML("afterbegin", htmlParticipant);
    console.log(numOfParticipants);
};

function participantTemplate(participant){
    return `<section class="participant${participant}">
            <p>Participant ${participant}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`
}

document.querySelector("#submitButton").addEventListener("click", submitForm);

function submitForm(event) {
    event.preventDefault();
    sum = totalFees();
    element.classList.add("hide")
    aName = document.querySelector('#adult_name').value
    summary.innerHTML = 'Thank you ' + aName + ' for registering. You have registered ' + numOfParticipants + ' participants and owe $'+ sum +' in Fees.';
}

function totalFees(){
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    feeTotal = feeElements.reduce(function(total, item){return total + parseFloat(item.value)}, 0);
    return feeTotal
}