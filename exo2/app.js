//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return {
    tasks: [],
    valeurDeInput: '',
    stevenSeagal:'Les memoires de steven seagal',
    suiteNbr: 123456789,
    tablo: ["du texte", 99],
    obj: {"name":"cool", "tel":123456}
};
},
//! Dans cet Object methods, on va écrire nos fonctions
methods: {

},
//! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');