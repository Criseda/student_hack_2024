/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qxheoawitn8iwdn")

  collection.name = "bodies"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qxheoawitn8iwdn")

  collection.name = "Bodies"

  return dao.saveCollection(collection)
})
