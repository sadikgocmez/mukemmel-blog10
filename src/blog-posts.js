export const getPosts = () => {
  return [
    {
      title: "yeni yazı ",
      ozet:"meraba...",
      slug: "yeni-yazi",
      details: require("./posts/yeni-yazi.md").default,
      date: "27 Ocak 2019"
    },
    {
      title: "24 Kasım 2019",
      ozet:"Öğretmen miyim yoksa psikolojik danışman mı?...",

      slug: "24-kasim",
      details: require("./posts/24-kasim-2019.md").default,
      date: "25 Ocak 2019"
    },
    {
      title: "sadık",
      ozet:"kişiselleştir....",

      slug: "sadik",
      details: require("./posts/sadik.md").default,
      date: "1 Aralık 2019"
    }
  ];
};

