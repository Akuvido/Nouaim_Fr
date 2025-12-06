// ------------------------
// Données : verbes par groupe (>= 20 chacun)
// ------------------------
const VERB_GROUPS = {
    1: [
        "parler", "aimer", "manger", "regarder", "écouter",
        "chanter", "jouer", "marcher", "travailler", "penser",
        "trouver", "donner", "demander", "porter", "fermer",
        "ouvrir", "rentrer", "arriver", "téléphoner", "rêver",
        "préparer", "visiter"
    ],
    2: [
        "finir", "choisir", "grandir", "réussir", "rougir",
        "maigrir", "grossir", "applaudir", "réfléchir", "nourrir",
        "punir", "bâtir", "unir", "fournir", "guérir",
        "abolir", "envahir", "établir", "flétrir", "investir",
        "ralentir"
    ],
    3: [
        "aller", "faire", "prendre", "mettre", "voir",
        "pouvoir", "vouloir", "devoir", "venir", "tenir",
        "sortir", "partir", "dormir", "boire", "dire",
        "écrire", "lire", "ouvrir", "offrir", "savoir",
        "connaître", "recevoir"
    ]
};

// ------------------------
// Banque d’exercices prévus
// (on utilise une base fixe + un algorithme de sélection qui garantit 5 items)
// ------------------------

// MODE A : Conjugaison
const EXERCISES_MODE_A = [
    // Niveau 1 – temps simples
    {
        id: "A1",
        mode: "A",
        level: 1,
        tenses: ["present"],
        groups: [2],
        sentence: "Nous (finir) ___ nos devoirs chaque soir.",
        correctForm: "finissons",
        explanation: "Présent de l’indicatif, verbe « finir », 1re personne du pluriel : nous finissons."
    },
    {
        id: "A2",
        mode: "A",
        level: 1,
        tenses: ["present"],
        groups: [1],
        sentence: "Tu (parler) ___ trop vite.",
        correctForm: "parles",
        explanation: "Présent, 2e personne du singulier, verbe du 1er groupe : tu parles."
    },
    {
        id: "A3",
        mode: "A",
        level: 1,
        tenses: ["present"],
        groups: [3],
        sentence: "Ils (aller) ___ souvent au cinéma.",
        correctForm: "vont",
        explanation: "Présent, verbe irrégulier « aller » : ils vont."
    },
    {
        id: "A4",
        mode: "A",
        level: 1,
        tenses: ["imparfait"],
        groups: [1],
        sentence: "Quand nous étions enfants, nous (jouer) ___ dans le jardin.",
        correctForm: "jouions",
        explanation: "Imparfait, 1re personne du pluriel : nous jouions (attention au -i-)."
    },
    {
        id: "A5",
        mode: "A",
        level: 1,
        tenses: ["futur_simple"],
        groups: [3],
        sentence: "Demain, elle (partir) ___ à six heures.",
        correctForm: "partira",
        explanation: "Futur simple, 3e personne du singulier : elle partira."
    },
    {
        id: "A6",
        mode: "A",
        level: 1,
        tenses: ["passe_simple"],
        groups: [1],
        sentence: "Hier, ils (parler) ___ toute la soirée.",
        correctForm: "parlèrent",
        explanation: "Passé simple, 3e personne du pluriel du 1er groupe : ils parlèrent."
    },

    // Niveau 2 – temps composés / auxiliaires
    {
        id: "A7",
        mode: "A",
        level: 2,
        tenses: ["passe_compose"],
        groups: [2],
        sentence: "Hier, nous (finir) ___ ce livre.",
        correctForm: "avons fini",
        explanation: "Passé composé avec l’auxiliaire avoir : nous avons fini."
    },
    {
        id: "A8",
        mode: "A",
        level: 2,
        tenses: ["passe_compose"],
        groups: [3],
        sentence: "Elles (aller) ___ au marché ce matin.",
        correctForm: "sont allées",
        explanation: "Passé composé avec être : elles sont allées (accord avec le sujet)."
    },
    {
        id: "A9",
        mode: "A",
        level: 2,
        tenses: ["plus_que_parfait"],
        groups: [1],
        sentence: "Ils (terminer) ___ le projet avant notre arrivée.",
        correctForm: "avaient terminé",
        explanation: "Plus-que-parfait : ils avaient terminé."
    },
    {
        id: "A10",
        mode: "A",
        level: 2,
        tenses: ["present"],
        groups: [3],
        sentence: "Je (pouvoir) ___ t’aider si tu veux.",
        correctForm: "peux",
        explanation: "Présent, verbe « pouvoir », 1re personne du singulier : je peux."
    },

    // Niveau 3 – cas plus riches
    {
        id: "A11",
        mode: "A",
        level: 3,
        tenses: ["imparfait"],
        groups: [3],
        sentence: "Nous (venir) ___ souvent ici quand nous étions petits.",
        correctForm: "venions",
        explanation: "Imparfait, 1re personne du pluriel : nous venions."
    },
    {
        id: "A12",
        mode: "A",
        level: 3,
        tenses: ["futur_simple"],
        groups: [3],
        sentence: "Ils (devoir) ___ rendre le travail demain.",
        correctForm: "devront",
        explanation: "Futur simple, verbe « devoir » : ils devront."
    },
    {
        id: "A13",
        mode: "A",
        level: 3,
        tenses: ["plus_que_parfait"],
        groups: [3],
        sentence: "Elle (voir) ___ le film avant toi.",
        correctForm: "avait vu",
        explanation: "Plus-que-parfait, verbe « voir » : elle avait vu."
    },
    {
        id: "A14",
        mode: "A",
        level: 3,
        tenses: ["passe_anterieur"],
        groups: [1],
        sentence: "À peine (arriver) ___, il repartit.",
        correctForm: "fut arrivé",
        explanation: "Passé antérieur, 3e personne du singulier, verbe « arriver » : il fut arrivé."
    }
];

