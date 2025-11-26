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
    name: "λύω – Aorist",
    cards: [
      { front: "ἔλυσα", back: "1. Sg. Aor. Ind. Akt." },
      { front: "ἔλυσας", back: "2. Sg. Aor. Ind. Akt." },
      { front: "ἔλυσε(ν)", back: "3. Sg. Aor. Ind. Akt." },
      { front: "ἐλύσαμεν", back: "1. Pl. Aor. Ind. Akt." },
      { front: "ἐλύσατε", back: "2. Pl. Aor. Ind. Akt." },
      { front: "ἔλυσαν", back: "3. Pl. Aor. Ind. Akt." }
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
  },

  // Partizip Aktiv Aorist – λύω (m., f., n. entlang der Deklination)
  {
    name: "λύω – Partizip Aktiv Aorist",
    cards: [
      // Maskulinum
      { front: "λύσας", back: "Nom. Sg. m. Part. Akt. Aor." },
      { front: "λύσαντος", back: "Gen. Sg. m. Part. Akt. Aor." },
      { front: "λύσαντι", back: "Dat. Sg. m. Part. Akt. Aor." },
      { front: "λύσαντα", back: "Akk. Sg. m. Part. Akt. Aor." },
      { front: "λύσαντες", back: "Nom. Pl. m. Part. Akt. Aor." },
      { front: "λυσάντων", back: "Gen. Pl. m. Part. Akt. Aor." },
      { front: "λύσασι(ν)", back: "Dat. Pl. m. Part. Akt. Aor." },
      { front: "λύσαντας", back: "Akk. Pl. m. Part. Akt. Aor." },

      // Femininum
      { front: "λύσασα", back: "Nom. Sg. f. Part. Akt. Aor." },
      { front: "λυσάσης", back: "Gen. Sg. f. Part. Akt. Aor." },
      { front: "λυσάσῃ", back: "Dat. Sg. f. Part. Akt. Aor." },
      { front: "λύσασαν", back: "Akk. Sg. f. Part. Akt. Aor." },
      { front: "λύσασαι", back: "Nom. Pl. f. Part. Akt. Aor." },
      { front: "λυσασῶν", back: "Gen. Pl. f. Part. Akt. Aor." },
      { front: "λυσάσαις", back: "Dat. Pl. f. Part. Akt. Aor." },
      { front: "λύσασας", back: "Akk. Pl. f. Part. Akt. Aor." },

      // Neutrum
      { front: "λῦσαν", back: "Nom. Sg. n. Part. Akt. Aor." },
      { front: "λύσαντος", back: "Gen. Sg. n. Part. Akt. Aor." },
      { front: "λύσαντι", back: "Dat. Sg. n. Part. Akt. Aor." },
      { front: "λῦσαν", back: "Akk. Sg. n. Part. Akt. Aor." },
      { front: "λύσαντα", back: "Nom. Pl. n. Part. Akt. Aor." },
      { front: "λυσάντων", back: "Gen. Pl. n. Part. Akt. Aor." },
      { front: "λύσασι(ν)", back: "Dat. Pl. n. Part. Akt. Aor." },
      { front: "λύσαντα", back: "Akk. Pl. n. Part. Akt. Aor." }
    ]
  },

  // Partizip Medium Präsens – λύω
  {
    name: "λύω – Partizip Medium Präsens",
    cards: [
      // Maskulinum
      { front: "λυόμενος", back: "Nom. Sg. m. Part. Med. Präs." },
      { front: "λυομένου", back: "Gen. Sg. m. Part. Med. Präs." },
      { front: "λυομένῳ", back: "Dat. Sg. m. Part. Med. Präs." },
      { front: "λυόμενον", back: "Akk. Sg. m. Part. Med. Präs." },
      { front: "λυόμενοι", back: "Nom. Pl. m. Part. Med. Präs." },
      { front: "λυομένων", back: "Gen. Pl. m. Part. Med. Präs." },
      { front: "λυομένοις", back: "Dat. Pl. m. Part. Med. Präs." },
      { front: "λυομένους", back: "Akk. Pl. m. Part. Med. Präs." },

      // Femininum
      { front: "λυομένη", back: "Nom. Sg. f. Part. Med. Präs." },
      { front: "λυομένης", back: "Gen. Sg. f. Part. Med. Präs." },
      { front: "λυομένῃ", back: "Dat. Sg. f. Part. Med. Präs." },
      { front: "λυομένην", back: "Akk. Sg. f. Part. Med. Präs." },
      { front: "λυόμεναι", back: "Nom. Pl. f. Part. Med. Präs." },
      { front: "λυομένων", back: "Gen. Pl. f. Part. Med. Präs." },
      { front: "λυομέναις", back: "Dat. Pl. f. Part. Med. Präs." },
      { front: "λυομένας", back: "Akk. Pl. f. Part. Med. Präs." },

      // Neutrum
      { front: "λυόμενον", back: "Nom. Sg. n. Part. Med. Präs." },
      { front: "λυομένου", back: "Gen. Sg. n. Part. Med. Präs." },
      { front: "λυομένῳ", back: "Dat. Sg. n. Part. Med. Präs." },
      { front: "λυόμενον", back: "Akk. Sg. n. Part. Med. Präs." },
      { front: "λυόμενα", back: "Nom. Pl. n. Part. Med. Präs." },
      { front: "λυομένων", back: "Gen. Pl. n. Part. Med. Präs." },
      { front: "λυομένοις", back: "Dat. Pl. n. Part. Med. Präs." },
      { front: "λυόμενα", back: "Akk. Pl. n. Part. Med. Präs." }
    ]
  },

  // Partizip Medium Futur – λύω
  {
    name: "λύω – Partizip Medium Futur",
    cards: [
      // Maskulinum
      { front: "λυσόμενος", back: "Nom. Sg. m. Part. Med. Fut." },
      { front: "λυσομένου", back: "Gen. Sg. m. Part. Med. Fut." },
      { front: "λυσομένῳ", back: "Dat. Sg. m. Part. Med. Fut." },
      { front: "λυσόμενον", back: "Akk. Sg. m. Part. Med. Fut." },
      { front: "λυσόμενοι", back: "Nom. Pl. m. Part. Med. Fut." },
      { front: "λυσομένων", back: "Gen. Pl. m. Part. Med. Fut." },
      { front: "λυσομένοις", back: "Dat. Pl. m. Part. Med. Fut." },
      { front: "λυσομένους", back: "Akk. Pl. m. Part. Med. Fut." },

      // Femininum
      { front: "λυσομένη", back: "Nom. Sg. f. Part. Med. Fut." },
      { front: "λυσομένης", back: "Gen. Sg. f. Part. Med. Fut." },
      { front: "λυσομένῃ", back: "Dat. Sg. f. Part. Med. Fut." },
      { front: "λυσομένην", back: "Akk. Sg. f. Part. Med. Fut." },
      { front: "λυσόμεναι", back: "Nom. Pl. f. Part. Med. Fut." },
      { front: "λυσομένων", back: "Gen. Pl. f. Part. Med. Fut." },
      { front: "λυσομέναις", back: "Dat. Pl. f. Part. Med. Fut." },
      { front: "λυσομένας", back: "Akk. Pl. f. Part. Med. Fut." },

      // Neutrum
      { front: "λυσόμενον", back: "Nom. Sg. n. Part. Med. Fut." },
      { front: "λυσομένου", back: "Gen. Sg. n. Part. Med. Fut." },
      { front: "λυσομένῳ", back: "Dat. Sg. n. Part. Med. Fut." },
      { front: "λυσόμενον", back: "Akk. Sg. n. Part. Med. Fut." },
      { front: "λυσόμενα", back: "Nom. Pl. n. Part. Med. Fut." },
      { front: "λυσομένων", back: "Gen. Pl. n. Part. Med. Fut." },
      { front: "λυσομένοις", back: "Dat. Pl. n. Part. Med. Fut." },
      { front: "λυσόμενα", back: "Akk. Pl. n. Part. Med. Fut." }
    ]
  },

  // Partizip Medium Aorist – λύω
  {
    name: "λύω – Partizip Medium Aorist",
    cards: [
      // Maskulinum
      { front: "λυσάμενος", back: "Nom. Sg. m. Part. Med. Aor." },
      { front: "λυσαμένου", back: "Gen. Sg. m. Part. Med. Aor." },
      { front: "λυσαμένῳ", back: "Dat. Sg. m. Part. Med. Aor." },
      { front: "λυσάμενον", back: "Akk. Sg. m. Part. Med. Aor." },
      { front: "λυσάμενοι", back: "Nom. Pl. m. Part. Med. Aor." },
      { front: "λυσαμένων", back: "Gen. Pl. m. Part. Med. Aor." },
      { front: "λυσαμένοις", back: "Dat. Pl. m. Part. Med. Aor." },
      { front: "λυσάμενους", back: "Akk. Pl. m. Part. Med. Aor." },

      // Femininum
      { front: "λυσαμένη", back: "Nom. Sg. f. Part. Med. Aor." },
      { front: "λυσαμένης", back: "Gen. Sg. f. Part. Med. Aor." },
      { front: "λυσαμένῃ", back: "Dat. Sg. f. Part. Med. Aor." },
      { front: "λυσαμένην", back: "Akk. Sg. f. Part. Med. Aor." },
      { front: "λυσάμεναι", back: "Nom. Pl. f. Part. Med. Aor." },
      { front: "λυσαμένων", back: "Gen. Pl. f. Part. Med. Aor." },
      { front: "λυσαμέναις", back: "Dat. Pl. f. Part. Med. Aor." },
      { front: "λυσάμενας", back: "Akk. Pl. f. Part. Med. Aor." },

      // Neutrum
      { front: "λυσάμενον", back: "Nom. Sg. n. Part. Med. Aor." },
      { front: "λυσαμένου", back: "Gen. Sg. n. Part. Med. Aor." },
      { front: "λυσαμένῳ", back: "Dat. Sg. n. Part. Med. Aor." },
      { front: "λυσάμενον", back: "Akk. Sg. n. Part. Med. Aor." },
      { front: "λυσάμενα", back: "Nom. Pl. n. Part. Med. Aor." },
      { front: "λυσαμένων", back: "Gen. Pl. n. Part. Med. Aor." },
      { front: "λυσαμένοις", back: "Dat. Pl. n. Part. Med. Aor." },
      { front: "λυσάμενα", back: "Akk. Pl. n. Part. Med. Aor." }
    ]
  },

  // Partizip Passiv Präsens – λύω (Formen wie Medium)
  {
    name: "λύω – Partizip Passiv Präsens",
    cards: [
      // Maskulinum
      { front: "λυόμενος", back: "Nom. Sg. m. Part. Pass. Präs." },
      { front: "λυομένου", back: "Gen. Sg. m. Part. Pass. Präs." },
      { front: "λυομένῳ", back: "Dat. Sg. m. Part. Pass. Präs." },
      { front: "λυόμενον", back: "Akk. Sg. m. Part. Pass. Präs." },
      { front: "λυόμενοι", back: "Nom. Pl. m. Part. Pass. Präs." },
      { front: "λυομένων", back: "Gen. Pl. m. Part. Pass. Präs." },
      { front: "λυομένοις", back: "Dat. Pl. m. Part. Pass. Präs." },
      { front: "λυομένους", back: "Akk. Pl. m. Part. Pass. Präs." },

      // Femininum
      { front: "λυομένη", back: "Nom. Sg. f. Part. Pass. Präs." },
      { front: "λυομένης", back: "Gen. Sg. f. Part. Pass. Präs." },
      { front: "λυομένῃ", back: "Dat. Sg. f. Part. Pass. Präs." },
      { front: "λυομένην", back: "Akk. Sg. f. Part. Pass. Präs." },
      { front: "λυόμεναι", back: "Nom. Pl. f. Part. Pass. Präs." },
      { front: "λυομένων", back: "Gen. Pl. f. Part. Pass. Präs." },
      { front: "λυομέναις", back: "Dat. Pl. f. Part. Pass. Präs." },
      { front: "λυομένας", back: "Akk. Pl. f. Part. Pass. Präs." },

      // Neutrum
      { front: "λυόμενον", back: "Nom. Sg. n. Part. Pass. Präs." },
      { front: "λυομένου", back: "Gen. Sg. n. Part. Pass. Präs." },
      { front: "λυομένῳ", back: "Dat. Sg. n. Part. Pass. Präs." },
      { front: "λυόμενον", back: "Akk. Sg. n. Part. Pass. Präs." },
      { front: "λυόμενα", back: "Nom. Pl. n. Part. Pass. Präs." },
      { front: "λυομένων", back: "Gen. Pl. n. Part. Pass. Präs." },
      { front: "λυομένοις", back: "Dat. Pl. n. Part. Pass. Präs." },
      { front: "λυόμενα", back: "Akk. Pl. n. Part. Pass. Präs." }
    ]
  },

  // Partizip Passiv Futur – λύω
  {
    name: "λύω – Partizip Passiv Futur",
    cards: [
      // Maskulinum
      { front: "λυθησόμενος", back: "Nom. Sg. m. Part. Pass. Fut." },
      { front: "λυθησομένου", back: "Gen. Sg. m. Part. Pass. Fut." },
      { front: "λυθησομένῳ", back: "Dat. Sg. m. Part. Pass. Fut." },
      { front: "λυθησόμενον", back: "Akk. Sg. m. Part. Pass. Fut." },
      { front: "λυθησόμενοι", back: "Nom. Pl. m. Part. Pass. Fut." },
      { front: "λυθησομένων", back: "Gen. Pl. m. Part. Pass. Fut." },
      { front: "λυθησομένοις", back: "Dat. Pl. m. Part. Pass. Fut." },
      { front: "λυθησομένους", back: "Akk. Pl. m. Part. Pass. Fut." },

      // Femininum
      { front: "λυθησομένη", back: "Nom. Sg. f. Part. Pass. Fut." },
      { front: "λυθησομένης", back: "Gen. Sg. f. Part. Pass. Fut." },
      { front: "λυθησομένῃ", back: "Dat. Sg. f. Part. Pass. Fut." },
      { front: "λυθησομένην", back: "Akk. Sg. f. Part. Pass. Fut." },
      { front: "λυθησόμεναι", back: "Nom. Pl. f. Part. Pass. Fut." },
      { front: "λυθησομένων", back: "Gen. Pl. f. Part. Pass. Fut." },
      { front: "λυθησομέναις", back: "Dat. Pl. f. Part. Pass. Fut." },
      { front: "λυθησομένας", back: "Akk. Pl. f. Part. Pass. Fut." },

      // Neutrum
      { front: "λυθησόμενον", back: "Nom. Sg. n. Part. Pass. Fut." },
      { front: "λυθησομένου", back: "Gen. Sg. n. Part. Pass. Fut." },
      { front: "λυθησομένῳ", back: "Dat. Sg. n. Part. Pass. Fut." },
      { front: "λυθησόμενον", back: "Akk. Sg. n. Part. Pass. Fut." },
      { front: "λυθησόμενα", back: "Nom. Pl. n. Part. Pass. Fut." },
      { front: "λυθησομένων", back: "Gen. Pl. n. Part. Pass. Fut." },
      { front: "λυθησομένοις", back: "Dat. Pl. n. Part. Pass. Fut." },
      { front: "λυθησόμενα", back: "Akk. Pl. n. Part. Pass. Fut." }
    ]
  },

  // Partizip Passiv Aorist – λύω
  {
    name: "λύω – Partizip Passiv Aorist",
    cards: [
      // Maskulinum
      { front: "λυθείς", back: "Nom. Sg. m. Part. Pass. Aor." },
      { front: "λυθέντος", back: "Gen. Sg. m. Part. Pass. Aor." },
      { front: "λυθέντι", back: "Dat. Sg. m. Part. Pass. Aor." },
      { front: "λυθέντα", back: "Akk. Sg. m. Part. Pass. Aor." },
      { front: "λυθέντες", back: "Nom. Pl. m. Part. Pass. Aor." },
      { front: "λυθέντων", back: "Gen. Pl. m. Part. Pass. Aor." },
      { front: "λυθεῖσι(ν)", back: "Dat. Pl. m. Part. Pass. Aor." },
      { front: "λυθέντας", back: "Akk. Pl. m. Part. Pass. Aor." },

      // Femininum
      { front: "λυθεῖσα", back: "Nom. Sg. f. Part. Pass. Aor." },
      { front: "λυθείσης", back: "Gen. Sg. f. Part. Pass. Aor." },
      { front: "λυθείσῃ", back: "Dat. Sg. f. Part. Pass. Aor." },
      { front: "λυθεῖσαν", back: "Akk. Sg. f. Part. Pass. Aor." },
      { front: "λυθεῖσαι", back: "Nom. Pl. f. Part. Pass. Aor." },
      { front: "λυθεισῶν", back: "Gen. Pl. f. Part. Pass. Aor." },
      { front: "λυθείσαις", back: "Dat. Pl. f. Part. Pass. Aor." },
      { front: "λυθείσας", back: "Akk. Pl. f. Part. Pass. Aor." },

      // Neutrum
      { front: "λυθέν", back: "Nom. Sg. n. Part. Pass. Aor." },
      { front: "λυθέντος", back: "Gen. Sg. n. Part. Pass. Aor." },
      { front: "λυθέντι", back: "Dat. Sg. n. Part. Pass. Aor." },
      { front: "λυθέν", back: "Akk. Sg. n. Part. Pass. Aor." },
      { front: "λυθέντα", back: "Nom. Pl. n. Part. Pass. Aor." },
      { front: "λυθέντων", back: "Gen. Pl. n. Part. Pass. Aor." },
      { front: "λυθεῖσι(ν)", back: "Dat. Pl. n. Part. Pass. Aor." },
      { front: "λυθέντα", back: "Akk. Pl. n. Part. Pass. Aor." }
    ]
  },

