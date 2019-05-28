export class Risposte {
  
  constructor(titolo: string, dataInsrimento: string, testo: string, userName: string, risposte: Risposte[]){
    this.titolo = titolo;
    this.dataInsrimento = dataInsrimento;
    this.testo = testo;
    this.userName = userName;
    this.risposte = risposte;
  }

    dataInsrimento: string;
    titolo: string;
    testo: string;
    userName: string;
    risposte: any[];
}