// MODE B : Accord du participe passé
const EXERCISES_MODE_B = [
    // Niveau 1 – cas très simples
    {
        id: "B1",
        mode: "B",
        level: 1,
        tenses: ["passe_compose"],
        groups: [3],
        sentence: "Il a (manger) ___ des pommes.",
        correctForm: "mangé",
        requiresAgreement: false,
        agreementType: "aucun",
        explanation: "COD « des pommes » est placé après le verbe → pas d’accord : mangé."
    },
    {
        id: "B2",
        mode: "B",
        level: 1,
        tenses: ["passe_compose"],
        groups: [1],
        sentence: "Elles sont (arriver) ___ en avance.",
        correctForm: "arrivées",
        requiresAgreement: true,
        agreementType: "sujet",
        explanation: "Auxiliaire être → accord avec le sujet « elles » : arrivées (féminin pluriel)."
    },
    {
        id: "B3",
        mode: "B",
        level: 1,
        tenses: ["passe_compose"],
        groups: [2],
        sentence: "Nous avons (finir) ___ le travail.",
        correctForm: "fini",
        requiresAgreement: false,
        agreementType: "aucun",
        explanation: "COD « le travail » placé après → pas d’accord : fini."
    },

    // Niveau 2 – COD avant, pronominaux simples
    {
        id: "B4",
        mode: "B",
        level: 2,
        tenses: ["passe_compose"],
        groups: [3],
        sentence: "Les pommes qu’il a (manger) ___ étaient délicieuses.",
        correctForm: "mangées",
        requiresAgreement: true,
        agreementType: "cod_avant",
        explanation: "COD « les pommes » est placé avant → accord au féminin pluriel : mangées."
    },
    {
        id: "B5",
        mode: "B",
        level: 2,
        tenses: ["passe_compose"],
        groups: [3],
        sentence: "Les lettres qu’elle a (écrire) ___ sont sur la table.",
        correctForm: "écrites",
        requiresAgreement: true,
        agreementType: "cod_avant",
        explanation: "COD « les lettres » est placé avant → accord : écrites."
    },
    {
        id: "B6",
        mode: "B",
        level: 2,
        tenses: ["passe_compose"],
        groups: [3],
        sentence: "Elles se sont (lever) ___ tard.",
        correctForm: "levées",
        requiresAgreement: true,
        agreementType: "pronom_reflechi",
        explanation: "Verbe pronominal, COD « se » = sujet « elles » → accord : levées."
    },
    {
        id: "B7",
        mode: "B",
        level: 2,
        tenses: ["passe_compose"],
        groups: [1],
        sentence: "Les exercices qu’ils ont (préparer) ___ étaient difficiles.",
        correctForm: "préparés",
        requiresAgreement: true,
        agreementType: "cod_avant",
        explanation: "COD « les exercices » est placé avant → accord : préparés."
    },

    // Niveau 3 – cas piégeux (COI, en, pronominaux + COD après…)
    {
        id: "B8",
        mode: "B",
        level: 3,
        tenses: ["passe_compose"],
        groups: [3],
        sentence: "Ils se sont (parler) ___ longtemps.",
        correctForm: "parlé",
        requiresAgreement: false,
        agreementType: "aucun",
        explanation: "Ici « se parler » a un COI, pas de COD → participe passé invariable : parlé."
    },
    {
        id: "B9",
        mode: "B",
        level: 3,
        tenses: ["passe_compose"],
        groups: [3],
        sentence: "Des difficultés, ils en ont (rencontrer) ___.",
        correctForm: "rencontré",
        requiresAgreement: false,
        agreementType: "en",
        explanation: "Avec le pronom « en », en général pas d’accord → rencontré (invariable)."
    },
    {
        id: "B10",
        mode: "B",
        level: 3,
        tenses: ["plus_que_parfait"],
        groups: [3],
        sentence: "Les chansons qu’ils avaient (entendre) ___ la veille lui revenaient en tête.",
        correctForm: "entendues",
        requiresAgreement: true,
        agreementType: "cod_avant",
        explanation: "COD « les chansons » placé avant « avaient » → accord : entendues."
    },
    {
        id: "B11",
        mode: "B",
        level: 3,
        tenses: ["passe_compose"],
        groups: [3],
        sentence: "Elle s’est (laver) ___ les mains.",
        correctForm: "lavé",
        requiresAgreement: false,
        agreementType: "aucun",
        explanation: "COD « les mains » est après le verbe → pas d’accord avec « s’ » : lavé."
    },
    {
        id: "B12",
        mode: "B",
        level: 3,
        tenses: ["passe_compose"],
        groups: [1],
        sentence: "La décision qu’ils ont (prendre) ___ a surpris tout le monde.",
        correctForm: "prise",
        requiresAgreement: true,
        agreementType: "cod_avant",
        explanation: "COD « la décision » placé avant → accord au féminin singulier : prise."
    }
];

