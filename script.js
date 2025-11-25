"use strict";

const state = {
  sets: [],
  mode: "randomBalanced", // Standard: randomBalanced
  flatCards: [],
  shuffledIndices: [],
  currentIndex: 0,
  currentCard: null,
  showingFront: true,
  // Für den balanced-Modus: Sets mit ihren Karten separat speichern
  selectedSets: []
};

document.addEventListener("DOMContentLoaded", () => {
  const homeScreen = document.getElementById("home-screen");
  const flipScreen = document.getElementById("flip-screen");

  const setList = document.getElementById("set-list");
  const selectAllBtn = document.getElementById("select-all");
  const selectNoneBtn = document.getElementById("select-none");
  const startButton = document.getElementById("start-button");
  const errorMessage = document.getElementById("error-message");
  const modeRadios = document.querySelectorAll('input[name="mode"]');

  const backToHomeBtn = document.getElementById("back-to-home");
  const cardElement = document.getElementById("card");
  const cardSideLabelEl = document.getElementById("card-side-label");
  const cardContentEl = document.getElementById("card-content");

  // Standardmodus: randomBalanced
  const randomBalancedRadio = document.querySelector(
    'input[name="mode"][value="randomBalanced"]'
  );
  if (randomBalancedRadio) {
    randomBalancedRadio.checked = true;
    state.mode = "randomBalanced";
  }

  // --- Hilfsfunktionen ---

  function showScreen(name) {
    if (name === "home") {
      homeScreen.classList.add("active");
      flipScreen.classList.remove("active");
    } else {
      homeScreen.classList.remove("active");
      flipScreen.classList.add("active");
    }
  }

  function getSelectedSetIndices() {
    const checkboxes = document.querySelectorAll(".set-checkbox");
    const indices = [];
    checkboxes.forEach((cb) => {
      if (cb.checked) {
        indices.push(parseInt(cb.dataset.index, 10));
      }
    });
    return indices;
  }

  function updateStartButtonState() {
    const selected = getSelectedSetIndices();
    startButton.disabled = selected.length === 0 || !state.sets.length;
  }

  function renderSetList() {
    setList.innerHTML = "";

    if (!state.sets.length) {
      const p = document.createElement("p");
      p.textContent = "Keine Kartensets gefunden.";
      setList.appendChild(p);
      startButton.disabled = true;
      return;
    }

    state.sets.forEach((set, index) => {
      const row = document.createElement("div");
      row.className = "set-row";

      const label = document.createElement("label");
      label.className = "set-label";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "set-checkbox";
      checkbox.dataset.index = String(index);
      checkbox.checked = false; // Beim Laden: NICHT ausgewählt

      const nameSpan = document.createElement("span");
      nameSpan.className = "set-name";
      nameSpan.textContent = set.name || `Set ${index + 1}`;

      label.appendChild(checkbox);
      label.appendChild(nameSpan);
      row.appendChild(label);

      setList.appendChild(row);
    });

    updateStartButtonState();
  }

  function shuffleIndices(length) {
    const arr = Array.from({ length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function resetFlipScreen() {
    state.flatCards = [];
    state.selectedSets = [];
    state.currentCard = null;
    state.currentIndex = 0;
    state.shuffledIndices = [];
    state.showingFront = true;

    cardSideLabelEl.textContent = "";
    cardContentEl.textContent = "";
  }

  function updateCardDisplay() {
    if (!state.currentCard) return;

    // Vorder-/Rückseite nicht mehr anzeigen
    cardContentEl.textContent = state.showingFront
      ? state.currentCard.front
      : state.currentCard.back;
  }

  function startNewCard() {
    // --- Unendlich Balanced: zuerst Set wählen, dann Karte ---
    if (state.mode === "randomBalanced") {
      if (!state.selectedSets.length) {
        resetFlipScreen();
        showScreen("home");
        errorMessage.textContent =
          "Die ausgewählten Sets enthalten keine gültigen Karten.";
        return;
      }

      const setIndex = Math.floor(Math.random() * state.selectedSets.length);
      const chosenSet = state.selectedSets[setIndex];

      if (!chosenSet.cards || !chosenSet.cards.length) {
        resetFlipScreen();
        showScreen("home");
        errorMessage.textContent =
          "Die ausgewählten Sets enthalten keine gültigen Karten.";
        return;
      }

      const cardIndex = Math.floor(Math.random() * chosenSet.cards.length);
      state.currentCard = chosenSet.cards[cardIndex];

      state.showingFront = true;
      updateCardDisplay();
      return;
    }

    // --- Modus "once" und "random" wie bisher mit flatCards ---

    if (!state.flatCards.length) {
      resetFlipScreen();
      showScreen("home");
      errorMessage.textContent = "Die ausgewählten Sets enthalten keine Karten.";
      return;
    }

    if (state.mode === "once") {
      if (state.currentIndex >= state.shuffledIndices.length) {
        // alle Karten einmal gezeigt -> leise zurück zum Homescreen
        resetFlipScreen();
        showScreen("home");
        return;
      }

      const indexInFlat = state.shuffledIndices[state.currentIndex];
      state.currentIndex += 1;
      state.currentCard = state.flatCards[indexInFlat];
    } else if (state.mode === "random") {
      // random: jedes Mal zufällig eine Karte
      const randomIndex = Math.floor(Math.random() * state.flatCards.length);
      state.currentCard = state.flatCards[randomIndex];
    }

    state.showingFront = true;
    updateCardDisplay();
  }

  function initFlipGame(selectedIndices) {
    const flat = [];
    const selectedSetsForBalanced = [];

    selectedIndices.forEach((setIndex) => {
      const set = state.sets[setIndex];
      if (!set || !Array.isArray(set.cards)) return;

      const validCards = [];

      set.cards.forEach((card) => {
        if (
          card &&
          typeof card.front === "string" &&
          typeof card.back === "string"
        ) {
          const normalizedCard = {
            front: card.front,
            back: card.back
          };

          // Für "once" und "random"
          flat.push(normalizedCard);

          // Für "randomBalanced"
          validCards.push(normalizedCard);
        }
      });

      if (validCards.length > 0) {
        selectedSetsForBalanced.push({
          name: set.name || `Set ${setIndex + 1}`,
          cards: validCards
        });
      }
    });

    if (!flat.length || !selectedSetsForBalanced.length) {
      resetFlipScreen();
      showScreen("home");
      errorMessage.textContent =
        "Die ausgewählten Sets enthalten keine gültigen Karten.";
      return;
    }

    state.flatCards = flat;
    state.selectedSets = selectedSetsForBalanced;
    state.currentCard = null;
    state.currentIndex = 0;
    state.showingFront = true;

    if (state.mode === "once") {
      state.shuffledIndices = shuffleIndices(flat.length);
    } else {
      state.shuffledIndices = [];
    }

    errorMessage.textContent = "";
    showScreen("flip");
    startNewCard();
  }

  function handleNext() {
    if (!state.currentCard) {
      startNewCard();
      return;
    }

    // Erst Vorderseite, dann Rückseite, dann nächste Karte
    if (state.showingFront) {
      state.showingFront = false;
      updateCardDisplay();
    } else {
      startNewCard();
    }
  }

  // --- Event Listener ---

  setList.addEventListener("change", (event) => {
    if (event.target && event.target.classList.contains("set-checkbox")) {
      updateStartButtonState();
    }
  });

  selectAllBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".set-checkbox");
    checkboxes.forEach((cb) => {
      cb.checked = true;
    });
    updateStartButtonState();
  });

  selectNoneBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".set-checkbox");
    checkboxes.forEach((cb) => {
      cb.checked = false;
    });
    updateStartButtonState();
  });

  modeRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      if (event.target.checked) {
        state.mode = event.target.value;
      }
    });
  });

  startButton.addEventListener("click", () => {
    const selected = getSelectedSetIndices();
    if (!selected.length) {
      errorMessage.textContent = "Bitte mindestens ein Kartenset auswählen.";
      return;
    }
    errorMessage.textContent = "";
    initFlipGame(selected);
  });

  backToHomeBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Klick soll nicht als "weiter" zählen
    resetFlipScreen();
    showScreen("home");
  });

  // Auf den ganzen Flip-Screen klicken, um weiter zu gehen (auch unter der Karte)
  flipScreen.addEventListener("click", (event) => {
    // Klick auf Zurück-Button ignorieren
    if (event.target === backToHomeBtn) return;
    if (event.target.closest && event.target.closest("#back-to-home")) return;
    handleNext();
  });

  // Flip per Space- oder Enter-Taste
  document.addEventListener("keydown", (event) => {
    if (!flipScreen.classList.contains("active")) return;

    const isSpace =
      event.code === "Space" || event.key === " ";
    const isEnter =
      event.code === "Enter" || event.key === "Enter";

    if (isSpace || isEnter) {
      event.preventDefault();
      handleNext();
    }
  });

  // --- Daten initial aus data.js übernehmen ---

  if (typeof CARD_SETS !== "undefined" && Array.isArray(CARD_SETS)) {
    state.sets = CARD_SETS;
    renderSetList();
  } else {
    errorMessage.textContent =
      "Keine Kartensets in data.js gefunden. Bitte CARD_SETS prüfen.";
    startButton.disabled = true;
  }
});
