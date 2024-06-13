# Before reading...
- before execute commands below, you have to install MongoDB
    - MonogoDB (over than version 8.0)
        - or not, the command can be different(`mongo` command was deprecated)
        - we use `mongod`, `mongosh` instead
    - MongoDB shell
    - (npm) mongoose

***

# Shell commands
## check version of MongoDB
```shell
# ~ ver 7.*
mongo --version

# ver 8.0 ~
mongod -version
```

## start MongoDB Shell
```shell
# ~ ver 7.*
mongo

# ver 8.0 ~
mongosh
```

## check exist Databases(common)
```shell
# n can be depend on your MongoDB's conditions
# 'test' DB is default database when you enter the MongoDB Shell first
Enterprise test> show dbs
#admin   n KiB
#config  n KiB
#local   n KiB
#test     n KiB

Enterprise test> use express
switched to db express

# the database have to get at least 1 collection
Enterprise > show dbs
#admin   n KiB
#config  n KiB
#local   n KiB
#test     n KiB
```

## create collection
```shell
# create collection
Enterprise express> db.createCollection('writings')
#{ ok: 1 }

# new DB 'express' listed with 'show dbs' command AFTER create collection
Enterprise express> show dbs
#admin     40.00 KiB
#config   108.00 KiB
#express    8.00 KiB
#local     40.00 KiB
#test       8.00 KiB

# the collection was also created successfully
Enterprise express> show collections
#writings
```

## testing
```shell
# insert data with JSON syntax : {"key": "value", ...}
Enterprise express> db.writings.insert({ "title": "mongosh test", "contents": "testing", "date": "2024-06-13" })
#{
#  acknowledged: true,
#  insertedIds: { '0': ObjectId('') }
#}
# 'ObjectIds' will be displayed with unique key

# check data successfully inserted
# - select DB
# - db.${collection_name}.find() : same as RDB's 'select * from ${table_name}' syntax 
Enterprise express> db.writings.find()
#[
#  {
#    _id: ObjectId('666a9b15ffaa7b0f44cdcdf6'),
#    title: 'mongosh test',
#    contents: 'testing',
#    date: '2024-06-13'
#  }
#]
```