// nach "λύω – Präsens" einfügen
{
  name: "λαμβάνω – Präsens",
  cards: [
    { front: "λαμβάνω",       back: "1. Sg. Präs. Ind. Akt." },
    { front: "λαμβάνεις",     back: "2. Sg. Präs. Ind. Akt." },
    { front: "λαμβάνει",      back: "3. Sg. Präs. Ind. Akt." },
    { front: "λαμβάνομεν",    back: "1. Pl. Präs. Ind. Akt." },
    { front: "λαμβάνετε",     back: "2. Pl. Präs. Ind. Akt." },
    { front: "λαμβάνουσι(ν)", back: "3. Pl. Präs. Ind. Akt." }
  ]
},

// nach "λύω – Imperfekt" einfügen
{
  name: "λαμβάνω – Imperfekt",
  cards: [
    { front: "ἐλάμβανον",     back: "1. Sg. Impf. Ind. Akt." },
    { front: "ἐλάμβανες",     back: "2. Sg. Impf. Ind. Akt." },
    { front: "ἐλάμβανε(ν)",   back: "3. Sg. Impf. Ind. Akt." },
    { front: "ἐλαμβάνομεν",   back: "1. Pl. Impf. Ind. Akt." },
    { front: "ἐλαμβάνετε",    back: "2. Pl. Impf. Ind. Akt." },
    { front: "ἐλάμβανον",     back: "3. Pl. Impf. Ind. Akt." }
  ]
},

