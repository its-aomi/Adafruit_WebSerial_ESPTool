module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://example.com/',
      },
      {
        source: '/blog/:slug',
        destination: 'https://example.com/:slug', // Matched parameters can be used in the destination
      },
    ]
  },
}
