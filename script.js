"use strict";

const state = {
  sets: [],
  mode: "randomBalanced",
  flatCards: [],
  shuffledIndices: [],
  currentIndex: 0,
  currentCard: null,
  showingFront: true,
  selectedSets: [],
  selectedSetIndices: []
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
  const cardContentEl = document.getElementById("card-content");

  const randomBalancedRadio = document.querySelector(
    'input[name="mode"][value="randomBalanced"]'
  );
  if (randomBalancedRadio) {
    randomBalancedRadio.checked = true;
    state.mode = "randomBalanced";
  }

  // ---------- Helper ----------

  function showScreen(name) {
    homeScreen.classList.toggle("active", name === "home");
    flipScreen.classList.toggle("active", name === "flip");
  }

  function getSelectedSetIndices() {
    return [...document.querySelectorAll(".set-checkbox")]
      .filter(cb => cb.checked)
      .map(cb => parseInt(cb.dataset.index, 10));
  }

  function updateStartButtonState() {
    startButton.disabled = getSelectedSetIndices().length === 0 || !state.sets.length;
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
      checkbox.dataset.index = index;
      checkbox.checked = false;

      const nameSpan = document.createElement("span");
      nameSpan.className = "set-name";
      nameSpan.textContent = set.name || `Set ${index + 1}`;

      if (String(set.name).includes("Partizip")) {
        row.style.backgroundColor = "rgba(248,113,113,0.11)";
      }

      label.appendChild(checkbox);
      label.appendChild(nameSpan);
      row.appendChild(label);
      setList.appendChild(row);
    });

    updateStartButtonState();
  }

  function shuffleIndices(n) {
    const arr = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function resetFlipScreen() {
    state.flatCards = [];
    state.selectedSets = [];
    state.selectedSetIndices = [];
    state.currentIndex = 0;
    state.currentCard = null;
    state.shuffledIndices = [];
    state.showingFront = true;

    cardContentEl.innerHTML = "";
    cardElement.style = "";
  }

  // ---------- RENDERING ----------

  function renderCard() {
    if (!state.currentCard) return;

    cardContentEl.innerHTML = "";

    // ---------------------------------------------
    // HEADER-BEREICH (IMMER VORDERSEITE)
    // ---------------------------------------------
    const head = document.createElement("div");
    head.className = "front-header-big";
    head.textContent = state.currentCard.front;
    cardContentEl.appendChild(head);

    // ---------------------------------------------
    // FALL 1: VORDERSEITE
    // ---------------------------------------------
    if (state.showingFront) {
      return; // nur Header, sonst nichts
    }

    // ---------------------------------------------
    // FALL 2: RÜCKSEITE
    // ---------------------------------------------
    const mainBack = document.createElement("div");
    mainBack.className = "main-back";
    mainBack.textContent = state.currentCard.back;
    cardContentEl.appendChild(mainBack);

    const currentFront = state.currentCard.front;
    const currentBack = state.currentCard.back;

    const selectedVariantBacks = [];
    const unselectedVariantBacks = [];

    // passendes Matching über ALLE Sets
    state.sets.forEach((set, setIndex) => {
      const isSelected = state.selectedSetIndices.includes(setIndex);
      if (!set.cards) return;

      set.cards.forEach(card => {
        if (!card.front || !card.back) return;
        if (card.front !== currentFront) return;
        if (card.back === currentBack) return;

        if (isSelected) selectedVariantBacks.push(card.back);
        else unselectedVariantBacks.push(card.back);
      });
    });

    if (selectedVariantBacks.length || unselectedVariantBacks.length) {
      const hr = document.createElement("hr");
      hr.className = "variant-separator";
      cardContentEl.appendChild(hr);

      selectedVariantBacks.forEach(txt => {
        const div = document.createElement("div");
        div.className = "variant-entry selected";
        div.textContent = txt;
        cardContentEl.appendChild(div);
      });

      unselectedVariantBacks.forEach(txt => {
        const div = document.createElement("div");
        div.className = "variant-entry not-selected";
        div.textContent = txt;
        cardContentEl.appendChild(div);
      });
    }
  }

  // ---------- Card Selection ----------

  function startNewCard() {
    if (state.mode === "randomBalanced") {
      if (!state.selectedSets.length) return resetToHome("Keine gültigen Karten.");

  let newCard = null;
  let attempts = 0;
  const MAX_ATTEMPTS = 20;

  do {
    const chosenSet =
      state.selectedSets[Math.floor(Math.random() * state.selectedSets.length)];

    if (!chosenSet.cards?.length) return resetToHome("Keine gültigen Karten.");

    newCard = chosenSet.cards[Math.floor(Math.random() * chosenSet.cards.length)];

    attempts++;
  } while (
    attempts < MAX_ATTEMPTS &&
    state.currentCard &&
    newCard.front === state.currentCard.front &&
    newCard.back === state.currentCard.back
  );

  state.currentCard = newCard;
    } else {
      if (!state.flatCards.length) return resetToHome("Keine gültigen Karten.");

      if (state.mode === "once") {
        if (state.currentIndex >= state.shuffledIndices.length) {
          return resetToHome();
        }
        const idx = state.shuffledIndices[state.currentIndex++];
        state.currentCard = state.flatCards[idx];
      } else {
        state.currentCard =
          state.flatCards[Math.floor(Math.random() * state.flatCards.length)];
      }
    }

    state.showingFront = true;
    renderCard();
  }

  function resetToHome(msg) {
    resetFlipScreen();
    showScreen("home");
    if (msg) errorMessage.textContent = msg;
  }

  function initFlipGame(selectedIndices) {
    const flat = [];
    const balancedSets = [];

    selectedIndices.forEach(idx => {
      const set = state.sets[idx];
      if (!set?.cards) return;

      const valid = [];
      const isPartizip = String(set.name).includes("Partizip");

      set.cards.forEach(card => {
        if (!card.front || !card.back) return;

        const c = {
          front: card.front,
          back: card.back,
          isPartizip
        };

        flat.push(c);
        valid.push(c);
      });

      if (valid.length) {
        balancedSets.push({
          name: set.name,
          cards: valid
        });
      }
    });

    if (!flat.length || !balancedSets.length) {
      return resetToHome("Die ausgewählten Sets enthalten keine gültigen Karten.");
    }

    state.flatCards = flat;
    state.selectedSets = balancedSets;
    state.selectedSetIndices = selectedIndices.slice();
    state.currentIndex = 0;
    state.currentCard = null;
    state.showingFront = true;

    state.shuffledIndices = state.mode === "once"
      ? shuffleIndices(flat.length)
      : [];

    errorMessage.textContent = "";
    showScreen("flip");
    startNewCard();
  }

  function handleNext() {
    if (!state.currentCard) return startNewCard();

    if (state.showingFront) {
      state.showingFront = false;
      renderCard();
    } else {
      startNewCard();
    }
  }

  // ---------- Events ----------

  setList.addEventListener("change", e => {
    if (e.target.classList.contains("set-checkbox")) {
      updateStartButtonState();
    }
  });

  selectAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".set-checkbox").forEach(cb => (cb.checked = true));
    updateStartButtonState();
  });

  selectNoneBtn.addEventListener("click", () => {
    document.querySelectorAll(".set-checkbox").forEach(cb => (cb.checked = false));
    updateStartButtonState();
  });

  modeRadios.forEach(r =>
    r.addEventListener("change", e => {
      if (e.target.checked) state.mode = e.target.value;
    })
  );

  startButton.addEventListener("click", () => {
    const selected = getSelectedSetIndices();
    if (!selected.length) {
      errorMessage.textContent = "Bitte mindestens ein Kartenset auswählen.";
      return;
    }
    initFlipGame(selected);
  });

  backToHomeBtn.addEventListener("click", e => {
    e.stopPropagation();
    resetToHome();
  });

  flipScreen.addEventListener("click", e => {
    if (e.target === backToHomeBtn) return;
    if (e.target.closest?.("#back-to-home")) return;
    handleNext();
  });

  document.addEventListener("keydown", e => {
    if (!flipScreen.classList.contains("active")) return;
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      handleNext();
    }
  });

  // Load data.js
  if (Array.isArray(CARD_SETS)) {
    state.sets = CARD_SETS;
    renderSetList();
  } else {
    errorMessage.textContent = "CARD_SETS fehlt in data.js!";
  }
});
