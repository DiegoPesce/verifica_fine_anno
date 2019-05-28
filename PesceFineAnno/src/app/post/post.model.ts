import { Risposte } from '../bacheca-commenti/risposte.model';

export class Post {

  constructor(titolo: string, dataInsrimento: string, testo: string, userName: string, risposte: Risposte[]){
    this.titolo = titolo;
    this.dataInsrimento = dataInsrimento;
    this.testo = testo;
    this.userName = userName;
    this.risposte = risposte;
  }

    titolo: string;
    dataInsrimento: string;
    testo: string;
    userName: string;
    risposte: Risposte[];
}