// nach "λύω – Futur" einfügen
{
  name: "λαμβάνω – Futur",
  cards: [
    { front: "λήψω",        back: "1. Sg. Fut. Ind. Akt." },
    { front: "λήψεις",      back: "2. Sg. Fut. Ind. Akt." },
    { front: "λήψει",       back: "3. Sg. Fut. Ind. Akt." },
    { front: "λήψομεν",     back: "1. Pl. Fut. Ind. Akt." },
    { front: "λήψετε",      back: "2. Pl. Fut. Ind. Akt." },
    { front: "λήψουσι(ν)",  back: "3. Pl. Fut. Ind. Akt." }
  ]
},

// nach "λύω – Aorist" einfügen
{
  name: "λαμβάνω – Aorist",
  cards: [
    { front: "ἔλαβον",   back: "1. Sg. Aor. Ind. Akt." },
    { front: "ἔλαβες",   back: "2. Sg. Aor. Ind. Akt." },
    { front: "ἔλαβε(ν)", back: "3. Sg. Aor. Ind. Akt." },
    { front: "ἐλάβομεν", back: "1. Pl. Aor. Ind. Akt." },
    { front: "ἐλάβετε",  back: "2. Pl. Aor. Ind. Akt." },
    { front: "ἔλαβον",   back: "3. Pl. Aor. Ind. Akt." }
  ]
},

