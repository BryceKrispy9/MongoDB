db.createUser({
    user: 'Devyn',
    pwd: 'password',
    customData: { startDate: new Date() },
    roles: [
      { role: 'clusterAdmin', db: 'admin' },
      { role: 'readAnyDatabase', db: 'admin' },
      'readWrite'
    ]
  })



db.books.insert({
    "title": "OOP Programming",
    "startDate": new Date(),
    "authors": [
        { "name": "Jon Snow Jr" }
    ]
})



db.books.insertMany([
  {
    "name": "Confident Ruby",
    "publishDate": new Date(),
    "authors": [
      { "name": "Avdi Grimm" }
    ]
  },
  {
    "name": "The War of Art",
    "publishedDate": new Date(),
    "authors": [
      { "name": "Steven Pressfield" }
    ]
  },
  {
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
      { "name": "Malcolm Gladwell" }
    ]
  }
])


db.books.find().pretty()