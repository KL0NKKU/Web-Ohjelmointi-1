//henkilö-luokka
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }

  toString() {
    return `${this.kutsumanimi} ${this.sukunimi} (${this.syntymavuosi})`;
  }
}

//urheilija-luokka perii henkilö-luokan.
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    kuvaLinkki,
    omapaino,
    laji,
    saavutukset = [],
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);

    //käytetään settereitä
    this.kuvaLinkki = kuvaLinkki;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  //getterit ja setterit urheilija-luokan attribuuteille

  get kuvaLinkki() {
    return this._kuvaLinkki;
  }
  set kuvaLinkki(value) {
    this._kuvaLinkki = value;
  }

  get omapaino() {
    return this._omapaino;
  }
  set omapaino(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("omapaino pitää olla positiivinen numero");
    }
    this._omapaino = value;
  }

  get laji() {
    return this._laji;
  }
  set laji(value) {
    if (!value || typeof value !== "string") {
      throw new Error("laji pitää olla merkkijono");
    }
    this._laji = value;
  }

  get saavutukset() {
    return this._saavutukset;
  }
  set saavutukset(value) {
    if (!Array.isArray(value)) {
      throw new Error("saavutukset pitää olla taulukko");
    }
    this._saavutukset = value;
  }

  lisaaSaavutus(saavutus) {
    this._saavutukset.push(saavutus);
  }

  toString() {
    return `${super.toString()} | ${this.laji}, ${this.omapaino} kg`;
  }
}

//urheilija-oliot

const u1 = new Urheilija(
  "Kimi",
  "Räikkönen",
  "Kimi",
  1979,
  "https://www.iloq.com/wp-content/uploads/2019/02/kimisamll.png",
  72,
  "Formula 1",
  ["F1 maailmanmestari 2007"],
);

const u2 = new Urheilija(
  "Jari",
  "Litmanen",
  "Litti",
  1971,
  "https://puoliaika.com/wp-content/uploads/2018/02/litti_ajax.jpg",
  75,
  "Jalkapallo",
  [
    "Mestarien  liiga voittaja 1995",
    "Ajaxin kapteeni",
    "Suomen maajoukkueen kapteeni",
  ],
);

u2.lisaaSaavutus(
  "Valittiin Suomen parhaaksi jalkapalloilijaksi useita kertoja",
);

u1.lisaaSaavutus("Hauska ukko");

console.log("Urheilijat:");
console.log(u1.toString());
console.log("Saavutukset:", u1.saavutukset);
console.log("----------------------");
console.log(u2.toString());
console.log("Saavutukset:", u2.saavutukset);
