import {
  eurogif,
  dolargif,
  Poundgif,
  dolar,
  orangeup,
  orangeupother,

  musmerpic,
  musmerpicc,
  musmerpiccc,
 
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Canlı Kur",
  },
  {
    id: "calculator",
    title: "Döviz Hesaplayıcısı",
  },
  {
    id: "work",
    title: "Hakkımızda",
  },
  {
    id:"contact",
    title:"Bize ulaşın"
  }
];

let services = [
  {
    title: "Dollar", 
    icon: dolargif,
  },
  {
    title: "Euro",
    icon: eurogif,
  },
  {
    title: "Pound",
    icon: Poundgif,
  },
 
];



const experiences = [
  {
    title: "Musmer Exchange Nerdedir?",
    company_name: "",
    icon: orangeup,
    iconBg: "#383E56",
    date: "Mart 2013 - Nisan 2014",
    points: [
      "Kurtuluş Caddesi, Ozanköy,Lemar Yolu, Girne 99300.",
      
    ],
  },
  {
    title: "Güncel Döviz kurları Nelerdir",
    company_name: "",
    icon: orangeupother,
    iconBg: "#E6DEDD",
    date: "Mayıs 2014 - Haziran 2014",
    points: [
      "Güncel Döviz Kurlarımıza isterseniz anasayfamızdan istersenizde Döviz sayfamızdan ulaşabilirsiniz",
    ],
  },
  {
    title: "Size Neden Güvenmeliyim ?",
    company_name: "",
    icon: orangeup,
    iconBg: "#383E56",
    date: "Kasım 2016 - Şubat 2017",
    points: [
      "Musmer Exchange, bir MUSMER LIMITED kuruluşudur. 10 yılı aşkın deneyimi ve iş tecrübesini yaptığı başarılar ve müşteri memnuniyetiyle birleştiren Musmer Limited güçlü sermayesi ve müşteri memnuniyeti ve gizliliğine en üst önemi vermektedir..", 
    ],
  },
  {
    title: "Güncel Kurlar ve Özel Teklifler için size nasıl ulaşabilirim ?",
    company_name: "",
    icon: orangeupother,
    iconBg: "#E6DEDD",
    date: "Ağustos 2023 - Şimdiye",
    points: [
      "Bize İLETİŞİM sayfamızda bulunan telefon numaralarımızdan gerek Whatsapp gerek aram yolu ile gerek ise email adreslerimizden ulaşabilirsiniz.",
    ],
  },
];

const testimonials = [

  {
    testimonial:
      "Döviz makinesi",
    name: "Döviz makinesi",
   
  },
 
];

const projects = [
  {
    name: "Uygun Kurlar",
    description:
      "Siz değerli müşterilerimiz için döviz piyasasındaki en uygun kurları buluyor ve işlem yapıyoruz",
    tags: [
      {
        name: "Hızlı",
        color: "blue-text-gradient",
      },
      {
        name: "Güvenilir",
        color: "green-text-gradient",
      },
      {
        name: "Doğru",
        color: "pink-text-gradient",
      },
    ],
    image: musmerpic,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Memnuniyet",
    description:
      "Güvenilir ve güler yüzlü hizmet ile sizin memnuniyetiniz için her gün azimle çalışıyoruz.",
    tags: [
      {
        name: "Çalışkan",
        color: "blue-text-gradient",
      },
      {
        name: "Dürüst",
        color: "green-text-gradient",
      },
      {
        name: "Gerçek",
        color: "pink-text-gradient",
      },
    ],
    image: musmerpicc,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Müşteri Önemi",
    description:
      "Büromuza giren her müşterimiz bizim için değerlidir. Müşterilerimizin mutluluğu için hizmetinizdeyiz.",
    tags: [
      {
        name: "Yükselen",
        color: "blue-text-gradient",
      },
      {
        name: "Stabil",
        color: "green-text-gradient",
      },
      {
        name: "En iyi oranlar",
        color: "pink-text-gradient",
      },
    ],
    image: musmerpiccc,
    //source_code_link: "https://github.com/",
  },
];

export { services, experiences, testimonials, projects };