// nach "λύω – Partizip Aktiv Präsens" einfügen
{
  name: "λαμβάνω – Partizip Aktiv Präsens",
  cards: [
    // Maskulinum
    { front: "λαμβάνων",      back: "Part. Nom. Sg. m. Part. Akt. Präs." },
    { front: "λαμβάνοντος",   back: "Part. Gen. Sg. m. Part. Akt. Präs." },
    { front: "λαμβάνοντι",    back: "Part. Dat. Sg. m. Part. Akt. Präs." },
    { front: "λαμβάνοντα",    back: "Part. Akk. Sg. m. Part. Akt. Präs." },
    { front: "λαμβάνοντες",   back: "Part. Nom. Pl. m. Part. Akt. Präs." },
    { front: "λαμβανόντων",   back: "Part. Gen. Pl. m. Part. Akt. Präs." },
    { front: "λαμβάνουσι(ν)", back: "Part. Dat. Pl. m. Part. Akt. Präs." },
    { front: "λαμβάνοντας",   back: "Part. Akk. Pl. m. Part. Akt. Präs." },

    // Femininum
    { front: "λαμβάνουσα",    back: "Part. Nom. Sg. f. Part. Akt. Präs." },
    { front: "λαμβανούσης",   back: "Part. Gen. Sg. f. Part. Akt. Präs." },
    { front: "λαμβανούσῃ",    back: "Part. Dat. Sg. f. Part. Akt. Präs." },
    { front: "λαμβάνουσαν",   back: "Part. Akk. Sg. f. Part. Akt. Präs." },
    { front: "λαμβάνουσαι",   back: "Part. Nom. Pl. f. Part. Akt. Präs." },
    { front: "λαμβανουσῶν",   back: "Part. Gen. Pl. f. Part. Akt. Präs." },
    { front: "λαμβανούσαις",  back: "Part. Dat. Pl. f. Part. Akt. Präs." },
    { front: "λαμβανούσας",   back: "Part. Akk. Pl. f. Part. Akt. Präs." },

    // Neutrum
    { front: "λαμβάνον",      back: "Part. Nom. Sg. n. Part. Akt. Präs." },
    { front: "λαμβάνοντος",   back: "Part. Gen. Sg. n. Part. Akt. Präs." },
    { front: "λαμβάνοντι",    back: "Part. Dat. Sg. n. Part. Akt. Präs." },
    { front: "λαμβάνον",      back: "Part. Akk. Sg. n. Part. Akt. Präs." },
    { front: "λαμβάνοντα",    back: "Part. Nom. Pl. n. Part. Akt. Präs." },
    { front: "λαμβανόντων",   back: "Part. Gen. Pl. n. Part. Akt. Präs." },
    { front: "λαμβάνουσι(ν)", back: "Part. Dat. Pl. n. Part. Akt. Präs." },
    { front: "λαμβάνοντα",    back: "Part. Akk. Pl. n. Part. Akt. Präs." }
  ]
},

