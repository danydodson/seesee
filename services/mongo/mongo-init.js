print('starting mongo-init ...')

db = db.getSiblingDB('seesee_prod_db')
db.createUser(
  {
    user: 'dany',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'seesee_prod_db' }],
  },
)
db.createCollection('users')

db = db.getSiblingDB('seesee_dev_db')
db.createUser(
  {
    user: 'dany',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'seesee_dev_db' }],
  },
)
db.createCollection('users')

db = db.getSiblingDB('seesee_test_db')
db.createUser(
  {
    user: 'dany',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'seesee_test_db' }],
  },
)
db.createCollection('users')

print('finished mongo-init ')