const ALL_EXERCISES = [...EXERCISES_MODE_A, ...EXERCISES_MODE_B];

let currentExercises = [];
let hasCorrection = false;

// ------------------------
// Utilitaires
// ------------------------
function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getCheckedValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
        .map(i => i.value);
}

function getSelectedMode() {
    const input = document.querySelector('input[name="mode"]:checked');
    return input ? input.value : "A";
}

function updateExerciseInfo(text) {
    const info = document.getElementById("exerciseInfo");
    info.innerHTML = "ℹ️ " + text;
}

function clearResults() {
    hasCorrection = false;
    document.getElementById("scorePill").style.display = "none";
    document.getElementById("scoreText").textContent = "";
    document.getElementById("scoreDetails").textContent = "";
    document.getElementById("btnExport").disabled = false; // activé seulement après correction
    document.getElementById("btnExport").disabled = true;
}

// ------------------------
// Génération d’exercices
// (algorithme qui garantit 5 exercices)
// ------------------------
function generateExercises() {
    clearResults();

    const level = parseInt(document.getElementById("levelSelect").value, 10);
    const tenses = getCheckedValues("tense");
    const groups = getCheckedValues("group").map(v => parseInt(v, 10));
    const mode = getSelectedMode();

    if (tenses.length === 0) {
        alert("Choisis au moins un temps.");
        return;
    }
    if (groups.length === 0) {
        alert("Choisis au moins un groupe verbal.");
        return;
    }

    const base = ALL_EXERCISES.filter(ex => ex.mode === mode && ex.level <= level);

    let candidates = base.filter(ex =>
        ex.tenses.some(t => tenses.includes(t)) &&
        ex.groups.some(g => groups.includes(g))
    );

    // Si pas assez d’exercices, on relâche les contraintes progressivement
    if (candidates.length < 5) {
        candidates = base.filter(ex =>
            ex.tenses.some(t => tenses.includes(t))
        );
    }
    if (candidates.length < 5) {
        candidates = base;
    }
    if (candidates.length === 0) {
        // Sécurité ultime : tous les exercices du mode
        candidates = ALL_EXERCISES.filter(ex => ex.mode === mode);
    }

    candidates = shuffleArray(candidates);

    const selected = [];
    const needed = 5;
    for (let i = 0; i < needed; i++) {
        selected.push(candidates[i % candidates.length]);
    }

    currentExercises = selected.map(ex => ({
        ...ex,
        user: {
            form: "",
            accordYesNo: null,
            accordType: ""
        },
        result: {}
    }));

    renderExerciseList();

    document.getElementById("exerciseCounter").textContent =
        "5 exercices générés (l’algorithme garantit toujours 5 items).";

    updateExerciseInfo("Remplis tes réponses, indique les accords si nécessaire, puis clique sur « Corriger ».");
    document.getElementById("btnCorrect").disabled = false;
}