// nach "λύω – Partizip Aktiv Futur" einfügen
{
  name: "λαμβάνω – Partizip Aktiv Futur",
  cards: [
    // Maskulinum
    { front: "λήψων",        back: "Part. Nom. Sg. m. Part. Akt. Fut." },
    { front: "λήψοντος",     back: "Part. Gen. Sg. m. Part. Akt. Fut." },
    { front: "λήψοντι",      back: "Part. Dat. Sg. m. Part. Akt. Fut." },
    { front: "λήψοντα",      back: "Part. Akk. Sg. m. Part. Akt. Fut." },
    { front: "λήψοντες",     back: "Part. Nom. Pl. m. Part. Akt. Fut." },
    { front: "ληψόντων",     back: "Part. Gen. Pl. m. Part. Akt. Fut." },
    { front: "λήψουσι(ν)",   back: "Part. Dat. Pl. m. Part. Akt. Fut." },
    { front: "λήψοντας",     back: "Part. Akk. Pl. m. Part. Akt. Fut." },

    // Femininum
    { front: "λήψουσα",      back: "Part. Nom. Sg. f. Part. Akt. Fut." },
    { front: "ληψούσης",     back: "Part. Gen. Sg. f. Part. Akt. Fut." },
    { front: "ληψούσῃ",      back: "Part. Dat. Sg. f. Part. Akt. Fut." },
    { front: "λήψουσαν",     back: "Part. Akk. Sg. f. Part. Akt. Fut." },
    { front: "λήψουσαι",     back: "Part. Nom. Pl. f. Part. Akt. Fut." },
    { front: "ληψουσῶν",     back: "Part. Gen. Pl. f. Part. Akt. Fut." },
    { front: "ληψούσαις",    back: "Part. Dat. Pl. f. Part. Akt. Fut." },
    { front: "ληψούσας",     back: "Part. Akk. Pl. f. Part. Akt. Fut." },

    // Neutrum
    { front: "λῆψον",        back: "Part. Nom. Sg. n. Part. Akt. Fut." },
    { front: "λήψοντος",     back: "Part. Gen. Sg. n. Part. Akt. Fut." },
    { front: "λήψοντι",      back: "Part. Dat. Sg. n. Part. Akt. Fut." },
    { front: "λῆψον",        back: "Part. Akk. Sg. n. Part. Akt. Fut." },
    { front: "λήψοντα",      back: "Part. Nom. Pl. n. Part. Akt. Fut." },
    { front: "ληψόντων",     back: "Part. Gen. Pl. n. Part. Akt. Fut." },
    { front: "λήψουσι(ν)",   back: "Part. Dat. Pl. n. Part. Akt. Fut." },
    { front: "λήψοντα",      back: "Part. Akk. Pl. n. Part. Akt. Fut." }
  ]
},

// nach "λύω – Partizip Aktiv Aorist" einfügen
{
  name: "λαμβάνω – Partizip Aktiv Aorist",
  cards: [
    // Maskulinum
    { front: "λαβών",       back: "Nom. Sg. m. Part. Akt. Aor." },
    { front: "λαβόντος",    back: "Gen. Sg. m. Part. Akt. Aor." },
    { front: "λαβόντι",     back: "Dat. Sg. m. Part. Akt. Aor." },
    { front: "λαβόντα",     back: "Akk. Sg. m. Part. Akt. Aor." },
    { front: "λαβόντες",    back: "Nom. Pl. m. Part. Akt. Aor." },
    { front: "λαβόντων",    back: "Gen. Pl. m. Part. Akt. Aor." },
    { front: "λαβοῦσι(ν)",  back: "Dat. Pl. m. Part. Akt. Aor." },
    { front: "λαβόντας",    back: "Akk. Pl. m. Part. Akt. Aor." },

    // Femininum
    { front: "λαβοῦσα",     back: "Nom. Sg. f. Part. Akt. Aor." },
    { front: "λαβούσης",    back: "Gen. Sg. f. Part. Akt. Aor." },
    { front: "λαβούσῃ",     back: "Dat. Sg. f. Part. Akt. Aor." },
    { front: "λαβοῦσαν",    back: "Akk. Sg. f. Part. Akt. Aor." },
    { front: "λαβοῦσαι",    back: "Nom. Pl. f. Part. Akt. Aor." },
    { front: "λαβουσῶν",    back: "Gen. Pl. f. Part. Akt. Aor." },
    { front: "λαβούσαις",   back: "Dat. Pl. f. Part. Akt. Aor." },
    { front: "λαβούσας",    back: "Akk. Pl. f. Part. Akt. Aor." },

    // Neutrum
    { front: "λαβόν",       back: "Nom. Sg. n. Part. Akt. Aor." },
    { front: "λαβόντος",    back: "Gen. Sg. n. Part. Akt. Aor." },
    { front: "λαβόντι",     back: "Dat. Sg. n. Part. Akt. Aor." },
    { front: "λαβόν",       back: "Akk. Sg. n. Part. Akt. Aor." },
    { front: "λαβόντα",     back: "Nom. Pl. n. Part. Akt. Aor." },
    { front: "λαβόντων",    back: "Gen. Pl. n. Part. Akt. Aor." },
    { front: "λαβοῦσι(ν)",  back: "Dat. Pl. n. Part. Akt. Aor." },
    { front: "λαβόντα",     back: "Akk. Pl. n. Part. Akt. Aor." }
  ]
},

