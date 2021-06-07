const ghpages = require('gh-pages')

ghpages.publish(
  'build',
  {
    repo: 'https://github.com/Abhilashkashyap96/Covid_Tracker.git'
  },
  () => {
    console.log('Deploy Complete!')
  }
)
