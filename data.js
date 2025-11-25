const CARD_SETS = [
  {
    name: "λύω – Präsens",
    cards: [
      { front: "λύω", back: "1. Sg. Präs. Ind. Akt." },
      { front: "λύεις", back: "2. Sg. Präs. Ind. Akt." },
      { front: "λύει", back: "3. Sg. Präs. Ind. Akt." },
      { front: "λύομεν", back: "1. Pl. Präs. Ind. Akt." },
      { front: "λύετε", back: "2. Pl. Präs. Ind. Akt." },
      { front: "λύουσι(ν)", back: "3. Pl. Präs. Ind. Akt." }
    ]
  },

  {
    name: "λύω – Imperfekt",
    cards: [
      { front: "ἔλυον", back: "1. Sg. Impf. Ind. Akt." },
      { front: "ἔλυες",  back: "2. Sg. Impf. Ind. Akt." },
      { front: "ἔλυε(ν)", back: "3. Sg. Impf. Ind. Akt." },
      { front: "ἐλύομεν", back: "1. Pl. Impf. Ind. Akt." },
      { front: "ἐλύετε", back: "2. Pl. Impf. Ind. Akt." },
      { front: "ἔλυον", back: "3. Pl. Impf. Ind. Akt." }
    ]
  },

  {
    name: "λύω – Futur",
    cards: [
      { front: "λύσω", back: "1. Sg. Fut. Ind. Akt." },
      { front: "λύσεις", back: "2. Sg. Fut. Ind. Akt." },
      { front: "λύσει", back: "3. Sg. Fut. Ind. Akt." },
      { front: "λύσομεν", back: "1. Pl. Fut. Ind. Akt." },
      { front: "λύσετε", back: "2. Pl. Fut. Ind. Akt." },
      { front: "λύσουσι(ν)", back: "3. Pl. Fut. Ind. Akt." }
    ]
  },

  {
    name: "λύω – Schwacher Aorist",
    cards: [
      { front: "ἔλυσα", back: "1. Sg. Aor. Ind. Akt." },
      { front: "ἔλυσας", back: "2. Sg. Aor. Ind. Akt." },
      { front: "ἔλυσε(ν)", back: "3. Sg. Aor. Ind. Akt." },
      { front: "ἐλύσαμεν", back: "1. Pl. Aor. Ind. Akt." },
      { front: "ἐλύσατε", back: "2. Pl. Aor. Ind. Akt." },
      { front: "ἔλυσαν", back: "3. Pl. Aor. Ind. Akt." }
    ]
  },

  {
    name: "λαμβάνω – Starker Aorist",
    cards: [
      { front: "ἔλαβον", back: "1. Sg. Aor. Ind. Akt." },
      { front: "ἔλαβες", back: "2. Sg. Aor. Ind. Akt." },
      { front: "ἔλαβε(ν)", back: "3. Sg. Aor. Ind. Akt." },
      { front: "ἐλάβομεν", back: "1. Pl. Aor. Ind. Akt." },
      { front: "ἐλάβετε", back: "2. Pl. Aor. Ind. Akt." },
      { front: "ἔλαβον", back: "3. Pl. Aor. Ind. Akt." }
    ]
  },
  // Partizip Aktiv Präsens – λύω (m., f., n. entlang der Deklination)
  {
    name: "λύω – Partizip Aktiv Präsens",
    cards: [
      // Maskulinum
      { front: "λύων", back: "Part. Nom. Sg. m. Part. Akt. Präs." },
      { front: "λύοντος", back: "Part. Gen. Sg. m. Part. Akt. Präs." },
      { front: "λύοντι", back: "Part. Dat. Sg. m. Part. Akt. Präs." },
      { front: "λύοντα", back: "Part. Akk. Sg. m. Part. Akt. Präs." },
      { front: "λύοντες", back: "Part. Nom. Pl. m. Part. Akt. Präs." },
      { front: "λυόντων", back: "Part. Gen. Pl. m. Part. Akt. Präs." },
      { front: "λύουσι(ν)", back: "Part. Dat. Pl. m. Part. Akt. Präs." },
      { front: "λύοντας", back: "Part. Akk. Pl. m. Part. Akt. Präs." },

      // Femininum
      { front: "λύουσα", back: "Part. Nom. Sg. f. Part. Akt. Präs." },
      { front: "λυούσης", back: "Part. Gen. Sg. f. Part. Akt. Präs." },
      { front: "λυούσῃ", back: "Part. Dat. Sg. f. Part. Akt. Präs." },
      { front: "λύουσαν", back: "Part. Akk. Sg. f. Part. Akt. Präs." },
      { front: "λύουσαι", back: "Part. Nom. Pl. f. Part. Akt. Präs." },
      { front: "λυουσῶν", back: "Part. Gen. Pl. f. Part. Akt. Präs." },
      { front: "λυούσαις", back: "Part. Dat. Pl. f. Part. Akt. Präs." },
      { front: "λυούσας", back: "Part. Akk. Pl. f. Part. Akt. Präs." },

      // Neutrum
      { front: "λῦον", back: "Part. Nom. Sg. n. Part. Akt. Präs." },
      { front: "λύοντος", back: "Part. Gen. Sg. n. Part. Akt. Präs." },
      { front: "λύοντι", back: "Part. Dat. Sg. n. Part. Akt. Präs." },
      { front: "λῦον", back: "Part. Akk. Sg. n. Part. Akt. Präs." },
      { front: "λύοντα", back: "Part. Nom. Pl. n. Part. Akt. Präs." },
      { front: "λυόντων", back: "Part. Gen. Pl. n. Part. Akt. Präs." },
      { front: "λύουσι(ν)", back: "Part. Dat. Pl. n. Part. Akt. Präs." },
      { front: "λύοντα", back: "Part. Akk. Pl. n. Part. Akt. Präs." }
    ]
  },

  // Partizip Aktiv Futur – λύω (m., f., n. entlang der Deklination)
  {
    name: "λύω – Partizip Aktiv Futur",
    cards: [
      // Maskulinum
      { front: "λύσων", back: "Part. Nom. Sg. m. Part. Akt. Fut." },
      { front: "λύσοντος", back: "Part. Gen. Sg. m. Part. Akt. Fut." },
      { front: "λύσοντι", back: "Part. Dat. Sg. m. Part. Akt. Fut." },
      { front: "λύσοντα", back: "Part. Akk. Sg. m. Part. Akt. Fut." },
      { front: "λύσοντες", back: "Part. Nom. Pl. m. Part. Akt. Fut." },
      { front: "λυσόντων", back: "Part. Gen. Pl. m. Part. Akt. Fut." },
      { front: "λύσουσι(ν)", back: "Part. Dat. Pl. m. Part. Akt. Fut." },
      { front: "λύσοντας", back: "Part. Akk. Pl. m. Part. Akt. Fut." },

      // Femininum
      { front: "λύσουσα", back: "Part. Nom. Sg. f. Part. Akt. Fut." },
      { front: "λυσούσης", back: "Part. Gen. Sg. f. Part. Akt. Fut." },
      { front: "λυσούσῃ", back: "Part. Dat. Sg. f. Part. Akt. Fut." },
      { front: "λύσουσαν", back: "Part. Akk. Sg. f. Part. Akt. Fut." },
      { front: "λύσουσαι", back: "Part. Nom. Pl. f. Part. Akt. Fut." },
      { front: "λυσουσῶν", back: "Part. Gen. Pl. f. Part. Akt. Fut." },
      { front: "λυσούσαις", back: "Part. Dat. Pl. f. Part. Akt. Fut." },
      { front: "λυσούσας", back: "Part. Akk. Pl. f. Part. Akt. Fut." },

      // Neutrum
      { front: "λῦσον", back: "Part. Nom. Sg. n. Part. Akt. Fut." },
      { front: "λύσοντος", back: "Part. Gen. Sg. n. Part. Akt. Fut." },
      { front: "λύσοντι", back: "Part. Dat. Sg. n. Part. Akt. Fut." },
      { front: "λῦσον", back: "Part. Akk. Sg. n. Part. Akt. Fut." },
      { front: "λύσοντα", back: "Part. Nom. Pl. n. Part. Akt. Fut." },
      { front: "λυσόντων", back: "Part. Gen. Pl. n. Part. Akt. Fut." },
      { front: "λύσουσι(ν)", back: "Part. Dat. Pl. n. Part. Akt. Fut." },
      { front: "λύσοντα", back: "Part. Akk. Pl. n. Part. Akt. Fut." }
    ]
  }
];
