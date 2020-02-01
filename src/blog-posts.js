export const getPosts = () => {
  return [
    {
      title: "Öğretemeyenler Günü",
      ozet:"Hatta şöyle ki format atmayı bilmem ve de bilgisayar oyunlarını sevmem. Şu anda bu yazıyı yazdığım cefakâr dostumu(tevellüt 2009) 5-6 ay hiç açmadığım zamanlar vardır. Böylece bilgisayarlardan uzak asude bir hayat sürerken arkadaştan aldığım bir Java eğitim videosuna başlamış ve tabi ki direk soğumuştum. ",
      slug: "Ogretmenler-gunu",
      details: require("./posts/ogretmenlergunu.md").default,
      date: "20 Ocak 2020"
    },
     {
      title: "Keçi Sütü(Deneme)",
      ozet:"Keçi sütünün ve keçi sütü ürünlerinin insan beslenmesindeki önemi son yıllarda artmıştır. Bu tür gıdalarda yüksek kalite ve güvenlik sağlamak ve halk sağlığı için bir riskten kaçınmak için, çiğ süt ve nihai ürünlerin mikrobiyolojik kalitesine ve ısıl işleme ilişkin kriterlere uyulmalıdır. Bu çalışmada pastörize keçi sütü ve peynirlerindeki alkalin fosfataz aktivitesi (ALP) belirlenmiştir. Hijyen kalitesi ve keçi sütü ürünlerinde seçilmiş bakterilerin varlığı da test edildi. Polonya süt işletmelerinden elde edilen süt (n = 100) ve peynir (n = 105) örnekleri analiz edildi. Sütün yüzde doksan yedisi ve peynir örneklerinin %  94.3'ü ALP aktivitesini sırasıyla 350 mU / L ve 10 mU / g altında gösterdi.",
      slug: "keci-sütü",
      details: require("./posts/keci.md").default,
      date: "5 Aralık 2019"
    }
  ];
};

