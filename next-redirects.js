async function redirects() {
  return [
    {
      source: "/docs",
      destination: "/docs",
      permanent: true,
    },
  ];
}

module.exports = redirects;
