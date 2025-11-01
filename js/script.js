const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const dateMmInput = document.querySelector('input[placeholder="MM"]');
const dateYyInput = document.querySelector('input[placeholder="YY"]');
const cvcInput = document.querySelector("#cvc");
const allInputs = document.querySelectorAll("input");
const confirmBtn = document.querySelector(".card-info-section__btn");
const continueBtn = document.querySelector(".thanks-box__btn");
const form = document.querySelector(".card-info-section__form");
const thanksBox = document.querySelector(".thanks-box");
const cardName = document.querySelector(".header__name");
const cardMonth = document.querySelector(".header__date-month");
const cardYear = document.querySelector(".header__date-year");
const cardCvc = document.querySelector(".header__cvc");
const cardNumber = document.querySelector(".header__number");
const nameRegexp = /^[A-Za-z ]+$/;
const monthRegex = /^(0[1-9]|1[0-2])$/;
const yearRegex = /^(2[1-9]|3[0-5])$/;
const cvcRegex = /^\d{3,4}$/;

const handleForm = (e) => {
	e.preventDefault();

	checkIfEmpty(allInputs);
	checkLength(nameInput, 3);
	checkCardNumberFormat(numberInput);
	checkIfCorrect(
		nameInput,
		nameRegexp,
		"Cardholder name should contain only letters"
	);
	checkIfCorrect(dateMmInput, monthRegex, "Enter valid date");
	checkIfCorrect(dateYyInput, yearRegex, "Enter valid date");
	checkIfCorrect(cvcInput, cvcRegex, "Enter valid code");
	checkErrors();
};

const showError = (input, msg) => {
	const parent = input.closest(".card-info-section__box");
	const errorTxt = parent.querySelector(".card-info-section-error");
	input.classList.add("error");
	errorTxt.textContent = msg;
	errorTxt.style.visibility = "visible";
};

const hideError = (input) => {
	const parent = input.closest(".card-info-section__box");
	const errorTxt = parent.querySelector(".card-info-section-error");
	input.classList.remove("error");
	errorTxt.style.visibility = "hidden";
};
const checkIfEmpty = (input) => {
	input.forEach((el) => {
		// Skip date inputs as they're handled separately
		if (el !== dateMmInput && el !== dateYyInput) {
			if (el.value === "") {
				showError(el, "Can't be blank");
			} else {
				hideError(el);
			}
		}
	});
	// Handle date inputs together
	if (dateMmInput.value === "" || dateYyInput.value === "") {
		const dateParent = dateMmInput.closest(".card-info-section__box");
		const dateErrorTxt = dateParent.querySelector(".card-info-section-error");
		dateMmInput.classList.add("error");
		dateYyInput.classList.add("error");
		dateErrorTxt.textContent = "Can't be blank";
		dateErrorTxt.style.visibility = "visible";
	} else {
		const dateParent = dateMmInput.closest(".card-info-section__box");
		const dateErrorTxt = dateParent.querySelector(".card-info-section-error");
		// Only hide error if both are filled and no other validation error exists
		if (!dateMmInput.classList.contains("error") && !dateYyInput.classList.contains("error")) {
			dateErrorTxt.style.visibility = "hidden";
		}
	}
};
const checkLength = (input, minLength) => {
	const parent = input.closest(".card-info-section__box");
	const label = parent.querySelector("label");
	if (input.value.length < minLength && input.value !== "") {
		showError(
			input,
			`${label.textContent} should contain at least ${minLength} characters`
		);
	}
};
const checkCardNumberFormat = (input) => {
	const cardNumberOnly = input.value.replace(/\s/g, "");
	const isNumbersOnly = /^\d+$/.test(cardNumberOnly);
	
	if (input.value !== "" && !isNumbersOnly) {
		showError(input, "Wrong format, numbers only");
	} else if (input.value !== "" && cardNumberOnly.length !== 16) {
		showError(input, "Card number must be 16 digits");
	} else if (input.value !== "") {
		hideError(input);
	}
};
const checkIfCorrect = (input, regexp, msg) => {
	if (!regexp.test(input.value) && input.value !== "") {
		showError(input, msg);
	} else if (input.value !== "" && regexp.test(input.value)) {
		// Hide error if validation passes
		if (input === dateMmInput || input === dateYyInput) {
			// For date inputs, check both before hiding error
			const dateParent = input.closest(".card-info-section__box");
			const dateErrorTxt = dateParent.querySelector(".card-info-section-error");
			if (dateMmInput.value !== "" && dateYyInput.value !== "" && 
			    monthRegex.test(dateMmInput.value) && yearRegex.test(dateYyInput.value)) {
				dateMmInput.classList.remove("error");
				dateYyInput.classList.remove("error");
				dateErrorTxt.style.visibility = "hidden";
			} else if (input.value !== "" && regexp.test(input.value)) {
				input.classList.remove("error");
			}
		} else {
			hideError(input);
		}
	}
};
const showThanksBox = () => {
	form.classList.add("hidden");
	thanksBox.classList.add("active");
};
const hideThanksBox = () => {
	form.classList.remove("hidden");
	thanksBox.classList.remove("active");
};
const checkErrors = () => {
	let errorCount = 0;
	allInputs.forEach((el) => {
		if (el.classList.contains("error")) {
			errorCount++;
		}
	});
	if (errorCount === 0) {
		showThanksBox();
	} else {
		hideThanksBox();
	}
};
const clearAll = (inputs) => {
	inputs.forEach((el) => {
		el.value = "";
	});
	turnBasicState(nameInput, cardName, "Jane Appleseed");
	turnBasicState(dateMmInput, cardMonth, "00");
	turnBasicState(dateYyInput, cardYear, "00");
	turnBasicState(cvcInput, cardCvc, "000");
	turnBasicState(numberInput, cardNumber, "0000 0000 0000 0000");
};
const turnBasicState = (input, cardInfo, text) => {
	if (input.value === "") {
		cardInfo.textContent = text;
	}
};
const updateName = () => {
	cardName.textContent = nameInput.value;
	turnBasicState(nameInput, cardName, "Jane Appleseed");
};
const updateMonth = () => {
	cardMonth.textContent = dateMmInput.value;
	turnBasicState(dateMmInput, cardMonth, "00");
};
const updateYear = () => {
	cardYear.textContent = dateYyInput.value;
	turnBasicState(dateYyInput, cardYear, "00");
};
const updateCvc = () => {
	cardCvc.textContent = cvcInput.value;
	turnBasicState(cvcInput, cardCvc, "000");
};
const updateCardNumber = () => {
	cardNumber.textContent = numberInput.value;
	turnBasicState(numberInput, cardNumber, "0000 0000 0000 0000");
};
numberInput.addEventListener("input", (e) => {
	let value = e.target.value.replace(/\D/g, "");
	value = value.match(/.{1,4}/g);
	if (value) {
		e.target.value = value.join(" ");
	} else {
		e.target.value = "";
	}
});
numberInput.addEventListener("keyup", updateCardNumber);
cvcInput.addEventListener("keyup", updateCvc);
dateMmInput.addEventListener("keyup", updateMonth);
dateYyInput.addEventListener("keyup", updateYear);
nameInput.addEventListener("keyup", updateName);
continueBtn.addEventListener("click", () => {
	hideThanksBox();
	clearAll(allInputs);
});
form.addEventListener("submit", handleForm);
