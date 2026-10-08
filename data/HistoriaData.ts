export type TimelineItem = {
  year: string;
  title: string;
  description?: string;
};

/** Os primeiros itens (antes do "Ver mais") ficam em `initialItems`. */
export const initialItems: TimelineItem[] = [
  {
    year: "Novembro de 1991",
    title: "Criação do PET-Informática",
    description: "O PET-Inf foi criado na PUCRS ao final de 1991",
  },
  {
    year: "1991",
    title: "Prof. Dr. Álvaro Guarda",
  },
  {
    year: "1993",
    title: "Prof. Dr. Afonso Orth",
  },
];

/** Os itens mostrados somente após clicar em "Ver mais". */
export const extraItems: TimelineItem[] = [
  { year: "1996", title: "Prof. Dr. Celso Maciel" },
  { year: "2001", title: "Prof. Dr. Fabiano Hessel" },
  { year: "2002", title: "Prof. Dr. Luís Lamb" },
  { year: "2002", title: "Profa. Dra. Lúcia Giraffa" },
  { year: "2005", title: "Prof. Dr. Alfio Martini" },
  { year: "2010", title: "Prof. Dr. Celso Maciel" },
  { year: "2011", title: "Prof. Dr. Tiago Ferreto" },
  { year: "2018", title: "Prof. Dr. Alfio Martini" },
  { year: "2019", title: "Prof. Dr. Rafael Garibotti" },
  { year: "2020", title: "Prof. Dr. Tiago Ferreto" },
  { year: "2023 - Atualmente", title: "Profa. Dra. Milene Silveira" },
];