// nach "λύω – Partizip Medium Präsens" einfügen
{
  name: "λαμβάνω – Partizip Medium Präsens",
  cards: [
    // Maskulinum
    { front: "λαμβανόμενος",   back: "Nom. Sg. m. Part. Med. Präs." },
    { front: "λαμβανομένου",   back: "Gen. Sg. m. Part. Med. Präs." },
    { front: "λαμβανομένῳ",   back: "Dat. Sg. m. Part. Med. Präs." },
    { front: "λαμβανόμενον",   back: "Akk. Sg. m. Part. Med. Präs." },
    { front: "λαμβανόμενοι",   back: "Nom. Pl. m. Part. Med. Präs." },
    { front: "λαμβανομένων",   back: "Gen. Pl. m. Part. Med. Präs." },
    { front: "λαμβανομένοις",  back: "Dat. Pl. m. Part. Med. Präs." },
    { front: "λαμβανομένους",  back: "Akk. Pl. m. Part. Med. Präs." },

    // Femininum
    { front: "λαμβανομένη",    back: "Nom. Sg. f. Part. Med. Präs." },
    { front: "λαμβανομένης",   back: "Gen. Sg. f. Part. Med. Präs." },
    { front: "λαμβανομένῃ",   back: "Dat. Sg. f. Part. Med. Präs." },
    { front: "λαμβανομένην",   back: "Akk. Sg. f. Part. Med. Präs." },
    { front: "λαμβανόμεναι",   back: "Nom. Pl. f. Part. Med. Präs." },
    { front: "λαμβανομένων",   back: "Gen. Pl. f. Part. Med. Präs." },
    { front: "λαμβανομέναις",  back: "Dat. Pl. f. Part. Med. Präs." },
    { front: "λαμβανομένας",   back: "Akk. Pl. f. Part. Med. Präs." },

    // Neutrum
    { front: "λαμβανόμενον",   back: "Nom. Sg. n. Part. Med. Präs." },
    { front: "λαμβανομένου",   back: "Gen. Sg. n. Part. Med. Präs." },
    { front: "λαμβανομένῳ",   back: "Dat. Sg. n. Part. Med. Präs." },
    { front: "λαμβανόμενον",   back: "Akk. Sg. n. Part. Med. Präs." },
    { front: "λαμβανόμενα",    back: "Nom. Pl. n. Part. Med. Präs." },
    { front: "λαμβανομένων",   back: "Gen. Pl. n. Part. Med. Präs." },
    { front: "λαμβανομένοις",  back: "Dat. Pl. n. Part. Med. Präs." },
    { front: "λαμβανόμενα",    back: "Akk. Pl. n. Part. Med. Präs." }
  ]
},

// nach "λύω – Partizip Medium Futur" einfügen
{
  name: "λαμβάνω – Partizip Medium Futur",
  cards: [
    // Maskulinum
    { front: "ληψόμενος",    back: "Nom. Sg. m. Part. Med. Fut." },
    { front: "ληψομένου",    back: "Gen. Sg. m. Part. Med. Fut." },
    { front: "ληψομένῳ",    back: "Dat. Sg. m. Part. Med. Fut." },
    { front: "ληψόμενον",    back: "Akk. Sg. m. Part. Med. Fut." },
    { front: "ληψόμενοι",    back: "Nom. Pl. m. Part. Med. Fut." },
    { front: "ληψομένων",    back: "Gen. Pl. m. Part. Med. Fut." },
    { front: "ληψομένοις",   back: "Dat. Pl. m. Part. Med. Fut." },
    { front: "ληψομένους",   back: "Akk. Pl. m. Part. Med. Fut." },

    // Femininum
    { front: "ληψομένη",     back: "Nom. Sg. f. Part. Med. Fut." },
    { front: "ληψομένης",    back: "Gen. Sg. f. Part. Med. Fut." },
    { front: "ληψομένῃ",    back: "Dat. Sg. f. Part. Med. Fut." },
    { front: "ληψομένην",    back: "Akk. Sg. f. Part. Med. Fut." },
    { front: "ληψόμεναι",    back: "Nom. Pl. f. Part. Med. Fut." },
    { front: "ληψομένων",    back: "Gen. Pl. f. Part. Med. Fut." },
    { front: "ληψομέναις",   back: "Dat. Pl. f. Part. Med. Fut." },
    { front: "ληψομένας",    back: "Akk. Pl. f. Part. Med. Fut." },

    // Neutrum
    { front: "ληψόμενον",    back: "Nom. Sg. n. Part. Med. Fut." },
    { front: "ληψομένου",    back: "Gen. Sg. n. Part. Med. Fut." },
    { front: "ληψομένῳ",    back: "Dat. Sg. n. Part. Med. Fut." },
    { front: "ληψόμενον",    back: "Akk. Sg. n. Part. Med. Fut." },
    { front: "ληψόμενα",     back: "Nom. Pl. n. Part. Med. Fut." },
    { front: "ληψομένων",    back: "Gen. Pl. n. Part. Med. Fut." },
    { front: "ληψομένοις",   back: "Dat. Pl. n. Part. Med. Fut." },
    { front: "ληψόμενα",     back: "Akk. Pl. n. Part. Med. Fut." }
  ]
},

