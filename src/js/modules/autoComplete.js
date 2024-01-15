import autoComplete from "@tarekraafat/autocomplete.js";
import countriesList from "./../helpers/countriesList";

function autoCompleteFunc() {

  const countriesArr = [];

  countriesList.forEach(item => countriesArr.push(item.name));

  const autoCompleteJS = new autoComplete({
    selector: "#autoCompleteCountry",
    placeHolder: "e.g. Bali, Indonesia",
    data: {
        src: countriesArr,
    },
    resultItem: {
        highlight: true,
    },
    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection;
        }
      },
    },
    resultsList: {
      maxResults: 15
    },
    searchEngine: "strict",
  });
}

export default autoCompleteFunc;