// ------------------------
// Affichage des exercices
// ------------------------
function renderExerciseList() {
    const container = document.getElementById("exerciseList");
    container.innerHTML = "";

    if (currentExercises.length === 0) {
        const empty = document.createElement("div");
        empty.className = "exercise-empty";
        empty.textContent = "Aucun exercice pour l’instant. Configure ton entraînement puis clique sur « Générer 5 exercices ».";
        container.appendChild(empty);
        return;
    }

    currentExercises.forEach((ex, idx) => {
        const item = document.createElement("div");
        item.className = "exercise-item";
        item.dataset.index = String(idx);

        const header = document.createElement("div");
        header.className = "exercise-item-header";

        const title = document.createElement("div");
        title.className = "exercise-title";
        title.textContent = `Exercice ${idx + 1}`;
        header.appendChild(title);

        const modeTag = document.createElement("div");
        modeTag.className = "exercise-mode-tag";
        modeTag.textContent = ex.mode === "A" ? "Conjugaison" : "Accord du participe passé";
        header.appendChild(modeTag);

        item.appendChild(header);

        const sentence = document.createElement("div");
        sentence.className = "exercise-sentence";
        sentence.textContent = ex.sentence;
        item.appendChild(sentence);

        const inputRow = document.createElement("div");
        inputRow.className = "input-row";

        const labelForm = document.createElement("label");
        labelForm.textContent = "Forme conjuguée :";
        inputRow.appendChild(labelForm);

        const input = document.createElement("input");
        input.type = "text";
        input.className = "text-input";
        input.placeholder = "Écris ici la forme correcte";
        input.dataset.role = "verbForm";
        inputRow.appendChild(input);

        item.appendChild(inputRow);

        if (ex.mode === "B") {
            const accordRow = document.createElement("div");
            accordRow.className = "input-row";

            const labelAccord = document.createElement("label");
            labelAccord.textContent = "Faut-il accorder le participe passé ?";
            accordRow.appendChild(labelAccord);

            const radioGroup = document.createElement("div");
            radioGroup.className = "radio-group";

            const yesId = `accord-oui-${idx}`;
            const noId = `accord-non-${idx}`;

            const lblYes = document.createElement("label");
            const rYes = document.createElement("input");
            rYes.type = "radio";
            rYes.name = `accord-${idx}`;
            rYes.value = "oui";
            rYes.id = yesId;
            lblYes.appendChild(rYes);
            lblYes.append(" Oui");
            radioGroup.appendChild(lblYes);

            const lblNo = document.createElement("label");
            const rNo = document.createElement("input");
            rNo.type = "radio";
            rNo.name = `accord-${idx}`;
            rNo.value = "non";
            rNo.id = noId;
            lblNo.appendChild(rNo);
            lblNo.append(" Non");
            radioGroup.appendChild(lblNo);

            accordRow.appendChild(radioGroup);

            const typeSelect = document.createElement("select");
            typeSelect.className = "small-select";
            typeSelect.dataset.role = "accordType";

            const opt0 = new Option("Avec quoi ? (si accord)", "", true, true);
            const opt1 = new Option("Sujet (être)", "sujet");
            const opt2 = new Option("COD placé avant", "cod_avant");
            const opt3 = new Option("Pronom réfléchi (COD = sujet)", "pronom_reflechi");
            const opt4 = new Option("Pas d’accord (COD après, COI)", "aucun");
            const opt5 = new Option("Pas d’accord (pronom en)", "en");

            typeSelect.add(opt0);
            typeSelect.add(opt1);
            typeSelect.add(opt2);
            typeSelect.add(opt3);
            typeSelect.add(opt4);
            typeSelect.add(opt5);

            accordRow.appendChild(typeSelect);
            item.appendChild(accordRow);
        }

        const feedback = document.createElement("div");
        feedback.className = "feedback";
        feedback.dataset.role = "feedback";
        item.appendChild(feedback);

        container.appendChild(item);
    });
}

