export interface AreaContent {
  id: string;
  name: string;
}

export const areas: AreaContent[] = [
  { id: "tarragona", name: "Tarragona" },
  { id: "reus", name: "Reus" },
  { id: "salou", name: "Salou" },
  { id: "cambrils", name: "Cambrils" },
  { id: "vila-seca", name: "Vila-seca" },
  { id: "altafulla", name: "Altafulla" },
  { id: "torredembarra", name: "Torredembarra" },
  { id: "valls", name: "Valls" },
  { id: "el-vendrell", name: "El Vendrell" },
  { id: "constanti", name: "Constantí" },
];

export const businessInfo = {
  name: "Jardí Verd",
  phoneDisplay: "625 677 383",
  phoneIntl: "+34625677383",
  phoneHref: "tel:+34625677383",
  whatsappNumber: "34625677383",
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
};
