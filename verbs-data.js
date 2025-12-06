// Fichier : verbs-data.js
// Stocke les verbes avec leurs formes de conjugaison par temps et par personne.

const VERBS_DATA = {
    "parler": {
        group: 1,
        conjugations: {
            present: {
                je: "parle",
                tu: "parles",
                il: "parle",
                nous: "parlons",
                vous: "parlez",
                ils: "parlent"
            },
            imparfait: {
                je: "parlais",
                tu: "parlais",
                il: "parlait",
                nous: "parlions",
                vous: "parliez",
                ils: "parlaient"
            },
            futur_simple: {
                je: "parlerai",
                tu: "parleras",
                il: "parlera",
                nous: "parlerons",
                vous: "parlerez",
                ils: "parleront"
            },
            passe_simple: {
                je: "parlai",
                tu: "parlas",
                il: "parla",
                nous: "parlâmes",
                vous: "parlâtes",
                ils: "parlèrent"
            },
            passe_compose: {
                je: "ai parlé",
                tu: "as parlé",
                il: "a parlé",
                nous: "avons parlé",
                vous: "avez parlé",
                ils: "ont parlé"
            },
            plus_que_parfait: {
                je: "avais parlé",
                tu: "avais parlé",
                il: "avait parlé",
                nous: "avions parlé",
                vous: "aviez parlé",
                ils: "avaient parlé"
            }
        }
    },

    "finir": {
        group: 2,
        conjugations: {
            present: {
                je: "finis",
                tu: "finis",
                il: "finit",
                nous: "finissons",
                vous: "finissez",
                ils: "finissent"
            },
            imparfait: {
                je: "finissais",
                tu: "finissais",
                il: "finissait",
                nous: "finissions",
                vous: "finissiez",
                ils: "finissaient"
            },
            futur_simple: {
                je: "finirai",
                tu: "finiras",
                il: "finira",
                nous: "finirons",
                vous: "finirez",
                ils: "finiront"
            },
            passe_compose: {
                je: "ai fini",
                tu: "as fini",
                il: "a fini",
                nous: "avons fini",
                vous: "avez fini",
                ils: "ont fini"
            },
            plus_que_parfait: {
                je: "avais fini",
                tu: "avais fini",
                il: "avait fini",
                nous: "avions fini",
                vous: "aviez fini",
                ils: "avaient fini"
            }
        }
    },

    "aller": {
        group: 3,
        conjugations: {
            present: {
                je: "vais",
                tu: "vas",
                il: "va",
                nous: "allons",
                vous: "allez",
                ils: "vont"
            },
            imparfait: {
                je: "allais",
                tu: "allais",
                il: "allait",
                nous: "allions",
                vous: "alliez",
                ils: "allaient"
            },
            futur_simple: {
                je: "irai",
                tu: "iras",
                il: "ira",
                nous: "irons",
                vous: "irez",
                ils: "iront"
            },
            passe_compose: {
                je: "suis allé",
                tu: "es allé",
                il: "est allé",
                nous: "sommes allés",
                vous: "êtes allés",
                ils: "sont allés"
            },
            plus_que_parfait: {
                je: "étais allé",
                tu: "étais allé",
                il: "était allé",
                nous: "étions allés",
                vous: "étiez allés",
                ils: "étaient allés"
            }
        }
    }
};