// ------------------------
// Correction
// ------------------------
function correctExercises() {
    if (currentExercises.length === 0) return;

    let fullCorrect = 0;
    let partial = 0;

    const listItems = Array.from(document.querySelectorAll(".exercise-item"));

    currentExercises.forEach((ex, idx) => {
        const item = listItems[idx];
        const feedback = item.querySelector('[data-role="feedback"]');
        feedback.innerHTML = "";

        const input = item.querySelector('input[data-role="verbForm"]');
        const userForm = (input.value || "").trim();

        let accordYesNo = null;
        let accordType = "";

        if (ex.mode === "B") {
            const checked = item.querySelector(`input[name="accord-${idx}"]:checked`);
            accordYesNo = checked ? checked.value : null;

            const sel = item.querySelector('select[data-role="accordType"]');
            if (sel) accordType = sel.value;
        }

        ex.user.form = userForm;
        ex.user.accordYesNo = accordYesNo;
        ex.user.accordType = accordType;

        const isFormCorrect = userForm.toLowerCase() === ex.correctForm.toLowerCase();

        let isAccordYesNoCorrect = true;
        let isAccordTypeCorrect = true;

        if (ex.mode === "B") {
            const shouldAccord = !!ex.requiresAgreement;
            const expectedYesNo = shouldAccord ? "oui" : "non";
            isAccordYesNoCorrect = (accordYesNo === expectedYesNo);

            if (shouldAccord) {
                isAccordTypeCorrect = accordType === ex.agreementType;
            } else {
                // Si pas d’accord attendu, on accepte « aucun » ou « en » selon le cas
                if (ex.agreementType === "en") {
                    // attendu : pas d’accord à cause de « en »
                    isAccordTypeCorrect = (accordType === "en" || accordType === "");
                } else {
                    isAccordTypeCorrect = (accordType === "aucun" || accordType === "");
                }
            }
        }

        const fullyCorrect = ex.mode === "A"
            ? isFormCorrect
            : (isFormCorrect && isAccordYesNoCorrect && isAccordTypeCorrect);

        ex.result = {
            isFormCorrect,
            isAccordYesNoCorrect,
            isAccordTypeCorrect,
            fullyCorrect
        };

        if (fullyCorrect) {
            fullCorrect++;
            const p1 = document.createElement("div");
            p1.className = "ok";
            p1.textContent = "✅ Bien joué : tout est correct pour cet exercice.";
            feedback.appendChild(p1);
        } else {
            const p1 = document.createElement("div");
            p1.className = "ko";
            p1.textContent = "❌ Ce n’est pas encore parfaitement juste, mais tu es en train d’apprendre. Regardons ensemble :";
            feedback.appendChild(p1);
        }

        const p2 = document.createElement("div");
        p2.className = "tip";

        if (!isFormCorrect) {
            p2.innerHTML += `• Forme attendue : <strong>${ex.correctForm}</strong>.<br>`;
        } else {
            p2.innerHTML += "• Forme du verbe ✅<br>";
        }

        if (ex.mode === "B") {
            const shouldAccord = !!ex.requiresAgreement;
            const expectedYesNo = shouldAccord ? "oui" : "non";

            if (!isAccordYesNoCorrect) {
                p2.innerHTML += `• Accord : la bonne réponse était <strong>${expectedYesNo}</strong>.<br>`;
            } else {
                p2.innerHTML += "• Décision d’accorder ou non ✅<br>";
            }

            const mapType = {
                "sujet": "le sujet (auxiliaire être)",
                "cod_avant": "le COD placé avant",
                "pronom_reflechi": "le pronom réfléchi quand il représente le COD = sujet",
                "aucun": "pas d’accord (COD après, COI…) ",
                "en": "la présence du pronom « en » (pas d’accord en général)"
            };

            if (shouldAccord) {
                if (!isAccordTypeCorrect) {
                    p2.innerHTML += `• Type d’accord : ici, on accorde avec <strong>${mapType[ex.agreementType] || "l’élément adéquat"}</strong>.<br>`;
                } else {
                    p2.innerHTML += "• Type d’accord ✅<br>";
                }
            } else {
                if (!isAccordTypeCorrect) {
                    p2.innerHTML += `• Ici, on considère qu’il <strong>n’y a pas d’accord</strong> à faire (${mapType[ex.agreementType] || "règle spécifique"}).<br>`;
                } else {
                    p2.innerHTML += "• Gestion de l’accord (ou non) ✅<br>";
                }
            }
        }

        p2.innerHTML += `• Rappel de la règle : ${ex.explanation}`;
        feedback.appendChild(p2);

        if (!fullyCorrect && (ex.mode === "A" ? isFormCorrect : (isFormCorrect || isAccordYesNoCorrect || isAccordTypeCorrect))) {
            partial++;
        }
    });

    const total = currentExercises.length;
    const scorePill = document.getElementById("scorePill");
    const scoreText = document.getElementById("scoreText");
    const scoreDetails = document.getElementById("scoreDetails");

    scorePill.style.display = "inline-flex";
    scoreText.textContent = `${fullCorrect} / ${total} exercices entièrement corrects`;

    const ratio = fullCorrect / total;
    scorePill.classList.toggle("bad", ratio < 0.5);

    if (fullCorrect === total) {
        scoreDetails.textContent = "Bravo ! Tu maîtrises très bien ces phrases. Tu peux changer de niveau, de temps ou de mode pour continuer.";
    } else if (fullCorrect === 0 && partial === 0) {
        scoreDetails.textContent = "C’est un point de départ, pas un jugement. Relis les explications calmement puis refais une série.";
    } else {
        scoreDetails.textContent = "Tu as déjà de bons réflexes. Utilise les explications comme des pistes pour affiner ta méthode.";
    }

    hasCorrection = true;
    document.getElementById("btnExport").disabled = false;
    updateExerciseInfo("Tu peux relire les explications ou exporter cette série en PDF.");
}

