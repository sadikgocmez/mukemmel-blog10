export const getPosts = () => {
  return [
    {
      title: "24 Kasım 2019",
      slug: "24-kasim",
      details: require("./posts/24-kasim-2019.md").default,
      date: "25 Ocak 2019"
    },
    {
      title: "sadık",
      slug: "sadik",
      details: require("./posts/sadik.md").default,
      date: "1 Aralık 2019"
    }
  ];
};