// nach "λύω – Partizip Medium Aorist" einfügen
{
  name: "λαμβάνω – Partizip Medium Aorist",
  cards: [
    // Maskulinum
    { front: "λαβόμενος",   back: "Nom. Sg. m. Part. Med. Aor." },
    { front: "λαβομένου",   back: "Gen. Sg. m. Part. Med. Aor." },
    { front: "λαβομένῳ",   back: "Dat. Sg. m. Part. Med. Aor." },
    { front: "λαβόμενον",   back: "Akk. Sg. m. Part. Med. Aor." },
    { front: "λαβόμενοι",   back: "Nom. Pl. m. Part. Med. Aor." },
    { front: "λαβομένων",   back: "Gen. Pl. m. Part. Med. Aor." },
    { front: "λαβομένοις",  back: "Dat. Pl. m. Part. Med. Aor." },
    { front: "λαβομένους",  back: "Akk. Pl. m. Part. Med. Aor." },

    // Femininum
    { front: "λαβομένη",    back: "Nom. Sg. f. Part. Med. Aor." },
    { front: "λαβομένης",   back: "Gen. Sg. f. Part. Med. Aor." },
    { front: "λαβομένῃ",   back: "Dat. Sg. f. Part. Med. Aor." },
    { front: "λαβομένην",   back: "Akk. Sg. f. Part. Med. Aor." },
    { front: "λαβόμεναι",   back: "Nom. Pl. f. Part. Med. Aor." },
    { front: "λαβομένων",   back: "Gen. Pl. f. Part. Med. Aor." },
    { front: "λαβομέναις",  back: "Dat. Pl. f. Part. Med. Aor." },
    { front: "λαβομένας",   back: "Akk. Pl. f. Part. Med. Aor." },

    // Neutrum
    { front: "λαβόμενον",   back: "Nom. Sg. n. Part. Med. Aor." },
    { front: "λαβομένου",   back: "Gen. Sg. n. Part. Med. Aor." },
    { front: "λαβομένῳ",   back: "Dat. Sg. n. Part. Med. Aor." },
    { front: "λαβόμενον",   back: "Akk. Sg. n. Part. Med. Aor." },
    { front: "λαβόμενα",    back: "Nom. Pl. n. Part. Med. Aor." },
    { front: "λαβομένων",   back: "Gen. Pl. n. Part. Med. Aor." },
    { front: "λαβομένοις",  back: "Dat. Pl. n. Part. Med. Aor." },
    { front: "λαβόμενα",    back: "Akk. Pl. n. Part. Med. Aor." }
  ]
},

// nach "λύω – Partizip Passiv Präsens" einfügen
{
  name: "λαμβάνω – Partizip Passiv Präsens",
  cards: [
    // Maskulinum
    { front: "λαμβανόμενος",   back: "Nom. Sg. m. Part. Pass. Präs." },
    { front: "λαμβανομένου",   back: "Gen. Sg. m. Part. Pass. Präs." },
    { front: "λαμβανομένῳ",   back: "Dat. Sg. m. Part. Pass. Präs." },
    { front: "λαμβανόμενον",   back: "Akk. Sg. m. Part. Pass. Präs." },
    { front: "λαμβανόμενοι",   back: "Nom. Pl. m. Part. Pass. Präs." },
    { front: "λαμβανομένων",   back: "Gen. Pl. m. Part. Pass. Präs." },
    { front: "λαμβανομένοις",  back: "Dat. Pl. m. Part. Pass. Präs." },
    { front: "λαμβανομένους",  back: "Akk. Pl. m. Part. Pass. Präs." },

    // Femininum
    { front: "λαμβανομένη",    back: "Nom. Sg. f. Part. Pass. Präs." },
    { front: "λαμβανομένης",   back: "Gen. Sg. f. Part. Pass. Präs." },
    { front: "λαμβανομένῃ",   back: "Dat. Sg. f. Part. Pass. Präs." },
    { front: "λαμβανομένην",   back: "Akk. Sg. f. Part. Pass. Präs." },
    { front: "λαμβανόμεναι",   back: "Nom. Pl. f. Part. Pass. Präs." },
    { front: "λαμβανομένων",   back: "Gen. Pl. f. Part. Pass. Präs." },
    { front: "λαμβανομέναις",  back: "Dat. Pl. f. Part. Pass. Präs." },
    { front: "λαμβανομένας",   back: "Akk. Pl. f. Part. Pass. Präs." },

    // Neutrum
    { front: "λαμβανόμενον",   back: "Nom. Sg. n. Part. Pass. Präs." },
    { front: "λαμβανομένου",   back: "Gen. Sg. n. Part. Pass. Präs." },
    { front: "λαμβανομένῳ",   back: "Dat. Sg. n. Part. Pass. Präs." },
    { front: "λαμβανόμενον",   back: "Akk. Sg. n. Part. Pass. Präs." },
    { front: "λαμβανόμενα",    back: "Nom. Pl. n. Part. Pass. Präs." },
    { front: "λαμβανομένων",   back: "Gen. Pl. n. Part. Pass. Präs." },
    { front: "λαμβανομένοις",  back: "Dat. Pl. n. Part. Pass. Präs." },
    { front: "λαμβανόμενα",    back: "Akk. Pl. n. Part. Pass. Präs." }
  ]
},