// ------------------------
// Export PDF avec jsPDF
// ------------------------
function exportToPDF() {
    if (!hasCorrection || currentExercises.length === 0) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let y = 12;
    doc.setFontSize(14);
    doc.text("Atelier de conjugaison & accord du participe passé – Série d’exercices", 10, y);
    y += 8;

    doc.setFontSize(10);
    doc.text("Export généré le : " + new Date().toLocaleString("fr-FR"), 10, y);
    y += 8;

    currentExercises.forEach((ex, idx) => {
        if (y > 260) {
            doc.addPage();
            y = 12;
        }

        doc.setFontSize(12);
        doc.text(`Exercice ${idx + 1} – ${ex.mode === "A" ? "Conjugaison" : "Accord du participe passé"}`, 10, y);
        y += 6;

        doc.setFontSize(10);
        const sentence = ex.sentence.replace("___", ex.user.form || "_____");
        const phraseLines = doc.splitTextToSize("Phrase : " + sentence, 180);
        doc.text(phraseLines, 10, y);
        y += phraseLines.length * 5;

        doc.text("Réponse attendue : " + ex.correctForm, 10, y);
        y += 5;

        if (ex.mode === "B") {
            const shouldAccord = !!ex.requiresAgreement;
            const expectedYesNo = shouldAccord ? "oui" : "non";
            let line = "Accord ? (attendu) : " + expectedYesNo;
            if (ex.user.accordYesNo) {
                line += " | Réponse donnée : " + ex.user.accordYesNo;
            }
            doc.text(line, 10, y);
            y += 5;

            const mapType = {
                "sujet": "avec le sujet (être)",
                "cod_avant": "avec le COD placé avant",
                "pronom_reflechi": "avec le pronom réfléchi (COD = sujet)",
                "aucun": "pas d’accord (COD après, COI…)",
                "en": "pas d’accord en présence de « en »"
            };

            if (shouldAccord) {
                let typeLine = "Type d’accord attendu : " + (mapType[ex.agreementType] || ex.agreementType);
                if (ex.user.accordType) {
                    typeLine += " | Choix de l’élève : " + (mapType[ex.user.accordType] || ex.user.accordType);
                }
                const typeLines = doc.splitTextToSize(typeLine, 180);
                doc.text(typeLines, 10, y);
                y += typeLines.length * 5;
            }
        }

        const ruleLines = doc.splitTextToSize("Règle / explication : " + ex.explanation, 180);
        doc.text(ruleLines, 10, y);
        y += ruleLines.length * 5 + 3;

        doc.text(
            "Exercice " + (ex.result.fullyCorrect ? "entièrement correct ✔︎" : "à retravailler ✎"),
            10, y
        );
        y += 7;
    });

    doc.save("conjugaison-accords-serie.pdf");
}

// ------------------------
// Initialisation
// ------------------------
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnGenerate").addEventListener("click", generateExercises);
    document.getElementById("btnCorrect").addEventListener("click", correctExercises);
    document.getElementById("btnExport").addEventListener("click", exportToPDF);
});