// nach "λύω – Partizip Passiv Futur" einfügen
{
  name: "λαμβάνω – Partizip Passiv Futur",
  cards: [
    // Maskulinum
    { front: "ληφθησόμενος",   back: "Nom. Sg. m. Part. Pass. Fut." },
    { front: "ληφθησομένου",   back: "Gen. Sg. m. Part. Pass. Fut." },
    { front: "ληφθησομένῳ",   back: "Dat. Sg. m. Part. Pass. Fut." },
    { front: "ληφθησόμενον",   back: "Akk. Sg. m. Part. Pass. Fut." },
    { front: "ληφθησόμενοι",   back: "Nom. Pl. m. Part. Pass. Fut." },
    { front: "ληφθησομένων",   back: "Gen. Pl. m. Part. Pass. Fut." },
    { front: "ληφθησομένοις",  back: "Dat. Pl. m. Part. Pass. Fut." },
    { front: "ληφθησομένους",  back: "Akk. Pl. m. Part. Pass. Fut." },

    // Femininum
    { front: "ληφθησομένη",    back: "Nom. Sg. f. Part. Pass. Fut." },
    { front: "ληφθησομένης",   back: "Gen. Sg. f. Part. Pass. Fut." },
    { front: "ληφθησομένῃ",   back: "Dat. Sg. f. Part. Pass. Fut." },
    { front: "ληφθησομένην",   back: "Akk. Sg. f. Part. Pass. Fut." },
    { front: "ληφθησόμεναι",   back: "Nom. Pl. f. Part. Pass. Fut." },
    { front: "ληφθησομένων",   back: "Gen. Pl. f. Part. Pass. Fut." },
    { front: "ληφθησομέναις",  back: "Dat. Pl. f. Part. Pass. Fut." },
    { front: "ληφθησομένας",   back: "Akk. Pl. f. Part. Pass. Fut." },

    // Neutrum
    { front: "ληφθησόμενον",   back: "Nom. Sg. n. Part. Pass. Fut." },
    { front: "ληφθησομένου",   back: "Gen. Sg. n. Part. Pass. Fut." },
    { front: "ληφθησομένῳ",   back: "Dat. Sg. n. Part. Pass. Fut." },
    { front: "ληφθησόμενον",   back: "Akk. Sg. n. Part. Pass. Fut." },
    { front: "ληφθησόμενα",    back: "Nom. Pl. n. Part. Pass. Fut." },
    { front: "ληφθησομένων",   back: "Gen. Pl. n. Part. Pass. Fut." },
    { front: "ληφθησομένοις",  back: "Dat. Pl. n. Part. Pass. Fut." },
    { front: "ληφθησόμενα",    back: "Akk. Pl. n. Part. Pass. Fut." }
  ]
},

// nach "λύω – Partizip Passiv Aorist" einfügen
{
  name: "λαμβάνω – Partizip Passiv Aorist",
  cards: [
    // Maskulinum
    { front: "ληφθείς",       back: "Nom. Sg. m. Part. Pass. Aor." },
    { front: "ληφθέντος",     back: "Gen. Sg. m. Part. Pass. Aor." },
    { front: "ληφθέντι",      back: "Dat. Sg. m. Part. Pass. Aor." },
    { front: "ληφθέντα",      back: "Akk. Sg. m. Part. Pass. Aor." },
    { front: "ληφθέντες",     back: "Nom. Pl. m. Part. Pass. Aor." },
    { front: "ληφθέντων",     back: "Gen. Pl. m. Part. Pass. Aor." },
    { front: "ληφθεῖσι(ν)",   back: "Dat. Pl. m. Part. Pass. Aor." },
    { front: "ληφθέντας",     back: "Akk. Pl. m. Part. Pass. Aor." },

    // Femininum
    { front: "ληφθεῖσα",      back: "Nom. Sg. f. Part. Pass. Aor." },
    { front: "ληφθείσης",     back: "Gen. Sg. f. Part. Pass. Aor." },
    { front: "ληφθείσῃ",      back: "Dat. Sg. f. Part. Pass. Aor." },
    { front: "ληφθεῖσαν",     back: "Akk. Sg. f. Part. Pass. Aor." },
    { front: "ληφθεῖσαι",     back: "Nom. Pl. f. Part. Pass. Aor." },
    { front: "ληφθεισῶν",     back: "Gen. Pl. f. Part. Pass. Aor." },
    { front: "ληφθείσαις",    back: "Dat. Pl. f. Part. Pass. Aor." },
    { front: "ληφθείσας",     back: "Akk. Pl. f. Part. Pass. Aor." },

    // Neutrum
    { front: "ληφθέν",        back: "Nom. Sg. n. Part. Pass. Aor." },
    { front: "ληφθέντος",     back: "Gen. Sg. n. Part. Pass. Aor." },
    { front: "ληφθέντι",      back: "Dat. Sg. n. Part. Pass. Aor." },
    { front: "ληφθέν",        back: "Akk. Sg. n. Part. Pass. Aor." },
    { front: "ληφθέντα",      back: "Nom. Pl. n. Part. Pass. Aor." },
    { front: "ληφθέντων",     back: "Gen. Pl. n. Part. Pass. Aor." },
    { front: "ληφθεῖσι(ν)",   back: "Dat. Pl. n. Part. Pass. Aor." },
    { front: "ληφθέντα",      back: "Akk. Pl. n. Part. Pass. Aor." }
  ]
}
];
